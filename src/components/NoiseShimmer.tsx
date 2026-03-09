import { useEffect, useRef } from "react";

// Simplex noise implementation (2D)
class SimplexNoise {
  private perm: Uint8Array;
  private grad3 = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
  ];

  constructor(seed = Math.random()) {
    this.perm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    let s = seed * 2147483647;
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = Math.floor((s / 2147483647) * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  noise2D(x: number, y: number): number {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = x - X0, y0 = y - Y0;
    const [i1, j1] = x0 > y0 ? [1, 0] : [0, 1];
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;

    const dot = (gi: number, x: number, y: number) => {
      const g = this.grad3[gi % 8];
      return g[0] * x + g[1] * y;
    };

    let n0 = 0, n1 = 0, n2 = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 > 0) { t0 *= t0; n0 = t0 * t0 * dot(this.perm[ii + this.perm[jj]], x0, y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 > 0) { t1 *= t1; n1 = t1 * t1 * dot(this.perm[ii + i1 + this.perm[jj + j1]], x1, y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 > 0) { t2 *= t2; n2 = t2 * t2 * dot(this.perm[ii + 1 + this.perm[jj + 1]], x2, y2); }

    return 70 * (n0 + n1 + n2);
  }
}

const NoiseShimmer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const simplex = new SimplexNoise(42);
    let animId: number;
    const scale = 0.003;
    const timeScale = 0.0004;
    const pixelSize = 6;
    let canvasW = 0;
    let canvasH = 0;
    
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvasW = parent.offsetWidth;
        canvasH = parent.offsetHeight;
        canvas.width = canvasW;
        canvas.height = canvasH;
      }
    };
    
    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(canvas.parentElement!);

    const render = (time: number) => {
      const w = canvasW;
      const h = canvasH;
      
      if (w === 0 || h === 0) {
        animId = requestAnimationFrame(render);
        return;
      }
      
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / pixelSize);
      const rows = Math.ceil(h / pixelSize);
      const t = time * timeScale;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * pixelSize;
          const y = row * pixelSize;

          // Multiple octaves for organic branching feel
          const n1 = simplex.noise2D(x * scale + t * 0.7, y * scale + t * 0.3);
          const n2 = simplex.noise2D(x * scale * 2 + 50 + t * 0.5, y * scale * 2 + 50 - t * 0.4);
          const n3 = simplex.noise2D(x * scale * 0.5 - t * 0.2, y * scale * 0.5 + t * 0.6);

          const combined = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
          
          // Create vein-like bright areas — warm gray matching cream background
          const v = Math.max(0, combined);
          const brightness = Math.pow(v, 1.0) * 2;

          if (brightness > 0.1) {
            const alpha = Math.min(brightness * 0.4, 0.45);
            // Warm gray/beige shimmer that blends with cream background
            ctx.fillStyle = `rgba(222, 215, 208, ${alpha})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2, width: "100%", height: "100%" }}
    />
  );
};

export default NoiseShimmer;

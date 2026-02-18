import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

const posts = [
  {
    img: blog1,
    tags: ["Industry Trends", "AI & Hospitality", "Marketing & Strategy"],
    title: "Best practices for running a successful hospitality business in 2026",
    excerpt: "Running a hospitality business in 2026 takes a new playbook. Learn what successful operators are doing right now to increase orders, cut stress,...",
    date: "February 11, 2026",
  },
  {
    img: blog2,
    tags: ["Industry Trends"],
    title: "3 Hospitality tech upgrades you need to know about in 2026",
    excerpt: "Hospitality tech in 2026 is practical, not flashy. Here are three upgrades businesses are using to capture more orders, cut costs, and run more...",
    date: "February 11, 2026",
  },
  {
    img: blog3,
    tags: ["AI & Hospitality"],
    title: "Testing and launching your business AI assistant: A practical guide",
    excerpt: "A practical guide to testing and launching an AI assistant for your business",
    date: "February 5, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            The Modern<br />Hotelier's Playbook
          </h2>
          <p className="text-muted-foreground">Industry insights on labor costs, front of house efficiency,<br />and the future of hospitality</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="relative h-52">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium border border-primary/30 text-primary rounded-full px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.excerpt}</p>
                <p className="text-xs text-muted-foreground">{p.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

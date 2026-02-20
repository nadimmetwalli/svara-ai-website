import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/i18n/LanguageContext";

const BlogSection = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
            {t.blog.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 whitespace-pre-line">
            {t.blog.title}
          </h2>
          <p className="text-muted-foreground whitespace-pre-line">{t.blog.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-colors group">
              <div className="relative h-52">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium border border-primary/30 text-primary rounded-full px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.excerpt}</p>
                <p className="text-xs text-muted-foreground">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            {t.blog.viewAll} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

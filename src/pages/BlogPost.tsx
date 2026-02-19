import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/#blog" className="text-primary hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span key={t} className="text-xs font-medium border border-primary/30 text-primary rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>

          <div className="rounded-2xl overflow-hidden mb-10">
            <img src={post.img} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
          </div>

          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;

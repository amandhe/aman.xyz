import { getPost, getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import TwitterEmbed from "@/components/twitter-embed";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return { title: `${post.title} — aman.xyz` };
  } catch {
    return { title: "not found — aman.xyz" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <Link
        href="/"
        className="text-text-secondary text-sm hover:text-accent transition-colors mb-8 inline-block"
      >
        &larr; back
      </Link>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <time>{post.date}</time>
          {post.tags.length > 0 && (
            <>
              <span className="text-border">|</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-accent-dim bg-accent-dim/10 px-2 py-0.5 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <TwitterEmbed />
    </article>
  );
}

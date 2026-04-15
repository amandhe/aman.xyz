import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-2">writings</h2>
      <p className="text-text-secondary text-sm mb-8">
        my thoughts & things i care about
      </p>
      <div className="flex flex-col gap-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 py-3 px-3 -mx-3 rounded-lg hover:bg-surface transition-colors"
          >
            <span className="text-text-primary group-hover:text-white transition-colors">
              {post.title}
            </span>
            <span className="text-text-secondary text-sm shrink-0 tabular-nums">
              {post.date}
            </span>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-text-secondary text-sm italic">
            no posts yet — add .md files to content/posts/
          </p>
        )}
      </div>
    </section>
  );
}

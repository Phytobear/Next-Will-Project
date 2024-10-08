import pg from "pg"

export default async function PostsPage() {
    const db = new pg.Pool({
      connectionString: process.env.DB_URL,
    });

    const posts = (await db.query(`SELECT * FROM posts`)).rows;

  console.log(posts);
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
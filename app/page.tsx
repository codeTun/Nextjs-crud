import Posts from "./posts/Posts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Next.js CRUD!</a>
      </h1>
      <p className="text-center">
        Get started by editing <code>Posts and using dynamic routes</code>
      </p>
      <Posts />
    </main>
  );
}

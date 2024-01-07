/** @format */

import styles from "./post.module.css";
import Navbar from "../components/main/Navbar";
import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";
import Footer from "../components/main/Footer";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Post() {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Post[] = await response.json();
  return (
    <>
      <Navbar></Navbar>
      <Banner>Posts Page</Banner>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
      <Footer></Footer>
    </>
  );
}

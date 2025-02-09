import React, { useEffect, useState } from "react";
import postApi from "../api/PostApi";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await postApi.getPosts();
      const data = response.data;
      setPosts(data.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => {
          return (
            <>
              <Link to={`/posts/${post.id}`}>
                <li key={post.id}>
                  <span>{post.title}</span>
                  <span>{post.createdAt}</span>
                </li>
              </Link>
            </>
          );
        })}
      </ul>
    </div>
  );
}

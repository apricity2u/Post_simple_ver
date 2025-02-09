import React, { useEffect, useState } from "react";
import postApi from "../api/PostApi";
import { Link, useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      const response = await postApi.getPosts();
      const data = response.data;
      setPosts(data.data);
    }
    fetchPosts();
  }, []);

  function onClick(){
    navigate('/posts/create')
  }

  return (
    <div className="post-list">
      <div>
        <h2>게시글 목록</h2>
        <button onClick={onClick}>게시글 작성</button>
      </div>
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

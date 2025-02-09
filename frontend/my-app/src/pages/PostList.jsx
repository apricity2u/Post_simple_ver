import React, { useEffect, useState } from "react";
import postApi from "../api/PostApi";

export default function PostList() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    async function fetchPosts() {
      const response = await postApi.getPosts();
      const data = response.data
      setPosts(data.data)
    }
    fetchPosts()
  },[])

  return (
    <div className="post-list">
      <h2>게시글 목록</h2>
      <ul>
        <li>
          <span>게시글 제목</span>
          <span>작성시간</span>
        </li>
        <li>
          <span>게시글 제목</span>
          <span>작성시간</span>
        </li>
        <li>
          <span>게시글 제목</span>
          <span>작성시간</span>
        </li>
        <li>
          <span>게시글 제목</span>
          <span>작성시간</span>
        </li>
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import postApi from "../api/PostApi";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      const response = await postApi.getPostById(postId);
      const data = response.data.data;
      setPost(data);
    }
    fetchPost();
  }, []);

  return (
    <div>
      <div className="post-box">
        <div className="post-box-header">
          <h3>{post?.title}</h3>
          <div>{post?.createdAt}</div>
        </div>
        <p>{post?.content}</p>
      </div>
      <div>
        <textarea name="" id=""></textarea>
        <Button>댓글 등록하기</Button>
      </div>
      <div>
        <h4>댓글 목록</h4>
        <div>댓글 내용</div>
      </div>
    </div>
  );
}

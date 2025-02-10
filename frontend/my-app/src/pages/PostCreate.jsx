import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import postApi from "../api/PostApi";
import { useNavigate } from "react-router-dom";

export default function PostCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    async function createPost() {
      const response = await postApi.createPost(formData);
      const data = response.data;
      const id = data.data.id;
      navigate(`/posts/${id}`);
    }
    createPost();
  }

  function handleInput(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="제목을 입력하세요."
        value={formData.title}
        onChange={handleInput}
        required
      />
      <label htmlFor="content">내용</label>
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력하세요."
        value={formData.content}
        onChange={handleInput}
        required
      ></textarea>
      <Button>저장하기</Button>
    </form>
  );
}

import axios from "axios";
import React, { useState } from "react";

// Create-Post 방식
const CreateTest = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        // 등록, 생성 같은 자원 생성(Create) 명령어
        title, // 입력한 제목, title만 쓰는 이유? title:title = title 이기 때문
        content, // 입력한 내용
        userId: 1,
      })
      .then((result) => {
        alert("새 글 등록~~");
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <br />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default CreateTest;

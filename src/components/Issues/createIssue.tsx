import React, { useState } from "react";

export default function CreateIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done , setDone] = useState(false)
  const handleDone = () => {
    setDone((prev) => !prev)
  }
  return (
    <div>
      <input
        placeholder="issue title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="add description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleDone}>create issue</button>
      {done &&
      <div>
      <div>{title}</div>
        <div>{description}</div></div>}
    </div>
  );
}

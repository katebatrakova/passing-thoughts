import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("")

  const handleChange = (event) => {
    setText(event.target.value)
  }



  return (
    <form className="AddThoughtForm">
      <input
        value={text}
        onChange={handleChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}

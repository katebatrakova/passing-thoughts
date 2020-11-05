import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("")

  const handleChange = (event) => {
    setText(event.target.value)

  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.length > 0) {
      //creating a new thought object to be passes into App's addThought func
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      }

      props.addThought(newThought)
    }
    setText("")

  }





  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
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

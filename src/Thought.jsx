import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    props.removeThought(thought.id);
  };

  useEffect(() => {

    const remainingTime = thought.expiresAt - Date.now();

    const timeOut = setTimeout(() => {
      removeThought(thought.id)
    }, remainingTime)

    return () => {
      clearTimeout(timeOut)
    }
  }, [thought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{props.thought.text}</div>
    </li>
  );
}

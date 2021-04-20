import React, { useState } from 'react'
import Comments from '../Comments/Comments';

export default function Character({char, changeItem}) {

  const [comment, setComment] = useState('');

  const changeHandler = e => {
    setComment(e.target.value)
  }

  return (
    <div className="item">
      <h4 className="title">{char.name} - {char.birth_year}</h4>
      <textarea
        type="text"
        id={char.name}
        name={char.name}
        value={comment}
        onChange={changeHandler}
      />

      <button
        onClick={() => changeItem(char.name, {setComment, text: comment})}
        disabled={!comment}
        className="btn"
      >
        Сomment
      </button>
      { !!char.comments?.length &&
        <Comments comments={char.comments} />
      }
    </div>
  )
}

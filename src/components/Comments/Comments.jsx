import React from 'react'

function Comments({comments}) {
  return (
    <div className="comments">
      <h4>Comments:</h4>
      {comments?.map(comment => <div key={comment.id} className="comment">{comment.text}</div>)}
    </div>
  )
}

export default Comments

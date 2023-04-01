import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem

// import './index.css'

// const CommentItem = props => {
//   const {listObject, EachClickDelete, EachLikeItem} = props
//   const {textInput, textArea, id, StatusLike, colorBg, date} = listObject
//   const isLikeColor = StatusLike && 'is-liked'
//   const isStatusLike = StatusLike
//     ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
//   const letterFirstLetter = textInput[0]
//   const onClickDelete = () => {
//     EachClickDelete(id)
//   }
//   const onClickLike = () => {
//     EachLikeItem(id)
//   }

//   return (
//     <li className="list-item">
//       <div className="name-container">
//         <p className={`${colorBg} first-letter`}>{letterFirstLetter}</p>
//         <p>{textInput}</p>
//         <p>{date}</p>
//       </div>
//       <p>{textArea}</p>
//       <div className="button-container">
//         <div className="button-like-container">
//           <button type="button" onClick={onClickLike} className="button-Like">
//             <img src={isStatusLike} alt="Like" />
//           </button>
//           <p className={`${isLikeColor} Like`}>Like</p>
//         </div>
//         <button
//           onClick={onClickDelete}
//           type="button"
//           className="delete-Button"
//           data-testid="delete"
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
//             alt="delete"
//           />
//         </button>
//       </div>
//       <hr className="horizontal-line" />
//     </li>
//   )
// }

// export default CommentItem

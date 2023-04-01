import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments

// import {Component} from 'react'

// import {v4 as uuidv4} from 'uuid'

// import {formatDistanceToNow} from 'date-fns'

// import CommentItem from '../CommentItem'

// import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// class Comments extends Component {
//   state = {
//     textInput: '',
//     textArea: '',
//     count: 0,
//     listsObjectsComments: [],
//   }

//   onSubmitSay = event => {
//     event.preventDefault()
//     const {textInput, textArea} = this.state
//     const upDateObject = {
//       id: uuidv4(),
//       textInput,
//       textArea,
//       StatusLike: false,
//       colorBg:
//         initialContainerBackgroundClassNames[
//           Math.ceil(
//             Math.random() * initialContainerBackgroundClassNames.length - 1,
//           )
//         ],
//       date: formatDistanceToNow(new Date()),
//     }
//     this.setState(prevState => ({
//       listsObjectsComments: [...prevState.listsObjectsComments, upDateObject],
//       count: prevState.count + 1,
//       textArea: '',
//       textInput: '',
//     }))
//   }

//   onChangeTextArea = event => {
//     this.setState({textArea: event.target.value})
//   }

//   onChangeText = event => {
//     this.setState({textInput: event.target.value})
//   }

//   EachClickDelete = id => {
//     this.setState(prevState => ({
//       listsObjectsComments: prevState.listsObjectsComments.filter(
//         eachObject => eachObject.id !== id,
//       ),
//       count: prevState.count - 1,
//     }))
//   }

//   EachLikeItem = id => {
//     this.setState(preVState => ({
//       listsObjectsComments: preVState.listsObjectsComments.map(eachObject => {
//         if (eachObject.id === id) {
//           return {...eachObject, StatusLike: !eachObject.StatusLike}
//         }
//         return eachObject
//       }),
//     }))
//   }

//   render() {
//     const {textInput, textArea, count, listsObjectsComments} = this.state

//     return (
//       <div className="bg-container">
//         <div className="bg-comments-container">
//           <div className="card-container">
//             <form onSubmit={this.onSubmitSay} className="form-container">
//               <h1>Comments</h1>
//               <p>say something about 4.0 Technologies</p>
//               <input
//                 type="text"
//                 onChange={this.onChangeText}
//                 placeholder="Your Name"
//                 className="input-text-add"
//                 value={textInput}
//               />
//               <textarea
//                 placeholder="Your Comment"
//                 onChange={this.onChangeTextArea}
//                 value={textArea}
//                 className="input-textArea-add"
//               />
//               <button type="submit" className="button-add" data-testid="add">
//                 Add Comment
//               </button>
//             </form>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
//               alt="comments"
//             />
//           </div>
//           <hr className="horizontal-line" />
//           <div className="comment-Container">
//             <p className="bg-count-Element">{count}</p>
//             <p className="comments-Element">Comments</p>
//           </div>
//           <ul className="comment-lists">
//             {listsObjectsComments.map(eachObject => (
//               <CommentItem
//                 listObject={eachObject}
//                 key={eachObject.id}
//                 EachClickDelete={this.EachClickDelete}
//                 EachLikeItem={this.EachLikeItem}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// // Write your code here
// export default Comments

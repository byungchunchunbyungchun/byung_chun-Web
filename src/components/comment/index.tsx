import React from "react";
import "./style.scss";
import profile from "../../assets/Avatar1.svg";
import useComment from "../hooks/comment/useComment"
import {useGetCommentQuery }from "../../queries/comment/query"

const Comment = () => {
const {
    ...comment
}= useComment();
// const {data}= useGetCommentQuery(id);
  return (
    <div className="CommentMain">
      <div className="CommentLine">
        <div className="List">
          <div className="comment">
            <div className="profile">
              <img src={profile} alt="" />
            </div>
            <div className="name">양예성</div>
            <div className="text">기달기달기달</div>
          </div>
        </div>
      </div>
      <form className="inputComment">
        <input type="text" onChange={comment.handleCommentData} className="comment" />
        <button>전송</button>
      </form>
    </div>
  );
};
export default Comment;

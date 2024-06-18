import React from "react";
import "./style.scss";
import profile from "../../assets/Avatar1.svg";

const Comment = () => {
  return (
    <div className="CommentMain">
      <div className="CommentLine">
        <div className="List">
          <div className="comment">
            <div className="profile">
              <img src={profile} alt="" />
            </div>
            <div className="name">양예성</div>
            <div className="text"></div>
          </div>
        </div>
      </div>
      <div className="inputComment">
        <input type="text" className="comment" />
        
      </div>
    </div>
  );
};
export default Comment;

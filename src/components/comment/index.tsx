import React, { useEffect, useState } from "react";
import "./style.scss";
import profile from "../../assets/Avatar1.svg";
import { useQueryClient } from "react-query";
import { useChangeCommentQuery, useGetCommentQuery } from "../../queries/comment/query";
import { useCreteComment } from "../../queries/comment/query";
import { commentType } from "../../queries/comment/type";
import Like from "../../assets/like2.png";
import close from "../../assets/close.png";
import { queryKey } from "../../queries/queryKey";
import axios from "axios";
import config from "../../config/config.json";
interface props {
  mealId: number | undefined;
}
const Comment = ({ mealId }: props) => {
  const queryClient = useQueryClient();

 
  const usePostComment = useCreteComment();
  const [isComment, setComment] = useState<string>();
  const handleCommentData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const uploadData: commentType = {
    id: 0,
    comment: isComment,
    author: "양예성",
    count: 0,
    mealId: mealId || 0,
  };

  const createComment = async () => {

    usePostComment.mutate(uploadData,{
      onSuccess:()=>{
        queryClient.invalidateQueries([queryKey.comment.getComment])

      }
    })
  };
  
const handLikeClick = async()=>{
  const id =  2
  
  await axios.post(`${config.server}/comment/like/${id}`).then(()=>{
    queryClient.invalidateQueries([queryKey.comment.getComment]);
  })
}
  const { data } = useGetCommentQuery();
  const handeDelete = async (idx: number) => {
    const id = idx +2
    await axios.delete(`${config.server}/comment/${id}`).then((res) => {
      queryClient.invalidateQueries([queryKey.comment.getComment]);
    });
  };

 

  return (
    <div className="CommentMain">
      <div className="CommentLine">
        <div className="List">
          {data?.data.map((item, idx) => (
            <div className="comment" >
              <div className="profile">
                <img src={profile} alt="" />
              </div>
              <div className="name">{item.author}</div>
              <div className="text">{item.comment}</div>
              <div>{item.count}</div>
              <img src={Like} className="likeButton" onClick={()=>handLikeClick} alt="" />
              <img
                src={close}
                className="delecteButton"
                onClick={()=>handeDelete(idx)}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <form className="inputComment">
        <input type="text" onChange={handleCommentData} className="comment" />
        <button onClick={createComment}>전송</button>
      </form>
    </div>
  );
};
export default Comment;

import React, { useState, useCallback } from "react";
import { useCreteComment  } from "../../../queries/comment/query";
import {commentType} from "../../../queries/comment/type"


const UseComment = () => {
  const usePostComment = useCreteComment();
  const [isComment, setComment] = useState<string>();

  const handleCommentData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const uploadData:commentType = {
    id: 0,
    comment: isComment,
    author: "양예성",
    count: 0,
    mealId: 0,
  };

  const createComment = (e:React.FormEvent) => {
    e.preventDefault();
    usePostComment.mutate(uploadData);
  };

  return {
    createComment,
    handleCommentData,
  };
};

export default UseComment;

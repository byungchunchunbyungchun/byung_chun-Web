import axios, { AxiosError } from "axios";
import config from "../../config/config.json";
import { useMutation, useQuery } from "react-query";
import { commentType, commentResponse } from "./type";
import commentRepositoryImpl from "../../repositories/commentRepositoryImpl";
import { queryKey } from "../queryKey";

export const useCreteComment = () => {
  const mutation = useMutation(async (uploadData: commentType) => {
    await axios.post(`${config.server}/comment`, uploadData, {headers:{
      "Content-Type": "application/json"
    }});
  });
  return mutation;
};
export const useGetCommentQuery = () => {
  const useGetComment = useQuery<commentResponse , AxiosError, commentResponse, string[]>([queryKey.comment.getComment], () => commentRepositoryImpl.getCommentList()
  );
  return useGetComment;
};

export const useDeleteCommentQuery = (id: number) => {
  const mutation = useMutation(async () => {
    await axios.delete(`${config.server}/comment/${id}`);
  });
  return mutation;
};
export const useLikeCommentQuery = (id: number) => {
  const mutation = useMutation(async () => {
    await axios.post(`${config.server}/comment/like/${id}`);
  });
  return mutation;
};

export const useChangeCommentQuery = () => {
  const mutation = useMutation(async (uploadData: commentType) => {
    await axios.put(`${config.server}/comment`, uploadData);
  });
  return mutation;
};

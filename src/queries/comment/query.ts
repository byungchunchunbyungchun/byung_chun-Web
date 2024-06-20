import axios, { AxiosError } from "axios"
import config from "../../config/config.json"
import { useMutation, useQuery } from "react-query"
import { commentType,commentByIdParam } from "./type"
import {queryKey} from "../queryKey"

export const useCreteComment =()=>{
    const mutation = useMutation(async(uploadData:commentType)=>{
        await axios.post(`${config.server}/comment`,uploadData)
    })
    return mutation;
}
export const useGetCommentQuery = (id: number) => {
    const useGetComment = useQuery([queryKey.comment.getComment, id], async () => {
      const {data} = await axios.get(`${config.server}/comment/${id}`);
      return data.data;
    });
    return useGetComment;
  };

/**
 * getComment
 */
// class CommentRepostory{
//     public async getComment() {
//         const { data } = await axios.get("/comment");
//         return data;
//     }
// }

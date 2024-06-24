import config from "../config/config.json"
import axios from "axios";
import {  commentResponse } from "../queries/comment/type";
import { CommentRepository } from "./commentRepository";
class CommentRepositoryImpl implements CommentRepository{
    public async getCommentList(): Promise<commentResponse>{
        const {data} = await axios.get(`${config.server}/comment/${1}`);
        return data
    }
}
export default new CommentRepositoryImpl();
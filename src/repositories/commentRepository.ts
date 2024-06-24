import { commentType, commentResponse } from "../queries/comment/type";

export interface CommentRepository {
    getCommentList(): Promise<commentResponse>;
}
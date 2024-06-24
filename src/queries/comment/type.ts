export interface commentType {
    id: number,
    comment: string | undefined,
    author: string,
    count: number,
    mealId: number ,
}


export interface commentByIdParam {
    id:number,
}

export interface response {
    status: number;
    message: string;
}
export interface commentResponse {
    data: commentType[] ;
}
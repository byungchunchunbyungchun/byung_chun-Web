export interface commentType {
    id: number,
    comment: string | undefined,
    author: string,
    count: number,
    mealId: string,
}


export interface commentByIdParam {
    id:number,
}
export interface Comment {
  _id: string;
  content: string;
  author: string;
}

export interface CreateCommentDto {
  content: string;
  articleId: string;
}

export interface Response {
  currentUser: IUser;
  comments: IComment_Reply[];
}

export interface IComment_Reply {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  replies?: IReply[];
  user: IUser;
}

export interface IImage {
  png: string;
  webp: string;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IReply[];
}

export interface IUser {
  image: IImage;
  username: string;
}

export interface IReply {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: IUser;
}

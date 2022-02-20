export interface Response {
  currentUser: IUser;
  comments: IComment[];
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

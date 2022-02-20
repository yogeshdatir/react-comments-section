export interface Response {
  currentUser: ICurrentUser;
  comments: IComment[];
}

export interface ICurrentUser {
  image: IImage;
  username: string;
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

export interface Video {
    _id: string;
    owner: string;
    published: boolean;
    videoId: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    extension: string;
    description: string;
    title: string;
  }

export enum QueryKeys {
    user= 'user',
    videos = 'videos',
}

export interface User {
    _id: string;
    username: string;
    email: string;
}
export enum QueryKeys {
    user= 'user',
    videos = 'videos',
}

export interface User {
    _id: string;
    username: string;
    email: string;
}
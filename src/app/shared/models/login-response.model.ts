export interface LoginResponse {
    status: string;
    message: string;
    accessToken: string;
    expiresIn: number;
    user: User;
}

export interface User {
    id: number;
    fname: string;
    lname: string;
    username: string;
    email: string;
    avatar: string;
}
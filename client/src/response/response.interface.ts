export interface APIResponse {
    code:    number;
    message: string;
    data:    User[];
}

export interface User {
    id:    string;
    name:  string;
    email: string;
}

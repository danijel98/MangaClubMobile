export interface CreateUser {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    username: string;
    dateOfBirth: Date;
}
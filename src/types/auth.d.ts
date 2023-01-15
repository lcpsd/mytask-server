export interface UserLoginProps {
    email: string;
    password: string;
}

export interface JWTpayloadProps {
    email: string;
    name: string;
    sub: string;
}
export interface NewUserProps {
    name: string,
    email: string,
    password: string
}

export interface UpdateUserProps extends Partial<NewUserProps> {

}
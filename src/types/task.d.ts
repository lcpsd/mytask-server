export interface NewTaskProps {
    title: string;
    status: string;
    image: string | null;
    user_id: string;
}

export interface UpdateTaskProps extends Patial<NewTaskProps> {
    status: "pending" | "done" | "filed"
}
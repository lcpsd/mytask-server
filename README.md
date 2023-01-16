
# Mytask Server
#### An api to serve a todo list, that's allow to CRUD users, tasks and login by JWT.

## Intructions

 1. Create a database with postgresql, local or with docker
 2. Create a .env file with follow params
 `DATABASE_URL="postgresql://user:pass@localhost:5432/mytask?schema=public"
 JWT_SECRET="hipersecrethash"`
 3. After clone this repository, run `yarn` on terminal to install dependences
 4. Run `yarn prisma migrate dev` to create tables and columns on database

## Routes
#### User
| Method | Route | Params | Header | Request Format
| --- | --- | --- | --- | --- |
| GET | /user/:userId | null | null | Query
| POST | /user/:userId | { name: string, email: string, password: string } | Bearer Token | Json
| PUT | /user/:userId | { name?: string, email?: string, password?: string } | Bearer Token | Json
| DELETE | /user/:userId | null | Bearer Token | Query

#### Task
| Method | Route | Params | Header | Request Format
| --- | --- | --- | --- | --- |
| GET | /user/:userId | null | null | Query
| POST | /user/:userId | { title: string, status: "pending"  or  "done"  or  "filed", image?: string or null, user_id: string } | Bearer Token | Multipart Form
| PUT | /user/:userId | { title: string, status: "pending" or  "done"  or  "filed", image?: string or null, user_id: string } | Bearer Token | Multipart Form
| DELETE | /user/:userId | null | Bearer Token | Query

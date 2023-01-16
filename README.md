

# Mytask Server
#### An api to serve a todo list, that's allow to CRUD users, tasks and login by JWT.

## Techs
<img src="https://i.imgur.com/0RLCzHi.png" alt="nodejs" width="80"/>  | <img src="https://i.imgur.com/gSZCHsa.png" alt="express" width="80"/> | <img src="https://i.imgur.com/ou8ETDQ.png" alt="typescript" width="80"/> | <img src="https://i.imgur.com/BsSZe0M.png" alt="prisma" width="80"/> | <img src="https://i.imgur.com/I5hij63.png" alt="jwt" width="80"/> | <img src="https://i.imgur.com/axG0zEM.png" alt="postgres" width="80"/>
|--|--|--|--|--|--
| NodeJs | Express | Typescript | Prisma | JWT | Postgres

## Routes
#### User
Hosting: `https://mytask-api.up.railway.app`
| Method | Route | Params | Header | Request Format
| --- | --- | --- | --- | --- |
| ![](https://img.shields.io/badge/-GET-blue) | /user/:userId | null | null | Query
| ![](https://img.shields.io/badge/-POST-green) | /user/:userId | { name: string, email: string, password: string } | Bearer Token | Json
| ![](https://img.shields.io/badge/-PUT-yellow)| /user/:userId | { name?: string, email?: string, password?: string } | Bearer Token | Json
| ![](https://img.shields.io/badge/-Delete-red) | /user/:userId | null | Bearer Token | Query

#### Task
| Method | Route | Params | Header | Request Format
| --- | --- | --- | --- | --- |
| ![](https://img.shields.io/badge/-GET-blue) | /user/:userId | null | null | Query
| ![](https://img.shields.io/badge/-POST-green) | /user/:userId | { title: string, status: "pending"  or  "done"  or  "filed", image?: string or null, user_id: string } | Bearer Token | Multipart Form
| ![](https://img.shields.io/badge/-PUT-yellow) | /user/:userId | { title: string, status: "pending" or  "done"  or  "filed", image?: string or null, user_id: string } | Bearer Token | Multipart Form
| ![](https://img.shields.io/badge/-Delete-red) | /user/:userId | null | Bearer Token | Query

## How to run locally

 1. Create a local database using Postgresql
 2. Create a .env file with the follow params:
 - `DATABASE_URL="postgresql://user:pass@localhost:5432/mytask?schema=public"`
 
 - `JWT_SECRET="hipersecrethash"`
 3. After clone this repository, run `yarn` on terminal to install dependences
 4. Run `yarn prisma migrate dev` to create tables and columns on database
 5. Run `yarn dev` to start server

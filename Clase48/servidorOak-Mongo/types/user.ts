import { ObjectId } from "../depts.ts";

export interface User{
    _id:ObjectId;
    name:string;
    birthdate:string;
}
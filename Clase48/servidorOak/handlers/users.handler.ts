import { Context, uuid, helpers } from "../depts.ts";
import { User } from "../types/user.ts";

const users: Array<User> = [];

export const getAllUsers = (ctx: Context)=>{
    ctx.response.status = 200;
    ctx.response.body = {status:"success", data:users}
};

export const getUser = (ctx: Context)=>{
    const {uid} = helpers.getQuery(ctx,{mergeParams:true}); //req.params
    const user = users.find(u=>u.id === uid);
    if(user?.id){
        ctx.response.body = {status:"success", data: user}
    } else {
        ctx.response.body = {status:"error", message:"el usuario no existe"}
    }
};

export const createUser = async(ctx:Context)=>{
    const {name, birthdate} = await ctx.request.body().value; //req.body
    const newUser: User = {
        id:uuid.v1.generate().toString(),
        name:name,
        birthdate:birthdate
    }
    users.push(newUser);
    ctx.response.body = {status:"success", data:newUser}
};
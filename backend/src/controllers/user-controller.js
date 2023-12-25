import { userModel } from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const users = [];

export const getAllUsers = async (req, res) => { 
    const usersData = await userModel.find({});
    res.status(200).json({ users : usersData })
};

export const getUser = (req, res) => {
    const params = req.params;

    const filteredUser = users.filter((cur) => cur.id === params.id);
    if (filteredUser.length === 0) {
        res.status(405).json({message: "user not found"});
    } else {
        res.status(200).json({user: filteredUser[0] });
    }
}

export const createUser = async (req, res) => {
    const body = req.body;
    
    const hashPassword = await bcrypt.hash(req.body.password, 10)
  await userModel.create({
    id: new Date().getTime(),
    email: body.email,
    password: hashPassword
  })
    res.status(200).json({ users: users })
}
import { userModel } from "../models/user-model.js";
import { users } from "./user-controller.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const body = req.body;

    if (body.email ===  undefined) {
        res.status(403).json({ message: "Email required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }

    const filteredUser = await userModel.findOne({email: body.email});

    if (!filteredUser) {
        res.status(405).json({ message: "User not found" });
    } else {
        if (await bcrypt.compare(body.password, filteredUser.password)) {

            const token = jwt.sign(
                { userId: filteredUser.id, email: filteredUser.email},
                "ThisIsNothing",
                {
                    expiresIn: "4h",
                }
            );

            res.status(200).json({ token });
            return;
        } else {
            res.status(405).json({ message: "Password incorrect" });
            return;
        }
    }


}
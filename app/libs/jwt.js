import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: "../../.env" });

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_PASSWORD,
            {
                expiresIn: "30m"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    });
}
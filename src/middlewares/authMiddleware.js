import authRepository from "../repositories/authRepository.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ message: "Invalid token" });

  const parts = authorization?.split(" ");
  if (parts.length !== 2) return res.status(401).send({ message: "Invalid token" });

  const [schema, token] = parts;
  if (!/^Bearer$/i.test(schema)) return res.status(401).send({ message: "Invalid token" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Invalid token" });
    if (!decoded) return res.status(401).send({ message: "Invalid token" });

    const user = await authRepository.findById(decoded.id);
    if (!user) return res.status(401).send({ message: "Invalid token" });

    res.locals.user = user;
    
    next();
  });
}
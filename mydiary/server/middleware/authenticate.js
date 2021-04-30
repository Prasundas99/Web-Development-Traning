import jwt from "jsonwebtoken";
import user from "../models/userModel.js";


const authMiddleware = async (req , res , next) => {
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log(decoded);

                  // store Auth (- password) to req.user
      req.user = await user.findById(decoded.id).select("-password");

      next();
        } catch (error) {
            if (error.name === "JsonWebTokenError") {
                res.status(404);
                res.json({
                  error: {
                    message: "Unauthorised",
                  },
                });
              } else {
                // token expired
                res.status(404);
                next(error);
              }
            }
          } 
          else {
            res.status(401);
            const error = new Error("Not Authorized, No token is present");
            next(error);
          }
        };
        
export default authMiddleware;
        
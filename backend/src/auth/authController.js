import createHttpError from "http-errors";
import bcrypt from 'bcrypt'
import authModel from "./authModel.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;

const createUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const user = await authModel.findOne({ email });
      if (user) {
        const error = createHttpError(
          400,
          "User already exists with this email."
        );
        return next(error);
      }
    } catch (err) {
        console.log(err)
      return next(createHttpError(500, "Error while getting user"));
    }
  
    
    try {
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
     const newUser = await authModel.create({...req.body,password:hashedPassword});
  
      const token = sign({ sub: newUser._id, role: newUser.userDetails.role }, process.env.SECRET_KEY, {
          expiresIn: "7d",
          algorithm: "HS256",
        });
       
        res.status(201).json({ accessToken: token });
  
    } catch (err) {
      return next(createHttpError(500, "Error while creating user"));
    }
  
  };


  const loginUser = async (req, res, next) => {
    
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return next(createHttpError(400, "All fields are required"));
          }
        
          const user = await authModel.findOne({ email });
          if (!user) {
            return next(createHttpError(404, "User doesn't exist with this email"));
          }
        
          const isMatch = await bcrypt.compare(password, user.password);
        
          if (!isMatch) {
            return next(createHttpError(400, "Invalid credentials"));
          }
        
          const token = sign({ sub: user._id }, process.env.SECRET_KEY, {
            expiresIn: "7d",
            algorithm: "HS256",
          });

          const oneMonthInMilliseconds = 7 * 24 * 60 * 60 * 1000;
          res.cookie('token',token,{ secure: true,maxAge: oneMonthInMilliseconds })
          res.json({ accessToken: token , userId:user._id, userDetails:user.userDetails });
        
    } catch (error) {
        return next(createHttpError(500, "Error while LoginIn the user"));
    }
  
  };

export {createUser,loginUser}
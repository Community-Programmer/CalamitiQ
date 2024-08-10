import createHttpError from "http-errors";
import disasterModel from "./disasterModel.js";

const addDisaster = async (req, res, next) => {


    try {
        const { eventType, dateTime, title, description, coordinates } = req.body;
 
        const newDisaster = new disasterModel({
          eventType,
          dateTime,
          title,
          description,
          coordinates
        });
    
        const savedDisaster = await newDisaster.save();
        res.status(201).json({
          message: 'Disaster added successfully',
          disaster: savedDisaster
        });

      } catch (error) {
        return next(createHttpError(500, "An error occurred while adding the disaster"));
      }
  
    
  };

  const getAllDisasters = async (req, res, next) => {
    
    try {
        const disasters = await disasterModel.find();
        res.status(200).json({
          message: 'Disasters retrieved successfully',
          disasters
        });
  
    } catch (err) {
      return next(createHttpError(500, "An error occurred while retrieving disasters"));
    }


  };
 

 

export {addDisaster, getAllDisasters }
import createHttpError from "http-errors";
import discussionModel from "./discussionModel.js";
import { io} from '../app.js';

const createDiscussion = async (req, res, next) => {

    try {
       
        const newDiscussion = await discussionModel.create({...req.body,author:req.userId});

        const populatedDiscussion = await newDiscussion.populate('author','userDetails')
        io.emit('newQuestion', populatedDiscussion);
        res.json({message:"Created discussion successfully", discussion: newDiscussion})

    } catch (error) {
        console.log(error)
        return next(createHttpError(500, "Error while creating a discussion"));
    }
};


const fetchDiscussion = async (req, res, next) => {

    try {
        const discussion = await discussionModel.find().populate('author','userDetails').populate({
            path: 'replies.author',
            select: 'userDetails'
        }).exec();
        res.status(200).json(discussion)
    } catch (error) {
        return next(createHttpError(500, "Error fetching the discussions"));
    }
};

const createreply = async (req, res, next) => {

    try {
        const id = req.params.id;

        const discussion = await discussionModel.findOne({_id:id});

        if(!discussion){
            return next(createHttpError(404, "Discussion not found"));
        }

        discussion.replies.push({...req.body,author:req.userId});
        await discussion.save();

        const replies = await discussionModel.find({_id:id}).populate('author','userDetails').populate({
            path: 'replies.author',
            select: 'userDetails'
        }).exec();

        io.emit('newReply', { questionId: id, reply: replies});
        res.status(201).json(discussion);
        
    } catch (error) {
        return next(createHttpError(500, "Error while adding reply to the discussion"));
    }
};

export {createDiscussion, fetchDiscussion, createreply}
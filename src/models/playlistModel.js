import mongoose from 'mongoose';
import songModel from './songModel.js';
import userModel from './userModel.js';

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: userModel.modelName
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: songModel.modelName
    }]
});

export default mongoose.model('Playlist', playlistSchema)

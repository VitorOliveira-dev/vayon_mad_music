import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    authorID: {
        type: String,
        required: true
    },
    releasingYear: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Song', songSchema)

import authorModel from '../models/authorModel.js';
import songModel from '../models/songModel.js';

const getAuthors = async () => {
    try {

        const authors = await authorModel.find()

        if (!authors || !authors.length) {
            return { status: 404, success: false, data: { message: 'no author was found' } }
        }

        return { status: 200, success: true, data: authors }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getAuthorByID = async (authorID) => {
    try {

        if (!authorID.trim().length) {
            throw new Error('authorID cannot be blank')
        }

        const author = await authorModel.findById(authorID)
        
        if (!author || !Object.keys(author).length) {
            return { status: 404, success: false, data: { message: 'author not found' } }
        }

        return { status: 200, success: true, data: author }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getAuthorSongsByID = async (authorID) => {
    try {

        if (!authorID.trim().length) {
            throw new Error('authorID cannot be blank')
        }

        const author = await authorModel.findById(authorID)

        if (!author || !Object.keys(author).length) {
            return { status: 404, success: false, data: { message: 'author not found' } }
        }

        const songs = await songModel.find({ authorID: authorID })

        return { status: 200, success: true, data: songs }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

export {
    getAuthors,
    getAuthorByID,
    getAuthorSongsByID
}
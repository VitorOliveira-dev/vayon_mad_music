import userModel from '../models/userModel.js';
import playlistModel from '../models/playlistModel.js'

const getUsers = async () => {
    try {
        const users = await userModel.find()

        if (!users || !users.length) {
            return { status: 404, success: false, data: { message: 'no user was found' } }
        }

        return { status: 200, success: true, data: users }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getUserByID = async (userID) => {
    try {
        const user = await userModel.findById(userID)

        if (!user || !Object.keys(user).length) {
            return { status: 404, success: false, data: { message: 'user not found' } }
        }
        return { status: 200, success: true, data: user }

    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getUserPlaylistsByID = async (userID) => {
    try {

        const user = await getUserByID(userID)

        if (!user.success) {
            return { status: 404, success: false, data: { message: 'user not found' } }
        }

        const playlists = await playlistModel.find({ userID: userID }).populate('songs', '-_id name authorID')

        if(!playlists || !Object.keys(playlists).length){
            return { status: 404, success: false, data: { message: 'no playlist was found for this user' } }
        }

        return { status:200, success:true, data: playlists }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}


export {
    getUsers,
    getUserByID,
    getUserPlaylistsByID
}
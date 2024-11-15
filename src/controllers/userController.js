import * as userService from '../services/userService.js'

const getUsers = async (req, res) => {
    const { status, success, data } = await userService.getUsers()
    return res.status(status).json({ success, data })
}

const getUserPlaylistsByID = async (req, res) => {
    try {
        const { status, success, data } = await userService.getUserPlaylistsByID(req.params.id)
        return res.status(status).json({ success, data })
    } catch (error) {
        return res.status(400).json({ 'error': error.message })
    }
}

export {
    getUsers,
    getUserPlaylistsByID
}
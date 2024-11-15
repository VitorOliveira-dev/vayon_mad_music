import * as playlistService from '../services/playlistService.js'

const createPlaylist = async (req, res) => {
    const { status, success, data } = await playlistService.createPlaylist(req.body)
    return res.status(status).json({ success, data })
}

const addSongToPlaylistByID = async (req, res) => {
    const songID = req.body.songID

    const { status, success, data } = await playlistService.addSongToPlaylistByID(songID, req.params.id)
    return res.status(status).json({ success, data })
}

const removeSongToPlaylistByID = async (req, res) => {

    const { status, success, data } = await playlistService.removeSongToPlaylistByID(req.body.songID, req.params.id)

    return res.status(status).json({ success, data })
}

const getPlaylists = async (req, res) => {

    const { status, success, data } = await playlistService.getPlaylists()

    return res.status(status).json({ success, data })
}

const getPlaylistSongsByID = async (req, res) => {

    const { status, success, data } = await playlistService.getPlaylistSongsByID(req.params.id)

    return res.status(status).json({ success, data })
}

const deletePlaylistByID = async (req, res) => {

    const { status, success, data } = await playlistService.deletePlaylistByID(req.params.id)
    
    return res.status(status).json({ success, data })
}

export {
    createPlaylist,
    addSongToPlaylistByID,
    removeSongToPlaylistByID,
    getPlaylists,
    getPlaylistSongsByID,
    deletePlaylistByID
}
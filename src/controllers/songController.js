
import * as songService from '../services/songService.js'

const createSong = async (req, res) => {

    const { status, success, data } = await songService.createSong(req.body)

    return res.status(status).json({ success, data })
}

const updateSong = async (req, res) => {

    const { status, success, data } = await songService.updateSong(req.params.id, req.body)

    return res.status(status).json({
        success, data
    })
}

const getSongs = async (req, res) => {

    const { status, success, data } = await songService.getSongs()

    return res.status(status).json({ success, data })
}

const deleteSongByID = async (req, res) => {

    const { status, success, data } = await songService.deleteSongByID(req.params.id)

    return res.status(status).json({ success, data })
}

export {
    createSong,
    updateSong,
    getSongs,
    deleteSongByID
}
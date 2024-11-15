import * as authorService from '../services/authorService.js'

const getAuthors = async (req, res) => {

    const { status, success, data } = await authorService.getAuthors()

    return res.status(status).json({ success, data })

}

const getAuthorSongsByID = async (req, res) => {

    const { status, success, data } = await authorService.getAuthorSongsByID(req.params.id)
    
    return res.status(status).json({ success, data })

}

export {
    getAuthors,
    getAuthorSongsByID
}
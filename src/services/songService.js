import songModel from '../models/songModel.js';
import { getAuthorByID } from '../services/authorService.js'

const createSong = async (song) => {
    try {

        const validation = await songValidation(song)

        if (!validation.success) {
            return validation
        }

        const newSong = await songModel.create(song)

        return { status: 201, success: true, data: newSong }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const updateSong = async (id, song) => {
    try {
        const options = {
            new: true
        }

        const validation = await songValidation(song)

        if (!validation.success) {
            return validation
        }

        const updatedSong = await songModel.findByIdAndUpdate(id, song, options)

        if (!updatedSong) {
            return { status: 404, success: false, data: { message: 'song not found' } }
        }

        return { status: 200, success: true, data: updatedSong }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getSongs = async () => {
    try {

        const songs = await songModel.find()

        if (!songs || !songs.length) {
            return { status: 404, success: false, data: { message: 'no song was found' } }
        }

        return { status: 200, success: true, data: songs }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getSongByID = async (songID) => {
    try {

        if (!songID.trim().length) {
            throw new Error('songID cannot be blank')
        }

        const song = await songModel.findById(songID)

        if (!song || !Object.keys(song).length) {
            return { status: 404, success: false, data: { message: 'song not found' } }
        }

        return { status: 200, success: true, data: song }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const deleteSongByID = async (songID) => {
    try {

        const song = await songModel.findById(songID)

        if (!song || !Object.keys(song).length) {
            return { status: 404, success: false, data: { message: 'song not found' } }
        }

        const deletedSong = await songModel.findByIdAndDelete(songID)

        return { status: 200, success: true, data: deletedSong }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const songValidation = async (song) => {

    if (song.name) {
        if (song.name.trim().length < 1) {
            return { status: 400, success: false, data: { message: 'song name cannot be blank' } }
        }
    }

    if (Object.keys(song).includes('authorID')) {

        const author = await getAuthorByID(song.authorID)

        if (!author.success) {
            return author
        }
    }

    if (song.releasingYear > new Date().getFullYear()) {
        return { status: 400, success: false, data: { message: 'song releasing year cannot be in the future' } }
    }

    return { status: 200, success: true, data: { message: 'song validated' } }
}

export {
    createSong,
    updateSong,
    getSongs,
    getSongByID,
    deleteSongByID
}
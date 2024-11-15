import playlistModel from '../models/playlistModel.js';
import { getUserByID } from '../services/userService.js';

import { getSongByID } from './songService.js';

const createPlaylist = async (playlist) => {
    try {

        if (!playlist.name.trim().length) {
            throw new Error('playlist name cannot be blank')
        }

        if (Array.isArray(playlist.songs) && playlist.songs.length) {

            playlist.songs = [...new Set(playlist.songs)]

            for (const song of playlist.songs) {
                const querySong = await getSongByID(song)
                if (!querySong.success) {
                    console.log(querySong)
                    return querySong
                }

            }
        }

        const user = await getUserByID(playlist.userID)

        if (!user.success) {
            user
        }

        const newPlaylist = await playlistModel.create(playlist)

        return { status: 201, success: true, data: newPlaylist }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const addSongToPlaylistByID = async (songID, playlistID) => {
    try {

        const options = {
            new: true
        }

        const playlist = await playlistModel.findById(playlistID)

        const song = await getSongByID(songID)

        if (!playlist || !Object.keys(playlist).length) {
            return { status: 404, success: false, data: { message: 'playlist not found' } }
        }
        if (!song.success) {
            return song;
        }

        if (playlist.songs.filter(song => song.toJSON() === songID).length) {
            return { status: 400, success: false, data: { message: 'this song already exists on playlist' } }
        }

        playlist.songs.push(songID)

        const updatedPlaylist = await playlistModel.findByIdAndUpdate(playlistID, playlist, options)

        return { status: 200, success: true, data: updatedPlaylist }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const removeSongToPlaylistByID = async (songID, playlistID) => {
    try {

        const options = {
            new: true
        }

        const playlist = await playlistModel.findById(playlistID)

        const song = await getSongByID(songID)

        if (!playlist || !Object.keys(playlist).length) {
            return { status: 404, success: false, data: { message: 'playlist not found' } }
        }

        if (!song.success) {
            return { status: 404, success: false, data: { message: 'song not found' } }
        }

        if (!playlist.songs.filter(song => song.toJSON() === songID).length) {
            return { status: 400, success: false, data: { message: 'this song do not exists on playlist' } }
        }

        playlist.songs = playlist.songs.filter(song => song.toJSON() !== songID)

        const updatedPlaylist = await playlistModel.findByIdAndUpdate(playlistID, playlist, options)

        return { status: 200, success: true, data: updatedPlaylist }

    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getPlaylists = async () => {
    try {

        const playlists = await playlistModel.find()

        if (!playlists || !playlists.length) {
            return { status: 404, success: false, data: { message: 'no playlist was found' } }
        }

        return { status: 200, success: true, data: playlists }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const getPlaylistSongsByID = async (playlistID) => {
    try {

        if (!playlistID.trim().length) {
            throw new Error('playlistID cannot be blank')
        }

        const playlist = await playlistModel.findById(playlistID).populate('songs', '-_id name')

        if (!playlist || !Object.keys(playlist).length) {
            return { status: 404, success: false, data: { message: 'playlist not found' } }
        }

        return { status: 200, success: true, data: playlist }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

const deletePlaylistByID = async (playlistID) => {
    try {

        const deletedPlaylist = await playlistModel.findByIdAndDelete(playlistID)

        if (!deletedPlaylist || !Object.keys(deletedPlaylist).length) {
            return { status: 404, success: false, data: { message: 'playlist not found' } }
        }

        return { status: 200, success: true, data: deletedPlaylist }
    } catch (error) {
        return { status: 400, success: false, data: { message: error.message } }
    }
}

export {
    createPlaylist,
    addSongToPlaylistByID,
    removeSongToPlaylistByID,
    getPlaylists,
    getPlaylistSongsByID,
    deletePlaylistByID
}
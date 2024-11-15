import express from 'express';
import * as playlistController from '../controllers/playlistController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Playlists
 */

/**
 * @swagger
 * /playlists:
 *   post:
 *     summary: Cria uma playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: body
 *         name: name
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: userID
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: songs
 *         schema:
 *            type: array[Song]
 *         required: false
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.post('/playlists', playlistController.createPlaylist)

/**
 * @swagger
 * /playlists/{id}/songs:
 *   post:
 *     summary: Adiciona uma música a uma playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: songID
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.post('/playlists/:id/songs', playlistController.addSongToPlaylistByID)

/**
 * @swagger
 * /playlists/{id}:
 *   delete:
 *     summary: Exclui uma playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.delete('/playlists/:id',playlistController.deletePlaylistByID)

/**
 * @swagger
 * /playlists/{id}/songs:
 *   delete:
 *     summary: Remove uma música a uma playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: songID
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.delete('/playlists/:id/songs', playlistController.removeSongToPlaylistByID)

/**
 * @swagger
 * /playlists:
 *   get:
 *     tags: [Playlists]
 *     summary: Lista todas as playlists
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.get('/playlists', playlistController.getPlaylists)

/**
 * @swagger
 * /playlists/{id}/songs:
 *   get:
 *     summary: Lista todas músicas de uma determinada playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 673559af0274e2cfa41ec262
 *         required: true
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.get('/playlists/:id/songs',playlistController.getPlaylistSongsByID)

export default router;
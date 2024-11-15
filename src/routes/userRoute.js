import express from 'express';
import * as userController from '../controllers/userController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 */

/**
 * @swagger
 * 
 * /users:
 *   get:
 *     summary: Lista todos usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.get('/users', userController.getUsers)

/**
 * @swagger
 * /users/{id}/playlists:
 *   get:
 *     summary: Lista todas playlists de um determinado usuário
 *     tags: [Users]
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
router.get('/users/:id/playlists', userController.getUserPlaylistsByID)

export default router;
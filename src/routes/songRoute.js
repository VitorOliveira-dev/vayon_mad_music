import express from 'express';
import * as songController from '../controllers/songController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Songs
 */

/**
 * @swagger
 * /songs:
 *   post:
 *     summary: Cria uma música
 *     tags: [Songs]
 *     parameters:
 *       - in: body
 *         name: name
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: authorID
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *         required: true
 *       - in: body
 *         name: releasingYear
 *         description: Ano de Lançamento (Não pode ser no futuro)
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.post('/songs', songController.createSong)

/**
 * @swagger
 * /song/{id}:
 *   put:
 *     summary: Atualiza uma música
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *       - in: body
 *         name: name
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *       - in: body
 *         name: authorID
 *         schema:
 *            type: string
 *            example: 673559af0274e2cfa41ec262
 *       - in: body
 *         name: releasingYear
 *         description: Ano de Lançamento (Não pode ser no futuro)
 *         schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.put('/songs/:id', songController.updateSong)

/**
 * @swagger
 * /songs/{id}:
 *   delete:
 *     summary: Exclui uma música
 *     tags: [Songs]
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
router.delete('/songs/:id', songController.deleteSongByID)

/**
 * @swagger
 * /songs:
 *   get:
 *     summary: Lista todas músicas
 *     tags: [Songs]
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.get('/songs', songController.getSongs)

export default router;
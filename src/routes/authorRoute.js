import express from 'express';
import * as authorController from '../controllers/authorController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Retorna todos os autores
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro na requisição (parâmetros inválidos)
 *       404:
 *         description: Recurso não encontrado
 */
router.get('/authors', authorController.getAuthors)

/**
 * @swagger
 * /authors/{id}/songs:
 *   get:
 *     summary: Lista todas músicas de um determinado autor
 *     tags: [Authors]
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
router.get('/authors/:id/songs', authorController.getAuthorSongsByID)

export default router;
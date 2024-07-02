const express = require('express');
const {
  createComentario,
  getComentarios,
  getComentarioById,
  updateComentario,
  deleteComentario
} = require('../controllers/comentarioController');
const usuarioMiddleware = require('../middlewares/usuarioMiddleware');
const router = express.Router();

router.use(usuarioMiddleware);

/**
 * @swagger
 * tags:
 *   name: Comentarios
 *   description: Rotas para Comentarios
 */

/**
 * @swagger
 * /comentarios:
 *   post:
 *     summary: Cria um novo comentário
 *     tags: [Comentarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               comentario:
 *                 type: string
 *               dramaId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Comentário criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/comentarios', createComentario);

/**
 * @swagger
 * /comentarios:
 *   get:
 *     summary: Retorna uma lista de comentários
 *     tags: [Comentarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de comentários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   comentario:
 *                     type: string
 *                   dramaId:
 *                     type: integer
 */
router.get('/comentarios', getComentarios);

/**
 * @swagger
 * /comentarios/{id}:
 *   get:
 *     summary: Retorna um comentário pelo ID
 *     tags: [Comentarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do comentário
 *     responses:
 *       200:
 *         description: Comentário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 comentario:
 *                   type: string
 *                 dramaId:
 *                   type: integer
 *       404:
 *         description: Comentário não encontrado
 */
router.get('/comentarios/:id', getComentarioById);

/**
 * @swagger
 * /comentarios/{id}:
 *   put:
 *     summary: Atualiza um comentário pelo ID
 *     tags: [Comentarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do comentário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               comentario:
 *                 type: string
 *               dramaId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Comentário atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Comentário não encontrado
 */
router.put('/comentarios/:id', updateComentario);

/**
 * @swagger
 * /comentarios/{id}:
 *   delete:
 *     summary: Deleta um comentário pelo ID
 *     tags: [Comentarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do comentário
 *     responses:
 *       200:
 *         description: Comentário deletado com sucesso
 *       404:
 *         description: Comentário não encontrado
 */
router.delete('/comentarios/:id', deleteComentario);

module.exports = router;

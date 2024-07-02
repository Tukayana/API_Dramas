const express = require('express');
const {
  createDrama,
  getDramas,
  getDramaById,
  updateDrama,
  deleteDrama
} = require('../controllers/dramaController');
const usuarioMiddleware = require('../middlewares/usuarioMiddleware');
const router = express.Router();

router.use(usuarioMiddleware);

/**
 * @swagger
 * tags:
 *   name: Dramas
 *   description: Rotas para Dramas 
 */

/**
 * @swagger
 * /dramas:
 *   post:
 *     summary: Cria um novo drama
 *     tags: [Dramas]
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
 *               origem:
 *                 type: string
 *               genero:
 *                 type: string
 *               imagem:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       200:
 *         description: Drama criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/dramas', createDrama);

/**
 * @swagger
 * /dramas:
 *   get:
 *     summary: Retorna uma lista de dramas
 *     tags: [Dramas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de dramas
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
 *                   origem:
 *                     type: string
 *                   genero:
 *                     type: string
 *                   imagem:
 *                     type: string
 *                   link:
 *                     type: string
 */
router.get('/dramas', getDramas);

/**
 * @swagger
 * /dramas/{id}:
 *   get:
 *     summary: Retorna um drama pelo ID
 *     tags: [Dramas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do drama
 *     responses:
 *       200:
 *         description: Drama encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 origem:
 *                   type: string
 *                 genero:
 *                   type: string
 *                 imagem:
 *                   type: string
 *                 link:
 *                   type: string
 *       404:
 *         description: Drama não encontrado
 */
router.get('/dramas/:id', getDramaById);

/**
 * @swagger
 * /dramas/{id}:
 *   put:
 *     summary: Atualiza um drama pelo ID
 *     tags: [Dramas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do drama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               origem:
 *                 type: string
 *               genero:
 *                 type: string
 *               imagem:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       200:
 *         description: Drama atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Drama não encontrado
 */
router.put('/dramas/:id', updateDrama);

/**
 * @swagger
 * /dramas/{id}:
 *   delete:
 *     summary: Deleta um drama pelo ID
 *     tags: [Dramas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do drama
 *     responses:
 *       200:
 *         description: Drama deletado com sucesso
 *       404:
 *         description: Drama não encontrado
 */
router.delete('/dramas/:id', deleteDrama);

module.exports = router;

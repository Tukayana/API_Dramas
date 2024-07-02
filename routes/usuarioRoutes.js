const express = require('express');
const { register, login } = require('../controllers/usuarioController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Rotas para Usuarios
 */

/**
 * @swagger
 * /usuario/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               idade:
 *                 type: string
 *                 format: date
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/register', register);

/**
 * @swagger
 * /usuario/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/login', login);

module.exports = router;

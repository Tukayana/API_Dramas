const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    
    const { name, email, idade, password } = req.body;
    const usuario = await Usuario.create({ name, email, idade, password });
    res.status(201).json({ message: 'Registrado Com Sucesso', usuario });
  } catch (error) {
    res.status(400).json({ error: 'Erro!', errorx:error});
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !await bcrypt.compare(password, usuario.password)) {
      return res.status(401).json({ error: 'Email ou Password Inválidos!' });
    }

    const token = jwt.sign({ usuarioId: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Algo correu mal!' });
  }
};
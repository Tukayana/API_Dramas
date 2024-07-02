const Comentario = require('../models/comentario');
const Drama = require('../models/drama');

exports.createComentario = async (req, res) => {
  try {
    const { name, comentario, dramaId } = req.body;
    const drama = await Drama.findByPk(dramaId);

    if (!drama) {
      return res.status(404).json({ error: 'Drama não encontrado' });
    }

    const comentarioCreated = await Comentario.create({
      name,
      comentario,
      dramaId,
    });

    res.status(201).json(comentarioCreated);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar comentário' });
  }
};

exports.getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll({ include: Drama });
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar comentários' });
  }
};

exports.getComentarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const comentario = await Comentario.findByPk(id, { include: Drama });

    if (!comentario) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar comentário' });
  }
};

exports.updateComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, comentario, dramaId } = req.body;
    const comentarioToUpdate = await Comentario.findByPk(id);

    if (!comentarioToUpdate) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    comentarioToUpdate.name = name || comentarioToUpdate.name;
    comentarioToUpdate.comentario = comentario || comentarioToUpdate.comentario;
    comentarioToUpdate.dramaId = dramaId || comentarioToUpdate.dramaId;

    await comentarioToUpdate.save();
    res.json(comentarioToUpdate);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar comentário' });
  }
};

exports.deleteComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const comentario = await Comentario.findByPk(id);

    if (!comentario) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    await comentario.destroy();
    res.json({ message: 'Comentário eliminado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao eliminar comentário' });
  }
};

const Drama = require('../models/drama');
const Comentarios = require('../models/comentario');

exports.createDrama = async (req, res) => {
  try {
    const { name, origem, genero, imagem, link } = req.body;
    const drama = await Drama.create({
      name,
      origem,
      genero,
      imagem,
      link,
    });
    res.status(201).json(drama);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar Drama' });
  }
};

exports.getDramas = async (req, res) => {
  try {
    const dramas = await Drama.findAll({
      include: [Comentarios]
    });
    res.json(dramas);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar dramas' });
  }
};

exports.getDramaById = async (req, res) => {
  try {
    const { id } = req.params;
    const drama = await Drama.findByPk(id, {
      include: [Comentarios]
    });

    if (!drama) {
      return res.status(404).json({ error: 'Drama não encontrado' });
    }

    res.json(drama);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar drama' });
  }
};

exports.updateDrama = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, origem, genero, imagem, link } = req.body;
    const drama = await Drama.findByPk(id);

    if (!drama) {
      return res.status(404).json({ error: 'Drama não encontrado' });
    }

    drama.name = name || drama.name;
    drama.origem = origem || drama.origem;
    drama.genero = genero || drama.genero;
    drama.imagem = imagem || drama.imagem;
    drama.link = link || drama.link;

    await drama.save();
    res.json(drama);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar drama' });
  }
};

exports.deleteDrama = async (req, res) => {
  try {
    const { id } = req.params;
    const drama = await Drama.findByPk(id);

    if (!drama) {
      return res.status(404).json({ error: 'Drama não encontrado' });
    }

    await drama.destroy();
    res.json({ message: 'Drama eliminado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao eliminar drama' });
  }
};

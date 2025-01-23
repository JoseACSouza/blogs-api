const { postServices } = require('../services');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    console.log(title, content, categoryIds);

    const response = await postServices.create(title, content, userId, categoryIds);
    return res.status(201).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

// const index = async (res) => {
//   try {
//     return res.status(200).json(await postServices.getAll());
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// };

// const show = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const post = await postServices.getByPostId(id);
//     if (!post) {
//       return res.status(404).json({ message: 'Post does not exist' });
//     }
//     return res.status(200).json(post);
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// };

module.exports = {
  create,
};
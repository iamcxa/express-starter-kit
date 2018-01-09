const models = require('../models');
const express = require('express');

const router = express.Router();

// 首頁
router.get('/', async (req, res) => {
  const users = await models.User.findAll({
    include: [models.Task],
  });

  return res.render('index', {
    title: 'Sequelize: Express Example',
    data: {
      users,
    },
  });
});

// 使用者清單
router.get('/users', async (req, res) => {
  const users = await models.User.findAll({
    include: [models.Task],
  });

  return res.render('user', {
    title: 'User list',
    data: {
      users,
    },
  });
});

module.exports = router;

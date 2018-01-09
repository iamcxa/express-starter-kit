const express = require('express');
const models = require('../models');

const router = express.Router();

// 建立使用者
router.post('/user/create', async (req, res) => {
  const newUser = await models.User.create({
    username: req.body.username,
  });

  return res.redirect('/users');
});

// 刪除使用者
router.get('/user/:user_id/destroy', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.user_id,
    },
  }).then(() => res.redirect('/users'));
});

// 建立使用者任務
router.post('/user/:user_id/tasks/create', (req, res) => {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id,
  }).then(() => {
    res.redirect('/users');
  });
});

// 刪除使用者任務
router.get('/user/:user_id/tasks/:task_id/destroy', (req, res) => {
  models.Task.destroy({
    where: {
      id: req.params.task_id,
    },
  }).then(() => {
    res.redirect('/users');
  });
});

// 取得特定使用者任務
router.post('/user/tasks', async (req, res) => {
  try {
    console.log('req.body=>', req.body);
    const users = await models.User.findAll();
    const user = await models.User.findOne({
      // where: { id: req.params.user_id },
      where: { id: req.body.id },
    });

    const tasks = await models.Task.findAll({
      where: { Userid: req.body.id },
    });

    return res.render('task', {
      title: 'Tasks',
      data: {
        user,
        users,
        tasks,
      },
    });
  } catch (e) {
    console.error(e.stack);
    throw e;
  }
});


module.exports = router;

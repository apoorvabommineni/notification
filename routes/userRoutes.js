const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// GET all users
router.get('/', async (req, res) => {
  const users = await User.getUsers();
  res.json(users);
});

// POST create user
router.post('/create-user', async (req, res) => {
  const { name, address, dob } = req.body;
  if (!name || !address || !dob) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  await User.addUser({ name, address, dob });
  res.status(201).json({ message: 'User created' });
});

// PUT update user
router.put('/:id', async (req, res) => {
  const exists = await User.getUserById(req.params.id);
  if (!exists) return res.status(404).json({ error: 'User not found' });

  await User.updateUser(req.params.id, req.body);
  res.json({ message: 'User updated' });
});

// DELETE user
router.delete('/:id', async (req, res) => {
  const exists = await User.getUserById(req.params.id);
  if (!exists) return res.status(404).json({ error: 'User not found' });

  await User.deleteUser(req.params.id);
  res.status(204).send();
});

module.exports = router;

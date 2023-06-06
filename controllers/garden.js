const { Plant, Profile, User } = require('../models')

async function create(req, res) {
  try {
    const newPlant = await Plant.create(req.body)
    res.status(200).json(newPlant)
  } catch (error) {
    res.status(500).json(error)
  }
}
async function index(req, res) {
  try {
    const { id: userId } = req.user
    const user = await User.findByPk(userId, { include: { model: Profile, as: 'profile' } })

    if(!user) {
      throw new Error('User Not Found')
    }
    const profileId = user.profile.id
    const plants = await Plant.findAll({
      where: {
        profileId: profileId,
      },
      include: Profile,
    })
    res.status(200).json(plants)
  } catch (error) {
    res.status(500).json({error: 'Internal Server error'})
  }
}

async function update(req, res) {
  try {
    const plantId = req.params.id
    const [updatedCount, updatedPlants] = await Plant.update(req.body, {
      where: { id: plantId },
      returning: true,
    })
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Plant Not Found' })
    }
    res.status(200).json(updatedPlants[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function deletePlant(req, res) {
  try {
    const plantId = req.params.id
    const deletedPlant = await Plant.destroy({ where: { id: plantId } })

    if (!deletePlant) {
      return res.status(404).json({ error: 'Plant not Found' })
    }
    res.status(200).json({ message: 'Bye Bye Plant' })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  deletePlant,
}

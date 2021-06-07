const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  if(id){
    return db('accounts')
    .where('id', id)
    .first()
  }
}

const create = account => {
  if (account){
    return db('accounts')
    .insert(account)
    .then(([id])=> getById(id))
  }
}

const updateById = (id, account) => {
  if (id){
    return db('accounts')
    .where('id', id)
    .update(changes)
    .then((count)=> (count > 0 ? getById(id): null))
  }
}

const deleteById = id => {
  if (id){
    return db('accounts')
    .where('id', id)
    .del()
  }
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

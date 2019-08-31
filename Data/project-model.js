const knex = require('knex');

const config = require('../knexfile.js').development;

const db = knex(config);

module.exports = {
    findProj,
    findRes,
    findTask,
    addProj,
    addRes,
    addTask
  };

  function findProj(){
      return db('project')
  }

  function findRes(){
    return db('resource')
  }

  function findTask(id){
      return db('task as T')
      .join('project as P', 'P.id', 'T.project_id') 
      .select('T.id', 'P.name', 'T.description', 'T.note', 'T.completed')
      .where({ project_id: id });
  }

  function addProj(project){
      return db('project').insert(project)
  }

  function addRes(resource){
    return db('resource').insert(resource)
  }

  function addTask(task){
    return db('task').insert(task)
  }


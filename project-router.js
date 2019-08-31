const express = require('express');

const helper = require('./Data/project-model');

const router = express.Router();

router.get('/',(req, res)=>{
    helper.findProj()
    .then(proj => {
        res.json(proj);
      })
      .catch(err => {
        res.status(500).json({ message: 'Server failed to get the projects' });
      });
})

router.get('/resources',(req, res)=>{
    helper.findRes()
    .then(reso => {
        res.json(reso);
      })
      .catch(err => {
        res.status(500).json({ message: 'Server failed to get the resources' });
      });
})

router.get('/:id/task',(req, res)=>{

    const id = req.params.id
    helper.findTask(id)
          .then(tasks => {
             res.json(tasks);
           })
          .catch(err => {
            res.status(500).json({ message: 'Server failed to get the project tasks' });
       });
})

router.post('/', (req, res)=>{
    const newProject = req.body
    helper.addProj(newProject)
          .then(pro => {
            res.status(201).json(pro);
          })
          .catch (err => {
            res.status(500).json({ message: 'Server failed to upload the new data' });
        })
})

router.post('/resources', (req, res)=>{
    const newresource = req.body
    helper.addRes(newresource)
          .then(reso => {
            res.status(201).json(reso);
          })
          .catch (err => {
            res.status(500).json({ message: 'Server failed to upload the new data' });
        })
})

router.post('/:id/task', (req, res)=>{
    const id = req.params.id
    const newtask = {... req.body, project_id: id}
    helper.addTask(newtask)
          .then(task => {
            res.status(201).json(task);
          })
          .catch (err => {
            res.status(500).json({ message: 'Server failed to upload the new task' });
        })
})


module.exports = router;
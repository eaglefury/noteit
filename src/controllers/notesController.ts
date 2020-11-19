import { Router } from 'express';
import Notes from '../models/noteModel';

const router = Router();
router.get('/notes', (req, res) => {
  const notes = Notes.findOne({})
    .then((x) => res.send(x ? x.toJSON() : {}))
    .catch((err) => console.log(err));
});

router.post('/notes/create', (req, res) => {
  Notes.create({
    url: req.body.url,
    owner: req.body.owner,
    title: req.body.title,
    details: req.body.details,
    tags: (<String>req.body.tags).split(',')
  })
    .then((x) => res.send(x.toJSON()))
    .catch((err) => res.send(err));
});

export default router;

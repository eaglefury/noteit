import { Router } from 'express';
import Notes from '../models/noteModel';

const router = Router();
router.get('/notes', (req, res) => {
  console.log('in the get route');
  Notes.find({ owner: 'Gaurav Kapoor' }, (err, docs) => {
    if (err) {
      res.status(500).send('error while querying');
    }
    console.log(docs);
    res.send(docs);
  });
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

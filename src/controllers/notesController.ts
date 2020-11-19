import { Router } from 'express';
import Notes from '../models/noteModel';

const router = Router();

/**
 * get all notes
 */
router.get('/notes', (req, res) => {
  Notes.find({}, (err, docs) => {
    if (err) {
      res.status(500).send('error while querying');
    }
    res.send(docs);
  });
});

/**
 * get notes for the owner
 */
router.get('/notes/owner/:owner', (req, res) => {
  const owner = req.params.owner;
  Notes.find({ owner: owner }, (err, docs) => {
    if (err) {
      res.status(500).send('error while querying');
    }
    res.send(docs);
  });
});

/**
 * create a note
 */
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

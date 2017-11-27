import Lane from '../models/lane';
import uuid from 'uuid/v4';

export function getSomething(req, res) {
 return res.status(200).end();
}

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];
  newLane.id = uuid();
  console.log(newLane.name);
  console.log(newLane.id);
  console.log(newLane.notes);
  newLane.save((err, saved) => {
  	console.log(err);
    if (err) {
      res.status(500).send(err);
    }
    console.log('pupa');
    res.json({ lane: saved });
  });
}
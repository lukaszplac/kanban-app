import Note from '../models/note';
import Lane from '../models/lane';

export function getSomething(req, res) {
  return res.status(200).end();
};

export function addNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  const newNote = new Note(req.body);

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({id: req.params.laneId})
      .then(lane => {
        lane.notes.push(saved);
        return lane.save()
      })
      .then(() => {
        res.json(saved);
      });
  });
}

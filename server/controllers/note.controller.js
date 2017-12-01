import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid/v4';

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


//Niby zrobilem ponizszy endpoint ale sie zastanawiam czy nie da sie jakos prosciej
//bo teraz po prostu tworze tak jakby na nowo 'lane' poprzez wyfiltrowanie notatki
//ktora trzeba wyrzucic, ale nie mozna po prostu jakos tego zrobic poprzez odwolanie
//sie do referencji _id ktora tkwi w tablicy notatek
export function deleteNote(req, res) {
  Lane.findOne({id: req.params.laneId})
    .populate('notes')
    .exec((err,lane) => {
      if (err) {
        res.status(500).send(err);
      }
      lane.notes = lane.notes.filter(note => note.id != req.params.noteId);
      lane.save();
    }).then(() => {
      res.status(200).end();
    });
}

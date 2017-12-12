import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid/v4';

export function getSomething(req, res) {
  return res.status(200).end();
};


export function moveNote(req, res) {

  const movedNote = req.body.deleted;
  const {targetLaneId} = req.body;

  if (!movedNote || !movedNote.task || !targetLaneId) {
    res.status(400).end();
  }
  Lane.findOne({id: targetLaneId})
    .populate('notes')
    .exec((err, lane) => {
      if (err) {
        res.status(500).send(err);
      }
      lane.notes.push(movedNote);
      return lane.save();
    }).then(() => {
      res.status(200).end();
    })
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Lane.findOne({id: req.params.laneId})
    .populate('notes')
    .exec((err,lane) => {
      if (err){
        res.status(500).send(err);
      }
      lane.notes = lane.notes.filter(note => note.id != req.params.noteId);
      lane.save();
    }).then(() => {
      Note.findOne({id: req.params.noteId}).then((note) => {
          res.status(200).json(note);
      });
    });
}

export function updateNote(req, res) {
  Note.findOneAndUpdate({id: req.params.noteId}, {$set: {task: req.body.task}}, {new: true}, function(err, newNote) {
    if (err) {
          res.status(500).send(err);
    }
    res.send(newNote);
  });
  Lane.findOne({id: req.params.laneId})
    .populate('notes')
    .exec((err, lane) => {
      if (err) {
        res.status(500).send(err);
      }
      lane.save();
    }).then(() => {
      res.status(200).end();
    })
}

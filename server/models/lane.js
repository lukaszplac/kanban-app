import mongoose from 'mongoose';
import Note from '../models/note';
const Schema = mongoose.Schema;

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});

laneSchema.pre('find', function (next) {
  this.populate('notes');
  next();
});

laneSchema.pre('remove', function (next) {
  this.notes.forEach((noteId) => {
  	Note.findById(noteId, function(err, note) {
  		if (err) {
  			next(err);
  		}
  		note.remove();
  	});
  })
  next();
});

export default mongoose.model('Lane', laneSchema);

import mongoose from 'mongoose';
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
  console.log("dupa");
  next();
});

export default mongoose.model('Lane', laneSchema);

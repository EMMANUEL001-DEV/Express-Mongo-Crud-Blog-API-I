const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please input your product name"],
    trim: true,
  },


  description: String,
  completed: {
  type: Boolean,// the type is a number 
    default: false,
  },


  dueDate: Date,
}, { timestamps: true }); // for expiry date

module.exports = mongoose.model('Tasks', taskSchema);

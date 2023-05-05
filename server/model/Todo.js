import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },

    done: {
        type: Boolean,
        default: false
    },

    createdAt : {
        type: Date,
        defult: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;
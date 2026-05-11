const TodoModel = require("../model/userModel.js");

const getAllTodo = async (req, res) => {
    try {
        const allTodo = await TodoModel.find();
        return res
               .status(200).json({message: "Todos fetched successfully", data: allTodo});
    } catch (err) {
        return res.status(500).json({message: "error fetching todos", error: err.message})
    }
}

const getOneTodo = async (req, res) => {
    try {
        const id = req.params.id
        const oneTodo = await TodoModel.findById(id);
        return res.status(200).json({message: "todo fetched successfully", data: oneTodo});
    } catch (err) {
        return res.status(500).json({message: "todo fetched successfully", data: oneTodo});
    }
}

const createTodo = async (req, res) => {
    try {
        // const {id} = req.params;
        const {title, details} = req.body;
        const created_todo = await TodoModel.create({title, details});
        return res
               .status(201).json({message: "todo created successfully", data: created_todo});
    } catch (err) {
        res.status(500).json({message: "error creating todo", error: err.message});
    }
}

const updateTodo = async (req, res) => {
    try {
        const  {id} = req.params
        const {completed} = req.body;
        const todo = await TodoModel.findByIdAndUpdate(id, {completed: true}, {new: true});
        return res
               .status(200).json({message: "todo updated successfully", data: todo});
    } catch (err) {
        return res
               .status(500).json({message: "error updating todo", error: err.message});
    }
    if (completed) {
        res.redirect(`/todo/deleteTodo/${id}`);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted_todo = await TodoModel.findByIdAndDelete(id);
        return res
               .status(200).json({message: "error deleting todo", data: deleted_todo});
    } catch (err) {
        return res
               .status(500).json({message: "error deleting todo", error: err.message});
    }
}

module.exports = {getAllTodo, getOneTodo, createTodo, updateTodo, deleteTodo};
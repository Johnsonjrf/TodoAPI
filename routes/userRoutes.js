const express = require("express");
const {getAllTodo, getOneTodo, createTodo, updateTodo, deleteTodo} = require("../controller/userController.js");


const route = (express.Router());

route.get("/getAllTodo", getAllTodo);
route.get("/getOneTodo/:id", getOneTodo);
route.post("/createTodo", createTodo);
route.patch("/updateTodo/:id", updateTodo);
route.delete("/deleteTodo/:id", deleteTodo);

module.exports = route;
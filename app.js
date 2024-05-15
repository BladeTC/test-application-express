const express = require("express");
const app = express();
const port = 3000;
let arrayTodosums = ["a", "b"];
let id;

// nodemon app.js or npm run watch also npm bru run at dogo folder

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Fuck you World!");
});

app.get("/todosums/", (req, res) => {
  if (arrayTodosums.length == 0) {
    res.status(400);
    res.send("List is empty");
    return;
  }
  res.status(200);
  res.send(arrayTodosums);
});

app.post("/todosums", (req, res) => {
  let val = req.body.value;
  if (val == "") {
    res.status(400);
    res.send("value must contain at least one letter");
    return;
  }
  if (typeof val != "string") {
    res.status(400);
    res.send("value must be a string");
    return;
  }
  arrayTodosums.push(val);
  res.status(201);
  res.send();
});

app.get("/todosums/:id", (req, res) => {
  let id = req.params.id;
  if (arrayTodosums[id] == undefined) {
    res.status(400);
    res.send("Element does not exist");
    return;
  }
  res.status(200);
  res.send(arrayTodosums[id]);
});

app.delete("/todosums/:id", (req, res) => {
  let id = req.params.id;
  if (arrayTodosums[id] == undefined) {
    res.status(400);
    res.send("Element does not exist");
    return;
  }
  arrayTodosums.slice(id, 1);
  res.status(200);
  res.send();
});

app.delete("/todosums", (req, res) => {
  if (arrayTodosums.length == 0) {
    res.status(400);
    res.send("List is already empty");
    return;
  }
  arrayTodosums = [];
  res.status(200);
  res.send();
});

app.patch("/todosums/:id", (req, res) => {
  let id = req.params.id;
  if (arrayTodosums[id] == undefined) {
    res.status(400);
    res.send("Element does not exist");
    return;
  }
  if (typeof req.body.value != "string") {
    res.status(400);
    res.send("Patch is not a string");
    return;
  }
  arrayTodosums[id] = req.body.value;
  res.status(200);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//

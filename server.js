const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({extended: true}));

const data = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    option1: "msgBox('Hello World');",
    option2: "alertBox('Hello World');",
    option3: "msg('Hello World');",
    option4: "alert('Hello World');",
    ans: 3,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "<script>",
    option2: "<javascript>",
    option3: "<js>",
    option4: "<scripting>",
    ans: 0,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    option1: "<script href='xxx.js'>",
    option2: "<script name='xxx.js'>",
    option3: "<script src='xxx.js'>",
    option4: "<script file='xxx.js'>",
    ans: 2,
  }
];

let highscore = [];
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/play", (req, res) => {
  res.render("quiz", {data : data});
});

app.post("/result" ,(req, res) => {
  const {score} = req.body;
  res.render("result", {score:score});
});

app.post("/savescore", (req, res) => {
  highscore.push(req.body);
  res.render("highscore", {data : highscore});
});

app.get("/highscore", (req, res) =>{
  res.render("highscore", {data : highscore});
});

app.listen(8080, () => console.log("Server listening on PORT 8080"));

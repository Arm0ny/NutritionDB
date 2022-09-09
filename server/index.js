const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "192.168.1.20",
  port: 3306,
  user: "root",
  password: "localsql",
  database: "Nutrition",
});

app.post("/create", (req, res) => {
  const {full_name, weight, goal, daily_calories, UUID} = req.body
  const query =
    "INSERT INTO people (full_name, current_w, goal, initial_w,daily_calories, FK_nutritionist) VALUES (?,?,?,?,?, ?)";
  db.query(
    query,
    [full_name, weight, goal, weight, daily_calories, UUID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/people", (req, res) => {
  const UUID = req.body.UUID
  const query = "SELECT * FROM people WHERE FK_nutritionist = ?";
  db.query(query,[UUID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/register", async (req, res) => {
  const { username, email, password, uuid } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    "INSERT INTO nutritionists (email, username, password, uuid) VALUES (?,?,?,?)";

  db.query(query, [email, username, hashedPassword, uuid], (err, response) => {
    if (err) {
      console.log(err);
      res.send({status: 'error'});
    } else {
      res.send({status: 'OK'});
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM nutritionists WHERE username = ?";
  db.query(query, [username], async (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const match = await bcrypt.compare(password, result[0]["password"]);
      if (match) {
        const userData = {
          username: result[0].username,
          uuid: result[0].uuid,
        };
        res.send(userData);
      } else {
        res.send({ error: "Wrong Password" });
      }
    }
  });
});

app.listen(3009, () => {
  console.log("running on port 3009");
});

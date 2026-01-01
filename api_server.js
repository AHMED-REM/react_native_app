const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base données MySQL
let db;
try {
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "userdb",
        port: 3306,
    });
    db.connect(err => {
        if (err) {
            console.error("Check your DataBase Server !");
            console.error(err.message);
        } else {
            console.log("MySQL connected !");
        }
    });
} catch (error) {
    console.error("Unexpected MySQL error:");
    console.error(error);
}

// Réponse de l'API au call: add_new_user 
app.post("/newuser", (req, res) => {
    const { username, password, email, bdate } = req.body;
    const sql = "INSERT INTO users (username, password, email, bdate) VALUES (?, ?, ?, ?)";
    db.query(sql, [username, password, email, bdate], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "User added", id: result.insertId });
    });
});

// Réponse de l'API au call: get_user avec un username 
app.get("/user1/:username", (req, res) => {
    db.query(
        "SELECT * FROM users WHERE username = ?",
        [req.params.username],
        (err, rows) => {
            if (err) return res.status(500).send(err);
            res.send(rows[0]);
        }
    );
});

// Réponse de l'API au call: get_user avec un id
app.get("/user2/:id", (req, res) => {
    db.query(
        "SELECT * FROM users WHERE id_user = ?",
        [req.params.id],
        (err, rows) => {
            if (err) return res.status(500).send(err);
            res.send(rows[0]);
        }
    );
});

// Réponse de l'API au call : show_all_users
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
        if (err) return res.status(500).send(err);
        res.send(rows);
    });
});

// Réponse de l'API au call : delete_one_user
app.delete("/delete_user/:id", (req, res) => {
    db.query(
        "DELETE FROM users WHERE id_user=?",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send({ message: "User with id " + req.params.id + "deleted" });
        }
    );
});

// Réponse de l'API au call : update_one_user
app.put("/users/:id", (req, res) => {
    const { username, password, email, bdtae } = req.body;
    const sql =
        "UPDATE users SET username=?, password=?, email=?, bdate=? WHERE id_user=?";
    db.query(sql, [username, password, email, bdtae, req.params.id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "User updated" });
    });
});

// Lancement du Server (Utilisez la commande node api.js dans le Terminal)
app.listen(3000, () => {
    console.log("API running on port 3000");
});



const express = require("express");
const { newDb } = require("pg-mem");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json({ limit: "40kb" }));
app.use(express.static(path.join(__dirname, "public")));

const sessions = new Map();
function makeDb() {
  const db = newDb({ autoCreateForeignKeyIndices: true });
  db.public.none(`
    CREATE TABLE departments (id SERIAL PRIMARY KEY, name VARCHAR(80) NOT NULL, location VARCHAR(80));
    CREATE TABLE employees (id SERIAL PRIMARY KEY, full_name VARCHAR(100) NOT NULL, role VARCHAR(80), salary NUMERIC(12,2), department_id INTEGER REFERENCES departments(id), hired_at DATE);
    CREATE TABLE projects (id SERIAL PRIMARY KEY, title VARCHAR(120), budget NUMERIC(14,2), status VARCHAR(30), lead_id INTEGER REFERENCES employees(id));
    INSERT INTO departments(name, location) VALUES ('Engineering','Toshkent'),('Marketing','Samarqand'),('Finance','Buxoro'),('Product','Toshkent');
    INSERT INTO employees(full_name, role, salary, department_id, hired_at) VALUES
    ('Aziz Karimov','Backend Developer',18500000,1,'2022-03-14'),
    ('Malika Rahimova','Product Designer',16200000,4,'2021-08-02'),
    ('Jasur Tursunov','Data Analyst',14800000,3,'2023-01-16'),
    ('Dilnoza Saidova','Marketing Lead',17100000,2,'2020-11-09'),
    ('Bekzod Aliyev','Frontend Developer',17800000,1,'2022-07-21'),
    ('Madina Qodirova','Product Manager',21000000,4,'2019-05-30'),
    ('Sardor Ismoilov','Financial Analyst',15300000,3,'2023-09-04');
    INSERT INTO projects(title,budget,status,lead_id) VALUES
    ('Core Banking API',850000000,'active',1),('Brand refresh',120000000,'active',4),
    ('Analytics platform',430000000,'planning',3),('Mobile app v2',560000000,'active',6);
  `);
  return db;
}
function getDb(id) {
  if (!sessions.has(id)) sessions.set(id, makeDb());
  return sessions.get(id);
}
app.get("/api/health", (_, res) => res.json({ status: "ok", database: "pg-mem sandbox" }));
app.post("/api/query", (req, res) => {
  const session = String(req.body.session || "guest").slice(0, 80);
  const sql = String(req.body.sql || "").trim();
  if (!sql) return res.status(400).json({ error: "SQL so‘rovini kiriting." });
  if (sql.length > 12000) return res.status(413).json({ error: "So‘rov hajmi 12 000 belgidan oshmasin." });
  const started = Date.now();
  try {
    const result = getDb(session).public.many(sql);
    const rows = Array.isArray(result) ? result : [];
    res.json({ rows, rowCount: rows.length, duration: Date.now() - started, command: sql.split(/\s+/)[0].toUpperCase() });
  } catch (err) {
    const message = String(err.message || "SQL xatosi");
    const match = message.match(/position\s+(\d+)/i) || message.match(/at character\s+(\d+)/i);
    res.status(400).json({ error: message.split("\n")[0].slice(0, 700), position: match ? Number(match[1]) : null, duration: Date.now() - started });
  }
});
app.post("/api/reset", (req, res) => {
  const id = String(req.body.session || "guest").slice(0, 80);
  sessions.set(id, makeDb());
  res.json({ status: "reset" });
});
app.get("*", (_, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, "0.0.0.0", () => console.log("Postgres Lab running on " + PORT));
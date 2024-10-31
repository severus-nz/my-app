import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;


app.listen(PORT, () => console.log(`${PORT} starting server`));

app.use(cors());

app.get("/api", (req, res) => {
    res.send(req.query.email + " is now registered");
    console.log(req.query);
  });
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.get("/",(req,res) => {
    return res.send("Hello word");
})


export default app;
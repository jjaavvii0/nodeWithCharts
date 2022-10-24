import express from "express"
import morgan from "morgan"
import chartsRoutes from "./routes/charts.routes"

const app = express();



app.use(morgan("dev"))
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use("/", chartsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) { console.log(err); }
    else { console.log(`Server is listening on port ${PORT}`); }
});

import express from "express";
import { engine } from "express-handlebars"; // Usa "engine" aquí
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

// Configuración del motor de plantillas Handlebars
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main", // Corregido: de defaultlayouts a defaultLayout
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");


//middlewares
app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: false}));

// Rutas
app.use(indexRoutes);

// static files

app.use(express.static(path.join(__dirname, "public")));

export default app;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Backend de Trail Explorer funcionando 🚀");
});

// Otra ruta de prueba
app.get("/api/trails", (req, res) => {
    res.json([
        { id: 1, name: "Ruta Montaña", difficulty: "Media" },
        { id: 2, name: "Ruta Bosque", difficulty: "Fácil" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

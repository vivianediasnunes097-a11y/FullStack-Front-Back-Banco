
const express = require("express")
const mysql = require("mysql2/promise")
const app = express();

app.use(express.json());
const PORT = 3000;

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola_db",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


(async () => {
    try {        
        const conn = await conexao.getConnection();
        console.log("Banco conectado com sucesso");
        conn.release();
    } catch (error) {
        console.error("Erro ao conectar ao banco", error.message)
    }
})();

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello World" });
})

app.get("/alunos",async (req,res)=>{
    try {
        const [resultado] = await conexao.query("SELECT * FROM alunos");
        res.status(200).json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({erro: "Erro ao buscar alunos"});
    }       
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
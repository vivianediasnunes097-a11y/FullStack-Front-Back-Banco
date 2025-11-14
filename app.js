console.log("APP.js funcionando")
const API = "http://localhost:3000/alunos";
async function carregarAlunos(){
    try{
        const resposta = await fetch(API);
        const alunos = await resposta.json();
        console.log(alunos)
    }catch(error){
        console.error(error);
    }
}
carregarAlunos()
// Promise 
// then catch
// async await 

const { resolve } = require("path")

function log(etapa){
    return console.log(etapa + new Date().toLocaleTimeString())}

function requisicaoSimulada(nome, tempoMs = 1500, deveFalhar = false){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(deveFalhar){
                reject(new Error(`Falha em ${nome}`))
            }else{
                resolve(`${nome} concluida em ${tempoMs}ms`)
            }
        },tempoMs)
    })
}

function exemploThemCatch(){
    log("1.Início (sem await)");
    requisicaoSimulada("Buscar Usuário", 2000)
        .then(function(resultado){
            log(`3.Then ${resultado}}`)
        })
        .catch((erro)=> {
            console.log("Erro capturado com .catch" + erro.message)
        })
}
function exemploTryCatch(){
    log("2. Continuo o fluxo sem esperar a promise")
}
async function exemploTryCatch(){
    log("1.Etapa com Async Await");
    try {
        const resultado =  await requisicaoSimulada("Buscar Usuário", 2000);
        log("Resultado obtido com await" + resultado)
    } catch (error) {
        console.error(error.message)
    }
    log("3. Só roda depois do Await")
}
exemploTryCatch()
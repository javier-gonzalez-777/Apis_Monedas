// Objetos del DOM
const inputMonedaHtml=document.getElementById("moneda")
const selectMonedaHtml=document.getElementById("btnSeleccion")
const btnBuscarHtml=document.getElementById("btnBuscar")
const spanResultadoHtml=document.getElementById("resultado")
//console.log(inputMonedaHtml)

const apiURLEuro="https://mindicador.cl/api/euro";
const apiURLDolar="https://mindicador.cl/api/dolar";

async function getMonedaEuro() {
    try{
    const res = await fetch(apiURLEuro);
    const monedaEuro = await res.json();
    return monedaEuro;
    }
    catch(error){
        alert("El error es:",error.message)
    }
}
//console.log(getMonedaUf())
async function getMonedaDolar() {
    try{
    const res = await fetch(apiURLDolar);
    const monedaDolar = await res.json();
    return monedaDolar;

    }
    catch(error){
        alert("El error es:",error.message)
    }
}
//console.log(getMonedaDolar())

//* 
/*
 async function valorDolar() {
     const dolarDia = await getMonedaDolar()    
     const varDolarDia= dolarDia.serie[0].valor;
     console.log(varDolarDia)
}
valorDolar() */

btnBuscarHtml.addEventListener("click",()=>{
    if (selectMonedaHtml.value==="dolar"){
            async function valorDolar() {
                const dolarDia = await getMonedaDolar()    
                const varDolarDia= dolarDia.serie[0].valor;
                console.log(varDolarDia)
            
            const valorInput= inputMonedaHtml.value
            
            const conversionDolar=(valorInput/varDolarDia).toFixed(2)
            console.log(valorInput)
            console.log(conversionDolar)
        
            spanResultadoHtml.innerHTML=`Total: ${conversionDolar}`   
            
            }
            valorDolar()
        
    }else if (selectMonedaHtml.value==="euro"){
          async function valorEuro() {
                    const euroDia = await getMonedaEuro()    
                    const varEuroDia= euroDia.serie[0].valor;
                    console.log(varEuroDia)
                    const valorInput= inputMonedaHtml.value
                    const conversionEuro=(valorInput/varEuroDia).toFixed(4)
                    console.log(valorInput)
                    console.log(conversionEuro)
                    spanResultadoHtml.innerHTML=`Total: ${conversionEuro}`   
                    }
                    valorEuro()
                }
                
            

        })









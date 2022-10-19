const cor = document.getElementById('atalhos')
const btnSubir = document.querySelector('.btnSubir')
function activeScroll(){
    cor.classList.toggle('ativo', scrollY > 250)
    if(scrollY > 1000){
        btnSubir.style.opacity = 100
    }
    else{
        btnSubir.style.opacity = 0
    }
}
window.addEventListener('scroll',activeScroll)



const elemento = document.getElementById('texto');
const texto = "Bem vindo ao meu currículo!! :)";
const intervalo = 150;
const intervalo2 = 3000;

function mostrarTexto(elemento,texto,intervalo){

const char = texto.split("").reverse();
const typer = setInterval(() =>{

    if(!char.length){
        // esconderTexto(elemento,texto,intervalo)
        return clearInterval(typer)
    }
    const next =char.pop();
    elemento.innerHTML += next;
},intervalo);}


mostrarTexto(elemento,texto,intervalo);

window.sr = ScrollReveal({reset:true})
 sr.reveal('.sessao',{duration: 1000})

const sessao1 = document.getElementById('sessao1')
function sobreMim(){
    document.getElementById('sessao1').scrollIntoView(-200,0)
}
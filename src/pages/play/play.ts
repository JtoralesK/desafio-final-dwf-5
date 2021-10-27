import { cargarSegundo } from "../../components/temporizador/tempo";
import {state}from"../../state"
import { move } from "../move/move";

 export function play(parametros:any){
   
    const div = document.createElement("div");
    var reloj = cargarSegundo({ seConcretaJugada: seConcretaJugada})
  
    div.innerHTML=`
    <div class="container__home">
      <div class="container__content__home">
      <div class="container__manos container__play">
      <div class="hijo">
      <tijera-el variante="movimiento" class="manos buttonTijera" ></tijera-el>
      <piedra-el variante="movimiento" class="manos buttonPiedra"></piedra-el>
      <papel-el variante="movimiento" class="manos buttonPapel"></papel-el>
      </div>
     </div>
      </div>  
     </div>
    `
    const container = div.querySelector(".container__content__home");
    container.appendChild(reloj)
   
    const tijera = div.querySelector(".buttonTijera");
    const piedra = div.querySelector(".buttonPiedra");
    const papel = div.querySelector(".buttonPapel");
   
    const jugadas=[tijera,papel,piedra]
   const l=  jugadas.map((jugada)=>{
      jugada.addEventListener("click",(e)=>{
        let evento:any = e
        let click = evento.path[2]
       
        let moveCpu=[]
    
        if(click==tijera){
           moveCpu.push("tijera")
        }
        if(click==papel){
              moveCpu.push("papel")
        }
        if(click==piedra){
            moveCpu.push("piedra")
        }
        state.setMove("userMove",moveCpu[0]);
   })})
  
    function seConcretaJugada(params){
      if(params==1){
       const container:HTMLElement = div.querySelector(".hijo")
        
      
        
        setTimeout(()=>{
          parametros.goTo("/dwf-m5-desafioFinal/move")
        },1000)
        
      }
      }
   return div;
 }

   

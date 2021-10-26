import{home} from"./pages/home/home";
import { instru } from "./pages/instrucciones/instru";
import { play } from "./pages/play/play";
import { move } from "./pages/move/move";
import { results } from "./pages/results/results";

    const routes=[
        {
            path:/\/dwf-m5-desafioFinal-m5\/inicio/,
            page: home
        },
         {
            path:/\/dwf-m5-desafioFinal-m5\/instrucciones/,
            page: instru
        },
        {
            path:/\/dwf-m5-desafioFinal-m5\/play/,
            page: play
        },
        {
            path:/\/dwf-m5-desafioFinal-m5\/move/,
            page: move
        },
        {
            path:/\/dwf-m5-desafioFinal-m5\/results/,
            page: results
        }
        
    ]
    
    
    
export function initRouter(container:Element){    
     function goTo(path){
        history.pushState({}, "", path);
        handleRoute(path)
    }
    function handleRoute(route){
        for (const itera of routes) {
           if( itera.path.test(route)){
               const el = itera.page({goTo:goTo})
               
              if(container.firstChild){
                  container.firstChild.remove()
              }
               container.appendChild(el)
           }
        }
        

    }
    if(location.host.includes("github.io")){
        goTo("/dwf-m5-desafioFinal/inicio ")
    }
    if(location.pathname=="/"){
        goTo("/dwf-m5-desafioFinal/inicio ")
    }
   else{
        handleRoute(location.pathname)
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
      };
}

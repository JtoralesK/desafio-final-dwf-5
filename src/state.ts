type Move = "piedra" | "papel" | "tijera";
type Player = "userMove" | "computerMove";
type Wins = "userWins" |"computerWins"|"empate"

const state = {
    data: {
      currentGame: {
        computerMove: "none",
        userMove: "none",
      },
      history: {
        userWins: 0,
        computerWins: 0,
        empate:0,
        ultimajugada:""
      },
  
    },
    listeners: [],
    getState() {
      return this.data;
    },
  
    setState(newState) {
      this.data = newState;
     
      for (const cb of this.listeners) {
        cb();
      }
      localStorage.setItem("game-data", JSON.stringify(this.data));
     
      
    },
  
   
  
    subscribe(cb: (any) => any) {
      this.listeners.push(cb);
    },
  
    setMove(player: Player, move: Move) {
      const currentState = this.getState();
      currentState["currentGame"][player] = move;
      console.log(currentState.currentGame);
      
      this.setState(currentState);
    },
    whoWins(computerMove:Move, userMove: Move){
      const data = this.getState();
     const computerWins = [
      computerMove==="piedra" && userMove==="tijera",
      computerMove==="papel" && userMove==="piedra",
      computerMove==="tijera" && userMove==="papel"
      ].includes(true);
      const userWins = [
        userMove==="piedra" && computerMove==="tijera",
        userMove==="papel" && computerMove==="piedra",
        userMove==="tijera" && computerMove==="papel"
        ].includes(true);
        const empate = [
          userMove==="piedra" && computerMove==="piedra",
          userMove==="papel" && computerMove==="papel",
          userMove==="tijera" && computerMove==="tijera"
          ].includes(true)
     
        if(computerWins){
          return "gano la compu"
        } if(userWins){
          return "gano el usuario"
        }  if(empate){
          return "empate"
        } 
        this.setState(data)
        
        
        
       
    },
    pushWins(who){
     
      let data = this.getState()
     
     if(who=="gano la compu"){
       data.history.computerWins+=1
  
     }
     if(who=="gano el usuario"){
      data.history.userWins+=1
    
    }
     if(who=="empate"){
      data.history.empate+=1
     
    }
    this.setState(data)
    },
    pullData(){
      const localData = JSON.parse(localStorage.getItem("game-data"));
      const localData1= localData.history.ultimajugada
      const datt= localData
      console.log(localData);
      
      let data = this.getState()
     
     if(localData1=="gano la compu"){
     
       data.history.ultimajugada="gano la compu"
     }
     if(localData1=="gano el usuario"){
     
      data.history.ultimajugada="gano el usuario"
    }
     if(localData1=="empate"){
      data.history.ultimajugada="empate"
    }
    this.setState(data)
    },
     getUltimaJugada(){
      const localData = JSON.parse(localStorage.getItem("game-data"));
      const localData1= localData.history.ultimajugada
      return localData1
      console.log(localData1);
      
     },
    getCurrentGame() {
      const currentState = this.getState();
      return currentState.currentGame;
    },
  
    pushData(){
      const data = this.getState()
      const dataJugada = this.getState().currentGame;
      
      const strorage = JSON.parse(localStorage.getItem("game-data"));
      const strorageData= strorage.currentGame
      const pc = dataJugada.computerMove = strorageData.computerMove;
      const user = dataJugada.userMove = strorageData.userMove
      console.log(strorageData.userMove);
      
      this.setState({
        ...data,
        pc,
        user
      })

     
      
    },
  };
  
  export { state, Move };
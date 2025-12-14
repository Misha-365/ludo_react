import {useState} from "react";
export default function LudoGame(){
    let [moves,setMoves] = useState({blue:0 ,green:0,yellow:0,red :0});
   let updateBlue=()=> {
   moves.blue =Math.ceil(Math.random()*6);
    //console.log(`moves.blue=${moves.blue}`);
    setMoves({...moves});   
   };
   let updateGreen=()=> {
    moves.green=Math.ceil(Math.random()*6);
   // console.log(`moves.green=${moves.green}`);
    setMoves({...moves});   
   };
   let updateYellow=()=> {
    moves.yellow =Math.ceil(Math.random()*6);
    //console.log(`moves.yellow=${moves.yellow}`);
    setMoves({...moves});   
   };
   let updateRed=()=> {
    moves.red = Math.ceil(Math.random()*6);
   // console.log(`moves.red=${moves.red}`);
    setMoves({...moves});   
   };
   
    return (
        <div class="ludo">
        <p>Game Begins!</p>
<div className="board">
<p>Blue Moves={moves.blue} </p>
<button style={{backgroundColor : "#6b6bdaff"}} onClick={updateBlue}>+1</button>
<p>Green Moves={moves.green} </p>
<button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
<p>Yellow Moves={moves.yellow} </p>
<button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
<p>Red Moves={moves.red} </p>
<button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
    </div>
</div>
    );
}
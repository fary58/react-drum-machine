import React from "react";
import { useEffect,useState } from "react";
import { stickOne,stickTwo } from "./drumArray";
import DrumDisplay from "./DrumDisplay";

const powerOnStyle = {
    border: "1px solid green",
    width: '28px',
    height: '30px',
    backgroundColor: 'green',
    borderRadius: '50px',
    margin: '0 auto',
  };

  const powerOffStyle = {
    border: "1px solid red",
    width: '28px',
    height: '30px',
    backgroundColor: 'red',
    borderRadius: '50px',
    margin: '0 auto',
  };



const DrumPage = props => {

const [currentBeat,setBeat] = React.useState(stickOne)
const [currentDrum,setDrum] = React.useState('');
const [powerBtn,setPower] = React.useState(true);
const [powerColor,setPowerColor] = React.useState(powerOnStyle);
const [drumPower,setDrumPower] = React.useState(true);


useEffect(() => {
    // Update the document title using the browser API
    // if(powerBtn == true){
    //     document.getElementsByClassName("powerButton")[0].style ={powerOnStyle};
    //    }
  });



function play(key,drum){
    if(!drumPower) return;
    const audio=document.getElementById(key)
    setDrum(drum)
    audio.currentTime = 0;
    audio.play()
  }

  const power = () =>{
    setPower(!powerBtn);
   if(powerBtn == true){
    setPowerColor(powerOnStyle);
    setDrumPower(true);
   }else{
    setPowerColor(powerOffStyle);
    setDrumPower(false);
   }

  }



return (

    <div className="main">
    <div id="drum-machine" className="container">
      <h1 className="h1 drum-heading">Drum Machine</h1>
      <h4 id="display">{currentDrum}</h4>
      <div style={powerColor}  className="powerButton" onClick={power}></div>
      <div className="row">
        <div className="col text-center">
          <DrumDisplay drumPads={currentBeat} play={play}/>
          
        </div>
      </div>
    </div>
    </div>
    

);



}

export default DrumPage
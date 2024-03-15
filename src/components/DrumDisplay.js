function DrumDisplay(props){
    return (props.drumPads.map((pad,index) => {
        console.log(pad);
      return (    
            <button className="drum-pad" onClick={() => props.play(pad.keyTrigger, pad.id)} key={index} id={pad.id}>
            {pad.keyTrigger}
              <audio className="clip" id={pad.keyTrigger} src={pad.url} />
            </button>
        )
    }));
  }

  export default DrumDisplay; 
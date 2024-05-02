import { useState, useEffect } from "react";
import Card from "./Card";


const CardsBoard = ({played, setPlayed}) => {
    const [characters , setCharacters] = useState([])

    useEffect(() => {
        //console.log("aqui")
        callDragonBall()
            .then(characters => setCharacters(characters))
        }, [])


    function cardsReorder (e) {
        e.stopPropagation()
        checkPlayed(e.target.name)
        }

    
    function checkPlayed(selected) { 
        if(played.includes(selected)){
            alert("GameOver")
            setPlayed([])
            //setCharacters([])
        }else{
            setPlayed([selected, ...played])
            let cardsToShuffle = characters
            shuffle(cardsToShuffle);
            setCharacters([...cardsToShuffle])
        }
    }
    

    return (
        <div className="cardsBoard">
            {
                characters.map(character => {
                    //console.log(character.name)
                    return <Card key={character.id} characterInfo={character} handleClink={cardsReorder}></Card>
                })
            }
        </div>
    ) 
    
}

function callDragonBall () {
    return fetch('https://dragonball-api.com/api/characters?limit=12')
    .then(response => response.json()) 
    .then(json => json.items)  
  }



function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


  export default CardsBoard
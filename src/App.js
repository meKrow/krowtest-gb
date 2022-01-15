import logo from './logo.svg';
import './App.css';
import Appheader from './components/appheader';
import Leftbar from './components/leftbar';
import * as svc from './services/jokes';
import Joke from './components/joke';
import React, {useState} from "react";
import Total from './components/total';

function App() {

  const [jokeValue, setJoke] = useState([]);
  const [nextIndex, setIndex] = useState(0);
  const [nextClass, setNextClass] = useState("hideMe");
  const [prevClass, setPrevClass] = useState("hideMe");
  
  async function Clickme() {    
    
    let joke = await svc.nextjoke();

    let nextJ = joke.data.value;

    setJoke([
      ...jokeValue,
      nextJ
    ]);    

    let i = jokeValue.length - 1;

    setIndex(jokeValue.length);
    setVisibility(jokeValue.length);
  }  

  function setVisibility(index)
  {
    console.log("count:" + jokeValue.length + " index:" + nextIndex)

    setPrevClass("hideMe")  
    setNextClass("hideMe")  
  
    if(jokeValue.length > (index + 1))
    {
      setNextClass("")
    }

    if(index > 0)
    {
      setPrevClass("")
    }
  }

  function nextJoke()
  {
    setVisibility(nextIndex + 1);
    
    if(jokeValue.length > nextIndex)
    {
      setIndex(nextIndex + 1);
    }

    
  }

  function previousJoke()
  {
    if(nextIndex > 0)
    {
      setIndex(nextIndex - 1);
    }

    setVisibility(nextIndex - 1);
  }

  return (
    <div>
      <Appheader />
      <Leftbar />

      <div className="center">
        <div>Jokes: {jokeValue.length}</div>
        <div>Index: {nextIndex}</div>
    
        <Joke data={{ d:jokeValue,x:nextIndex  }} />  

        <button onClick={Clickme}>Get Joke</button>  
        <button className={nextClass} onClick={nextJoke}>Next</button>
        <button className={prevClass} onClick={previousJoke}>Previous</button>
      </div>
    </div>
  );
}

export default App;

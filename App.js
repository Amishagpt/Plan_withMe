import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

//data nikal lenge yha 
const App = () => {



  const [tours, setTours] = useState(data) //sara data tours ka ..tours var mei daal diye 

  function removeTour(id) {
    //tours filter hoga on the basis of id
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  //jb koi card nhi hoga UI pe
  //Text display hoga aur ik button hoga, jispe click krte hi ...sara data phit ui pe wps aa jyega 
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2> No tours left</h2>
        <button className="btn-white"  onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  ////
  return (
  <div className="App">

    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
  );
};

export default App;

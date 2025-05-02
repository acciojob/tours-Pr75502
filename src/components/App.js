import React from "react";
import { useState, useEffect } from "react";
import toursData from "../data/tourData";
import Loading from "./Loading";
import Tour from "./tour";
import Tours from "./tours";


const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
   setTours(tours.filter(tour=>tour.id !=id))
  }
  
  const toggleDescription = (id) => {
    setTours(tours.map(tour=>{
      if(tour.id===id){
        return {...tour, showMore:!tour.showMore}
      }
      return tour;
    }))
  }
  useEffect(() => {
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    },1000)
  },[])
  
    return(
      <main id="main">
        {
          loading ? (
          <Loading/>
      )
            : (
              <Tours tours={tours} removeTour={removeTour} toggleDescription={toggleDescription}/>
            )
    }

      </main>
    )
}
export default App;

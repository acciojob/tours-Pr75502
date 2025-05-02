
import React from "react";

function Tour({ tour, removeTour, toggleDescription }) {
    return (
        <article>
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <p>{tour.showMore ? tour.description : `${tour.description.substring(0, 200)}...`}</p>
            <button onClick={() => toggleDescription(tour.id)}>
                
                {tour.showMore ? "Show Less" : "Show More"}
            </button>
            <h4>{tour.price}</h4>
            <button onClick={()=>removeTour(tour.id)} >Remove</button>
            ,
       </article>
    )
}
export default Tour

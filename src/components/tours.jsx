import React from "react"
import Tour from "./tour"

    function Tours({ tours, removeTour, toggleDescription }) {
    
    return (
        <section>
            {tours.map(tour => (
                <Tour
                    key={tour.id}
                    tour={tour}
                    removeTour={removeTour}
                    toggleDescription={toggleDescription}

                />
            ))}
        </section>
    )
}
export default Tours
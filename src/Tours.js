import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {React.Children.toArray(
          tours.map((tour) => {
            return <Tour {...tour} removeTour={removeTour} />;
          })
        )}
      </div>
    </section>
  );
};

export default Tours;

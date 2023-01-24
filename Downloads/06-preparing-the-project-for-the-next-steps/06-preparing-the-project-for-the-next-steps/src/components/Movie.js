import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  let id = props.id;
  //console.log(id);
  const DeleteHandler = async () => {
    console.log("id is:", id);
    const response = await fetch(
      `https://react-project-14387-default-rtdb.firebaseio.com/movies.json/${id}`,
      {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/jason",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={DeleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddMovie({ movies, getMovies }) {
  const [mov, setMov] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  const history = useHistory();
  const changeHandler = e => {
    setMov({
      ...mov,
      [e.target.name]: e.target.value,
    });
  };
  const addMovie = e => {
    e.preventDefault();
    mov.stars = mov.stars.split(",");

    axios
      .post(`http://localhost:5001/api/movies/`, mov)
      .then(() => {
        getMovies(movies);
        history.push(`/`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className="update-form">
      <form onSubmit={addMovie}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="string"
          value={mov.title}
          onChange={changeHandler}
        />
        <br />
        <label>Director</label>
        <input
          name="director"
          type="string"
          value={mov.director}
          onChange={changeHandler}
        />
        <br />
        <label>Metascore</label>
        <input
          name="metascore"
          type="number"
          value={mov.metascore}
          onChange={changeHandler}
        />
        <br />
        <label>Stars</label>
        <input
          name="stars"
          type="string"
          value={mov.stars}
          onChange={changeHandler}
        />
        <br />
        <button>Add</button>
      </form>
    </section>
  );
}

export default AddMovie;

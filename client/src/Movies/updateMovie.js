import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateMovie(props) {
  const [mov, setMove] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });
  const changeHandler = () => {
    setMove({
      ...mov,
      [e.target.name]: e.target.value,
    });
  };
  const updatingMovie = () => {
    axios
      .put(`http://localhost:5001/api/movies/${props.history.id}`, mov)
      .then(res => console.log("Update Move: ", res))
      .catch(err => console.log("Error Updating Move: ", err));
  };
  useEffect(() => {
    const movToUpdate = props.items.find(item => {
      return `${item.id}` === props.match.params.id;
    });

    console.log("movToUpdate", itemToUpdate);

    if (movToUpdate) {
      setItem(movToUpdate);
    }
  }, [props.mov, props.match.mov.id]);

  return (
    <section className="update-form">
      <form onSubmit={updatingMovie}>
        <label htmlFor="title">Title</label>
        <input name="title" type="string" value={mov.title} />
        <label htmlFor="director">Director</label>
        <input name="director" type="string" value={mov.director} />
        <label htmlFor="metascore">Metascore</label>
        <input name="metascore" type="number" value={mov.metascore} />
        <label htmlFor="stars" type="string" value={mov.stars}>
          Stars
        </label>
        <input name="stars" />
        <button>Update</button>
      </form>
    </section>
  );
}

export default updateMovie;

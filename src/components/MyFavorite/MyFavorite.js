import React from 'react';
import {Link} from "react-router-dom";

const MyFavorite = () => {
  return (
    <div>
        <Link to='/'><button>Повернутися до списку гравців</button></Link>
        <h1>Список улюблених гравців:</h1>

    </div>
  )
}

export default MyFavorite;
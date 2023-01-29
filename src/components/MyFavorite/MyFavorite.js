import React from 'react';
import { useSelector } from "react-redux";
import FootballCard from '../FootballCard/FootballCard';

const MyFavorite = () => {
  const favouritePlayers = useSelector((state) => state.Search.favourite);
  return (
    <div>
        <h1>Список улюблених гравців:</h1>
        {favouritePlayers.map((item) => (
        <FootballCard
          key={item.idfoot}
          idfoot={item.idfoot}
          name={item.name}
          country={item.country}
          club={item.club}
          position={item.position}
          img={item.img}
          likes={item.likes}
          balls={item.quantityOfBalls}
        />
      ))}

    </div>
  )
}

export default MyFavorite;
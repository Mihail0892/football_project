import React, { useEffect} from "react";
import FootballCard from "./components/FootballCard/FootballCard";

import { useSelector } from "react-redux";
import Counter from "./components/FootballCard/Counter";


function App() {
  const data = useSelector((state) => state.LikesAmount);
  // const allLikes = JSON.parse(localStorage.getItem('data'));
  // useEffect(()=>{
  //   localStorage.setItem('data',JSON.stringify(data));
  //   console.log ('записал в локал');
  // },[data]);

  
  
  
  // console.log(allLikes,'zapis');
  
  return (
    <>
     {data.map((item) => (
        <FootballCard
          key={item.id}
          idfoot={item.id}
          name={item.name}
          country={item.country}
          club={item.club}
          position={item.position}
          img={item.img}
          likes={item.likes}
        />)) }
        <Counter/>
    </>
  );
}

export default App;

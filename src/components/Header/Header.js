import React from 'react';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import { useDispatch,useSelector } from "react-redux";
import {sort} from "../../store/redusers/count";



const Header = () => {
  const dispatch = useDispatch();
  const sortData = useSelector((state) => state.LikesAmount);
  

  const handleClick =()=>{
    dispatch(sort());
    console.log(sortData,'sort');
  }
  return (
    <div className={styles.header} >
        <Search/>
        <button onClick={handleClick}>Рейтинг</button>
    </div>
  )
}

export default Header;
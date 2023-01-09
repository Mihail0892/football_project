import {configureStore} from '@reduxjs/toolkit';

import LikesAmount from './redusers/count';
import Search from './redusers/search';


const store = configureStore({
    reducer:{
        LikesAmount:LikesAmount,
        Search:Search,
    }
});

export default store;
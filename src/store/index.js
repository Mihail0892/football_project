import {configureStore} from '@reduxjs/toolkit';

import LikesAmount from './redusers/count';


const store = configureStore({
    reducer:{
        LikesAmount:LikesAmount,
    }
});

export default store;
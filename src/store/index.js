import { configureStore } from "@reduxjs/toolkit";

import Search from "./redusers/search";

const store = configureStore({
  reducer: {
    Search: Search,
  },
});

export default store;

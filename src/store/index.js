import { configureStore } from "@reduxjs/toolkit";

import Search from "./redusers/search";
import Auth from "./redusers/auth";

const store = configureStore({
  reducer: {
    Search: Search,
    Auth:Auth,
  },
});

export default store;

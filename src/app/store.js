import { configureStore } from "@reduxjs/toolkit";

import drawerReducer from "../features/drawer/drawerSlice";
import dashboardReducer from "../features/dashboard/dashboard";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    dashboard: dashboardReducer,
  },
});

import { createSlice, EnhancedStore } from "@reduxjs/toolkit";
import * as models from "@interface/models";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
    userRole: "doctor",
  } as { user: models.Account | null },
  reducers: {
    setUser: (state, action) => {
      console.log("User",action.payload)
      state.user = action.payload;

    },
  },
});

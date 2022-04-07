import { createSlice, EnhancedStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import * as models from "@interface/models";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
  } as { user: models.Account | null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

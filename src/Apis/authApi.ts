import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "src/Utility/Constatnt";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://localhost:7181/api/",
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userCredentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
export default authApi;

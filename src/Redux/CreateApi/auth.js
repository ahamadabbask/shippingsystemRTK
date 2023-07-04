import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({}),
});

const authSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (loginData) => {
        console.log(loginData);
        return {
          url: "/",
          method: "post",
          body: JSON.stringify({
            query: `mutation Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                  type
                  token
                  message
                }
              }`,
            variables: loginData,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authSlice;

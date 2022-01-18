import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "user",
        method: "GET",
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        // console.log('Delete ID=>', id);
        return {
          url: `user/${id}`,
          method: "DELETE",
        };
      },
    }),

    createUser: builder.mutation({
      query: (newUser) => {
        // console.log("user Creadet =>", newUser);
        return {
          url: `user`,
          method: "POST",
          body: newUser,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log("ID=>", id);
        return {
          url: `user/${id}`,
          method: "GET",
        };
      },
    }),

    updateUser: builder.mutation({
      query: (updateUserData) => {
        // console.log("Updated User => ", updateUserData);
        const {id, ...data } = updateUserData;
        // console.log("Actual Updated Post", data);
        return {
          url: `user/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation
} = usersApi;

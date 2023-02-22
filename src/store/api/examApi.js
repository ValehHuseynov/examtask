import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const examApi = createApi({
  reducerPath: "examApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({ url: "/questions" }),
    }),
    createQuestion: builder.mutation({
      query: (body) => {
        return { url: "/questions", method: "POST", body };
      },
    }),
    deleteQuestion: builder.mutation({
      query: (id) => {
        return { url: `/questions/${id}`, method: "DELETE" };
      },
    }),
  }),
});

export const {
  useCreateQuestionMutation,
  useGetQuestionsQuery,
  useDeleteQuestionMutation,
} = examApi;

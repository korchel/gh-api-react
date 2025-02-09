import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IModifiedResponse, IRepo } from "../interfaces";

export const repositoriesApi = createApi({
  reducerPath: "repositories",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.URL}/users`,
    prepareHeaders: (headers) => {
      headers.set("authorization", `token ${process.env.TOKEN}`);
    },
  }),
  endpoints: (builder) => ({
    getRepositories: builder.query<
      IModifiedResponse,
      { userName: string; page: number; per_page: number }
    >({
      query: ({ userName, page, per_page }) => ({
        url: `/${userName}/repos`,
        params: {
          page,
          per_page,
        },
      }),
      transformResponse: (response: IRepo[]): IModifiedResponse => {
        if (response.length === 0) {
          return { repos: response, end: true };
        }
        return { repos: response, end: false };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newData, { arg }) => {
        const { page } = arg;
        if (page === 1) {
          return { repos: newData.repos, end: newData.end };
        }
        return {
          repos: [...currentCache.repos, ...newData.repos],
          end: newData.end,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useLazyGetRepositoriesQuery, useGetRepositoriesQuery } =
  repositoriesApi;

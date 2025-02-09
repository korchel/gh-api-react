import { FormEventHandler, useEffect, useState } from "react";

import { useLazyGetRepositoriesQuery as getRepositories } from "../store/repositoriesApi";

export const useInfiniteScroll = () => {
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);

  const [getData, { data, error, isLoading, isFetching, isError }] =
    getRepositories();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setPage(1);
    getData({ userName: searchString, page: 1, per_page: 10 });
  };

  useEffect(() => {
    if (data?.repos.length && !data.end) {
      getData({ userName: searchString, page, per_page: 10 });
    }
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return {
    repos: data?.repos,
    error,
    isLoading,
    isFetching,
    isError,
    searchString,
    setSearchString,
    handleSubmit,
  };
};

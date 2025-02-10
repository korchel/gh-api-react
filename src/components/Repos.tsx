import { useEffect, useRef } from "react";

import { RepoCard } from "./RepoCard";
import { useInfiniteScroll } from "../hooks";
import { Container, Spinner, Message, InputField, GridContainer } from "./ui";
import { getErrorMessage } from "../utils";

export const Repos = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const {
    repos,
    error,
    isLoading,
    isFetching,
    isError,
    searchString,
    setSearchString,
    handleSubmit,
  } = useInfiniteScroll();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <div className="sticky top-0 shadow-md bg-white z-20">
        <Container className="h-20 flex items-center justify-center ">
          <form onSubmit={handleSubmit}>
            <InputField
              ref={ref}
              value={searchString}
              placeholder="Enter user's name"
              onChange={(e) => setSearchString(e.target.value)}
            />
          </form>
        </Container>
      </div>
      <Container>
        {repos?.length === 0 && (
          <Message text="This user does not have repositories" />
        )}
        {isError && error && <Message text={getErrorMessage(error)} />}
        {repos && repos.length !== 0 && (
          <GridContainer className="my-5">
            {repos?.map((repo) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                repositoryLink={repo.html_url}
                stars={repo.stargazers_count}
                lastUpdate={new Date(repo.updated_at)}
                author={repo.owner.login}
              />
            ))}
          </GridContainer>
        )}
        {(isFetching || isLoading) && (
          <div className="grid place-items-center fixed inset-0 z-10">
            <Spinner />
          </div>
        )}
      </Container>
    </div>
  );
};

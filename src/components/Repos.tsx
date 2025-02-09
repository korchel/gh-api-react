import { useEffect, useRef } from "react";

import { Card } from "./Card";
import { useInfiniteScroll } from "../hooks";
import { Container, Spinner, Message, InputField } from "./ui";
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
          <div className="grid grid-cols-3 justify-between my-5">
            {repos?.map((repo) => (
              <Card
                key={repo.id}
                name={repo.name}
                description={repo.description}
                repositoryLink={repo.html_url}
                stars={repo.stargazers_count}
                lastUpdate={new Date(repo.updated_at)}
                author={repo.owner.login}
              />
            ))}
          </div>
        )}
        {(isFetching || isLoading) && (
          <div className="grid place-items-center fixed inset-0 z-10">
            <Spinner />
          </div>
        )}
        <div className="grid grid-cols-1 gap-5 justify-between my-5">
          {[...new Array(20)].map((_, i) => (
            <Card
              key={i}
              name={"nnnnhnhnhnh"}
              description={
                "ggggggggggggf fffff fffff fffffffffffffffff fffffff"
              }
              repositoryLink={"..........."}
              stars={4}
              lastUpdate={new Date("2011-01-26T19:14:43Z")}
              author={"repo.owner.login"}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

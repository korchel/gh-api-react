import { FC } from "react";
import { ButtonComponent, Card, StarIcon } from "./ui";

interface Props {
  name: string;
  description?: string;
  repositoryLink: string;
  stars: number;
  lastUpdate: Date;
  author: string;
}

export const RepoCard: FC<Props> = ({
  name,
  description = "no description",
  repositoryLink,
  stars,
  lastUpdate,
  author,
}) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <div className="flex gap-2 text-amber-600">
          <StarIcon /> {stars}
        </div>
        <div>
          <span className="font-bold">Author: </span>
          {author}
        </div>
        <div className="h-18">
          <div className="font-bold">Description: </div>
          <div className="line-clamp-2">{description || "no desciption"}</div>
        </div>
        <div>
          <span className="font-bold">Updated at: </span>
          {lastUpdate.toDateString()}
        </div>
      </Card.Body>
      <Card.Footer className="ml-auto">
        <a href={repositoryLink} target="_blank">
          <ButtonComponent variant="primary" className="font-medium">
            Go to repository's page
          </ButtonComponent>
        </a>
      </Card.Footer>
    </Card>
  );
};

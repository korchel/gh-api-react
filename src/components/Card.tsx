import { FC } from "react";
import { ButtonComponent, StarIcon } from "./ui";

interface Props {
  name: string;
  description?: string;
  repositoryLink: string;
  stars: number;
  lastUpdate: Date;
  author: string;
}

export const Card: FC<Props> = ({
  name,
  description = "no description",
  repositoryLink,
  stars,
  lastUpdate,
  author,
}) => {
  return (
    <div className="shadow-md hover:shadow-lg p-3 rounded-lg flex flex-col gap-2 bg-teal-50">
      <h2 className="font-bold text-center text-teal-800">{name} </h2>
      <div className="flex gap-2 text-amber-600">
        <StarIcon /> {stars}
      </div>
      <div>
        <span className="font-bold">Author:</span> {author}
      </div>
      <div className="font-bold">Description: </div>
      <div>{description}</div>

      <div>
        <span className="font-bold">Updated at:</span>{" "}
        {lastUpdate.toDateString()}
      </div>
      <a href={repositoryLink} className="block ml-auto">
        <ButtonComponent variant="primary" className="font-medium">
          Go to repository's page
        </ButtonComponent>
      </a>
    </div>
  );
};

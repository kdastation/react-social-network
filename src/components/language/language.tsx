import { FC } from "react";

interface LanguageProps {
  name: string;
}

const Language: FC<LanguageProps> = (props) => {
  const { name } = props;
  return <div>{name}</div>;
};

export { Language };

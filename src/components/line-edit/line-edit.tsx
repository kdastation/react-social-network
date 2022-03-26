import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../routes/consts-routes";
import styles from "./line-edit.module.scss";
import stylesLine from "../../styles/line.module.scss";

interface LineEditProps {
  nameEditLine: string;
  isActiveUser: boolean;
}

const LineEdit: FC<LineEditProps> = (props) => {
  const { nameEditLine, isActiveUser } = props;
  return (
    <div className={styles.wrapper}>
      <div>{nameEditLine}</div>
      <div className={stylesLine.line}></div>
      {isActiveUser && (
        <div className={styles.link_edit}>
          <Link to={RoutesNames.SETTINGS_PROFILE_PAGE}>Редактировать</Link>
        </div>
      )}
    </div>
  );
};

export { LineEdit };

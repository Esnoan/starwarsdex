import React, { FC } from "react";
import style from "./style.module.css";

interface Props {
  text: string;
}
const Chip: FC<Props> = ({ text }) => {
  return <div className={style.chip}> {text}</div>;
};

export default Chip;

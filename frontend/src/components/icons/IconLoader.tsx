import { FC } from "react";
import "src/styles/_icons.scss";

interface IProps {
  color?: string;
}
export const IconLoader: FC<IProps> = ({ color = "black" }) => {
  return (
    <div className="loader spin">
      <div className={`spin__blocker spin__blocker--${color}`} />
      <div className="spin__bottom-left" />
      <div className="spin__bottom-right" />
      <div className="spin__top-left" />
    </div>
  );
};

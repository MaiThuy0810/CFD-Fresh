import classnames from "classnames";
import "./Radio.scss";
// import Visa from "../../assets/img/Visa.png";
import Tag from "../Tags/tag";
const Radio = ({
  children,
  type,
  borderButton = "default",
  text1,
  text2,
  icon1,
  icon2,
  display = "default",
  tagname,
  color = "default",
  background = "default",
  colorLabel = "default",
  colorText1 = "default",
  colorText2 = "default",
}) => {
  return (
    <div className={classnames("Radio", `borderButton-${borderButton}`)}>
      <div className="radioInput">
        <input type={type} />
        <label className={classnames(`colorLabel-${colorLabel}`)}>
          {children}
        </label>
      </div>

      <div className="textCenter">
        <p className={classnames(`colorText1-${colorText1}`)}>{text1}</p>
        <p className={classnames(`colorText2-${colorText2}`)}>{text2}</p>
      </div>
      <div className="iconBtn">
        {icon1}
        {icon2}{" "}
        <div className="tag">
          <Tag
            background={background}
            color={color}
            display={display}
            type="small"
            tagname={tagname}
          />
        </div>
      </div>
    </div>
  );
};
export default Radio;

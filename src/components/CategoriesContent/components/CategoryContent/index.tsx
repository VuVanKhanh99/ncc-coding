import React, { CSSProperties, ReactNode } from "react";
interface ItemProps {
  title?: string;
  img?: ReactNode | string;
  content?: string;
  styles?: CSSProperties;
}

const CategoryContent = (props: ItemProps) => {
  const { title, img, content } = props;
  return (
    <div className="InlineBlock" style={props.styles}>
      <h3 className="TitleCategory">{title}</h3>
      <div className="ContentSession">
        {typeof img === "string" ? <img src={img} alt="" /> : img}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CategoryContent;

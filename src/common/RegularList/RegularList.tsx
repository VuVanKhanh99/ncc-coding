import React, { CSSProperties, ReactNode } from "react";
import "./style.css";

interface Item {
  title?: string;
  image?: ReactNode | string;
  content?: string;
}

interface Props {
  items: Item[];
  ItemComponents: React.ElementType;
  styles?: CSSProperties;
}

const RegularList = (props: Props) => {
  const { items, ItemComponents } = props;
  return (
    <div className="Flex" style={props.styles}>
      {items.map((item, i) => (
        <ItemComponents key={i} {...item} />
      ))}
    </div>
  );
};

export default RegularList;

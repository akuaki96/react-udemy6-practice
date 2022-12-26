import React from "react";

export const ColorfullMessage = (props) => {
  // propsで受けとった値を分割代入にてシンプルに
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};

import React from "react";

export function Flex(props: React.PropsWithChildren<{ dir?: "column" }>) {
  const moreClasses = props.dir === "column" ? "flex-col" : "";
  return <div className={`flex ${moreClasses}`}>{props.children}</div>;
}

export function FlexItem(props: React.PropsWithChildren<{ center?: boolean }>) {
  const moreClasses = props.center ? "flex justify-center" : "";
  return <div className={`flex-1 ${moreClasses}`}>{props.children}</div>;
}

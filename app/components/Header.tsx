import React from "react";

export function Header(props: { text: string }) {
  return <div className="text-3xl text-center p-4">{props.text}</div>;
}

import React from "react";

interface Props {
  src: string;
  size: "avatar";
  alt: string;
}
export function Image(props: Props) {
  const avatarClasses = "w-16 h-16 rounded-full";
  return (
    <img
      className={`inline object-cover ${avatarClasses}`}
      src={props.src}
      alt={props.alt}
    />
  );
}

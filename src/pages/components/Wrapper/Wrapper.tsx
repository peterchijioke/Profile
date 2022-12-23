import React, { FC, HTMLAttributes, HTMLProps } from "react";
import "./wrapper.scss";

export default function Wrapper({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return <div className={`wrapper ${className}`} {...props} />;
}

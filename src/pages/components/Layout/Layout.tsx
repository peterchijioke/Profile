import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import "./layout.scss";

export default function Layout(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="layout" {...props} />;
}

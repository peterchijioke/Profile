import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import "./layout.scss";

export default function Layout(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="layout" {...props}>
      <div className="children-wrapper">{props.children}</div>
    </div>
  );
}

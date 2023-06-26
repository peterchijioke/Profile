import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import "./layout.scss";

export default function Layout(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="layout" {...props}>
      {props.children}
      <div className="app-footer">
        &#169; {new Date().getFullYear()} c-c-peter
      </div>
    </div>
  );
}

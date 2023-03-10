import { forwardRef } from "react";

const topDiv = {
  position: "absolute",
  top: "0%",
  clipPath: "polygon(0 0, 100% 0%, 100% 80%, 0 20%)",
  background: "rgb(0, 110, 184)",
  width: "100%",
  height: "100%",
  zIndex: "-1",
};
const botDiv = {
  position: "absolute",
  bottom: "0%",
  clipPath: "polygon(0 20%, 100% 80%, 100% 100%, 0 100%)",
  background: "rgb(71, 149, 209)",
  width: "100%",
  height: "100%",
  zIndex: "-1",
};

function ActionAreaCard({ children, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        width: "300px",
        height: "400px",
        position: "relative",
        // boxShadow: "0px 0px 10px 2px gray",
      }}
    >
      <div style={topDiv}></div>
      <div style={botDiv}></div>
      {children}
    </div>
  );
}

export default forwardRef(ActionAreaCard);

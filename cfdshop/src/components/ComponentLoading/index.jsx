import { Spin } from "antd";

const ComponentLoading = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffff",
        opacity: "0.5",
      }}
    >
      <Spin />;
    </div>
  );
};

export default ComponentLoading;

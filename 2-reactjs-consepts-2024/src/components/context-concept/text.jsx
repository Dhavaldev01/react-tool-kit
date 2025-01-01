import { useContext } from "react";
import { GloabalContext } from "../../context";

function ContextTextCoponent() {
  const { theme } = useContext(GloabalContext);

  return (
    <h3
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Dhaval Patel
    </h3>
  );
}

export default ContextTextCoponent;

import { css } from "emotion";

export default css({
    backgroundColor: "rgba(9,30,66,.04)",
    transition: ".3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    height: 80,
    ":hover": {
        backgroundColor: "rgba(9,30,66,.08)",
    },
});

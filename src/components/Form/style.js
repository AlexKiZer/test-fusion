import { css } from "emotion";

export default css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&__input": {
        backgroundColor: "rgba(9,30,66,.04)",
        boxSizing: "border-box",
        display: "block",
        height: 35,
        width: "100%",
        padding: "0 10px",
    },
    "&__btn": {
        cursor: "pointer",
        transition: "background-color .3s ease,color .35s",
        boxSizing: "border-box",
        textAlign: "center",
        padding: "10px 25px",
        marginTop: 15,
        ":hover": {
            backgroundColor: "#000",
            color: "#fff",
        },
    },
});

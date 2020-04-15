import { css } from "emotion";

export default css({
    "&__overlay,&__popup": {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
    },
    "&__overlay": {
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    "&__popup": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
    },
    "&__content": {
        position: "relative",
        pointerEvents: "auto",
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: 500,
        padding: "30px 30px",
    },
    "&__cross": {
        position: "absolute",
        right: 10,
        top: 10,
    },
});

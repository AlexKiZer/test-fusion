import { css } from "emotion";

export default css({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "&__item": {
        position: "relative",
        display: "block",
        width: "calc(100% / 4 - 60px / 4 - 0.1px)",
        height: 80,
        marginRight: 20,
        marginBottom: 20,
        ":nth-of-type(4n+4)": {
            marginRight: 0,
        },
        "&_board": {
            backgroundColor: "rgba(0,0,0,.2)",
        },
    },
    "&__board-link": {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "10px 15px",
    },
    "&__cross": {
        position: "absolute",
        right: 0,
        top: 0,
    },
});

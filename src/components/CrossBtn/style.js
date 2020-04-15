import { css } from "emotion";

export default css({
    position: "relative",
    cursor: "pointer",
    height: 15,
    width: 15,
    ":after,:before": {
        content: "''",
        position: "absolute",
        top: "50%",
        display: "block",
        transition: "opacity .3s ease",
        backgroundColor: "#000",
        width: "100%",
        height: 2,
    },
    ":after": {
        left: -0.5,
        transform: "rotate(45deg) translateY(-50%)",
    },
    ":before": {
        right: -0.5,
        transform: "rotate(-45deg) translateY(-50%)",
    },
    ":hover": {
        ":before,:after": {
            opacity: ".4",
        },
    },
});

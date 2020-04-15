import { css } from "emotion";

export default css({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "&__item": {
        width: "calc(100% / 4 - 60px / 4 - 0.1px)",
        marginRight: 20,
        ":nth-of-type(-n+4)": {
            marginRight: 0,
        },
    },
});

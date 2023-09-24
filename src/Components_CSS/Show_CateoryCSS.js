import { makeStyles } from "@mui/styles";

export const Show_Category_Styles = makeStyles({

    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#dfe6e9",
        padding: 20,
        height: "100%",
        width: "100%"


    },

    boxtable: {
        padding: 25,
        borderRadius: 10,
        margin: 10,
        background: "#fff",
        width: "100%"

    },
    cart_paper: {
        padding: '7%',
        width: '12vw',
        height: 'auto'
    },
    cart_img_div: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2%',
        height: '18vh'
    },
    cart_p_div: {
        lineHeight: 1,
        fontWeight: 'bold',
        height: '5.9vh',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: '-webkit-flex',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
    },
    cart_price_button_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%'
    },
    cart_button: {
        color: 'red',
        borderColor: 'red'
    },
    cart_image: {
        width: '105px',
        height: '105px'
    },
    // for grid
    grid_01: {
        marginTop: '1%',
        height: '80vh',
        scrollbarWidth: 'none'
    },
    grid_02: {
        paddingLeft: '4%',
        marginTop: '1%',
        height: '80vh'
    },

    grid_03: {
        height: '80vh',
        display: 'flex',
        flexWrap: 'wrap'
    },
    //  for scrollbars
    scrollbar_02: {
        display: 'flex',
        flexWrap: 'wrap'
    },
});
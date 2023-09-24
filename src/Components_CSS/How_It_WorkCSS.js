import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '85%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    headingStyle: {
        fontWeight: 900,
        fontSize: 20,
        paddingTop: 11,
        fontFamily: 'Poppins',
        letterSpacing: 1

    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    divCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    padding: {
        padding: '2%',
        height: '26vh',
        width: '23vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    heading02: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: "bolder",
        marginTop:'2%'
    },
    p:{
        color:'grey',
        display: 'flex',
        justifyContent: 'center',
        marginTop:'3%'
    },
    p02:{
        color:'grey',
        display: 'flex',
        justifyContent: 'center',
       
    }
})
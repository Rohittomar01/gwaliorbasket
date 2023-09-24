import { AppBar, Button, Grid, ListItem, Paper, List, ListItemText, Dialog, DialogActions, FormControlLabel, Switch, DialogTitle, TextField } from '@mui/material';
import { useStyles } from '../../../Components_CSS/How_It_WorkCSS'





export default function How_It_Work() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.mainContainer}>
                <div className={classes.divCenter}><h3 className={classes.headingStyle}>How it Works</h3></div>
                <div className={classes.box}>
                    <Paper elevation={4} className={classes.padding}>
                        <div className={classes.divCenter}>
                            <img src="./place_order.svg" ></img>
                        </div>
                        <div className={classes.heading02}>Place an order</div>
                        <div className={classes.p}>Choose from a wide range of</div>
                        <div className={classes.p02}>daily essentials</div>
                    </Paper>
                    <Paper elevation={4} className={classes.padding}>
                        <div className={classes.divCenter}>
                            <img src="./do-not-blink.svg" ></img>
                        </div>
                        <div className={classes.heading02}>Don't Blink</div>
                        <div className={classes.p}>Our delivery partner will be at your</div>
                        <div className={classes.p02}>door</div>
                    </Paper>
                    <Paper elevation={4} className={classes.padding}>
                        <div className={classes.divCenter}>
                            <img src="./enjoy.svg" ></img>
                        </div>
                        <div className={classes.heading02}>Enjoy</div>
                        <div className={classes.p}>Boom! You'll never have to wait for</div>
                        <div className={classes.p02}>groceries again</div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}



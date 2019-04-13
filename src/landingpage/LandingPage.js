import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import yellow from '@material-ui/core/colors/yellow';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
        margin: theme.spacing.unit,
      },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cssRoot: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
          backgroundColor: yellow[700],
        },
      }
  });

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}
                        style={{
                            textAlign: "center"
                        }}>
                        <h1
                        style={{
                            textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000, 5px 5px rgb(255, 255, 0.25), -5px -5px rgb(255, 255, 0.25), -5px 5px rgb(255, 255, 0.25), 5px -5px rgb(255, 255, 0.25)",
                            color: "white",
                            fontSize: "48pt",
                            padding: "30px",
                            fontStyle: "bold"}}>
                            S P A R K
                        </h1>
                        <br/>
                        <br/>
                        <p
                            className="landing-page-subheader"
                            style={{
                                fontSize: "36px",
                                color: "white"
                            }}>Spark up a conversation.</p>
                        <br/>
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classNames(classes.margin, classes.cssRoot)}>
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(LandingPage);
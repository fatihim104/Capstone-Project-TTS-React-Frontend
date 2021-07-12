import React from "react";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {blueGrey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  }
});

const AssignButton = ({handleCreateListSubmit}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={ handleCreateListSubmit} variant="contained" color="primary" className={classes.margin}>
        ASSIGN
      </Button>
    </ThemeProvider>
  );
}

export default AssignButton;

import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PackageIndicator = ({packageDetected}) => {
  const classes = useStyles();

  const alert =  packageDetected ? <Alert severity="success">Package Detected right now!</Alert> :
  				 <Alert severity="error">Package not detected!</Alert> 
  return (
    <div className={classes.root}>
      {alert}
    </div>
  );
}

export default PackageIndicator;
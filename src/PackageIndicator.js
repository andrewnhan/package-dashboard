import React, {useState, useEffect} from 'react';
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

const PackageIndicator = ({packageNotifications}) => {
  const classes = useStyles();

  const [acked, setAcked] = useState(false)
  useEffect (() => {
	setAcked(packageNotifications.filter(notification => notification.ack === false).length === 0)
  }, [packageNotifications]);
  const alert =  acked ?  <Alert severity="error">Package not detected!</Alert> : <Alert severity="success">Package Detected right now!</Alert> 
  				
  return (
    <div className={classes.root}>
      {alert}
    </div>
  );
}

export default PackageIndicator;
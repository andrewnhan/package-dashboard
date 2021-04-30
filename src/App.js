import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';


import PackageTable from './PackageTable'
import PackageIndicator from './PackageIndicator'

const section = {
  height: "100%",
  paddingTop: 5,
};

function App() {
  return (
    <Grid container direction="row" spacing={3} alignItems="center" justify="center">
		<Grid item xs={8}>
			<PackageTable style={section}/>
		</Grid>
		<Grid item xs={4} alignItems="center" justify="center">
			<PackageIndicator packageDetected={true} />
		</Grid>
    </Grid>
  );
}

export default App;

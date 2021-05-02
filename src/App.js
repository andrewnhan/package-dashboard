import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import {fromUnixTime, format} from 'date-fns'


import PackageTable from './PackageTable'
import PackageIndicator from './PackageIndicator'

const section = {
  height: "100%",
  paddingTop: 5,
};

function createData(packageDetected, time, videoURL, id, ack) {
  const date = fromUnixTime(time)
  const timeString = format(date, 'HH:mm:ss MM/dd/yyyy')
  return { packageDetected, timeString, videoURL, time, id, ack };
}

function App() {
  const [packageNotifications, setPackageNotifications] = useState([])

  const setRowAck = async (rowID) => {
	let foundNotification = packageNotifications.find(notification => notification.id === rowID)
	let newArray = packageNotifications.filter(notification => notification.id !== rowID)
	foundNotification.ack = true
	newArray.push(foundNotification)
	setPackageNotifications(newArray)
	await fetch('https://getpackageblobs.azurewebsites.net/api/PostPackageAck', { method: 'POST', mode: 'cors', body: JSON.stringify({ id: rowID })})
  }

  useEffect (() => {
	async function getPackages() {
		let response = await fetch('https://getpackageblobs.azurewebsites.net/api/grabpackagefromdb', {mode: 'cors'})
		response = await response.json()
		let unsorted = [];
		response.forEach(notification => {
			unsorted.push(createData("Detected!", notification?.upload_date, notification?.url, notification["_id"]["$oid"], notification.ack))
		})

		let sorted = unsorted.sort((a, b) => (a.time < b.time) ? 1 : -1)
		setPackageNotifications(sorted)
	}
	getPackages()

	setInterval(() => { getPackages() }, 5000)
  }, []);

  return (
    <Grid container direction="row" spacing={3} alignItems="center" justify="center">
		<Grid item xs={8}>
			<PackageTable packageNotifications={packageNotifications} style={section} setRowAck={setRowAck} />
		</Grid>
		<Grid item xs={4}>
			<PackageIndicator packageNotifications={packageNotifications}/>
		</Grid>
    </Grid>
  );
}

export default App;

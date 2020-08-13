import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: '50px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: 'purple',
    textTransform: 'uppercase',
  },
}));

export default function InfoPanel({ currentScreen }) {
  const [globalData, setGlobalData] = useState({});
  console.log(currentScreen);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://api.thevirustracker.com/free-api?global=stats'
      );
      let data = await response.json();
      console.log(data.results[0]);
      delete data.results[0].source;
      setGlobalData(data.results[0]);
      console.log(data.results[0]);
    }
    getData();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((val, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <Paper className={classes.paper} elevation={3}>
                <h3 className={classes.title}>{val.replace(/_/g, ' ')}</h3>
                <h3>{globalData[val]}</h3>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
// Object.keys(temp1) try this in google developer
// temp1.total_active-cases  try this in google developer
// temp1["total_active_cases"]

// return (
//   <div className={classes.root}>
//     <Grid container spacing={3}>
//       {Object.keys(globalData).forEach((val) => {
//         return (
//           <Grid item xs={12} sm={4}>
//             <Paper className={classes.paper} elevation={3}>
//               Grid
//             </Paper>
//           </Grid>
//         );
//       })}
//     </Grid>
//   </div>
// );
// }

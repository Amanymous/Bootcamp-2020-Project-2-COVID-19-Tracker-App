import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'loading';
  }
  console.log(confirmed);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate)}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number Of Active Cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varaint="h5" gutterBottom>
              Real Data
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Real Date
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number Of recoveries from Active Cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography varaint="h5" gutterBottom>
              Real Data
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Real Date
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number Of death from Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;

import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Developer from './DeveloperItem';
import useStyles from './styles';

const Developers = ({ setCurrentId }) => {
  const developers = useSelector((state) => state.developers);
  const classes = useStyles();


  
  return (
    !developers.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {developers.map((developer) => (
          <Grid key={developer._id} item xs={12} sm={6} md={6}>
            <Developer developer={developer} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Developers;


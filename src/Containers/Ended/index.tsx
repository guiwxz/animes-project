import React from 'react';
import { Grid } from '../../Components/Grid';
import PageHeader from '../../Components/PageHeader';

const Ended: React.FC = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader
          onClick={() => {}}
          title="Animes ended"
        />
      </Grid>
    </Grid>
  );
}

export default Ended;
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"


function TimerField() {

  return (
    <Grid
      container
      direction="row"
    >
      {/* days  */}
      <Grid 
        item 
        container
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">00</Typography>
        <Typography>days</Typography>
      </Grid>
    
      {/* hours */}
      <Grid 
        item 
        container 
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">00</Typography>
        <Typography>hrs</Typography>
      </Grid>
    
      {/* minutes */}
      <Grid 
        item 
        container 
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">00</Typography>
        <Typography>min</Typography>
      </Grid>
    
      {/* seconds */}
      <Grid 
        item 
        container 
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">00</Typography>
        <Typography>sec</Typography>
      </Grid>
    </Grid>
  )    
}

export default TimerField
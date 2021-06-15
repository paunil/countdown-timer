import React from "react"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"


function TitleInput() {

  return (
    <Grid 
      container 
      direction="row" 
      alignItems="center"
    >
      <Grid item xs={4}>      
        <Typography align="center">Title:</Typography>
      </Grid>

      <Grid item xs={8}>      
        <TextField
          variant="standard" 
          size="small"
        />
      </Grid>
    </Grid>
  )
}

export default TitleInput
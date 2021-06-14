import React from "react"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"


function TitleInput() {

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
      alignItems="center"
    >
      <Typography>Title:</Typography>
      <TextField 
        variant="standard" 
        size="small"
      />
    </Grid>
  )
}

export default TitleInput
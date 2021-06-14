import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"


function SaveButton() {

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
    >
      <Button align="center" variant="contained" >
        Save
      </Button>
    </Grid>
  )
}

export default SaveButton

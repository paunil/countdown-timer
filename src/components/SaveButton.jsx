import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"


function SaveButton(props) {

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
    >
      <Button 
        align="center" 
        variant="contained" 
        color="primary"
        style={{color:"#000"}}
        onClick={props.saveButtonCallback}
      >
        Save
      </Button>
    </Grid>
  )
}

export default SaveButton

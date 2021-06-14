import React from "react"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"


function TitleInput() {
  
  return (
    <React.Fragment>
      <Typography>Title:</Typography>
      <TextField 
        variant="standard" 
        size="small"
      />
    </React.Fragment>
  )
}

export default TitleInput
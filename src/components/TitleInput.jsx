import React from "react"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"


function TitleInput(props) {

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : event.target.value
    props.setTitleInput(newValue)
  }

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
      alignItems="center"
    >
      
      <Grid item xs={4}>      
        <Typography>Title:</Typography>
      </Grid>

      <Grid item xs={8}>      
        <TextField
          variant="standard" 
          onChange={handleInputChange}
          fullWidth={true}
        />
      </Grid>
    </Grid>
  )
}

export default TitleInput
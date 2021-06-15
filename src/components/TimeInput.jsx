import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers"
import Grid from "@material-ui/core/Grid"


function TimeInput() {
  
  return (
    <Grid 
      container 
      direction="row" 
      alignItems="center"
    >
      <Grid item xs={4}>
        <Typography align="center" >Time:</Typography>
      </Grid>

      <Grid item xs={8}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            margin="normal"
            keyboardIcon={<AccessTimeIcon />}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>  
  )
}

export default TimeInput 
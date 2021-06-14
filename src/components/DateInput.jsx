import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import Grid from "@material-ui/core/Grid"


function DateInput() {

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
      alignItems="center"
    >
      <Typography>Date:</Typography>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />  
      </MuiPickersUtilsProvider>
    </Grid>  
  )
}

export default DateInput
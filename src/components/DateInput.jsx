import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"


function DateInput() {

  return (
    <React.Fragment>
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
    </React.Fragment>  
  )
}

export default DateInput
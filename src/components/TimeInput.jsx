import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers"


function TimeInput() {
  
  return (
    <React.Fragment>
      <Typography>Time:</Typography>

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
    </React.Fragment>  
  )
}

export default TimeInput 
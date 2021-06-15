import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import Grid from "@material-ui/core/Grid"


function DateInput(props) {

  const handleDateChange = (date) => {
    props.setSelectedDate(date)
  }

  return (
    <Grid 
      container 
      direction="row" 
      alignItems="center"
    >
      <Grid item xs={4}>
        <Typography align="center">Date:</Typography>
      </Grid>

      <Grid item xs={8}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            value={props.selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />  
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>  
  )
}

export default DateInput
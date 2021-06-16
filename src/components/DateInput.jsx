import React from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"


function DateInput(props) {

  const handleDateChange = (date) => {
    props.setSelectedDate(date)
  }

  return (
    <Grid 
      container 
      direction="row" 
      justify="center"
      alignItems="center"
    >
      <Hidden mdUp>
        <Grid item xs={4}>
          <Typography>Date:</Typography>
        </Grid>
      </Hidden>

      <Grid item xs={8} md={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="none"
            value={props.selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            fullWidth={true}
          />  
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>  
  )
}

export default DateInput
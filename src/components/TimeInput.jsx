import { React } from "react"
import Typography from "@material-ui/core/Typography"
import DateFnsUtils from "@date-io/date-fns"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"


function TimeInput(props) {

  const handleTimeChange = (time) => {
    props.setSelectedTime(time)
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
          <Typography>Time:</Typography>
        </Grid>
      </Hidden>

      <Grid item xs={8} md={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            disableToolbar
            ampm={false}
            variant="inline"
            margin="none"
            value={props.selectedTime}
            onChange={handleTimeChange}
            keyboardIcon={<AccessTimeIcon />}
            fullWidth={true}
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
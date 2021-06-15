import { React, useState, useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"


function TimerField(props) {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = props.selectedDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setDays(() => days)
      setHours(() => hours)
      setMinutes(() => minutes)
      setSeconds(() => seconds)

    }, 1000)
    return () => clearInterval(interval)
  }, [props.selectedDate])


  return (
    <Grid
      container
      direction="row"
    >
      {/* days  */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">{days}</Typography>
        <Typography>days</Typography>
      </Grid>

      {/* hours */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">{hours}</Typography>
        <Typography>hrs</Typography>
      </Grid>

      {/* minutes */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">{minutes}</Typography>
        <Typography>min</Typography>
      </Grid>

      {/* seconds */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xs={3}
      >
        <Typography variant="h2">{seconds}</Typography>
        <Typography>sec</Typography>
      </Grid>
    </Grid>
  )
}

export default TimerField
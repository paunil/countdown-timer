import { React, useState, useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"


function TimerField(props) {
  
  
  const calculateDistanceParts = (distance) => {
    if (distance > 0) {
      // time calculations for days, hours, minutes and seconds
      return [
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((distance % (1000 * 60)) / 1000)
      ]
    } else {
      return ["00", "00", "00", "00"]
    }
  }

  const initialDistance = props.selectedDate.getTime() - new Date().getTime()
  const distanceParts = calculateDistanceParts(initialDistance)

  const [days, setDays] = useState(distanceParts[0])
  const [hours, setHours] = useState(distanceParts[1])
  const [minutes, setMinutes] = useState(distanceParts[2])
  const [seconds, setSeconds] = useState(distanceParts[3])

  useEffect(() => {
    const interval = setInterval(() => {
      
      // get today's date and time
      const now = new Date().getTime()
      
      // get count down's date and time
      const then = props.selectedDate.getTime()

      if (then > now) {
        // find the distance between now and count down date 
        const distance = then - now
        const [days, hours, minutes, seconds] = calculateDistanceParts(distance)
  
        setDays(() => days)
        setHours(() => hours)
        setMinutes(() => minutes)
        setSeconds(() => seconds)
      }
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
        <Typography variant="h2" color="primary">{days}</Typography>
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
        <Typography variant="h2" color="primary">{hours}</Typography>
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
        <Typography variant="h2" color="primary">{minutes}</Typography>
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
        <Typography variant="h2" color="primary">{seconds}</Typography>
        <Typography>sec</Typography>
      </Grid>
    </Grid>
  )
}

export default TimerField
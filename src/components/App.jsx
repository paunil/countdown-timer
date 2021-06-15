// libraries
import { React, useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"

// local files
import Header from "./Header.jsx"
import TimerField from "./TimerField.jsx"
import TitleInput from "./TitleInput.jsx"
import DateInput from "./DateInput.jsx"
import TimeInput from "./TimeInput.jsx"
import SaveButton from "./SaveButton.jsx"


// button color
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
  }
})

// makes header font size responsive
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 4,
  variants: ["h2"]
})


function App() {

  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={10}
      >
        {/* normalize css */}
        <CssBaseline />
        
        {/* Header */}
        <Grid item container justify="center" xs={12}>
          <Header />
        </Grid>

        {/* TimerField */}
        <Grid item xs={10} sm={8} md={6}>
          <TimerField 
            selectedDate={selectedDate}
          />
        </Grid>

        {/* Custom settings & save */}
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          spacing={4}
          xs={12}
          md={8}
          // md={10}
        >    
          {/* TitleInput */}
          <Grid item xs={10} sm={8} md>
            <TitleInput />
          </Grid>

          {/* DateInput */}
          <Grid item xs={10} sm={8} md>
            <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
          </Grid>

          {/* TimeInput */}
          <Grid item xs={10} sm={8} md>          
            <TimeInput selectedTime={selectedDate} setSelectedTime={setSelectedDate}/>
          </Grid>

          {/* SaveButton */}
          <Grid item xs={10} sm={8} md={2}>  
            <SaveButton />
          </Grid>
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default App
// libraries
import { React, useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"

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

  
  // query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get('title')
  const date = urlParams.get('date')
  const savedDate = title !== null && date !== null
  
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [titleInput, setTitleInput] = useState()

  const saveButtonCallback = () => {
    console.log(titleInput);
    console.log(selectedDate);
    const url = new URL(window.location.href)
    url.searchParams.set('title', titleInput)
    url.searchParams.set('date', selectedDate.getTime())
    window.location.assign(url.search)
  }


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
          <Header title={ savedDate ? title : "Countdown Timer" }/>
        </Grid>

        {/* TimerField */}
        <Grid item xs={10} sm={8} md={6}>
          <TimerField 
            selectedDate={savedDate ? new Date(Number(date)) : new Date()}
          />
        </Grid>

        {/* Custom settings & save */}
        <Hidden xsUp={savedDate}>
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
              <TitleInput setTitleInput={setTitleInput} />
            </Grid>

            {/* DateInput */}
            <Grid item xs={10} sm={8} md>
              <DateInput 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}/>
            </Grid>

            {/* TimeInput */}
            <Grid item xs={10} sm={8} md>          
              <TimeInput 
                selectedTime={selectedDate} 
                setSelectedTime={setSelectedDate}/>
            </Grid>

            {/* SaveButton */}
            <Grid item xs={10} sm={8} md={2}>  
              <SaveButton saveButtonCallback={saveButtonCallback} />
            </Grid>
          </Grid>
        </Hidden>

      </Grid>
    </ThemeProvider>
  )
}

export default App
// libraries
import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"

// local files
import Header from "./Header.jsx"
import TimerField from "./TimerField.jsx"
import TitleInput from "./TitleInput.jsx"
import DateInput from "./DateInput.jsx"
import TimeInput from "./TimeInput.jsx"
import SaveButton from "./SaveButton.jsx"


function App() {

  return (
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
        <TimerField />
      </Grid>

      {/* Custom settings & save */}
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        xs={12}
        md={10}
        spacing={2}
      >    
        {/* TitleInput */}
        <Grid item container xs={12} md={3}>
          <TitleInput />
        </Grid>

        {/* DateInput */}
        <Grid item container xs={12} md={3}>
          <DateInput />
        </Grid>

        {/* TimeInput */}
        <Grid item container xs={12} md={3}>          
          <TimeInput />
        </Grid>

        {/* SaveButton */}
        <Grid item container xs={12} md={3}>  
          <SaveButton />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default App
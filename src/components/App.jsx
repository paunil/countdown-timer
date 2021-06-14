// libraries
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// local files
import Header from "./Header.jsx"
import TimerField from "./TimerField.jsx"
import TitleInput from "./TitleInput.jsx"
import DateInput from "./DateInput.jsx"
import TimeInput from "./TimeInput.jsx"
import SaveButton from "./SaveButton.jsx"


function App() {
  
  return (
    <React.Fragment>

      {/* normalize css */}
      <CssBaseline />
      
      <Header />
      <TimerField />
      <TitleInput />
      <DateInput />
      <TimeInput />
      <SaveButton />

    </React.Fragment>
  )
}

export default App
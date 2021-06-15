import React from "react"
import Typography from "@material-ui/core/Typography"


function Header(props) {

  return (
    <Typography 
      variant="h2"
      style={{marginTop: "8%"}}
    >
      {props.title}
    </Typography>
  )
}

export default Header
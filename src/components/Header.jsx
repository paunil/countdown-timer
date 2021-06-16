import React from "react"
import Typography from "@material-ui/core/Typography"


function Header(props) {

  return (
    <Typography 
      variant="h2"
      style={{margin: "8% 0% 4% 0%", color: "white"}}
    >
      {props.title}
    </Typography>
  )
}

export default Header
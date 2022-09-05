import React from "react";

import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";

const TwitterCard: React.FC = () => {
  return (
    <Card sx={{
      // height: "50vh",
      maxHeight: "45vh",
      padding: "10px 0 10px 0",
      margin: "0 5% 10% 5%"
    }}>
      <CardContent sx={{
        maxHeight: "40vh",
        overflow: "auto"
      }}>
        <a className="twitter-timeline" href="https://twitter.com/Hidde_Fokkema?ref_src=twsrc%5Etfw">
          Tweets by Hidde_Fokkema
        </a>
      </CardContent>
    </Card>
  )
}

export default TwitterCard
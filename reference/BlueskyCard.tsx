import React from "react";

import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";


declare global {
    namespace JSX {
    interface IntrinsicElements {
      'bsky-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        username?: string;
        mode?: string;
        limit?: string;
        "link-image"?: string;
        "disable-styles"?: string;
        "custom-styles"?: string;
      }
    }
  }
}

const BlueskyCard: React.FC = () => {
  return (
    <Card sx={{
      // height: "50vh",
      maxHeight: "45vh",
      padding: "10px 0 10px 0",
      margin: "0 5% 10% 5%"
    }}>
      <CardContent sx={{
        maxHeight: "40vh",
        overflow: "auto",
        padding: "0 0 0 0"
      }}>
        <bsky-embed
          username="hiddefokkema.bsky.social"
          mode="light"
          limit="5"
          link-image="true"
          disable-styles="false"
          custom-styles=".border-slate-300 {text-align: left; padding: 0.75em;}"
        >
        </bsky-embed>
      </CardContent>
    </Card>
  )
}

export default BlueskyCard
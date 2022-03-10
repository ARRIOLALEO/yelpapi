import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardContent, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from "@mui/material/ListItem"
import { typography } from '@mui/material'
export default function Business({bs}) {
  return (
    <Grid xs={4}>
        <Card sx={{maxWidth:345,m:"1rem"}}>
            <CardMedia component="img"
            height={150}
            image={bs.image_url}/>
            <CardContent>
                <Typography>
                    {bs.name}
                </Typography>
                <List>
                    {
                        bs.transactions.map((t)=>{
                            return (<ListItem  divider>{t}</ListItem>)
                        })
                    }
                    
                </List>
            </CardContent>
        </Card>
    </Grid>
  )
}

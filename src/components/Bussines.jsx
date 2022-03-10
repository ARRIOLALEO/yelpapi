import Grid from '@mui/material/Grid'
import Business from './Business'
function Busines({data}){
    return(
        <Grid container xs={{m:'2rem'}}>
            {
                data.map((bs)=>{
                    return(<Business bs={bs}/>)
                })
            }
        </Grid>
    )
}
export default Busines
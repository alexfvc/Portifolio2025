import { Button, Typography } from "@mui/material";
import type { ISkillTagProps } from "./type";


const HomeCardSkillTagComponent = ({title}: ISkillTagProps) => {
    return(
        <Button variant='contained' color='primary' sx={{borderRadius: '50px'}} >                
            <Typography 
                textAlign={'center'}
                sx={{'&::first-letter': {
                    textTransform: 'uppercase'},
                    textTransform: 'None'
                    }}>
                {title}
            </Typography>          
        </Button>
    )
}
export default HomeCardSkillTagComponent;
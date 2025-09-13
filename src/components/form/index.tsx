import { alpha, Chip, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";


const CalendarioDocenteFormComponent = () => {
        const theme = useTheme();

    return(
        <>
        <Stack    
            direction={'column'}      
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'flex-start'} 
            spacing={5}         
            sx={{
                    p:3,
                    borderRadius: '5px',
                    bgcolor: alpha('rgb(224, 224, 224)', 0.3),
                    transition: '0.6s ease-in',                    
                    '&:hover': {
                    boxShadow: 15,
                    bgcolor: alpha('rgb(224, 224, 224)', 0.1),
                },
            }}
            boxShadow={2}
        >
            <Stack direction={'row'} spacing={1}>
                <Icon 
                    icon={'line-md:filter'} 
                    fontSize="2rem" 
                    color={theme.palette.primary.main} 
                />
                <Typography variant='h5' color='text.secondary' alignItems={'center'} fontWeight="fontWeightBold" >
                    {'Filtro'}
                </Typography>              
            </Stack>
            <Stack direction={'row'} spacing={1}> 
                <Chip label="Segunda-feira" variant="outlined" />
                <Chip label="Terça-feira" variant="outlined" />
                <Chip label="Quarta-feira" variant="outlined" />
                <Chip label="Quinta-feira" variant="outlined" />
                <Chip label="Sexta-feira" variant="outlined" />
                <Chip label="Sábado" variant="outlined" />
            </Stack>
        </Stack>
        
        
        </>
    );
}
export default CalendarioDocenteFormComponent;
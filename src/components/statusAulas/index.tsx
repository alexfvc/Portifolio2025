import { alpha, Box, Stack, Typography, useTheme } from "@mui/material";
import type { IStatusAulaProps } from "../types/I-Status-Aula";
import { Icon } from "@iconify/react";

const CalendarioDocenteStatusAula = ({iconPrimary, iconBg, title,subtitle}:IStatusAulaProps) => {
    const theme = useTheme();
    return(
        <>
        <Stack    
            direction={'column'}      
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            spacing={1}               
            sx={{
                    p:3,
                    borderRadius: '5px',
                    bgcolor: alpha('rgb(224, 224, 224)', 0.3),
                    transition: '0.6s ease-in',
                    minHeight: '100px',
                    minWidth: '160px',
                    
                    '&:hover': {
                    boxShadow: 15,
                    bgcolor: alpha('rgb(224, 224, 224)', 0.1),
                },
            }}
            boxShadow={2}
        >
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box    
                    display="flex"
                    justifyContent="center"
                    alignItems="center" 
                    borderRadius={'50%'} 
                    p={1.5}
                    bgcolor={iconBg ? alpha(theme.palette.primary.light,0.5):'transparent' } 
                    >  
                    <Icon 
                        icon={iconPrimary} 
                        fontSize="2rem" 
                        color={theme.palette.primary.main} 
                    />
                </Box>
                <Typography variant='h5' color='text.secondary' alignItems={'center'} fontWeight="fontWeightBold" >
                    {title}
                </Typography>
            </Stack>
            <Typography variant='h5' color='text.secondary' alignItems={'center'} >
                {subtitle}
            </Typography>
        </Stack>
        </>
    );
}
export default CalendarioDocenteStatusAula;
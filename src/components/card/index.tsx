import {Box, Stack, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react"
import { alpha,  useTheme } from '@mui/system';
import type { ICardProps } from "../types/i-Card";
import React from "react";



const HomeCardComponent = ({iconPrimary, iconBg, title,subtitle,subtitle2, children, mh = 0, mw = 0}:ICardProps)  =>{
    const theme = useTheme();

    return(
        <>
            <Stack 
                display={'flex'} 
                justifyContent={'center'} 
                alignItems={'center'} 
                spacing={1}
                maxWidth={300}                
                sx={{
                        p:3,
                        borderRadius: '5px',
                        bgcolor: alpha('rgb(224, 224, 224)', 0.3),
                        transition: '0.6s ease-in',
                        minHeight: '160px',
                        minWidth: '160px',
                        
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor: alpha('rgb(224, 224, 224)', 0.1),
                    },
                }}
                boxShadow={2}
            >
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
                <Box display={'flex'} minHeight={mh} minWidth={mw} justifyContent="center" alignItems="center"  >
                    <Stack  
                        direction={'column'} 
                        display="flex" 
                        justifyContent="center"
                        alignItems="center" 
                        spacing={1}>
                        <Typography fontWeight={'bold'} fontSize={'h6'}>{title}</Typography>
                        <Typography>{subtitle}</Typography>
                        <Typography>{subtitle2}</Typography>
                        <Grid container spacing={0.5} justifyContent={'center'}>
                            {React.Children.map(children, (child, index) => (
                                <Grid key={index}>
                                {child}
                                </Grid>
                            ))}
                        </Grid>                        
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default HomeCardComponent;
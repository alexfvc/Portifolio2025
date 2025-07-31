import { alpha, Avatar, Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react"
import usePrimaryColors from "../../theme/colors";
import type { IBlockProps } from "../types/I-block";

const HomeBlockComponent = ({iconTitle = '',title = '', subtitle='' ,iconA ='' ,iconB='' ,data='' ,local='', explanation, bgimage,childrenAvatar}:IBlockProps) => {
    const primaryColors = usePrimaryColors();
    

    
    return(
        <Box  
        boxShadow={2}
        sx={{                  
                borderRadius:'5px',
                bgcolor:alpha('rgb(224, 224, 224)',0.3),
                transition: '0.6s ease-in', 
                '&:hover': {
                boxShadow: 15,
                bgcolor:alpha('rgb(224, 224, 224)',0.1),
                
                },
            }}>
            <Stack spacing={3} >
                <Box 
                    display={{xs:'block',md:'flex'}} 
                    pb={5} 
                    justifyContent={'space-between'} 
                    alignItems={'center'}  
                    
                    sx={{
                        backgroundImage: `url(${bgimage})`,
                        backgroundSize: 'cover',        
                        backgroundRepeat: 'no-repeat',          
                        backgroundPosition: 'center',
                    }}>
                    <Stack display={'block'} justifyContent={'center'} alignItems={'center'} spacing={1} pb={2.5} pt={5} px={5}>
                        {(!bgimage ) && (
                            <Stack direction={'row'} alignItems={'center'} spacing={1} >
                                    {(iconTitle || childrenAvatar) && (
                                        <Avatar src={iconTitle} alt="avatar" >
                                            {childrenAvatar}
                                        </Avatar>
                                    )}
                                <Typography variant='h3' >{title}</Typography>

                            </Stack>
                        )}
                        <Typography variant='h6' color={primaryColors.primary.dark} >{subtitle}</Typography>
                    </Stack>
                    

                    <Stack display={'flex'} justifyContent={{xs:'flex-star',sm:'flex-end'}} alignContent={'center'} py={1} px={5} spacing={1}>
                        <Stack direction={'row'} justifyContent={{md:'flex-end'}} alignItems={'center'} spacing={2}>
                            <Icon  icon={iconA} fontSize={'35px'} color={alpha('rgba(100,100,100)',1)}/>
                            <Typography variant='h5' color='text.secondary'>{data}</Typography>
                        </Stack>
                        <Stack direction={'row'} justifyContent={{md:'flex-end'}} alignItems={'center'} spacing={2}>
                            <Icon icon={iconB} fontSize={'25px'} color={alpha('rgba(100,100,100)',1)} />
                            <Typography variant='h5' color='text.secondary'>{local}</Typography>
                        </Stack>
                    </Stack> 
                </Box>
                <Stack px={5} >
                    {(bgimage ) && (
                        <Stack display={'block'} justifyContent={'center'} alignItems={'center'} spacing={1} pb={2.5} pt={5} px={5}>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    {(iconTitle || childrenAvatar) && (
                                        <Avatar src={iconTitle} alt="avatar" >
                                            {childrenAvatar}
                                        </Avatar>
                                    )}
                                    <Typography variant='h3' >{title}</Typography>

                                </Stack>
                            
                            <Typography variant='h6' color={primaryColors.primary.dark}>{subtitle}</Typography>
                        </Stack>
                    )}
                    <Typography alignContent={'flex-start'} variant='h6' textAlign={'justify'} color='text.secondary'>
                        {explanation}                   
                    </Typography>
                </Stack>
            </Stack>

        </Box>

    )
}
export default HomeBlockComponent;
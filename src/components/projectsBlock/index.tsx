import { alpha, Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import usePrimaryColors from "../../theme/colors";
import type { iHomeProjectsBlockConponentProps } from "../types/i-projects-block";

const HomeProjectsBlockComponent = ({ 
    iconTitle, title, subtitle, iconA='', iconB='', 
    textAbout, headerImage, hasLink=false, 
    linkProj, linkGitHub} : iHomeProjectsBlockConponentProps) => {
        const primaryColors = usePrimaryColors();
        const handleClick = () => {
            window.open('/old/portfolio/index.html', '_blank')
        }

    return (

        <>
            <Box
                boxShadow={2}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                maxWidth={"100%"}
                sx={{                         
                        borderRadius:'8px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        transition: '0.6s ease-in', 
                        '&:hover': {
                            boxShadow: 15,
                            bgcolor:alpha('rgb(224, 224, 224)',0.1),  
                        },}}
                >

                <Stack 
                    minHeight={200}
                    sx={{backgroundImage: `url(${headerImage})`,
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        backgroundRepeat: 'no-repeat',
                        borderTopLeftRadius:'8px',
                        borderTopRightRadius:'8px',
                        overflow: 'hidden',
                        position: 'relative',
                       


                }}>
                <Stack width={'10px'}></Stack>
                </Stack>
                <Stack direction={'column'}justifyContent={'center'}>
                    <Stack direction={{sx:'column', sm:'row'}} justifyContent={{sx:'center', sm:'space-between'}} alignItems={{sm:'flex-start',md:'center'}} p={3}>
                        <Stack direction={'column'}  spacing={2} pb={3} px={5}>
                            <Stack direction={'row'} alignItems={'center'}  spacing={1}>
                                {(iconTitle ) && (
                                    <Avatar src={iconTitle} alt="avatar"  >
                                        <></>
                                    </Avatar>
                                )} 
                                <Typography variant='h3' alignItems={'center'}>{title}</Typography>
                            </Stack>
                            <Typography variant='h6' color={primaryColors.primary.dark} >{subtitle}</Typography>
                        </Stack>
                                                                
                        <Stack direction={'column'} justifyContent={'flex-start'} alignItems={{sm:'flex-start',md:'flex-end'}} spacing={2} px={5}>
                            <Stack direction={'row'} alignItems={{sm:'flex-start',md:'flex-end'}}spacing={1} >
                                <Icon icon={iconA} fontSize={'50px'} color={alpha('rgba(100,100,100)',.7)} />
                            </Stack>
                            <Stack direction={'row'} alignItems={{sm:'flex-start',md:'flex-end'}}spacing={1} >
                                <Icon icon={iconB} fontSize={'50px'} color={alpha('rgba(100,100,100)',.7)} />
                            </Stack>
                        </Stack>

                    </Stack>
                    <Stack px={3}>
                        <Typography variant='h5' color='text.secondary' alignItems={'center'} textAlign={'justify'} >
                            {textAbout}
                        </Typography>
                        { hasLink ? (
                        <Stack direction={'row'} spacing={3} px={3} pb={2}>
                            { linkProj &&(
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Icon icon={'majesticons:open-line'}></Icon>}
                                onClick={handleClick}
                            >Ver projeto</Button>)}
                            {linkGitHub && (
                            <Button
                                variant="contained" 
                                color="inherit"   
                                startIcon={<Icon icon={'line-md:github'}></Icon>}
                            >Ver código</Button>)}
                        </Stack> 
                        ) : 
                        <Stack px={4} pb={2}>
                        <Typography variant='h6' color='text.secondary' alignItems={'center'} textAlign={'justify'}  fontStyle={'italic'}>
                            projeto particular link indisponível
                        </Typography>
                        </Stack>}
                    </Stack>
                </Stack>
            </Box>
        </>

    )
}
export default HomeProjectsBlockComponent;
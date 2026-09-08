import { alpha, Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import usePrimaryColors from "../../theme/colors";
import type { iHomeExperiencesBlockConponentProps } from "../types/i-experiences-block";

const HomeExperiencesBlockComponent = ({title, data, iconTitle, local, subtitle, textAbout}:iHomeExperiencesBlockConponentProps) => {
    const primaryColors = usePrimaryColors();
    const theme = useTheme();
    return (
        <>
            <Box
                boxShadow={2}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                        borderRadius:'8px',
                        bgcolor: theme.palette.mode === 'light'
                          ? alpha('rgb(224, 224, 224)', 0.3)
                          : alpha('rgb(255, 255, 255)', 0.05),
                        transition: '0.6s ease-in',
                        '&:hover': {
                            boxShadow: 15,
                            bgcolor: theme.palette.mode === 'light'
                              ? alpha('rgb(224, 224, 224)', 0.1)
                              : alpha('rgb(255, 255, 255)', 0.1),
                        },}}
                >
                <Stack direction={'column'}justifyContent={'center'}>
                    <Stack direction={{sx:'column', sm:'row'}} justifyContent={{sx:'center', sm:'space-between'}} alignItems={{sm:'flex-start',md:'center'}} p={3}>
                        <Stack direction={'column'}  spacing={2} pb={3} >
                            <Stack direction={'row'} alignItems={'center'}  spacing={1}>
                                {(iconTitle ) && (
                                    <Avatar src={iconTitle} alt="avatar"  >
                                        <></>
                                    </Avatar>
                                )} 
                                <Typography variant='h3' alignItems={'center'}>{title}</Typography>
                            </Stack>
                            <Typography variant='h6' color={theme.palette.mode === 'dark' ? theme.palette.primary.light : primaryColors.primary.dark}>{subtitle}</Typography>
                        </Stack>
                                                             
                        <Stack direction={'column'} justifyContent={'flex-start'} alignItems={{sm:'flex-start',md:'flex-end'}} spacing={2}>
                            <Stack direction={'row'} alignItems={{sm:'flex-start',md:'flex-end'}} spacing={1} >
                                <Icon  icon={'stash:data-date-light'} fontSize={'35px'} color={theme.palette.text.secondary}/>
                                <Typography variant='h5' color='text.secondary' alignItems={'center'} >
                                    {data}
                                </Typography>
                            </Stack>

                            <Stack direction={'row'} alignItems={{sm:'flex-start',md:'flex-end'}}spacing={1} >
                                <Icon icon={'icon-park-outline:local'} fontSize={'25px'} color={theme.palette.text.secondary} />
                                <Typography variant='h5' color='text.secondary' alignItems={'center'} >
                                    {local}
                                </Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                    <Stack px={3}>
                        <Typography variant='h5' color='text.secondary' alignItems={'center'} textAlign={'justify'} >
                            {textAbout}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </>        
    )
}
export default HomeExperiencesBlockComponent;

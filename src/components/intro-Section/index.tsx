import { alpha, Box, Stack, Typography } from "@mui/material";
import usePrimaryColors from '../../theme/colors';
import type { IintroSectionProps } from "../types/i-intro-section";


const HomeIntroSectionComponent = ({title, subtitle, children, centerText = false }:IintroSectionProps) => {
    const primaryColors = usePrimaryColors();
    return(
    <>
        <Stack direction={'column'} alignItems={'center'} spacing={3}>
            <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}>
                {title}
            </Typography>
            <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5} />
            {subtitle && (
                <Typography variant='h6' color='text.secondary' textAlign={'justify'} p={3}>
                    {subtitle}
                </Typography>)
            }
            <Typography variant='h6' color='text.secondary'  textAlign={centerText ? 'center' : 'justify'} p={3}>
                {children}
            </Typography>
        </Stack>
    </>
)}
export default HomeIntroSectionComponent;
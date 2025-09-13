import usePrimaryColors from "../../theme/colors";

import { alpha, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import CalendarioDocenteStatusAula from "../../components/statusAulas";
import CalendarioDocenteFormComponent from "../../components/form";
import HomeComingSoonPage from "../../components/comingSoonPage";

const CalendarioDocente = () => {
    const primaryColors = usePrimaryColors();

    return(
    <>        
    <Stack direction={'column'} width={'100%'} p={0} m={0} justifyContent={"center"} alignItems={'center'} spacing={3}>
        <Stack direction={'column'} width={'100%'} spacing={1} bgcolor={alpha(primaryColors.primary.main,1)}  justifyContent={"center"} alignItems={'center'}>
            <Stack direction={'row'} width={'100%'} justifyContent={"center"} alignItems={'center'}>
                <Icon icon={'arcticons:studysmarter'} fontSize={'55px'} color={'white'} />
                <Typography variant='h3' color='white'>Sistema de Cronograma</Typography>
            </Stack>
    
            <Typography variant='h6' color='white'>Organize e gerencie suas aulas de forma prática e eficiente</Typography>
        </Stack>
        <Stack direction={{ xs: 'column', md:'row',lg:'row' }} width={'100%'} bgcolor={''} justifyContent={'space-around'}  spacing={3}>
            <CalendarioDocenteStatusAula iconPrimary={'line-md:arrow-align-left'} title="Aulas Lecionadas" iconBg={true} subtitle="18"/>
            <CalendarioDocenteStatusAula iconPrimary="fluent-mdl2:renewal-future" title="Aulas Futuras" iconBg={true} subtitle="02"/>
        </Stack>

        <CalendarioDocenteFormComponent>
            
        </CalendarioDocenteFormComponent>
    </Stack>

    {/* RODA PÉ EM CONSTRUÇÂO*/}
    <HomeComingSoonPage ativo={true}/>
    </>
    );

}
export default CalendarioDocente
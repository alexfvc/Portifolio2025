import usePrimaryColors from "../../theme/colors";

import { alpha, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import CalendarioDocenteStatusAula from "../../components/statusAulas";
import CalendarioDocenteFormComponent from "../../components/form";
import HomeComingSoonPage from "../../components/comingSoonPage";
import CalendarioDocenteTableDataResponceComponent from "../../components/tableDatasResponce";

    const CalendarioDocente = () => {


        const primaryColors = usePrimaryColors();

    return(
    <>        
    <Stack direction={'column'}  p={0} m={0} mb={5} mt={-1} justifyContent={"center"} alignItems={'center'} spacing={2}>
        <Stack 
            direction={'column'} 
            width={'100%'} 
            spacing={1} 
            bgcolor={alpha(primaryColors.primary.main,1)}  
            justifyContent={"center"} 
            alignItems={'center'}
            px={2}
            mx={2}
            >

            <Stack>
                <Stack direction={'row'} width={'100%'} justifyContent={"center"} alignItems={'center'} spacing={1}>
                    <Icon icon={'arcticons:studysmarter'} fontSize={'55px'} color={'white'} />
                    <Typography variant='h3' color='white'>Calendário Docente</Typography>
                </Stack>    
                <Typography variant='h6' color='white'>Organize e gerencie suas aulas de forma prática e eficiente</Typography>
            </Stack>

        </Stack>
        <Stack
            direction={'column'}
            width="100%"
            justifyContent="center" 
            alignItems="center" 
            spacing={2}
            px={2}
        >
        <Stack
            direction={{ xs: 'column', md:'row' }}
            width="100%"
            justifyContent="center" 
            alignItems="stretch" 
            spacing={2}
            px={2}
        >
            <CalendarioDocenteStatusAula
                iconPrimary={'line-md:arrow-align-left'}
                title="Aulas Lecionadas"
                iconBg={true}
                subtitle="18"
            />
            <CalendarioDocenteStatusAula
                iconPrimary="fluent-mdl2:renewal-future"
                title="Aulas Futuras"
                iconBg={true}
                subtitle="02"
            />
            <CalendarioDocenteFormComponent />
        </Stack>

        <CalendarioDocenteTableDataResponceComponent  />

        </Stack>
    </Stack>

    {/* RODA PÉ EM CONSTRUÇÂO*/}
    <HomeComingSoonPage ativo={true}/>
    </>
    );

}
export default CalendarioDocente
import usePrimaryColors from "../../theme/colors";
import { useColorMode } from "../../context/ColorModeContext";

import { IconButton, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import CalendarioDocenteFormComponent from "../../components/form";
import CalendarioDocenteTableDataResponceComponent from "../../components/tableDatasResponce";
import { useState } from "react";
import useDataList from "../../components/form/hooks/use-data-list";


const CalendarioDocente = () => {
    const { listAllDatas, isLoading } = useDataList();
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [selectedBimesters, setSelectedBimesters] = useState<string[]>([]);

    const primaryColors = usePrimaryColors();
    const navigate = useNavigate();
    const { mode, toggleColorMode } = useColorMode();

    return(
    <>
    <Stack direction={'column'} p={0} m={0} mb={5} mt={-1} justifyContent={"center"} alignItems={'center'} spacing={2}>

        {/* Header */}
        <Stack
            direction={'row'}
            width={'100%'}
            bgcolor={mode === 'dark' ? '#0e1627' : primaryColors.primary.main}
            justifyContent={"space-between"}
            alignItems={'center'}
            px={2}
        >
            <IconButton
                onClick={() => navigate('/')}
                aria-label="Voltar ao portfólio"
                sx={{ color: 'white' }}
            >
                <Icon icon="material-symbols:arrow-back" width={28} height={28} />
            </IconButton>

            <Stack py={2} spacing={1} alignItems={'center'}>
                <Stack direction={'row'} justifyContent={"center"} alignItems={'center'} spacing={1}>
                    <Icon icon={'arcticons:studysmarter'} fontSize={'55px'} color={'white'} />
                    <Typography variant='h3' color='white'>Calendário Docente</Typography>
                </Stack>
                <Typography variant='h6' color='white' textAlign={'center'}>
                    Organize e gerencie suas aulas de forma prática e eficiente
                </Typography>
            </Stack>

            <IconButton
                onClick={toggleColorMode}
                aria-label={mode === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                sx={{ color: 'white' }}
            >
                <Icon
                    icon={mode === 'light' ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'}
                    width={24} height={24}
                />
            </IconButton>
        </Stack>

        {/* Conteúdo */}
        <Stack
            direction={'column'}
            width="100%"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Stack
                direction={{ md: 'column', lg: 'row' }}
                alignContent={'flex-start'}
                spacing={{ xs: 2, md: 2, lg: 2 }}
                minWidth={"100%"}
            >
                <CalendarioDocenteFormComponent
                    onDaysChange={setSelectedDays}
                    onBimestersChange={setSelectedBimesters}
                />

                <CalendarioDocenteTableDataResponceComponent
                    dados={listAllDatas}
                    diasSelecionados={selectedDays}
                    bimestresSelecionados={selectedBimesters}
                    isLoading={isLoading}
                />
            </Stack>
        </Stack>
    </Stack>
    </>
    );
};

export default CalendarioDocente;

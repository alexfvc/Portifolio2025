import { Stack, Chip, Typography, alpha, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import useDataList from "./hooks/use-data-list";



const CalendarioDocenteFormComponent = () => {
  const theme = useTheme();

  const { listAllDatas } = useDataList();
  
  
  return (
    <Stack  
        flex={1}               
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={3}
        borderRadius="5px"
        bgcolor={alpha('rgb(224, 224, 224)', 0.3)}
        sx={{
            transition: '0.6s ease-in',
            '&:hover': {
            boxShadow: 15,
            bgcolor: alpha('rgb(224, 224, 224)', 0.1),
            },
        }}
        boxShadow={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Icon icon="line-md:filter" fontSize="2rem" color={theme.palette.primary.main} />
        <Typography variant="h5" fontWeight="bold">Filtro</Typography>
      </Stack>
      {listAllDatas}
      <Typography>Selecione os dias da semana trabalhados: </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>

          <Chip
            label={"dia"}
            variant="filled"
            color="primary"
            onClick={() => console.log("Dia clicado:", dia)}
          />

      </Stack>

      <Typography>Selecione o/os Bimestre trabalhados: </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        <Chip
          label={'bim'}
          variant={"filled"}
          color="primary"
          onClick={() => console.log("Bimestre clicado")}
        />
      </Stack>
    </Stack>
  );
};

export default CalendarioDocenteFormComponent;

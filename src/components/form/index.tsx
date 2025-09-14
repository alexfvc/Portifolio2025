// CalendarioDocenteFormComponent.tsx
import React from "react";
import { Stack, Chip, Typography, alpha, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

interface Props {
  filters: { days: string[]; bimesters: string[] };
  setFilters: React.Dispatch<React.SetStateAction<{ days: string[]; bimesters: string[] }>>;
}

const days = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira"];
const bimesters = ["1° Bimestre","2° Bimestre","3° Bimestre","4° Bimestre"];

const CalendarioDocenteFormComponent = ({ filters, setFilters }: Props) => {
  const theme = useTheme();

  const toggleDay = (day: string) => {
    const updated = filters.days.includes(day)
      ? filters.days.filter(d => d !== day)
      : [...filters.days, day];
    setFilters({ ...filters, days: updated });
  };

  const toggleBimester = (bim: string) => {
    let updated: string[];
    if (bim === "Todos") {
      updated = filters.bimesters.length === 4 ? [] : [...bimesters];
    } else {
      updated = filters.bimesters.includes(bim)
        ? filters.bimesters.filter(b => b !== bim)
        : [...filters.bimesters, bim];
    }
    setFilters({ ...filters, bimesters: updated });
  };

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

      <Typography>Selecione os dias da semana trabalhados:</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        {days.map(day => (
          <Chip
            key={day}
            label={day}
            variant={filters.days.includes(day) ? "filled" : "outlined"}
            color="primary"
            onClick={() => toggleDay(day)}
          />
        ))}
      </Stack>

      <Typography>Selecione o/os Bimestre trabalhados:</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        {[...bimesters, "Todos"].map(bim => (
          <Chip
            key={bim}
            label={bim}
            variant={filters.bimesters.includes(bim) || (bim === "Todos" && filters.bimesters.length===4) ? "filled" : "outlined"}
            color="primary"
            onClick={() => toggleBimester(bim)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CalendarioDocenteFormComponent;

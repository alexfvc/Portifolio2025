import { Button, Stack, Chip, Typography, alpha, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import {
  singleBimester,
  singleDays,
} from "../../constants/calendarioDocenteConstants";

interface Props {
  onDaysChange?: (selectedDays: string[]) => void;
  onBimestersChange?: (selectedBimesters: string[]) => void;
}

const CalendarioDocenteFormComponent: React.FC<Props> = ({
  onDaysChange,
  onBimestersChange,
}) => {
  const theme = useTheme();

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedBimesters, setSelectedBimesters] = useState<string[]>([]);

  function changeDaySelection(day: string) {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(newSelectedDays);
  }

  useEffect(() => {
    if (onDaysChange) onDaysChange(selectedDays);
  }, [selectedDays, onDaysChange]);

  function changeBimesterSelection(bimester: string) {
    const newSelectedBims = selectedBimesters.includes(bimester)
      ? selectedBimesters.filter((b) => b !== bimester)
      : [...selectedBimesters, bimester];
    setSelectedBimesters(newSelectedBims);
  }

  useEffect(() => {
    if (onBimestersChange) onBimestersChange(selectedBimesters);
  }, [selectedBimesters, onBimestersChange]);

  function clearFilters() {
    setSelectedDays([]);
    setSelectedBimesters([]);
  }

  const hasFilters = selectedDays.length > 0 || selectedBimesters.length > 0;

  const cardBg = theme.palette.mode === 'light'
    ? alpha('rgb(224, 224, 224)', 0.3)
    : alpha('rgb(255, 255, 255)', 0.05);
  const cardBgHover = theme.palette.mode === 'light'
    ? alpha('rgb(224, 224, 224)', 0.1)
    : alpha('rgb(255, 255, 255)', 0.1);

  return (
    <Stack
      flex={0}
      direction="column"
      justifyContent="start"
      alignItems="center"
      spacing={3}
      p={2}
      borderRadius="5px"
      bgcolor={cardBg}
      sx={{
        transition: "0.6s ease-in",
        "&:hover": {
          boxShadow: 15,
          bgcolor: cardBgHover,
        },
      }}
      boxShadow={2}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Icon
          icon="line-md:filter"
          fontSize="2rem"
          color={theme.palette.primary.main}
        />
        <Typography
          variant="h5"
          color="text.secondary"
          textAlign={"center"}
          fontWeight="fontWeightBold"
        >
          Filtro
        </Typography>
      </Stack>

      <Typography
        variant="h5"
        color="text.secondary"
        textAlign={"center"}
        fontWeight="fontWeightBold"
      >
        Dias da semana trabalhados:
      </Typography>
      <Stack
        direction={"row"}
        useFlexGap={true}
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        spacing={1}
        justifyContent={"center"}
      >
        {singleDays.map((item, index) => (
          <Chip
            key={index}
            label={item}
            variant={selectedDays.includes(item) ? "filled" : "outlined"}
            color="primary"
            onClick={() => changeDaySelection(item)}
          />
        ))}
      </Stack>

      <Typography
        variant="h5"
        color="text.secondary"
        textAlign={"center"}
        fontWeight="fontWeightBold"
      >
        Trimestre(s):
      </Typography>
      <Stack
        direction={"row"}
        useFlexGap={true}
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        spacing={1}
        justifyContent={"center"}
      >
        {singleBimester.map((item, index) => (
          <Chip
            key={index}
            label={item}
            variant={selectedBimesters.includes(item) ? "filled" : "outlined"}
            color="primary"
            onClick={() => changeBimesterSelection(item)}
          />
        ))}
      </Stack>

      <Button
        variant="outlined"
        color="inherit"
        size="small"
        disabled={!hasFilters}
        onClick={clearFilters}
        startIcon={<Icon icon="material-symbols:filter-list-off" />}
        sx={{ opacity: hasFilters ? 1 : 0.4 }}
      >
        Limpar filtros
      </Button>
    </Stack>
  );
};

export default CalendarioDocenteFormComponent;

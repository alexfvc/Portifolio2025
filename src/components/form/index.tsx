import { Stack, Chip, Typography, alpha, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";


interface Props {
  onDaysChange?: (selectedDays: string[]) => void;
  onBimestersChange?: (selectedBimesters: string[]) => void;
}



const CalendarioDocenteFormComponent: React.FC<Props> = ({
  onDaysChange,
  onBimestersChange,
})  => {
  const theme = useTheme();

  /*const { listAllDatas } = useDataList();*/
  
  
  const singleDays = [
    "segunda-feira","terça-feira",
    "quarta-feira","quinta-feira",
    "sexta-feira"];
  const singleBimester = [
    "1° bimestre","2° bimestre",
    "3° bimestre","4° bimestre"];

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedBimesters, setSelectedBimesters] = useState<string[]>([]);

  function changeDaySelection(day:string) {
    const newSelectedDays = selectedDays.includes(day)
    ? selectedDays.filter(d => d !== day) 
    : [...selectedDays, day];              

    setSelectedDays(newSelectedDays);           
    return newSelectedDays;
  };

  useEffect(() => {  
    if (onDaysChange) {
      onDaysChange(selectedDays);
    }}, [selectedDays, onDaysChange]);

  
  function changeBimesterSelection(bimester:string) {
    const newSelectedBims = selectedBimesters.includes(bimester)
    ? selectedBimesters.filter(b => b !== bimester)
    : [...selectedBimesters, bimester];
    
    setSelectedBimesters(newSelectedBims) 
    return newSelectedBims;
  };
  
  useEffect(() => {
    if (onBimestersChange) {
      onBimestersChange(selectedBimesters);
    }}, [selectedBimesters, onBimestersChange]);
  
  
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
      
        <Typography>Selecione os dias da semana trabalhados: </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          {singleDays.map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant={selectedDays.includes(item) ? "filled" : "outlined"}
              color="primary"
              onClick={() => {changeDaySelection(item)
               }}
              
            />
          ))}
        </Stack>

        <Typography>Selecione o/os Bimestre trabalhados: </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          {singleBimester.map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant={selectedBimesters.includes(item) ? "filled" : "outlined"}
              color="primary"
              onClick={() => {changeBimesterSelection(item)
               }}
            />
          ))}
        </Stack>
      
    </Stack>
  );
};

export default CalendarioDocenteFormComponent;

import {
  alpha, CircularProgress, Paper, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Typography, useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import type { DiaLetivo } from "../form/hooks/type/i-dialetivo";
import { singleBimester } from "../../constants/calendarioDocenteConstants";

interface Props {
  dados: DiaLetivo[];
  diasSelecionados: string[];
  bimestresSelecionados: string[];
  isLoading?: boolean;
}

const ordemBimestres = singleBimester;

const CalendarioDocenteTableDataResponceComponent: React.FC<Props> = ({
  dados,
  diasSelecionados,
  bimestresSelecionados,
  isLoading = false,
}) => {
  const theme = useTheme();

  const bimestresOrdenados = ordemBimestres.filter((b) =>
    bimestresSelecionados.includes(b)
  );

  const datasPorBimestre = bimestresOrdenados.reduce((acc, bim) => {
    acc[bim] = dados
      .filter((d) => d.bimestre === bim && diasSelecionados.includes(d["dia letivo"]))
      .map((d) => d.data);
    return acc;
  }, {} as Record<string, string[]>);

  const maxRows = Math.max(
    ...bimestresOrdenados.map((bim) => datasPorBimestre[bim]?.length || 0),
    0
  );

  const nothingSelected = diasSelecionados.length === 0 || bimestresSelecionados.length === 0;

  const cardBg = theme.palette.mode === 'light'
    ? alpha('rgb(224, 224, 224)', 0.3)
    : alpha('rgb(255, 255, 255)', 0.05);
  const cardBgHover = theme.palette.mode === 'light'
    ? alpha('rgb(224, 224, 224)', 0.1)
    : alpha('rgb(255, 255, 255)', 0.1);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Stack alignItems="center" justifyContent="center" py={8} spacing={2}>
          <CircularProgress color="primary" />
          <Typography color="text.secondary">Carregando dados...</Typography>
        </Stack>
      );
    }

    if (nothingSelected) {
      return (
        <Stack alignItems="center" justifyContent="center" py={8} spacing={2} px={3}>
          <Icon
            icon="material-symbols:calendar-month"
            fontSize="4rem"
            color={theme.palette.text.disabled}
          />
          <Typography variant="h6" color="text.secondary" textAlign="center">
            Selecione ao menos um dia da semana e um trimestre para visualizar as datas
          </Typography>
        </Stack>
      );
    }

    if (maxRows === 0) {
      return (
        <Stack alignItems="center" justifyContent="center" py={8} spacing={2} px={3}>
          <Icon
            icon="material-symbols:search-off"
            fontSize="4rem"
            color={theme.palette.text.disabled}
          />
          <Typography variant="h6" color="text.secondary" textAlign="center">
            Nenhuma data encontrada para os filtros selecionados
          </Typography>
        </Stack>
      );
    }

    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
          <Table aria-label="tabela de datas letivas">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{ fontSize: { xs: '0.8rem', md: '1.4rem' } }}
                    color="text.secondary"
                    fontWeight="fontWeightBold"
                  >#</Typography>
                </TableCell>
                {bimestresOrdenados.map((bim, index) => (
                  <TableCell key={index}>
                    <Typography
                      sx={{ fontSize: { xs: '0.8rem', md: '1.0rem' } }}
                      color="text.secondary"
                      fontWeight="fontWeightBold"
                    >{bim}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: maxRows }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell>
                    <Typography
                      sx={{ fontSize: { xs: '0.8rem', md: '1.0rem' } }}
                      color="text.secondary"
                      fontWeight="fontWeightBold"
                    >{rowIndex + 1}</Typography>
                  </TableCell>
                  {bimestresOrdenados.map((bim, colIndex) => {
                    const datas = datasPorBimestre[bim] || [];
                    return (
                      <TableCell key={colIndex}>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1.0rem' } }}>
                          {datas[rowIndex] ?? ""}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  };

  return (
    <Stack
      flex={1}
      minWidth="250px"
      maxWidth="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={0}
      borderRadius="5px"
      bgcolor={cardBg}
      sx={{
        transition: '0.6s ease-in',
        '&:hover': {
          boxShadow: 15,
          bgcolor: cardBgHover,
        },
      }}
      boxShadow={2}
    >
      {renderContent()}
    </Stack>
  );
};

export default CalendarioDocenteTableDataResponceComponent;

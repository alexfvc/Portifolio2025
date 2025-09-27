import { alpha, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { DiaLetivo } from "../form/hooks/type/i-dialetivo";
import {singleBimester} from "../../constants/calendarioDocenteConstants" 

interface Props {
    dados: DiaLetivo[];
    diasSelecionados: string[];
    bimestresSelecionados: string[];
}
const ordemBimestres = singleBimester

const CalendarioDocenteTableDataResponceComponent: React.FC<Props> = ({
  dados,
  diasSelecionados,
  bimestresSelecionados,
}) => {

    // aplica a ordem fixa mas mostra apenas os selecionados
  const bimestresOrdenados = ordemBimestres.filter((b) =>
    bimestresSelecionados.includes(b)
  );

  // monta um objeto { bimestre: [datas...] } filtrado pelos dias selecionados
  const datasPorBimestre = bimestresOrdenados.reduce((acc, bim) => {
    acc[bim] = dados
      .filter(
        (d) => d.bimestre === bim && diasSelecionados.includes(d["dia letivo"])
      )
      .map((d) => d.data);
    return acc;
  }, {} as Record<string, string[]>);

  // calcula a maior quantidade de datas
  const maxLinhas = Math.max(
    ...bimestresOrdenados.map((bim) => datasPorBimestre[bim]?.length || 0),
    0
  );


    return(
        <>
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
            bgcolor={alpha('rgb(224, 224, 224)', 0.3)}
            sx={{
                transition: '0.6s ease-in',
                '&:hover': {
                boxShadow: 15,
                bgcolor: alpha('rgb(224, 224, 224)', 0.1),
                },
            }}
            boxShadow={2}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead >
                            <TableRow >
                                <TableCell><Typography variant="h6"  
                                    sx={{fontSize: {xs: '1.0rem', md: '1.5rem'}}} color='text.secondary' alignItems={'center'} fontWeight="fontWeightBold">#</Typography></TableCell>
                                    {bimestresSelecionados.map((bim, index) => (
                                    <TableCell key={index}><Typography variant="h6"  sx={{fontSize: {xs: '1.0rem', md: '1.4rem'}}} color='text.secondary' alignItems={'center'} fontWeight="fontWeightBold">{bim}</Typography></TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {/* Renderiza linhas de acordo com o maior número de datas */}
                        {Array.from({ length: maxLinhas }).map((_, rowIndex) => (
                            <TableRow key={rowIndex}>
                            {/* aqui entra o índice (rowIndex + 1) */}
                            <TableCell ><Typography variant="h6" sx={{fontSize: {xs: '1.0rem', md: '1.4rem'}}} color='text.secondary' alignItems={'center'} fontWeight="fontWeightBold">{rowIndex + 1}</Typography></TableCell>

                            {bimestresSelecionados.map((bim, colIndex) => {
                                const datas = datasPorBimestre[bim] || [];
                                return (
                                <TableCell key={colIndex}>
                                    <Typography variant="h6" sx={{fontSize: {xs: '1.0rem', md: '1.4rem'}}}>
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
        </Stack>
        </>
    );
}
export default CalendarioDocenteTableDataResponceComponent;
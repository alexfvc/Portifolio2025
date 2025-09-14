import { alpha, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const CalendarioDocenteTableDataResponceComponent = ({ selectedDays, selectedBimesters }: { selectedDays: string[], selectedBimesters: string[] }) => {
    const [bimestersData, setBimestersData] = useState<Record<string,string[]>>({});

    useEffect(() => {
        Papa.parse('/assets/data/dias letivos 2025.csv?url', {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            console.log(results.data); 
            const bims: Record<string,string[]> = {};
            results.data.forEach((row: any) => {
            const day = row['dia letivo'];
            const bim = row['bimestre'];
            const date = row['data']?.replace(/\./g,'/');
            if(selectedDays.includes(day) && selectedBimesters.includes(bim)) {
                if(!bims[bim]) bims[bim] = [];
                bims[bim].push(date);
            }
            });
            setBimestersData(bims);
        }
        });
    }, [selectedDays, selectedBimesters]);

    const maxRows = Math.max(...Object.values(bimestersData).map(arr => arr.length), 0);

    

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
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            {selectedBimesters.map(bim => <TableCell key={bim}>{bim}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...Array(maxRows)].map((_, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{idx+1}</TableCell>
                                {selectedBimesters.map(bim => (
                                    <TableCell key={bim}>{bimestersData[bim]?.[idx] || ''}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
        </>
    );
}
export default CalendarioDocenteTableDataResponceComponent;
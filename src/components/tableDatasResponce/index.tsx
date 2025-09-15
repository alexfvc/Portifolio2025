import { alpha, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const CalendarioDocenteTableDataResponceComponent = () => {




    

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
                            

                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
        </>
    );
}
export default CalendarioDocenteTableDataResponceComponent;
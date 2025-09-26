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
            <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>b1</TableCell>
                                <TableCell>b2</TableCell>
                                <TableCell>b3</TableCell>
                                <TableCell>b4</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1#</TableCell>
                                <TableCell>1b1</TableCell>
                                <TableCell>1b2</TableCell>
                                <TableCell>1b3</TableCell>
                                <TableCell>1b4</TableCell>
                            </TableRow>  

                            <TableRow>
                                <TableCell>2#</TableCell>
                                <TableCell>2b1</TableCell>
                                <TableCell>2b2</TableCell>
                                <TableCell>2b3</TableCell>
                                <TableCell>2b4</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3#</TableCell>
                                <TableCell>3b1</TableCell>
                                <TableCell>3b2</TableCell>
                                <TableCell>3b3</TableCell>
                                <TableCell>3b4</TableCell>
                            </TableRow>

                            

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Stack>
        </>
    );
}
export default CalendarioDocenteTableDataResponceComponent;
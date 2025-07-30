import { Grid, Stack } from "@mui/material"
import type { ITableGrid } from "../types/i-Table-Grid";
import React from "react";

const HomeTableGridComponent = ({children}:ITableGrid) => {


    return(
        <Stack display={'flex'} maxWidth={{sm:600,md:'100%'}} justifyContent={'center'} alignItems={'center'} spacing={2}   py={2}>
            <Grid container justifyContent={'center'} spacing={{xs:5, md:5}}   p={3} >
                    {React.Children.map(children, (child, index) => (
                        <Grid display={'flex'}  key={index}>
                            {child}
                        </Grid>
                    ))}
            </Grid>
        </Stack>
    )
}

export default HomeTableGridComponent;
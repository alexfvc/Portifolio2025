import { Grid, Stack } from "@mui/material"
import type { ITableGrid } from "../types/i-Table-Grid";
import React from "react";

const HomeTableGridComponent = ({children}:ITableGrid) => {


    return(
        <Stack display={'flex'}  justifyContent={'center'} alignItems={'center'} width={'100%'} spacing={2} pb={2}>
            <Grid container justifyContent={'center'} spacing={{sm:2, md:5}} gap={2} pb={1} >
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
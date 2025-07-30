import { Grid, Stack } from "@mui/material"
import type { ITableGrid } from "../types/i-Table-Grid";
import React from "react";

const HomeTableGridComponent = ({children}:ITableGrid) => {


    return(
        <Stack display={'flex'} maxWidth={{sm:550,md:'100%'}} justifyContent={'center'} alignItems={'center'} spacing={2} pb={2}>
            <Grid container justifyContent={'center'} spacing={{sm:2, md:5}} pb={1} >
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
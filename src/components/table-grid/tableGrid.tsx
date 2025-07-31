import { Grid, Stack } from "@mui/material"
import type { ITableGrid } from "../types/i-Table-Grid";
import React from "react";

const HomeTableGridComponent = ({children, cardOrblock }:ITableGrid) => {


    return(
        <Stack display={'flex'}  justifyContent={'center'} alignItems="stretch" width={'100%'} spacing={2} pb={2}>
            <Grid container justifyContent={'center'} alignItems={'inherit'}  spacing={{sm:2, md:5}} width={'100%'} gap={2} pb={1} >
                    {(cardOrblock === 'card') && (<>
                    {React.Children.map(children, (child, index) => (
                        <Grid 
                            spacing={1}
                            justifyContent={'center'}
                            display={'flex'} 
                            flexDirection={'row'} 
                            key={index}
                            size={{sm:6,md:3 ,lg:2}}
                            width={'100%'}
                            >
                            {child}
                        </Grid>
                    ))};
                   </>)}

                    {(cardOrblock === 'block') && (<>
                    {React.Children.map(children, (child, index) => (
                        <Grid 
                            spacing={1}
                            justifyContent={'center'}
                            display={'flex'} 
                            flexDirection={'row'} 
                            key={index}
                            size={12}
                            width={'100%'}
                            >
                            {child}
                        </Grid>
                    ))}
                   </>)}
            </Grid>
        </Stack>
    )
}

export default HomeTableGridComponent;
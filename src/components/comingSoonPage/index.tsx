import { Stack } from "@mui/material";
import type {iHomeComingSoonPageProps} from "../types/I-coming-soon-page";


const HomeComingSoonPage = ({ativo}:iHomeComingSoonPageProps)=>{
return(<>
    {ativo && (
        <Stack
            width="100%"
            position="fixed"
            bottom={0}
            right={0}
            left={0}
            zIndex={1000}
            bgcolor="red">
            EM CONSTRUÇÃO
        </Stack>
    )}
    </>
)}
export default HomeComingSoonPage
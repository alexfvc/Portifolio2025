import { Button, Stack, Typography, Box, Avatar} from '@mui/material';
import { Icon } from "@iconify/react"
import foto from '../../assets/images/Foto.jpeg';
import { red } from '@mui/material/colors';



const Home = () => (
  <>   
    <Stack 
        direction={{xs: 'column',md:'row'} } 
        justifyContent={'space-between'}
        alignItems={{xs: 'flex-start',md:'center'}}
        spacing={2}
        px={{xs: 3,md:6}}
        py={2}
        bgcolor={'rgba(59, 130, 246, .05)'}
        
        >
        <Stack
        direction={'column'}>
            <Typography variant='h4'> Meu Portifólio </Typography>
            <Typography variant='subtitle2' color='text.secondary'> criado em 2025 </Typography>
        </Stack> 
         <Stack 
        direction='row' 
        justifyContent={'space-between'}
        alignItems={'center'}
        spacing={2}
        >
            <a href="" >            
                <Typography variant='h6' color='text.secondary'> Sobre </Typography>
            </a>
            <a href="">            
                <Typography variant='h6' color='text.secondary'> Experiência </Typography>
            </a>
            <a href="">            
                <Typography variant='h6' color='text.secondary'> Habilidade  </Typography>
            </a>
            <a href="">            
                <Typography variant='h6' color='text.secondary'> Projetos  </Typography>
            </a>
            <a href="">            
                <Typography variant='h6' color='text.secondary'> Contato </Typography>
            </a>
        </Stack>
        <Button 
            variant='contained' 
            startIcon={<Icon icon="material-symbols:download"/> }
            color='primary'
            > 
            Baixar CV
        </Button>  
    </Stack> 

    <Stack 
        direction={'column'}
        alignItems={'center'}
        spacing={2}
        p={{xs:2,md:8}}
        bgcolor={'rgba(59, 130, 246, .5)'}

        >
        <Box >   
        <Avatar
        src={foto}
        alt="Foto de perfil"
        sx={{
          width: 150,
          height: 150,
          border: '4px solid white',
          boxShadow: 3, 
        }}
      />
        </Box>        
        <Stack
        sx={{backgroundColor:'red'
            }}>NOME</Stack>        
        <Stack
        sx={{backgroundColor:'red'
            }}>EMPREGO</Stack>        
        <Stack
        sx={{backgroundColor:'red'
            }}>EXPERIENCIA</Stack>        
        <Stack
        sx={{backgroundColor:'red'
            }}>CONTATO</Stack>        
        <Stack
        sx={{backgroundColor:'red'
            }}>BAIXAR CV</Stack>
            
    </Stack>
  </>
);

export default Home;

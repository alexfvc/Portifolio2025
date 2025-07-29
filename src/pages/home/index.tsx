import { Button, Stack, Typography, Box, Avatar } from '@mui/material';
import { Icon } from "@iconify/react"
import foto from '../../assets/images/foto.png';
import usePrimaryColors from '../../theme/colors';
import { alpha, useTheme } from '@mui/system';





const Home = () =>{
    const primaryColors = usePrimaryColors();
    const theme = useTheme();
    return(
    <>
    <Box bgcolor={theme.palette.action.hover}>
    {/* header */}
    <Stack 
        direction={{sm: 'column',md:'row'}}

        justifyContent={'space-between'}
        justifyItems={'space-between'}
        alignItems={{xs: 'flex-start',md:'center'}}

        spacing={{xs:1, sm:2, md:3}}
        px={{xs: 3, md:6}}

        position={'fixed'}
        top={0}
        right={0}
        left={0}
        zIndex={1000}
        py={{xs:1, sm:2, md:3}}
        
        bgcolor={ alpha('rgb(224, 224, 224)', 0.6)}
        sx={{
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(5px)' ,
            borderBottom: `5px solid ${alpha('rgb(224, 224, 224)', 0.8)}` // ficou bom essa linha ?
        }}

        >
        <Stack
        direction={'column'}
        >
            <Typography variant='h4'> Meu Portifólio </Typography>
            <Typography variant='subtitle2' color='text.secondary'> criado em 2025 </Typography>
        </Stack> 
        <Stack 
            direction='row' 
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={{xs:1, sm:2, md:3}}
            >
            <a href="#about"   >            
                <Typography variant='h6' color='text.secondary' fontSize={{xs:'1rem', sm:'1rem', md:'1.5rem'}}
                > Sobre </Typography>
            </a>
            <a href="#experiences">            
                <Typography variant='h6' color='text.secondary' fontSize={{xs:'1rem', sm:'1rem', md:'1.5rem'}}
                > Experiências </Typography>
            </a>
            <a href="#skills">            
                <Typography variant='h6' color='text.secondary' fontSize={{xs:'1rem', sm:'1rem', md:'1.5rem'}}
                > Habilidades  </Typography>
            </a>
            <a href="#projects">            
                <Typography variant='h6' color='text.secondary' fontSize={{xs:'1rem', sm:'1rem', md:'1.5rem'}}
                > Projetos  </Typography>
            </a>
            <a href="#contacts">            
                <Typography variant='h6' color='text.secondary' fontSize={{xs:'1rem', sm:'1rem', md:'1.5rem'}}
                > Contato </Typography>
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
  
    {/* Presentation */}
    <Stack 
        id='#presentation'
        direction={'column'}
        alignItems={'center'}
        spacing={3}
        p={{xs:2,md:8}}
        bgcolor={primaryColors.primary.dark}

        pt={{xs:21, sm:25, md:15}}
        >
        <Box >   
            <Avatar
                src={foto}
                alt="Foto de perfil"
                sx={{
                width: 200,
                height: 200,
                border: '4px solid white',
                boxShadow: 15, 
                }}
            />
        </Box>        
        <Typography
            variant='h1' fontSize={{xs:'3rem',sm:'3rem',md:'4rem',lg:'5rem'}} fontWeight={'bold'} color='white' 
                >Alex Costa</Typography>        
        <Button variant='contained'  color='inherit' sx={{borderRadius: '50px'}} >                
            <Typography
                textAlign={'center'} py={1} 
                sx={{fontWeight:550,opacity:0.6, '&::first-letter': {
                    textTransform: 'uppercase'},
                    textTransform: 'None',
                }}
                >Desnvolvedor Full Stack
            </Typography>          
        </Button>
        <Typography
        variant='h5' color='white' textAlign={'center'} py={2}
            >Transformo ideias em soluções digitais inovadoras com mais de 5 anos de experiência em desenvolvimento web.</Typography>          
        <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={3}>
            <Button 
                variant='contained' 
                startIcon={<Icon icon="oui:email"/> }
                color='inherit'
                sx={{px:4, py:2,borderRadius: '8px'}}
                > 
                Entrar em Contato
            </Button>        
            <Button 
                variant='contained' 
                startIcon={<Icon icon="material-symbols:download"/> }
                color='primary' 
                sx={{px:4, py:2, borderRadius: '8px',fontWeight:550}}
                > 
                Baixar CV
            </Button> 
        </Stack>
        <Stack direction={'row'} alignContent={'center'} spacing={3} pb={3}>
            <Button variant='text' color='primary'><Icon icon="line-md:linkedin" width={32} height={32} color={'white'}/></Button>
            <Button variant='text' color='primary'><Icon icon="line-md:github" width={32} height={32} color={'white'}/></Button>
            <Button variant='text' color='primary'><Icon icon="line-md:email" width={32} height={32} color={'white'}/></Button>
        </Stack>
    </Stack>
    {/* Degree */}
    <Box 
        height={100}
        sx={{backgroundImage:`linear-gradient(to bottom, ${primaryColors.primary.dark}, ${theme.palette.action.hover})`}}>    
    </Box>

    {/* About */}
    <Box p={3} my={6} id={'about'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>  
        <Stack direction={{sx:'column',sm:'row', md:'column'}} alignItems={'center'}  spacing={2}>
            <Stack direction={'column'} alignItems={'center'} spacing={3}>
                <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}
                >Sobre Mim
                </Typography>
                <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5}></Box>
                <Typography variant='h6' color='text.secondary' textAlign={'center'} p={3}>
                    Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. Com mais de 5 anos de experiência, especializei-me em desenvolvimento full stack, sempre buscando as melhores práticas e tecnologias mais recentes.
                </Typography>
            </Stack>

            <Stack direction={{xs:'column',md:'row'}} alignItems={'center'} spacing={{xs:2, md:4}}>
                <Stack direction={{xs:'column',sm:'row',md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}
                        sx={{p:3,
                            borderRadius:'5px',
                            bgcolor:alpha('rgb(224, 224, 224)',0.3),
                            minHeight:'100px',
                            minWidth:'100px',
                            transition: '0.6s ease-in', 
                            '&:hover': {
                            boxShadow: 15,
                            bgcolor:alpha('rgb(224, 224, 224)',0.1),                    
                            },
                        }}
                        boxShadow={2}
                        >
                            <Icon icon={'streamline-ultimate:programming-hold-code-2-bold'} fontSize={'2rem'}></Icon>
                            <Typography>5+ Anos</Typography>
                            <Typography>texto</Typography>
                </Stack>
                    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}
                        sx={{p:3,
                            borderRadius:'5px',
                            bgcolor:alpha('rgb(224, 224, 224)',0.3),
                            minWidth:'100px',
                            minHeight:'100px',
                            transition: '0.6s ease-in', 
                            '&:hover': {
                            boxShadow: 15,
                            bgcolor:alpha('rgb(224, 224, 224)',0.1),
                            minWidth:'105px',
                            minHeight:'105px',
                            },
                        }}
                        boxShadow={2}
                        >
                            <Icon icon={'ix:projects'} fontSize={'2rem'}></Icon>
                            <Typography>20+ Projetos</Typography>
                            <Typography>texto</Typography>                    
                    </Stack>
                </Stack>
                <Stack direction={{xs:'column', sm:'row', md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}
                        sx={{p:3,
                            borderRadius:'5px',
                            bgcolor:alpha('rgb(224, 224, 224)',0.3),
                            minWidth:'100px',
                            minHeight:'100px',
                            transition: '0.6s ease-in', 
                            '&:hover': {
                            boxShadow: 15,
                            bgcolor:alpha('rgb(224, 224, 224)',0.1),
                            minWidth:'105px',
                            minHeight:'105px',
                            },
                        }} 
                        boxShadow={2}
                        >
                            <Icon icon={'material-symbols:workspace-premium-outline'} fontSize={'2rem'}></Icon>
                            <Typography>Certificações</Typography>
                            <Typography>texto</Typography>
                    </Stack>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                            },
                        }}
                        boxShadow={2}
                        >
                            <Icon icon={'qlementine-icons:target-16'} fontSize={'2rem'}></Icon>
                            <Typography>Foco em UX</Typography>
                            <Typography>texto</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Box>

    {/* Experiences */}
    <Box p={3} my={6} id={'experiences'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <Stack direction={'column'} alignItems={'center'} spacing={3}>
            <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}>Experiências Profissionais
            </Typography>
        <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5}></Box>

            <Typography variant='h6' color='text.secondary' textAlign={'center'} p={3}>
                Uma jornada de crescimento e aprendizado constante no mundo da tecnologia.
            </Typography>
        </Stack>
        <Box 
            boxShadow={2}
            sx={{   
                p:3,
                borderRadius:'5px',
                bgcolor:alpha('rgb(224, 224, 224)',0.3),
                transition: '0.6s ease-in', 
                '&:hover': {
                boxShadow: 15,
                bgcolor:alpha('rgb(224, 224, 224)',0.1),
                },
            }}>
            <Stack pl={{xs:0,md:3}} pr={{xs:0,md:5}}>
                <Stack direction={{xs:'column',md:'row'}}  spacing={{xs:2,md:3}} py={2} justifyContent={'space-between'}>
                    <Stack direction={'column'} py={2} >
                        <Stack direction={'row'} spacing={2}>
                            <Avatar src={'../../../public/icons/logo-single.png'} />
                        <Typography variant='h3'>Cenix!</Typography>
                        </Stack>
                        <Typography variant='h6' color={primaryColors.primary.dark}>Programador Full Stack Jr</Typography>
                    </Stack>
                    <Stack direction={'column'} justifyContent={'center'} spacing={1}>
                        <Stack direction={'row'} spacing={2}>
                            <Icon icon={'icon-park-outline:local'} fontSize={'35px'} color={alpha('rgba(100,100,100)',1)} />
                            <Typography variant='h5' color='text.secondary'>Agricola 2 Wermann</Typography>
                        </Stack>
                        <Stack direction={'row'}  spacing={2} alignContent={'center'}>
                            <Icon  icon={'stash:data-date-light'} fontSize={'40px'} color={alpha('rgba(100,100,100)',1)}/>
                            <Typography variant='h5' color='text.secondary'>/2024  ...  Present</Typography>
                        </Stack>
                    </Stack> 
                </Stack>
                <Stack>
                    <Typography alignContent={'flex-start'} variant='h6' textAlign={'start'} color='text.secondary'>Backend em C# e Frontend JavaScript e React</Typography>
                </Stack>
            </Stack>

        </Box>
    </Box>

    {/* Skills */}
    <Box p={3} my={6} id={'skills'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>  
        <Stack direction={{sx:'column',sm:'row', md:'column'}} alignItems={'center'}  spacing={2}>
            <Stack direction={'column'} alignItems={'center'} spacing={3}>
                <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}>Habilidades Técnicas
                </Typography>
                <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5}></Box>
                <Typography variant='h6' color='text.secondary' textAlign={'center'} p={3}>
                    Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. Com mais de 5 anos de experiência, especializei-me em desenvolvimento full stack, sempre buscando as melhores práticas e tecnologias mais recentes.
                </Typography>
            </Stack>
            <Stack direction={{xs:'column',md:'row'}} alignItems={'center'} spacing={{xs:2, md:4}}>
            <Stack direction={{xs:'column',sm:'row',md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minHeight:'100px',
                        minWidth:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),                    
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'streamline-ultimate:programming-hold-code-2-bold'} fontSize={'2rem'}></Icon>
                        <Typography>5+ Anos</Typography>
                        <Typography>texto</Typography>
            </Stack>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'ix:projects'} fontSize={'2rem'}></Icon>
                        <Typography>20+ Projetos</Typography>
                        <Typography>texto</Typography>                    
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row', md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }} 
                    boxShadow={2}
                    >
                        <Icon icon={'material-symbols:workspace-premium-outline'} fontSize={'2rem'}></Icon>
                        <Typography>Certificações</Typography>
                        <Typography>texto</Typography>
                </Stack>
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                sx={{p:3,
                    borderRadius:'5px',
                    bgcolor:alpha('rgb(224, 224, 224)',0.3),
                    minWidth:'100px',
                    minHeight:'100px',
                    transition: '0.6s ease-in', 
                    '&:hover': {
                    boxShadow: 15,
                    bgcolor:alpha('rgb(224, 224, 224)',0.1),
                    minWidth:'105px',
                    minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'qlementine-icons:target-16'} fontSize={'2rem'}></Icon>
                        <Typography>Foco em UX</Typography>
                        <Typography>texto</Typography>
                </Stack>
            </Stack>
        </Stack>
        </Stack>
    </Box>

    {/* Projects */}
    <Box p={3} my={6} id={'projects'} bgcolor={alpha('rgb(250,0,0)',.1)} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <Stack direction={{sx:'column',sm:'row', md:'column'}} alignItems={'center'}  spacing={2}>
            <Stack direction={'column'} alignItems={'center'} spacing={3}>
                <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}>Projetos em Destaque
                </Typography>
                <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5}></Box>
                <Typography variant='h6' color='text.secondary' textAlign={'center'} p={3}>
                    Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. Com mais de 5 anos de experiência, especializei-me em desenvolvimento full stack, sempre buscando as melhores práticas e tecnologias mais recentes.
                </Typography>
            </Stack>
        <Stack direction={{xs:'column',md:'row'}} alignItems={'center'} spacing={{xs:2, md:4}}>
            <Stack direction={{xs:'column',sm:'row',md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minHeight:'100px',
                        minWidth:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),                    
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'streamline-ultimate:programming-hold-code-2-bold'} fontSize={'2rem'}></Icon>
                        <Typography>5+ Anos</Typography>
                        <Typography>texto</Typography>
            </Stack>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'ix:projects'} fontSize={'2rem'}></Icon>
                        <Typography>20+ Projetos</Typography>
                        <Typography>texto</Typography>                    
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row', md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }} 
                    boxShadow={2}
                    >
                        <Icon icon={'material-symbols:workspace-premium-outline'} fontSize={'2rem'}></Icon>
                        <Typography>Certificações</Typography>
                        <Typography>texto</Typography>
                </Stack>
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                sx={{p:3,
                    borderRadius:'5px',
                    bgcolor:alpha('rgb(224, 224, 224)',0.3),
                    minWidth:'100px',
                    minHeight:'100px',
                    transition: '0.6s ease-in', 
                    '&:hover': {
                    boxShadow: 15,
                    bgcolor:alpha('rgb(224, 224, 224)',0.1),
                    minWidth:'105px',
                    minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'qlementine-icons:target-16'} fontSize={'2rem'}></Icon>
                        <Typography>Foco em UX</Typography>
                        <Typography>texto</Typography>
                </Stack>
            </Stack>
        </Stack>
        </Stack>

    </Box>

    {/* Contacts */}
    <Box p={3} my={6} id={'contacts'} bgcolor={alpha('rgb(250,0,0)',.1)} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <Stack direction={{sx:'column',sm:'row', md:'column'}} alignItems={'center'}  spacing={2}>
            <Stack direction={'column'} alignItems={'center'} spacing={3}>
                <Typography variant='h3' fontWeight={'bold'} textAlign={'center'}>Vamos Conversar
                </Typography>
                <Box minWidth={200} minHeight={5} bgcolor={alpha(primaryColors.primary.main,1)} borderRadius={5}></Box>
                <Typography variant='h6' color='text.secondary' textAlign={'center'} p={3}>
                    Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. Com mais de 5 anos de experiência, especializei-me em desenvolvimento full stack, sempre buscando as melhores práticas e tecnologias mais recentes.
                </Typography>
            </Stack>
            <Stack direction={{xs:'column',md:'row'}} alignItems={'center'} spacing={{xs:2, md:4}}>
                <Stack direction={{xs:'column',md:'row'}} alignItems={'center'} spacing={{xs:2, md:4}}>
            <Stack direction={{xs:'column',sm:'row',md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minHeight:'100px',
                        minWidth:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),                    
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'streamline-ultimate:programming-hold-code-2-bold'} fontSize={'2rem'}></Icon>
                        <Typography>5+ Anos</Typography>
                        <Typography>texto</Typography>
            </Stack>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'ix:projects'} fontSize={'2rem'}></Icon>
                        <Typography>20+ Projetos</Typography>
                        <Typography>texto</Typography>                    
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row', md:'row',lg:'row'}} alignItems={'center'} justifyContent={'center'} spacing={{xs:2, md:4}}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                    sx={{p:3,
                        borderRadius:'5px',
                        bgcolor:alpha('rgb(224, 224, 224)',0.3),
                        minWidth:'100px',
                        minHeight:'100px',
                        transition: '0.6s ease-in', 
                        '&:hover': {
                        boxShadow: 15,
                        bgcolor:alpha('rgb(224, 224, 224)',0.1),
                        minWidth:'105px',
                        minHeight:'105px',
                        },
                    }} 
                    boxShadow={2}
                    >
                        <Icon icon={'material-symbols:workspace-premium-outline'} fontSize={'2rem'}></Icon>
                        <Typography>Certificações</Typography>
                        <Typography>texto</Typography>
                </Stack>
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}
                sx={{p:3,
                    borderRadius:'5px',
                    bgcolor:alpha('rgb(224, 224, 224)',0.3),
                    minWidth:'100px',
                    minHeight:'100px',
                    transition: '0.6s ease-in', 
                    '&:hover': {
                    boxShadow: 15,
                    bgcolor:alpha('rgb(224, 224, 224)',0.1),
                    minWidth:'105px',
                    minHeight:'105px',
                        },
                    }}
                    boxShadow={2}
                    >
                        <Icon icon={'qlementine-icons:target-16'} fontSize={'2rem'}></Icon>
                        <Typography>Foco em UX</Typography>
                        <Typography>texto</Typography>
                </Stack>
            </Stack>
        
        </Stack>
        </Stack>
        </Stack>

    </Box>
    {/* Footer */}
    <Stack p={5} bgcolor={'rgb(250,2,2)'}>

    </Stack>
    </Box>

    </>
);
}

export default Home;

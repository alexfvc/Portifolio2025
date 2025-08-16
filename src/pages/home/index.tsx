import { Button, Stack, Typography, Box, Avatar } from '@mui/material';
import { Icon } from "@iconify/react";
import profile from '../../assets/images/Profile.jpg'
import usePrimaryColors from '../../theme/colors';
import { alpha, useTheme } from '@mui/system';
import HomeIntroSectionComponent from '../../components/intro-Section';
import HomeCardComponent from '../../components/card';
import HomeCardSkillTagComponent from '../../components/card/skillTag';
import HomeTableGridComponent from '../../components/table-grid';
import ceniximg from '../../assets/images/cenix.png';
import HomeExperiencesBlockComponent from '../../components/experienceBlock';
import HomeProjectsBlockComponent from '../../components/projectsBlock';
import hephaestusImage from '../../assets/images/Hephaestus.png'




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
                src={profile}
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
                >Desenvolvedor Full Stack
            </Typography>          
        </Button>
        <Typography
        variant='h5' color='white' textAlign={'center'} py={2}
            >Dou vida a ideias, criando soluções digitais inovadoras com desenvolvimento web.</Typography>          
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
        sx={{backgroundImage:`linear-gradient(to bottom, ${primaryColors.primary.dark}, ${alpha(theme.palette.action.hover,0)})`}}>    
    </Box>

    {/* About */}
    <Box p={3} my={6} id={'about'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>  

        <Stack direction={'column'} alignItems={'center'}  spacing={2}>
            <HomeIntroSectionComponent title='Sobre Mim'>   
                <>
                    <p> Sempre tive uma forte inclinação pelas ciências exatas. No ensino fundamental, me encantava especialmente com geometria. Mais tarde, no cursinho pré-vestibular, 
                        foi a física que conquistou minha atenção de forma definitiva. Ingressei no curso de Física na Universidade de Brasília (UnB).
                    </p>
                    <p>Durante a graduação, iniciei um estágio no extinto Ministério da Previdência Social, 
                        onde tive meu primeiro contato prático com análise de dados, produzindo relatórios a partir de anuários estatísticos. Essa vivência se somou às atividades laboratoriais do curso, 
                        nas quais a coleta e análise de dados eram fundamentais. Cheguei a atuar como monitor voluntário em Física Experimental 4, ajudando colegas a compreender essas etapas. Mais adiante, 
                        me envolvi com o ensino por meio do PIBID (Programa Institucional de Bolsa de Iniciação à Docência), 
                        onde encontrei um novo propósito: a educação.
                    </p>
                    <p>Formei-me em Física em 2018. No mesmo ano, fui aprovado no concurso para professor efetivo do Estado de Minas Gerais. 
                        Desde então, atuo como docente e iniciei um mestrado profissional em Ensino de Física (MNPEF), mas não concluí.
                    </p>
                    <p>No fim de 2021, concluí cursos de Python e banco de dados, que reacenderam meu interesse pela tecnologia. Desde então, 
                        venho aprofundando meus conhecimentos na área de desenvolvimento de software. Atualmente, estou focado na atuação como desenvolvedor full stack, 
                        utilizando C# no backend e React com JavaScript no frontend. Tenho me dedicado à construção de projetos práticos, sempre buscando aplicar boas práticas de desenvolvimento, 
                        arquitetura limpa e integração entre sistemas. Estou em transição definitiva para a área de tecnologia, onde pretendo unir minha experiência com dados, 
                        minha vivência em ensino e minha paixão por resolver problemas de forma criativa e eficiente.
                    </p> 
                </> 
            </HomeIntroSectionComponent>
            <HomeTableGridComponent cardOrblock={'card'}>
                    <HomeCardComponent 
                        iconPrimary='streamline-ultimate:programming-hold-code-2-bold' 
                        title='5+ Anos' 
                        subtitle='de muito estudo'
                        >
                    </HomeCardComponent>
                    <HomeCardComponent 
                        iconPrimary='ix:projects' 
                        title='15+ Projetos' 
                        subtitle='No GitHub' 
                        subtitle2='1 em produção'>
                    </HomeCardComponent>      
                    <HomeCardComponent 
                        iconPrimary='material-symbols:workspace-premium-outline' 
                        title='Certificações' 
                        subtitle='Ciência de dados' 
                        subtitle2='desenvolvimento .Net' >
                    </HomeCardComponent>
                    <HomeCardComponent 
                        iconPrimary='qlementine-icons:target-16' 
                        title='Foco' 
                        subtitle='Código limpo' 
                        subtitle2='Arquitetura limpa' >
                    </HomeCardComponent>
            </HomeTableGridComponent>                   
        </Stack>
    </Box>

    {/* Experiences */}
    <Box p={3} my={6} id={'experiences'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <HomeIntroSectionComponent title='Experiências Profissionais' centerText={true} >
            <> 
                <p>
                    Uma jornada de crescimento e aprendizado constante no mundo da tecnologia.
                </p>
            </>
        </HomeIntroSectionComponent>

        <HomeTableGridComponent cardOrblock={'block'}>
            <HomeExperiencesBlockComponent 
                title={'Cenix'} 
                data='/2024  ...  Present'
                local='Agricola Werhmann'
                subtitle='Desvolvedor Full Stack JR'
                iconTitle={ceniximg}
                textAbout={<><p>Desenvolvi o sistema Hephaestus, projetado para gerenciar a fila de atendimento de veículos na oficina e lavagem da empresa. Utilizei C# com .NET, 
                                    Entity Framework e adotei os princípios da Clean Architecture e SOLID, garantindo um código limpo, escalável e de fácil manutenção.
                                    Implementei regras de negócio importantes, como a validação que impede a inserção de veículos já presentes na fila com status "pendente" ou "em andamento", 
                                    além da integração com uma API externa que fornece os dados dos veículos da empresa.
                                    Esse projeto real me proporcionou experiência prática em desenvolvimento backend, consolidando meus conhecimentos em arquitetura de software, 
                                    boas práticas de programação e integração de sistemas.</p></>}
                >

            </HomeExperiencesBlockComponent><></>
        </HomeTableGridComponent>
    </Box>

    {/* Skills */}
    <Box p={3} my={6} id={'skills'} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>  
        <Stack direction={'column'} alignItems={'center'} spacing={2}>
            <HomeIntroSectionComponent title='Habilidades Técnicas' centerText={true}>
                <>
                    <p>
                        Tecnologias e ferramentas que procuro dominar para criar soluções completas e eficientes.
                    </p>
                </>
            </HomeIntroSectionComponent>

            <HomeTableGridComponent cardOrblock={'card'}>
                    <HomeCardComponent iconPrimary='famicons:server-outline' iconBg={true} title='Backend' >
                        <HomeCardSkillTagComponent title={'C#'} />
                        <HomeCardSkillTagComponent title={'.NET'} />
                        <HomeCardSkillTagComponent title={'Entity Framework'} />
                    </HomeCardComponent>    
                    <HomeCardComponent iconPrimary='mdi:code-block-html' iconBg={true} title='Frontend' >
                        <HomeCardSkillTagComponent title={'JavaScript'}/>
                        <HomeCardSkillTagComponent title={'React'} />
                        <HomeCardSkillTagComponent title={'HTML'} />
                        <HomeCardSkillTagComponent title={'CSS'} />
                    </HomeCardComponent>    
                    
                    <HomeCardComponent iconPrimary='fluent:data-line-32-regular' iconBg={true} title='Análise de dados' >
                        <HomeCardSkillTagComponent title={'Python'} />
                        <HomeCardSkillTagComponent title={'Pandas'} />
                        <HomeCardSkillTagComponent title={'MatPlotLib'} />
                        <HomeCardSkillTagComponent title={'Selenium'} /> 
                    </HomeCardComponent>    
                    <HomeCardComponent iconPrimary='iconoir:brain-research' iconBg={true} title='Geral'>
                        <HomeCardSkillTagComponent title={'Arquitetura limpa'}/>
                        <HomeCardSkillTagComponent title={'Código limpo'}/>
                        <HomeCardSkillTagComponent title={'Github'}/>
                        <HomeCardSkillTagComponent title={'Web Scraping'}/>
                        <HomeCardSkillTagComponent title={'Automação'}/> 
                    </HomeCardComponent>    
            </HomeTableGridComponent>
            <Stack direction={'column'} spacing={-4} maxWidth={'90%'}>
                    <Typography fontWeight={'bold'} variant={'h6'} textAlign={'center'}>
                        <p>
                            Sempre aprendendo e evoluindo
                        </p>
                    </Typography>
                    <Typography variant='h6' color='text.secondary' textAlign={'center'}>
                        <p>
                        Acredito que o aprendizado contínuo é fundamental na área de tecnologia. Estou sempre explorando novas ferramentas e metodologias para melhorar a qualidade dos projetos que desenvolvo.
                        </p>
                    </Typography>
            </Stack>
        </Stack>
    </Box>

    {/* Projects */}
    <Box p={3} my={6} id={'projects'}  sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <Stack direction={{sx:'column',sm:'column', md:'column'}} alignItems={'center'}  spacing={2}>
            <HomeIntroSectionComponent title='Projetos em Destaque' centerText={true}>
                <>
                    <p>
                        Uma seleção dos meus trabalhos mais recentes e significativos
                    </p>
                </>
            </HomeIntroSectionComponent>

            <HomeTableGridComponent cardOrblock={'block'} >
                <HomeProjectsBlockComponent 
                    title={'Hephaestus'} 
                    headerImage={hephaestusImage}
                    iconA='devicon-plain:csharp'
                    iconB='devicon-plain:entityframeworkcore'
                    subtitle=''
                    iconTitle={ceniximg}
                    textAbout={
                        <><p>Desenvolvi o sistema Hephaestus, 
                        projetado para gerenciar a fila de atendimento de 
                        veículos na oficina e lavagem da empresa. 
                        Utilizei C# com .NET, Entity Framework e adotei os 
                        princípios da Clean Architecture e SOLID, garantindo um 
                        código limpo, escalável e de fácil manutenção. 
                        Implementei regras de negócio importantes, 
                        como a validação que impede a inserção de veículos já 
                        presentes na fila com status "pendente" ou "em andamento", 
                        além da integração com uma API externa que fornece os dados 
                        dos veículos da empresa. Esse projeto real me proporcionou 
                        experiência prática em desenvolvimento backend, consolidando 
                        meus conhecimentos em arquitetura de software, boas práticas 
                        de programação e integração de sistemas.
                        </p></>}
                    >

                </HomeProjectsBlockComponent>
                <></>

            </HomeTableGridComponent>         
        </Stack>
    </Box>

    {/* Contacts */}
    <Box p={3} my={6} id={'contacts'} bgcolor={alpha('rgb(250,0,0)',.1)} sx={{scrollMarginTop: {xs:175, sm:175, md:100}}}>
        <Stack direction={{sx:'column',sm:'row', md:'column'}} alignItems={'center'}  spacing={2}>
            <HomeIntroSectionComponent title='Vamos Conversar'>
                <>
                    <p>
                        Estou sempre interessado em novos projetos e oportunidades. Entre em contato e vamos discutir como posso ajudar.
                    </p>
                </>
            </HomeIntroSectionComponent>
            
            
        </Stack>
    </Box>   
   

    {/* Footer */}
    <Stack p={5} bgcolor={'rgb(250,2,2)'}>
    </Stack>
    </Box>

    </>
)
}

export default Home;

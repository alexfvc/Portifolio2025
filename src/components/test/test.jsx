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
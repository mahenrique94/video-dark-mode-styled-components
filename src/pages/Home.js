import React, { useContext } from 'react'

import Container from '../components/Container'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

import ThemeContext from '../contexts/Theme'

const Home = () => {
    const { switchTheme } = useContext(ThemeContext)
    return (
        <Container>
            <Title>DarkMode com Styled Components</Title>
            <Input/>
            <Button>Meu botão</Button>
            <Button onClick={switchTheme}>
                DarkMode
            </Button>
        </Container>
    )
}

export default Home

import styled from 'styled-components'
import Colors from './components/theme/theme.colors'

export const Container = styled.div`
    background-color: ${Colors.primary};
    color: ${Colors.secundary};
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const Container = styled.div`
    background-color: ${Colors.background.secundary};
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`

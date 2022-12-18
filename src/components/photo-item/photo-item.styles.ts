import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const Container = styled.div`
    background-color: ${Colors.background.secundary};
    border-radius: 10px;
    padding: 10px;
    img {
        width: 100%;
        height: 100%;
        display: block;
        margin-bottom: 0;
        border-radius: 10px;
    }

    button{
        background-color: ${Colors.background.secundary};
        padding: 0;
        border: 0;
        color: white;

        &:hover {
            cursor: pointer;
            color: black;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 250px;
`

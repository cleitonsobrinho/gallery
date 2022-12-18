import styled from 'styled-components'
import Colors from './components/theme/theme.colors'

export const Container = styled.div`
    background-color: ${Colors.background.primary};
    color: ${Colors.Primary};
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`
export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        margin-bottom: 30px;
    }
`
export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`
export const UploadForm = styled.form`
    background-color: ${Colors.background.secundary};
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: ${Colors.input.background};
        border: 0;
        color: ${Colors.input.color};
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }

`

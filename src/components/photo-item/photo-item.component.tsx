import * as C from './photo-item.styles'

type Props = {
    url: string
    name: string
}
const PhotoItem = ({ url, name }: Props) => {
  return (
        <C.Container>
            <img src={url} alt={name}/>
            {name}
        </C.Container>
  )
}

export default PhotoItem

import * as C from './photo-item.styles'
import { RiDeleteBin6Line } from 'react-icons/ri'
import * as Photos from '../../services/photos'

type Props = {
    url: string
    name: string | number
}
const PhotoItem = ({ url, name }: Props) => {
  return (
        <C.Container>
            <C.ImgContainer>
                 <img src={url}/>
            </C.ImgContainer>
            <C.ButtonContainer>
                 <button onClick={() => Photos.deleteFile({ name })}><RiDeleteBin6Line size={20} /></button>
            </C.ButtonContainer>

        </C.Container>
  )
}

export default PhotoItem

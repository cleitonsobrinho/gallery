import * as C from './photo-item.styles'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { useContext } from 'react'
import { PhotosContext } from '../../contexts/context'

type Props = {
    url: string
    name: string | number
}

type PropsName = {
  name: string | number
}
const PhotoItem = ({ url, name }: Props) => {
  const { getPhotos } = useContext(PhotosContext)
  const deleteFile = async ({ name }:PropsName) => {
    const storage = getStorage()
    const desertRef = ref(storage, `images/${name}`)
    deleteObject(desertRef).then(() => {
      getPhotos()
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
        <C.Container>
            <C.ImgContainer>
                 <img src={url}/>
            </C.ImgContainer>
            <C.ButtonContainer>
                 <button onClick={() => deleteFile({ name })}><RiDeleteBin6Line size={20} /></button>
            </C.ButtonContainer>

        </C.Container>
  )
}

export default PhotoItem

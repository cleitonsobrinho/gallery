import { Photo } from '../types/photo'
import { storage } from '../config/firebase'
import { ref, listAll, getDownloadURL, uploadBytes, getStorage, deleteObject } from 'firebase/storage'
import { v4 as createId } from 'uuid'

export const getAll = async () => {
  const list: Photo[] = []

  const imagesFolder = ref(storage, 'images')
  const photoList = await listAll(imagesFolder)

  for (const i in photoList.items) {
    const photoUrl = await getDownloadURL(photoList.items[i])
    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }

  return list
}

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    const randomName = createId()
    const newFile = ref(storage, `images/${randomName}')`)
    const upload = await uploadBytes(newFile, file)
    const photoUrl = await getDownloadURL(upload.ref)
    return {
      name: upload.ref.name,
      url: photoUrl
    } as Photo
  } else {
    return new Error('Tipo de arquivo não permitido.')
  }
}

type Props = {
  name: string | number
}

export const deleteFile = async ({ name }:Props) => {
  const storage = getStorage()
  const desertRef = ref(storage, `images/${name}`)
  deleteObject(desertRef).then(() => {
    console.log('deletado com sucesso')
  }).catch((error) => {
    console.log(error)
  })
}

import { Photo } from '../types/photo'
import { storage } from '../config/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const getAll = async () => {
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

export default getAll

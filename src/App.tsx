import { useState, useEffect, FormEvent } from 'react'
import { MdDownloading } from 'react-icons/md'
import { BsEmojiFrown } from 'react-icons/bs'

// Components
import PhotoItem from './components/photo-item/photo-item.component'

// Utilities
import { Photo } from './types/photo'

// Styles
import * as C from './App.styles'
import * as Photos from './services/photos'

const App = () => {
  const [upLoading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setUploading(true)
      const result = await Photos.insert(file)
      setUploading(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        const newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name='image'/>
          <input type="submit" value="Enviar"/>
          {upLoading && 'Enviando...'}
        </C.UploadForm>

       {loading &&
          <C.ScreenWarning>
              <div className="icon"><MdDownloading size={30}/></div>
              <div>Carregando...</div>
          </C.ScreenWarning>
       }

       {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) => (
           <PhotoItem key={index} url={item.url} name={item.name}/>
          ))}
        </C.PhotoList>
       }

       {!loading && photos.length === 0 &&
          <C.ScreenWarning>
              <div className="icon"><BsEmojiFrown size={30}/></div>
              <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
       }
      </C.Area>
    </C.Container>
  )
}

export default App

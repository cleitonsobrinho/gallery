import { useState, useEffect } from 'react'
import * as C from './App.styles'
import getAll from './services/photos'
import { Photo } from './types/photo'
import { MdDownloading } from 'react-icons/md'
import { BsEmojiFrown } from 'react-icons/bs'
import PhotoItem from './components/photo-item/photo-item.component'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {/* { Área de upload } */}

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

import { createContext, ReactNode, useState } from 'react'
import { Photo } from '../types/photo'
import * as Photos from '../services/photos'

interface IProps {
    children: ReactNode
}
interface IPhotosContext {
    photos: Photo[]
    setPhotos: (newState: Photo[]) => void
    upLoading: boolean
    setUploading: (newState: boolean) => void
    loading: boolean
    setLoading: (newState: boolean) => void
    getPhotos: () => Promise<void>
  }

export const PhotosContext = createContext<IPhotosContext>({
  photos: [],
  setPhotos: () => {},
  upLoading: false,
  setUploading: () => {},
  loading: false,
  setLoading: () => {},
  getPhotos: () => Promise.resolve()
})

const PhotosContextProvider = ({ children }:IProps) => {
  const [upLoading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  const getPhotos = async () => {
    setLoading(true)
    setPhotos(await Photos.getAll())
    setLoading(false)
  }

  return (
      <PhotosContext.Provider
        value={{ upLoading, setUploading, loading, setLoading, photos, setPhotos, getPhotos }}>
        {children}
      </PhotosContext.Provider>
  )
}

export default PhotosContextProvider

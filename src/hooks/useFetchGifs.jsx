import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    try {
      const newImages = await getGifs(category)
      setImages(newImages)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    getImages()
    
  }, [])

  return { images, isLoading }
}

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired
}
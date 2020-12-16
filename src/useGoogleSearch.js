import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = '9528ce1c57b375f21'

const useGoogleSearch = (term) => {
   const [data, setData] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
               setData(result)
            })
      }
      fetchData()
   }, [term]) // <= data layer

   return { data }
}

export default useGoogleSearch
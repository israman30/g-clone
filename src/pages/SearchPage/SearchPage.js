import React from 'react'
import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'
import './SearchPage.css'

export default function SearchPage() {

   const [{ term }, dispatch] = useStateValue()
   const { data } = useGoogleSearch(term)
   console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage__header">
         <h1>{term}</h1>
      </div>
      <div className="searchPage__reuslt"></div>
    </div>
  )
}

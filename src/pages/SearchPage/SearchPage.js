import React from 'react'
import { useStateValue } from '../../StateProvider'
import './SearchPage.css'

export default function SearchPage() {

   const [{ term }, dispatch] = useStateValue()
  return (
    <div className="searchPage">
      <div className="searchPage__header">
         <h1>{term}</h1>
      </div>
      <div className="searchPage__reuslt"></div>
    </div>
  )
}

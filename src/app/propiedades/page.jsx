"use client"

import React from 'react'
import FiltrosPropiedades from '../components/Propiedades/FiltrosPropiedades/FiltrosPropiedades'
import CardPropiedades from '../components/Propiedades/CardPropiedades/CardPropiedades'
import Pagination from '../components/Pagination/Pagination'

function Propiedades() {
  return (
    <div className='pb-3 mt-2 container-fluid'>
      <FiltrosPropiedades/>
      {/* <CardPropiedades/>
      <CardPropiedades/>
      <CardPropiedades/> */}
      <div className='pt-3'>
        <Pagination/>
      </div>
    </div>
  )
}

export default Propiedades
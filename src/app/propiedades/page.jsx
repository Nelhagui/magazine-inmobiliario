"use client"

import React from 'react'
import FiltrosPropiedades from '../components/Propiedades/FiltrosPropiedades/FiltrosPropiedades'
import CardPropiedades from '../components/Propiedades/CardPropiedades/CardPropiedades'
import Pagination from '../components/Pagination/Pagination'
import TabPropiedades from '../components/Home/Tabs/TabPropiedades'

function Propiedades() {
  return (
    <div className='pb-3 mt-2 container-fluid'>
      <FiltrosPropiedades/>
      <CardPropiedades img={"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}/>
      <CardPropiedades img={"https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80"}/>
      <CardPropiedades img={"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80"}/>
      <div className='pt-3'>
        <Pagination/>
      </div>
    </div>
  )
}

export default Propiedades
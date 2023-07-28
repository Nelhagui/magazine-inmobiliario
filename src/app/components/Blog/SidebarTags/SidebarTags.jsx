import React from 'react'

function SidebarTags() {
  return (
    <div className='mt-3 border rounded masLeidos widget bg-white'>
        <div className='text-center'>
            <h3 className='fw-bold mb-0'>Tags</h3>
            <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#e63946"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
        </div>
        <div className='tags pt-3 nota'>
            <a href="/">#Content</a>
            <a href="/">#Abc</a>
            <a href="/">#Hola</a>
            <a href="/">#Content</a>
            <a href="/">#Photo</a>
            <a href="/">#Slide</a>
        </div>
    </div>
  )
}

export default SidebarTags
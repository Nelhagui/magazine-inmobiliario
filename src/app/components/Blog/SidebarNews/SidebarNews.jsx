import React from 'react'

function SidebarNews(props) {
    return (
        <div className='masLeidos bg-white d-flex flex-column justify-content-center border rounded-3 py-4 gap-2'>
            <div className='text-center'>
                <h3 className='fw-bold mb-0'>{props.title}</h3>
                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#e63946"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
            </div>

            <div className='d-flex post post-list mb-2'>
                <div className='thumb circle'>
                    <a href="/blog/nota">
                        <div className="inner">
                            <img width="60" height="60" src="https://images.unsplash.com/photo-1613395079988-fbd90f029d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=439&q=80" alt="" />
                        </div>
                    </a>
                </div>
                <div className='d-flex flex-column details clearfix ps-4 lh-sm gap-1 border-bottom'>
                    <a href="/blog/nota" className='fw-bold efecto-hover'>3 Easy Ways To Make Your iPhone Faster</a>
                    <p>26 August 2022</p>
                </div>
            </div>
            <div className='d-flex post post-list mb-2'>
                <div className='thumb circle'>
                    <a href="/blog/nota">
                        <div className="inner">
                            <img width="60" height="60" src="https://images.unsplash.com/photo-1613395079988-fbd90f029d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=439&q=80" alt="" />
                        </div>
                    </a>
                </div>
                <div className='d-flex flex-column details clearfix ps-4 lh-sm gap-1 border-bottom'>
                    <a href="/blog/nota" className='fw-bold efecto-hover'>3 Easy Ways To Make Your iPhone Faster</a>
                    <p>26 August 2022</p>
                </div>
            </div>
            <div className='d-flex post post-list '>
                <div className='thumb circle'>
                    <a href="/blog/nota">
                        <div className="inner">
                            <img width="60" height="60" src="https://images.unsplash.com/photo-1613395079988-fbd90f029d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=439&q=80" alt="" />
                        </div>
                    </a>
                </div>
                <div className='d-flex flex-column details clearfix ps-4 lh-sm gap-1'>
                    <a href="/blog/nota" className='fw-bold efecto-hover'>3 Easy Ways To Make Your iPhone Faster</a>
                    <p>26 August 2022</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarNews
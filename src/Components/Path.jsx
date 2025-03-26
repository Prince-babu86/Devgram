import React from 'react'

const Path = () => {
  return (
    <div className='py-2 px-4 flex items-center justify-between'>
      <div className="pth  p-2 flex flex-col items-center justify-center">
      <i className="ri-image-2-line text-5xl text-[#F65B53] "></i>
      <h4 className='text-[13px]'>Photos</h4>
      </div>

      <div className="pth  p-2 flex flex-col items-center justify-center">
      <i className="ri-folder-video-line text-5xl text-[#FF8809] "></i>
      <h4 className='text-[13px]'>Video</h4>
      </div>

      <div className="pth  p-2 flex flex-col items-center justify-center">
      <i className="ri-music-ai-line text-5xl text-[#7EBBF5] "></i>
      <h4 className='text-[13px]'>Audio</h4>
      </div>


      <div className="pth  p-2 flex flex-col items-center justify-center">
      <i className="ri-file-pdf-2-line text-5xl text-[#16C5AB] "></i>
      <h4 className='text-[13px]'>Document</h4>
      </div>
    </div>
  )
}

export default Path
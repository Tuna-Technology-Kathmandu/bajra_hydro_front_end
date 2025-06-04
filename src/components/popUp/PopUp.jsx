import React, { useEffect } from 'react'
import { MdCancel } from 'react-icons/md'
import { useGetPopUpQuery } from '../../services/PopUpApi'

const PopUp = ({ show, onClose }) => {
  const { data, error, isLoading } = useGetPopUpQuery({
    page: 1,
    limit: 10,
  })

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  if (!show) return null

  // getting 1st img to show in popuop
  const approvedPopup = data?.popup?.filter(item => item.status === 'approved') || [];

  return (
    <div className='popup-overlay md:px-20 px-10' >
      <div className='popup-content' onClick={e => e.stopPropagation()}>
        {isLoading && !error && <div>Loading...</div>}
        {error && <div>Error! {error.message}</div>}
        {!error && !isLoading && !approvedPopup && (
          <div>No approved popups available</div>
        )}

        {/* popup img displaying */}

                <div className="flex flex-wrap justify-center gap-3 max-h-[90vh] overflow-y-auto">
        {approvedPopup.map((item, index) => (
          <div key={index} className=''>
            <img
              src={item.image}
              alt={item.title || 'Pop Up Image/docs'}
              className='popup-image rounded-xl'
            />
          </div>
        ))}
        </div>

        <button className='close-button' onClick={onClose}>
          <MdCancel className='md:text-[30px] text-[25px]' />
        </button>
      </div>
    </div>
  )
}

export default PopUp

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
  const approvedPopup = data?.popup?.find(item => item.status === 'approved')

  return (
    <div className='popup-overlay px-5' onClick={onClose}>
      <div className='popup-content' onClick={e => e.stopPropagation()}>
        {isLoading && !error && <div>Loading...</div>}
        {error && <div>Error! {error.message}</div>}
        {!error && !isLoading && !approvedPopup && (
          <div>No approved popups available</div>
        )}

        {/* popup img displaying */}
        {approvedPopup && (
          <div className=''>
            <img
              src={approvedPopup.image}
              alt={approvedPopup.title || 'Pop Up Image'}
              className='popup-image rounded'
            />
          </div>
        )}

        <button className='close-button' onClick={onClose}>
          <MdCancel size={20} className='' />
        </button>
      </div>
    </div>
  )
}

export default PopUp

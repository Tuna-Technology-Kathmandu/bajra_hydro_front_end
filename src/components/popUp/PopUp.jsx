import React, { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useGetPopUpQuery } from '../../services/PopUpApi';

const PopUp = ({ show, onClose }) => {
  const { data, error, isLoading } = useGetPopUpQuery({
    page: 1,
    limit: 10,
  });

  const approvedPopup = data?.popup?.filter(item => item.status === 'approved') || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // showing 1st popup when component mounts and data is ready
  useEffect(() => {
    if (show && approvedPopup.length > 0) {
      setCurrentIndex(0);
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show, approvedPopup.length]);

  const handleClose = () => {
    setVisible(false);

    if (currentIndex < approvedPopup.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setVisible(true); // showing next popup
      }, 300);
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        onClose();
      }, 300);
    }
  };

  if (!show || !visible || !approvedPopup[currentIndex]) return null;

  return (
    <div className="popup-overlay md:px-20 px-10">
      <div className="popup-content relative" onClick={e => e.stopPropagation()}>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error! {error.message}</div>}
        {!isLoading && !error && (
          <>
            <img
              src={approvedPopup[currentIndex].image}
              alt={approvedPopup[currentIndex].title || 'Pop Up'}
              className="popup-image rounded-xl max-h-[80vh] mx-auto"
            />
            <button
              className="close-button absolute top-2 right-2"
              onClick={handleClose}
            >
              <MdCancel className="md:text-[30px] text-[25px]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PopUp;

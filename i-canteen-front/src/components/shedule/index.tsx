<<<<<<< HEAD
import React, { useState } from 'react';
import DataSchedule from './Data';
import harmonogramText from '../../assets/Harmonogram.svg';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
=======
import DataShedule from './Data';
import harmonogramText from '../../assets/Harmonogram.svg'
>>>>>>> c0785b2599d13a3dc0b13c5c1fbd16f580fa05b4

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ mealSet: '', allergens: '' });

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img src={harmonogramText} alt="" className='mt-[100px]' />
      <section className='w-[80%] mx-auto mt-[-50px] mb-[100px]'>
        <div className='relative text-[30px] text-black bg-[#3279D3] rounded-xl p-[15px] '>
          <div className='bg-[#3279D3] w-[75%] md:w-[45%] mx-auto rounded-full text-white absolute md:relative top-[-35px]  shadow-md left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0'>
            <h1 className='text-center p-2 font-extrabold text-[24px] md:text-[34px]'>Jadłospis</h1>
          </div>
          <div className='bg-white mt-[40px] md:mt-[50px] flex justify-center items-center w-[95%] mx-auto rounded-md'>
            <table className='table-auto w-full'>
              <thead className='border-b'>
                <tr>
                  <th className='px-4 py-2 text-[24px] text-center w-[22.5%]'>Data</th>
                  <th className='px-4 py-2 text-[24px] text-center w-[55%] hidden md:table-cell'>Zestaw obiadowy</th>
                  <th className='px-4 py-2 text-[24px] text-center w-[22.5%] hidden md:table-cell'>Alergeny</th>
                </tr>
              </thead>
              <tbody>
                {DataSchedule.map((item, index) => (
                  <tr key={index}>
                    <td className='px-4 py-2 text-[21px] text-center w-1/4 border-b border-r cursor-pointer'
                        onClick={() => handleOpenModal(item)}>
                      {item.date}
                    </td>
                    <td className='px-4 py-2 text-[21px] text-center w-1/2 border-b border-r hidden md:table-cell'>
                      {item.mealSet}
                    </td>
                    <td className='px-4 py-2 text-[21px] text-center w-1/4 border-b hidden md:table-cell'>
                      {item.allergens}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Szczegóły posiłku
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Zestaw obiadowy: {selectedItem.mealSet}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Alergeny: {selectedItem.allergens}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px',
};

export default Schedule;

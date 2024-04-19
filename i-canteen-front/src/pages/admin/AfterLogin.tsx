import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MultipleDatesPicker from '@ambiot/material-ui-multiple-dates-picker'

const SimpleForm = () => {
  const [open, setOpen] = useState(false)

  const submit = (dates:Date[]) =>{
    fetch("/api/v1/consumers")
    .then(() => console.log(dates))
    setOpen(false)
  }

  return (
    <section className='mt-[200px] mb-[100px]'>
      <div className='w-[95%] md:w-[55%] h-[38vh] px-[65px] py-[25px]  mx-auto shadow-xl'>
        <h1 className='text-[25px] mt-[40px] mb-[30px] font-bold'>Zakup Obiady</h1>
        <div className='flex items-center'>
          <TextField label={`Podaj kod`}/>
          <Button onClick={() => setOpen(!open)}>
              Select Dates
          </Button>
        </div>
        <MultipleDatesPicker

            open={open}
            selectedDates={[]}
            onCancel={() => setOpen(false)}
            onSubmit={submit}
            submitButtonText={"Kup"}
            cancelButtonText={"Zamknij"}
            selectedDatesTitle={"Daty Obiadów"}
        />
      </div>
    </section>
  );
}

export default SimpleForm;

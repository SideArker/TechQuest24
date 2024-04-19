import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MultipleDatesPicker from '@ambiot/material-ui-multiple-dates-picker'
import { Button } from '@mui/material';


const Account = () => {
    const { login } = useParams();
    const [open, setOpen] = useState(false)

    const [userData, setUserData] = useState(null);
    const [calendarData, setCalendarData] = useState(null);
    React.useEffect(() => {
        fetch(`/api/v1/consumers/${login}`)
        .then((res) => res.json())
        .then((userData) => setUserData(userData.name));
        }, [])
    React.useEffect(() => {
        fetch(`/api/v1/meals/${login}`)
        .then((res) => res.json())
        .then((calendarData) => setCalendarData(calendarData.days));
        }, [])
  return (
    <section  className='bg-[#265da6] h-[75vh] md:h-[90vh] z-[-1] flex justify-center items-center'>
        <p>{!userData ? "Loading..." : userData}</p>
        <p>{calendarData}</p>
        <Button onClick={() => setOpen(!open)}>
            Select Dates
        </Button>
        <MultipleDatesPicker
            open={open}
            selectedDates={[]}
            onCancel={() => setOpen(false)}
            onSubmit={dates => console.log('selected dates', dates)}
        />
    </section>
  );
};

export default Account;

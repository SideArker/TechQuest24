import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MultipleDatesPicker from '@ambiot/material-ui-multiple-dates-picker';
import { Button, Typography, Box, Chip } from '@mui/material';

const Account = () => {
    const { login } = useParams();
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        fetch(`/api/v1/consumers/${login}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }, [login]);

    useEffect(() => {
        fetch(`/api/v1/meals/${login}`)
        .then((res) => res.json())
        .then((data) => setSelectedDates(data.days.map(day => new Date(day))));
    }, [login]);

    const handleDateSubmit = (dates) => {
        console.log('selected dates', dates);
        setSelectedDates(dates);
        setOpen(false);
    };

    return (
        <section className='bg-[#265da6] h-[75vh] md:h-[90vh] z-[-1] flex flex-col justify-center items-center text-white p-5'>
            {!userData ? (
                <Typography variant="h5" gutterBottom>Loading...</Typography>
            ) : (
                <Box>
                    <Typography variant="h4" gutterBottom>{`${userData.name} ${userData.surname}`}</Typography>
                    {selectedDates.map((date, index) => (
                        <Chip
                            key={index}
                            label={date.toLocaleDateString()}
                            onDelete={() => setSelectedDates(selectedDates.filter((d) => d !== date))}
                            className="m-1"
                        />
                    ))}
                </Box>
            )}
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                className='mt-3 '
                color="primary"
            >
                Sprawdź obiady
            </Button>
            <MultipleDatesPicker
                open={open}
                selectedDates={[
                    new Date("2024-04-11"),
                    new Date("2024-04-12"),
                    new Date("2024-04-15"),
                    new Date("2024-04-16"),
                    new Date("2024-04-17"),
                    new Date("2024-04-18"),
                ]}
                readOnly
                onCancel={() => setOpen(false)}
                onSubmit={handleDateSubmit}
            />

                
        </section>
    );
};

export default Account;

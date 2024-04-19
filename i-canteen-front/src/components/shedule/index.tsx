import DataShedule from './Data';
import harmonogramText from '../../assets/Harmonogram.svg'

import { MantineProvider } from '@mantine/core';
import ScheduleResponsive from './ScheduleResponsive';

const Schedule = () => {

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
                            <th className='px-4 py-2 text-[24px] text-center w-[22.5%]'>data</th>
                            <th className='px-4 py-2 text-[24px] text-ceter w-[55%] hidden md:table-cell'>zestaw obiadowy</th>
                            <th className='px-4 py-2 text-[24px]  text-ceter w-[22.5%] hidden md:table-cell'>alergeny</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {DataShedule.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='px-4 py-2 text-[21px] text-center w-1/4 border-b border-r'>{item.date}</td>
                                    <td className='px-4 py-2 text-[21px] text-center w-1/2 border-b border-r hidden md:table-cell'>{item.mealSet}</td>
                                    <td className='px-4 py-2 text-[21px] text-center w-1/4 border-r border-b hidden md:table-cell'>{item.allergens}</td>
                                </tr>   
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        </section>
    </>
  )
}

export default Schedule
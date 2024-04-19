import DataShedule from './Data'

const Schedule = () => {
  return (
    <section className='w-[80%] mx-auto mt-[13vh] mb-[100px]'>
        <div className='relative text-[30px] text-black bg-[#3279D3] rounded-xl p-[15px] '>
            <div className='bg-[#3279D3] w-[45%] mx-auto rounded-full text-white absolute top-[-35px] shadow-md left-[27.5%]'>
                <h1 className='text-center p-2 font-extrabold text-[34px]'>Jadłospis</h1>
            </div>
            <div className='bg-white mt-[50px] flex justify-center items-center w-[95%] mx-auto rounded-md'>
            <table className='table-auto w-full'>
                <thead className='border-b'>
                    <tr>
                        <th className='px-4 py-2 text-[24px] text-center w-[22.5%]'>data</th>
                        <th className='px-4 py-2 text-[24px] text-ceter w-[55%]'>zestaw obiadowy</th>
                        <th className='px-4 py-2 text-[24px]  text-ceter w-[22.5%]'>alergeny</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {DataShedule.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className='px-4 py-2 text-[21px] text-center w-1/4 border-b border-r'>{item.date}</td>
                                <td className='px-4 py-2 text-[21px] text-center w-1/2 border-b border-r'>{item.mealSet}</td>
                                <td className='px-4 py-2 text-[21px] text-center w-1/4 border-r border-b'>{item.allergens}</td>
                            </tr>   
                        );
                    })}
                </tbody>
            </table>
           </div>
        </div>
    </section>
  )
}

export default Schedule
import React from 'react'
import wave from "../../assets/wave.svg"
import dinner from "../../assets/eating.svg"
import study from "../../assets/education.svg"

const Hero = () => {
  return (
    <section className='bg-[#265da6] h-[75vh] md:h-[90vh] relative z-[-1] flex justify-center items-center'>
        <img src={wave} alt="wave effect" className='absolute bottom-0 z-[1]' />
        <div className='justify-between hidden md:flex mw-[100%] md:w-[90%] absolute bottom-0 z-[199]'>
            <img src={dinner} alt="dinner" className='w-[300px] h-[250px] bottom-0' />
            <img src={study} alt="dinner" className='w-[400px] h-[250px]' />
        </div>
        <div className='w-[98%] md:w-[47%] h-[150px] p-[20px] z-[150] mt-[-105px] md:mt-[-200px]'>
            <h1 className='text-center text-white text-[28px] md:text-[42px] font-black md:tracking-wider'>Witaj uczniu!</h1>
            <p className='text-white text-[17px] md:text-[19px] text-center p-3'>
                Odkryj szkolną stołówkę na nowo! 🍽️ Zamawiaj pyszne i zdrowe obiady 🥗 za kilka kliknięć - oszczędność i komfort w zasięgu ręki. 📚💸
            </p>
            </div>
    </section>
  )
}

export default Hero
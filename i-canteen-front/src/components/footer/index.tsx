import logoZst from "../../assets/zst-logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#265da6] text-white p-[20px] w-full">
        <div className="w-[85%] mx-auto">
            <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <img src={logoZst} alt="logoZst" className="w-[200px]" />
                </div>
                <p className="text-center">Copyright © 2024. Zespół Szkół Technicznych w Leżajsku</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
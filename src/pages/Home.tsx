import avatar from "../assets/avatar.png"
import javascript from "../assets/icons/javascript.png"
import typescript from "../assets/icons/typescript.png"
import react from "../assets/icons/react.png"
import node from "../assets/icons/node.png"
import tailwind from "../assets/icons/tailwind.png"

function Home() {

    const icons = [javascript, typescript, react, node, tailwind]
    return (
        <div className="w-screen h-screen bg-[#212529] overflow-x-hidden">
            <div className="flex items-center gap-2 flex-col justify-center">
                <img src={avatar} alt="" className="w-56 h-62" />
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-poppins text-[#FCA311] font-medium text-3xl">Víctor Eduardo S. Costa</p>
                    <p className="font-poppins text-[#E5E5E5] italic text-md">Fullstack Developer</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="font-poppins text-[#E5E5E5] font-semibold mt-6 text-lg">About me</h1>
                    <p className="font-poppins text-[#E5E5E5] italic w-[90%] text-clip">Graduated as a Systems Development technician and studying Software Engineering, I have knowledge in programming languages ​​for software development, databases and web applications. Ability to solve problems and learn quickly, I look for opportunities to apply and complement my knowledge in the area of ​​technology.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="font-poppins text-[#E5E5E5] font-semibold mt-6 text-lg">Knowledge</h1>
                    <div className="flex gap-2">
                        {icons.map((image) => (
                            <img src={image} alt='icon' className="w-12 h-10" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
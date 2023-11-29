import { TbUserSquareRounded } from "react-icons/tb";

export default function Navbar(){
    return(
        <>
            <section className="bg-blue-500 text-white h-[90px] flex justify-between items-center gap-3 px-10">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-3xl">
                            Logo.
                        </h1>
                    </div>
                    <div>
                        Home
                    </div>
                    <div>
                        Support
                    </div>
                </div>
                <div>
                    <button className="btn bg-blue-500 text-white px-1 py-1">
                        <TbUserSquareRounded className="text-2xl" /> Login
                    </button>
                </div>
            </section>
        </>
    )
}
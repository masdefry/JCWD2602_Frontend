import { CiShoppingCart } from "react-icons/ci";

export default function Navbar(){
    return(
        <nav>
            <div className="height-[30px] pl-3">
                 <h1 className="text-xl">
                    Prepps Studio
                 </h1>
            </div>
            <div className="bg-red-700 text-white px-3 flex justify-between items-center">
                <div className="flex items-center gap-24">
                    <div>
                        <img src="https://preppstudio.com/assets/prepp-studio-5609aeb0.png" width="130px" height="130px" />
                    </div>
                    <div>
                        HOT ITEMS 
                    </div>
                    <div>
                        MONOLITE SHIRT
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <CiShoppingCart className="text-white text-5xl" />
                        <span className="absolute top-[-5px] right-0 bg-white text-black rounded-full px-2 py-1 text-xs">
                            1
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
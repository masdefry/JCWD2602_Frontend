import RegisterForm from "../../Components/RegisterForm"

export default function Register(){
    return(
        <div className="flex justify-center bg-gray-100">
            <form className="w-[500px]">
                <RegisterForm type="text" label="Username" />
                <RegisterForm type="text" label="Email" />
                <RegisterForm type="password" label="Password" />
                <RegisterForm type="password" label="Confirm Password" />
            </form>
        </div>
    )
}
export default function RegisterForm(props){
    return(
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input type={props.type} placeholder={`Type ${props.label}`} className="input input-bordered input-error w-full" />
        </div>
    )
}
export default function InputComponent(props){
    return(
        <label className="form-control w-full pt-2">
            <div className="label">
                <span className="label-text">Fill your {props.label}:</span>
            </div>
            <input ref={props.inputRef} type={props.type} placeholder="Type here" className="input input-bordered w-full" />
            <div className="label">
                {/* <span className="label-text-alt">Bottom Left label</span> */}
            </div>
        </label>
    )
}
export default function Child(props){
    return(
        <h1>
            Child
            {props.name}
            <h1>
                {props.hobby}
            </h1>
            <h1>
                {props.obj.activity}
            </h1>
        </h1>
    )
}
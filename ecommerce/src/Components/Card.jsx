export default function Card(props){
    return(
        <div className="card bg-base-100 shadow-xl">
            <figure className="relative">
                <img src={props.data.image} />
                <button className="btn bg-neutral bg-opacity-50 text-white outline-white absolute bottom-10 right-10">Quick View</button>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.data.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link"

const db = [
    {id: 1, name: 'erigo-hoodie'},
    {id: 2, name: 'erigo-hoodie-pink'}
]

export default function Navbar(){
    return(
        <nav>
            
            <Link href='/'>
                <span>
                    Home 
                </span>
            </Link>
            <Link href='/profile'>
                <span>
                    Profile 
                </span>
            </Link>
            {
                db.map(item => {
                    return(
                        <Link href={`/product/${item.name}`}>
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    )
                })
            }
        </nav>
    )
}
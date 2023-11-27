import Image from 'next/image'

export default function Gambar(){
    return(
        <div style={{backgroundColor: 'black'}}>
            <Image 
                src="https://www.purwadhika.com/static/brand/logopwdk-text-white.png"
                width={370}
                height={56}
            />
        </div>
    )
}
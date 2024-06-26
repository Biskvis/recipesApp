'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';



export default function Card(props) {

    const router = useRouter();
    const instructions = props.body
    
    return(
        <div className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 max-h-96">
        <div
            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
            src={`/${props.imgId}.jpg`}
            width={300}
            height={100}
            style={{  height: "auto" }} 
            className="w-[32rem]"
            alt="card-image"
          />
            
        </div>
        <div className="p-6">
            <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 max-h-10">
            {props.name}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {typeof instructions === 'string' ? instructions.slice(0, 150) : ''}
            </p>
        </div>
        <div className="p-6 pt-0">
            <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-yellow-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={() => router.push('/recipe/' + props.url)}
            >
            Recipe
            </button>
        </div>
        </div>  
    )
}
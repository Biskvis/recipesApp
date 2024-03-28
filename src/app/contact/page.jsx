import Link from 'next/link';
export default function Page() {

    return (
        
    <div className="grid place-content-center mt-20">
        <Link href="https://github.com/Biskvis" className='text-xl p-4 bg-yellow-600 text-white hover:text-black rounded-lg'>Github</Link>
        <Link href="mailto:turintis12@gmail.com" className='text-xl p-4 bg-yellow-600 mt-4 text-white hover:text-black rounded-lg'>Email</Link>
    </div>
    )
}
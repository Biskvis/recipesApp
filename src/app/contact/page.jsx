import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        
<div className="flex items-center mt-20 w-full justify-center">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Deividas Lileikis</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">Kaunas</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">+370 639 20596</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">turintis12@gmail.com</td>
                </tr>
            
            </tbody>
            
            </table>
                <Link href="https://github.com/Biskvis"
                >
                <div className="photo-wrapper">
                    <Image
                        src={`/github.png`}
                        width={32}
                        height={32}
                        className=""
                        alt="card-image"
                    />
                </div>
                    </Link>
        </div>
    </div>
</div>

</div>
    )
}
import Link from 'next/link';


export default function Home() {



  return (
    <div className="container mx-auto px-4 py-8 ">
    <h1 className="text-center text-3xl font-bold mb-4 ">Welcome to Our Recipes Website</h1>
    <p className="text-center text-lg mb-6">Discover a world of delicious baked goods!</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/recipes?query=cake">
            <div className="bg-yellow-600 rounded-lg p-4 hover:bg-yellow-400 transition duration-300 ease-in-out cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">Cakes</h2>
                <p>Indulge in our selection of mouthwatering cakes.</p>
            </div>
        </Link>
        <Link href="/recipes?query=cookie">
            <div className="bg-yellow-600 rounded-lg p-4 hover:bg-yellow-400 transition duration-300 ease-in-out cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">Cookies</h2>
                <p>Try our assortment of delightful cookies.</p>
            </div>
        </Link>
        <Link href="/recipes?query=pie">
            <div className="bg-yellow-600 rounded-lg p-4 hover:bg-yellow-400 transition duration-300 ease-in-out cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">Pies</h2>
                <p>Explore our collection of heavenly pies.</p>
            </div>
        </Link>
    </div>
</div>
  );
}

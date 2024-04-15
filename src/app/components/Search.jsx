'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`/recipes?${params.toString()}`);
        
    }

    return (
        <input
            type="text"
            placeholder="Search..."
            className="rounded-lg text-center mr-auto hidden md:block bg-white"
            onChange={(e) => {
                handleSearch(e.target.value);
              }}
            defaultValue={searchParams.get('query')?.toString()}

        />
    )
}
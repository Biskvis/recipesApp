import Cards from '@/components/Cards.jsx'

import { sql } from '@vercel/postgres';

let data = await sql`
  SELECT id, recipe_url, recipe_name, ingredients, recipe_body
  FROM recipes
  ORDER BY created_at DESC
  LIMIT 10
`;

export default function Page({ searchParams }) {
    const query = searchParams.query || '';

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='p-8 flex flex-col justify-center items-center max-w-screen-xl'>
                <Cards data={data} query={query} />
                
            </div>
      </div>
    )
}
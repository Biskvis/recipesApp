import { sql } from "@vercel/postgres";
import "/src/app/globals.css";
import Navlink from '/src/app/components/Navlink'
import Image from 'next/image';



export const getStaticPaths = async () => {
    const res = await sql`
  SELECT id
  FROM recipes
  ORDER BY created_at DESC
  LIMIT 8
`;
  const data = await res;
  const paths = data.rows.map(v => {
    return {
      params: {id: v.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await sql`
    SELECT id, recipe_url, recipe_name, ingredients, recipe_body
    FROM recipes
    WHERE id = ${id}
  `;

  const recipe = await res.rows; // Assuming only one recipe will be returned

    return {
        props: { recipe: recipe}
    }
}

const Details = ({ recipe }) => {
    return (
        <>
        <Navlink />
        <div className="block m-auto  max-w-screen-xl">
            <h1 className="text-3xl font-bold text-center p-6">{recipe[0].recipe_name}</h1>
            <br />
            <div className="flex justify-center items-center p-6">

            <Image
            src={`/${recipe[0].id}.jpg`}
            width={400}
            height={300}
            className="hidden md:block p-6"
            alt="card-image"
          />
            <p className="text-2xl">{recipe[0].ingredients}</p>
            </div>
            <br />
            <p className="text-2xl">{recipe[0].recipe_body}</p>
        </div>
        </>
    )
}

export default Details;
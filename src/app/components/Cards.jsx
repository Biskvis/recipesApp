import Card from './Card.jsx'



export default function Cards(props) {
    
    const filteredRows = props.data.rows.filter(v =>
        v.recipe_name.toLowerCase().includes(props.query.toLowerCase())
    );

    
    const cardArray = filteredRows.map(v =>
        <Card key={v.recipe_name} name={v.recipe_name} imgId={v.id} ingredients={v.ingredients} body={v.recipe_body} url={v.id}/>
    );
        
    return (
        <>
        <div className='grid place-content-center md:flex flex-row p-8'>
            {cardArray.slice(0,4)}
        </div>
        <div className='grid place-content-center md:flex flex-row p-8'>{cardArray.slice(4,8)}</div>
        </>
    );
}

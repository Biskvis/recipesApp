import Card from './components/Card.jsx'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
      <div className='p-8 flex justify-center items-center max-w-screen-xl'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='p-8 flex max-w-screen-xl'>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      </div>
    </main>
  );
}

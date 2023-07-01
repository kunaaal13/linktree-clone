import data from '../utils/cms'
import Card from './Card'

function Socials() {
  return (
    <div className='w-full my-16 flex items-center justify-center'>
      <div className='w-5/6 md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((social) => (
          <Card key={social.id} social={social} />
        ))}
      </div>
    </div>
  )
}

export default Socials

import { motion } from 'framer-motion'
import { Social } from '../typings'

type props = {
  social: Social
}

const cardVariants = {
  initial: {
    scale: 0.5,
  },
  animate: {
    scale: 1,

    transition: {
      type: 'spring',
      stiffness: 260,
      duration: 0.5,
    },
  },
}

function Card({ social }: props) {
  return (
    <a href={social.url}>
      <motion.div
        key={social.id}
        variants={cardVariants}
        initial='initial'
        animate='animate'
        className='rounded-lg overflow-hidden cursor-pointer'
      >
        <div
          style={{
            color: social.color,
            background: social.gradient,
          }}
          className={`w-full py-6 flex rounded-lg items-center justify-center bg-gradient-to-r from-red-500 to-yellow-500`}
        >
          <social.icon className='h-12 w-12' />
        </div>

        <div className='p-2'>
          <h2 className='font-medium text-xl'>{social.title}</h2>

          <p className='text-sm text-gray-400'>{social.description}</p>
        </div>
      </motion.div>
    </a>
  )
}

export default Card

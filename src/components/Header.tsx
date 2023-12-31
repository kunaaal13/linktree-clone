import { motion } from 'framer-motion'
import animationVariants from '../utils/animations'

function Header() {
  return (
    <div className='text-white flex flex-col items-center justify-center'>
      <motion.div
        variants={animationVariants}
        initial='initial'
        animate='animate'
      >
        <img src='/pfp.png' alt='Kunaaal' className='rounded-full h-28 w-28' />
      </motion.div>

      <div className='mt-6 text-center space-y-2 px-2'>
        <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
          Kunaaal
        </h1>

        <h3 className='text-lg'>
          Building beautiful and seamless web experiences.
        </h3>
      </div>
    </div>
  )
}

export default Header

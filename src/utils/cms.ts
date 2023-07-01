import {
  SiGithub,
  SiHashnode,
  SiLinkedin,
  SiMaildotru,
  SiNextdotjs,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si'
import { Social } from '../typings'

const data: Social[] = [
  {
    id: '1',
    title: 'Portfolio',
    description: 'My personal portfolio',
    url: 'https://kunaaal13.vercel.app/',
    icon: SiNextdotjs,
    color: 'white',
    gradient:
      'linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))',
  },
  {
    id: '2',
    title: 'GitHub',
    description: '@kunaaal13',
    url: 'https://github.com/kunaaal13/',
    icon: SiGithub,
    color: 'black',
    gradient:
      'linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219))',
  },
  {
    id: '3',
    title: 'YouTube',
    description: '@kunaaal13',
    url: 'https://www.youtube.com/@kunaaal13',
    icon: SiYoutube,
    color: 'white',
    gradient: 'linear-gradient(to right, rgb(239, 68, 68), rgb(153, 27, 27))',
  },
  {
    id: '4',
    title: 'Twitter',
    description: '@kunaaal13',
    url: 'https://twitter.com/kunaaal13/',
    icon: SiTwitter,
    color: 'white',
    gradient: 'linear-gradient(to right, rgb(56, 189, 248), rgb(59, 130, 246))',
  },
  {
    id: '5',
    title: 'LinkedIn',
    description: '@kunaaal13',
    url: 'https://www.linkedin.com/in/kunalyadav1308',
    icon: SiLinkedin,
    color: 'white',
    gradient: 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))',
  },
  {
    id: '6',
    title: 'Hashnode',
    description: '@kunaaal13',
    url: 'https://kunaaal13.hashnode.dev/',
    icon: SiHashnode,
    color: 'white',
    gradient:
      'linear-gradient(to right, rgb(251, 146, 60), rgb(251, 113, 133))',
  },
  {
    id: '7',
    title: 'Mail',
    description: 'kunaaal.rao@gmail.com',
    url: 'mailto:kunaaal.rao@gmail.com',
    icon: SiMaildotru,
    color: 'white',
    gradient:
      'linear-gradient(to right, rgb(244, 63, 94), rgb(248, 113, 113), rgb(239, 68, 68))',
  },
]

export default data

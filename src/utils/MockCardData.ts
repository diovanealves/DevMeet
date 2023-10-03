import ServerlessIcon from '../assets/ServerlessIcon.png'
import FrontEndIcon from '../assets/FrontEndIcon.png'
import GitandDevOps from '../assets/GitandDevOps.png'
import AgileIcon from '../assets/AgileIcon.png'
import InterfaceIcon from '../assets/InterfaceIcon.png'
import LinuxIcon from '../assets/LinuxIcon.png'
import DesignIcon from '../assets/DesignIcon.png'
import MobileIcon from '../assets/MobileIcon.png'

const cardData = [
  {
    id: '1',
    icon: ServerlessIcon,
    title: 'Serverless',
    events: [
      { id: 1, name: 'Serverless', description: 'Evento 1' },
      { id: 2, name: 'Serverless', description: 'Evento 1' },
    ],
  },
  {
    id: '2',
    icon: FrontEndIcon,
    title: 'Desenvolvimento Front-end',
    events: [{ id: 1, name: 'Front-end', description: 'Evento 1' }],
  },
  {
    id: '3',
    icon: GitandDevOps,
    title: 'Git e DevOps',
    events: [{ id: 1, name: 'Git Push', description: 'Evento 1' }],
  },
  {
    id: '4',
    icon: AgileIcon,
    title: 'Agile e gestão de projetos',
    events: [{ id: 1, name: 'Gerindo Projetos', description: 'Evento 1' }],
  },
  {
    id: '5',
    icon: InterfaceIcon,
    title: 'Construindo Interfaces',
    events: [{ id: 1, name: 'Interfaces em java', description: 'Evento 1' }],
  },
  {
    id: '6',
    icon: LinuxIcon,
    title: 'Servidores Linux',
    events: [
      { id: 1, name: 'Subindo um servidor na nuvem', description: 'Evento 1' },
    ],
  },
  {
    id: '7',
    icon: DesignIcon,
    title: 'Design de Interfaces',
    events: [{ id: 1, name: 'Design', description: 'Evento 1' }],
  },
  {
    id: '8',
    icon: MobileIcon,
    title: 'Desenvolvimento Mobile',
    events: [{ id: 1, name: 'React-native', description: 'Evento 1' }],
  },
]

const cardDataWithEventsCounts = cardData.map((card) => ({
  ...card,
  eventsCount: card.events.length,
}))

export { cardDataWithEventsCounts }

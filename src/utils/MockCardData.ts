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
      {
        id: 1,
        name: 'Serverless',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '2',
    icon: FrontEndIcon,
    title: 'Desenvolvimento Front-end',
    events: [
      {
        id: 1,
        name: 'Desenvolvimento Front-end',
        description: 'Evento 1',
        date: '07/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '3',
    icon: GitandDevOps,
    title: 'Git e DevOps',
    events: [
      {
        id: 1,
        name: 'Git e DevOps',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '4',
    icon: AgileIcon,
    title: 'Agile e gestão de projetos',
    events: [
      {
        id: 1,
        name: 'Agile',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '5',
    icon: InterfaceIcon,
    title: 'Construindo Interfaces',
    events: [
      {
        id: 1,
        name: 'Construindo Interfaces',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '6',
    icon: LinuxIcon,
    title: 'Servidores Linux',
    events: [
      {
        id: 1,
        name: 'Servidores Linux',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '7',
    icon: DesignIcon,
    title: 'Design de Interfaces',
    events: [
      {
        id: 1,
        name: 'Design de Interfaces',
        description: 'Evento 1',
        date: '06/OUT',
        hour: '20:00',
        organizer: 'Comunidade Ballerini',
      },
    ],
  },
  {
    id: '8',
    icon: MobileIcon,
    title: 'Desenvolvimento Mobile',
    events: [],
  },
]

const cardDataWithEventsCounts = cardData.map((card) => ({
  ...card,
  eventsCount: card.events.length,
}))

export { cardDataWithEventsCounts }

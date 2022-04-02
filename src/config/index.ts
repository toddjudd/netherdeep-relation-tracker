import { Rival } from '@/features/rivals';

const API_URL = process.env.REACT_APP_API_URL as string;

export const Rivals: Rival[] = [
  {
    name: 'Ayo Jabe',
    relations: [
      {
        character: 'Ayo Jabe',
        player: 'Fjord Stone',
        hostile: false,
        indifferent: true,
        friendly: false,
      },
    ],
    goals: [
      'Become a hero like the ones she has read about in stories.',
      'Make a friend she can be truly herself around.',
      'Kill a legendary monster',
    ],
    imgSrc:
      'https://media.dndbeyond.com/compendium-images/cotn/HJ1ybS42ooBqdXzF/00-003.ayo-jabe.png',
  },
  {
    name: 'Dermot Wurder',
    relations: [
      {
        character: 'Dermot Wurder',
        player: 'Fjord Stone',
        hostile: false,
        indifferent: true,
        friendly: false,
      },
    ],
    goals: [
      'Protect his friends.',
      'Have a life-changing holy vision.',
      'Discover that he has value himself, not just as someone who can help others',
    ],
    imgSrc:
      'https://media.dndbeyond.com/compendium-images/cotn/HJ1ybS42ooBqdXzF/00-004.dermot-wurder.png',
  },
  {
    name: 'Galsariad Ardyth',
    relations: [
      {
        character: 'Galsariad Ardyth',
        player: 'Fjord Stone',
        hostile: false,
        indifferent: true,
        friendly: false,
      },
    ],
    goals: [
      'Match wits with an archmage.',
      'Discover a magical secret no one else knows.',
      'Be respected by someone he respects',
    ],
    imgSrc:
      'https://media.dndbeyond.com/compendium-images/cotn/HJ1ybS42ooBqdXzF/00-005.galsariad-ardyth.png',
  },
  {
    name: 'Irvan Wastewalker',
    relations: [
      {
        character: 'Irvan Wastewalker',
        player: 'Fjord Stone',
        hostile: false,
        indifferent: true,
        friendly: false,
      },
    ],
    goals: [
      'Experience things he has never encountered before.',
      "Fall in love with someone who doesn't know about his past lifetime.",
      'Appear mature despite his youthful appearance',
    ],
    imgSrc:
      'https://media.dndbeyond.com/compendium-images/cotn/HJ1ybS42ooBqdXzF/00-006.irvan-wastewalker.png',
  },
  {
    name: 'Maggie Keeneyes',
    relations: [
      {
        character: 'Maggie Keeneyes',
        player: 'Fjord Stone',
        hostile: false,
        indifferent: true,
        friendly: false,
      },
    ],
    goals: [
      'Spar with a true tactical genius.',
      'Write a song or poem that causes someone to weep with emotion.',
      'Be able to retire and never kill again',
    ],
    imgSrc:
      'https://media.dndbeyond.com/compendium-images/cotn/HJ1ybS42ooBqdXzF/00-007.maggie-keeneyes.png',
  },
];

export default { apiUrl: API_URL };

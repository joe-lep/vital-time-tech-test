import { DraggableItemConfig } from '@/app/types';
import ScotlandIslandBeachPhoto from '/public/scotland-island-photo.jpg';
import CharlesGrandPhoto from '/public/charles-grand-photo.jpg';
import BridgeClimbPhoto from '/public/bridge-climb-photo.png';
import ScotlandIslandBoatPhoto from '/public/scotland-island-boat-photo.jpg';
import ClamBarPhoto from '/public/clam-bar-photo.png';
import VividFestivalPhoto from '/public/vivid-festival-photo.png';

export const draggableItemsList: Array<DraggableItemConfig> = [
  {
    id: 'scotland-island-beach',
    title: 'Scotland Island',
    location: 'Sydney, Australia',
    imageData: ScotlandIslandBeachPhoto,
    imageAlt: 'A beach at Scotland Island',
  },
  {
    id: 'charles-grand',
    title: 'The Charles Grand Brasserie & Bar',
    location: 'Lorem ipsum, Dolor',
    imageData: CharlesGrandPhoto,
    imageAlt: 'A rocky beach',
  },
  {
    id: 'bridge-climb',
    title: 'Bridge Climb',
    location: 'Dolor, Sit amet',
    imageData: BridgeClimbPhoto,
    imageAlt: 'A man jumping into water',
    imageStyle: {
      position: 'absolute',
      width: '223.3px',
      height: '168.1px',
      objectFit: 'cover',
      top: '-9.6px',
    },
    noImageFill: true,
  },
  {
    id: 'scotland-island-boat',
    title: 'Scotland Island',
    location: 'Sydney, Australia',
    imageData: ScotlandIslandBoatPhoto,
    imageAlt: 'A boat in water',
  },
  {
    id: 'clam-bar',
    title: 'Clam Bar',
    location: 'Etcetera veni, Vidi vici',
    imageData: ClamBarPhoto,
    imageAlt: 'People dancing',
  },
  {
    id: 'vivid-festival',
    title: 'Vivid Festival',
    location: 'Sydney, Australia',
    imageData: VividFestivalPhoto,
    imageAlt: 'A man surfing',
    imageStyle: { objectFit: 'cover', transform: 'scaleX(-1)' },
  },
];

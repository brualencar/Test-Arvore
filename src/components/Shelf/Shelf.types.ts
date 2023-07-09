import { VolumeItem } from '../../services/GetVolumes/GetVolumes.types';

export interface ShelfProps {
  title?: string;
  background: boolean;
  books: VolumeItem[];
  color: boolean;
}

export interface ShelfBackgroundProps {
  background: boolean;
}

export interface ShelfColorProps {
  color: boolean;
}

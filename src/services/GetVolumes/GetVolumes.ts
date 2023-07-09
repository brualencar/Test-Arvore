import { DefaultApi } from '../api';
import { Volume } from './GetVolumes.types';

export const GetVolume = (subject: string) =>
  DefaultApi.get<Volume>(`/volumes?q=${subject}`);

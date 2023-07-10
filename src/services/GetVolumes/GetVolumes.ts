import { DefaultApi } from '../api';
import { Volume } from './GetVolumes.types';

export const GetVolume = (
  subject: string,
  {
    maxResults = 10,
    startIndex = 0,
  }: { maxResults?: number; startIndex?: number } = {}
) =>
  DefaultApi.get<Volume>(
    `/volumes?q=${subject}&startIndex=${startIndex}&maxResults=${maxResults}`
  );

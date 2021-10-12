import { IVideo } from './video.model';

export interface IPlaylist {
    id: number;
    videos: IVideo[];
}

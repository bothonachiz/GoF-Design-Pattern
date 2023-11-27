import { MediaProvider } from './spotifyAPI';
import { Youtube } from './youtubeAPI';

export class YoutubeAdapter extends Youtube implements MediaProvider {
  getPlaylist(): string[] {
    const playlist = super.getMusicLibrary();
    return playlist.map((v) => v.name);
  }
}

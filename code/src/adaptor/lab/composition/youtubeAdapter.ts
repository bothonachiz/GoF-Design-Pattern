import { MediaProvider } from './spotifyAPI';
import { YoutubeAPI } from './youtubeAPI';

export class YoutubeAdapter implements MediaProvider {
  private provider: YoutubeAPI;

  constructor(provider: YoutubeAPI) {
    this.provider = provider;
  }

  connect(): string {
    return this.provider.connect();
  }

  getPlaylist(): string[] {
   return this.provider.getMusicLibrary().map(s => s.name)
  }
}

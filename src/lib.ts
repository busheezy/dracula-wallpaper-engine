import { WallpaperInfo } from './types';
import { userProperties } from './settings';

export function currentInfo(): WallpaperInfo {
  const columns = Math.ceil(
    window.innerWidth / (userProperties.squareSize * userProperties.spacing),
  );

  const rows = Math.ceil(
    window.innerHeight / (userProperties.squareSize * userProperties.spacing),
  );

  return {
    columns,
    rows,
  };
}

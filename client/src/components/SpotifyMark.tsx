type SpotifyMarkProps = {
  className?: string;
};

export function SpotifyMark({ className = "" }: SpotifyMarkProps) {
  return <img className={`spotify-mark ${className}`.trim()} src="/r7xir-spotify-logo.png" alt="" aria-hidden="true" />;
}

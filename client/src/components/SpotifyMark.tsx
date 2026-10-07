type SpotifyMarkProps = {
  className?: string;
};

export function SpotifyMark({ className = "" }: SpotifyMarkProps) {
  return <img className={`spotify-mark ${className}`.trim()} src="/spotify-mark-white.png" alt="" aria-hidden="true" />;
}

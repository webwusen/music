
export function durationTostring(ms: number): string {
  const m: string = (ms / 60).toString();
  let minutes: number | string = parseInt(m);
  minutes = minutes > 9 ? minutes : '0' + minutes;
  let seconds: number | string = Math.round(ms % 60);
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return minutes + ':' + seconds;
}

export function formatSongDuration(duration: number): number {
  return Math.round(duration / 1000);
}

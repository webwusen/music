export function formatDuring(ms: number | string): string {
  const time: number = typeof ms === 'number' ? ms : Number(ms);
  const m: string = ((time % (1000 * 60 * 60)) / (1000 * 60)).toString();
  let minutes: number | string = parseInt(m);
  minutes = minutes > 9 ? minutes : '0' + minutes;
  let seconds: number | string = (time % (1000 * 60)) / 1000;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return minutes + ':' + seconds;
}

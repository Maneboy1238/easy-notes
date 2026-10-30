import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export function currentDayAbbr() {
  return dayjs().format('ddd')
}

export function relativeTimeFromNow(ms) {
  const dateInRelativeTIme = dayjs(ms).fromNow();

  return dateInRelativeTIme
}

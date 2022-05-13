// h는 시작 시 단위, m은 시작 분 단위, c는 총 조리 시간입니다.

function ovenClock(h, m, c) {
  let hour = h;
  let minute = m;
  let addingHour = Math.floor(c / 60);
  let addingMinute = c % 60;

  hour += addingHour;
  minute += addingMinute;
  console.log(hour + " " + minute);
}

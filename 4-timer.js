document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById('timer');
  if (el) {
    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return number + ' ' + titles[
            (number % 100 > 4 && number % 100 < 20)
                ? 2
                : cases[(number % 10 < 5) ? number % 10 : 5]
        ];
    }
    setInterval(() => {
      const now = new Date();
      const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
      const monthsLeft = 11 - now.getMonth();
      now.setMonth(now.getMonth() + monthsLeft);
      const diffWithoutMonths = new Date(endOfYear.getTime() - now.getTime());
      const daysLeft = Math.floor(diffWithoutMonths / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diffWithoutMonths / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((diffWithoutMonths / 1000 / 60) % 60);
      const secondsLeft = Math.floor((diffWithoutMonths / 1000) % 60);

      el.innerHTML = [
        declOfNum(monthsLeft, ['месяц', 'месяца', 'месяцев']),
        declOfNum(daysLeft, ['день', 'дня', 'дней']),
        declOfNum(hoursLeft, ['час', 'часа', 'часов']),
        declOfNum(minutesLeft, ['минута', 'минуты', 'минут']),
        declOfNum(secondsLeft, ['секунда', 'секунды', 'секунд'])
      ].join(', ');
    }, 1000)
  }
});
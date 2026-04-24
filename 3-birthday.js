function validateDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

function checkAge(birthday) {
  const dateArr = birthday.split('-');
  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const day = Number(dateArr[2]);

  const date = new Date(year, month - 1, day);
  if (validateDate(date)) {
    const diffMls = Math.abs(Date.now() - date.getTime());
    return Math.floor(diffMls / (1000 * 60 * 60 * 24) / 365) > 14;
  } else {
    throw new Error('Invalid date');
  }
}

console.log(checkAge('2000-01-01'));
console.log(checkAge('2020-01-01'));
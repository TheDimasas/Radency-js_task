const chooseDistance = (t, k, ls) => {
  const array = [];

  for (let i = 0; i < 2 ** ls.length; i++) {
    let temp = [];
    for (let j = 0; j < ls.length; j++) {
      i & (2 ** j) ? temp.push(ls[j]) : null;
    }
    temp.length === k ? array.push(temp.reduce((a, b) => a + b)) : null;
  }

  return ls.length >= k
    ? array.filter((el) => el <= t).sort((a, b) => b - a)[0]
    : null;
};

chooseDistance(174, 3, [51, 56, 58, 59, 61]); // 173
chooseDistance(163, 3, [50]); // null

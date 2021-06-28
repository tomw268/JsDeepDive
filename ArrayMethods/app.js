const score = [10, 30, 15, 25, 50, 40, 5];

// const filteredScore = score.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScore);

const users = [
  { name: 'tom', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true },
];

const filteredUser = users.filter((user) => {
  return user.premium;
});
console.log(filteredUser);

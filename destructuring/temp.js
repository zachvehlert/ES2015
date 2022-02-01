// function raceResults(arr) {
//   const [first, second, third, ...rest] = arr;
//   return {
//     first,
//     second,
//     third,
//     rest,
//   };
// }

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

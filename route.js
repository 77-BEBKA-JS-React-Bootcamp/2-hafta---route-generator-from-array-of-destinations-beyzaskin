const tickets = [['USA', 'BRA'],['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']];
const first = tickets.map((i) => i[0]);
const second = tickets.map((i) => i[1]);

const startN = first.filter((choice) => !second.includes(choice))[0];

// Create the path of follows by the user
let path = [startN];
let now = startN;
while (path.length < tickets.length + 1) {
  tickets.map((choice) => {
    if (choice[0] == now) {
      now = choice[1];
      path.push(now);
    }
  });
}
console.log(path);

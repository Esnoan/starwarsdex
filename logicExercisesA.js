const main = () => {
  for (let i = 0; i <= 100; i++) {
    console.log(`${i}${i % 2 === 0 ? " buzz" : ""}${i % 5 === 0 ? " bazz" : ""}`);
  }
};

main();

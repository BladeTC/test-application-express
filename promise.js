// function submit() {
//   console.log(2);
// }

// console.log(1);
// submit();
// console.log(3);

function submit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timed out");
      resolve();
    }, 1000);
  });

  console.log(2);
}

async function main() {
  console.log(11);
  await submit();
  console.log(44);

  console.log(33);
}

function legacy_main() {
  return new Promise((resolve, reject) => {
    console.log(1);
    submit().then(() => {
      console.log(4);
      console.log(3);
      resolve();
    });
  });
}

main();
legacy_main();
console.log("pirmas");
console.log("pirmas");
setTimeout(() => {
  console.log("timed out66");
}, 3000);
console.log("pirmas");
console.log("pirmas");

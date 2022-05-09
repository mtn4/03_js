function greaterThan10(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

greaterThan10(11)
  .then((data) => {
    console.log(`${data} > 10.`);
  })
  .catch((data) => {
    console.log(`${data} < 10.`);
  });

const sentence = "hello there from lighthouse labs";
//another option was to put \n at the end of this sentence and not use the 2nd setTimeOut with ("\n")

let delay = 0;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
};

setTimeout(() => {
  process.stdout.write("\n");
}, delay);
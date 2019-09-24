const sentence = "hello there from lighthouse labs";
let text = sentence.split("");
text.push('\n');
let delay = 0;

for (let i = 0; i < text.length; i++) {

  setTimeout(() => {
    process.stdout.write(text[i]);
  }, delay += 50);
}



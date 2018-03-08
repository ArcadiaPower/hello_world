## Instructions
Oh no! There's a bug! If `x` is `15`, we seem to be printing out `fizz` and not `fizzbuzz`! I believe many/all of you already caught this, but please make your own branch, make the change, and push it to the repo! Maybe even open a pull request! To do this, you would type `git checkout --branch your_name/fizzbuzz_fix`, where `your_name` is to be replaced with your very own name. Once you're satisfied with your code, stage it with `git add fizzbuzz/fizzbuzz.js`, then commit it with `git commit --message 'Fixed bug in fizzbuzz`. Feel free to make the commit message more specific to your fix. Finally, push it to Github with `git push origin your_name/fizzbuzz_fix`.

## Further exercises
Javascript has an equality operator unique to the language, `===`. This not only ensures equality in value, but also equality in type. Rather than try to parse that mumbo-jumbo, here's a real example:
```javascript
1 == "1" //true
1 == 1 //true
1 === "1" //false
1 === 1 //true
```
Try adding this into your code!

What if we want to print out the number if it is neither divisible by 3 or 5? How would you write that code?

## Further reading
Found this article, [Twenty Ways to FizzBuzz](https://ditam.github.io/posts/fizzbuzz/), which is straight craziness that may be of interest to you guys.

## How to run javascript from the terminal
Tired of running code in Chrome? Want to feel like a 1337 HaX0r, running code in your green-text-on-black-background terminal? You can install `node`! There are some differences between `node` and Chrome, but it will totally work for our purposes. You can download `node` [here](https://nodejs.org/en/download/). Once it's installed, you can type `node fizzbuzz/fizzbuzz.js` in your terminal and expect magic to happen!

## Helpful Terminal Commands
* `cd /some/file/path` - Change the current working directory to the file path given
* `cd ..` - Change the current working directory to the parent directory
* `cd ~` - Change the current working directory to your home directory
* `ls` - Lists out files in the current working directory
* `ruby some_file.rb` - Use the ruby interpreter to execute your ruby code
* `node some_file.js` - Use node to interpret your javascript code

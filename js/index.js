// Iteration 1.1 until 1.4: Names and Input
const hacker1 = "Vanessa";
const hacker2 = "Alberto";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
//2.1 Print depending on which name is longer
const longerName =
  hacker1.length > hacker2.length
    ? `The driver has the longest name, it has ${hacker1.length} characters.`
    : hacker1.length < hacker2.length
    ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    : `Wow, you both have equally long names, ${hacker1.length} characters!`;

console.log(longerName);

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1New = ``;
for (let i = 0; i < hacker1.length; i++) {
  hacker1New += ` ` + hacker1[i].toLocaleUpperCase();
}
console.log(hacker1New.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3 Print depending on the lexicographic order of the strings
let longestName = Math.max(hacker1.length, hacker2.length)
let output;
for (let i = 0; i < longestName; i++) {
  if (hacker1 === hacker2) {
    output = `What?! You both have the same name?`;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    output = `The driver's name goes first.`;
    break;
  } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
    output = `Yo, the navigator goes first definitely.`;
    break;
  } else if (hacker1[i] === hacker2[i]) {
    continue;
  }
}
console.log(output);


//Bonus 1:

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." + "\n" + 
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" + "\n" + 
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

let regex1 = /\w/g;
let count1 = loremIpsum.match(regex1).length;
console.log(count1);


let regex2 = /\bet\b/g;
let count2 = loremIpsum.match(regex2).length;
console.log(count2);


//Bonus 2:

const phraseToCheck = "A man, a plan, a canal, Panama!";
const regexBonus2 = /\w/g
const phraseToCheckModified = phraseToCheck.toLowerCase().match(regexBonus2).join("");
const roundHalfIndex = Math.floor(phraseToCheckModified.length / 2);

for (let i = 0; i <= roundHalfIndex; i++) {
  if (phraseToCheckModified[i] === phraseToCheckModified[phraseToCheckModified.length -1 - i]) {
    if (i === roundHalfIndex) {
      console.log("It's a Palindrome");
    }
  } else {
    console.log("It's not a Palindrome");
    break;
  }
}


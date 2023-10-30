/**
 * Make a program that filters a list of strings and returns a list with only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
 * Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 * i.e.
 * friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
 * Note: keep the original order of the names in the output.
 */

function myFriends(names) {
  const friendName = [];

  for (const name of names) {
    if (name.length === 4) {
      friendName.push(name);
    }
  }

  return friendName;
}

const friends = ["Ryan", "Kieran", "Jason", "Yous"];
const output = myFriends(friends);
console.log(output);

/**
 * Level 1: Bitwise Operations
 * -----------------------------------------------------------
 * Calculate bitwise AND, OR, and XOR of two numbers.
 */
function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}

/**
 * Level 2: A Redundant Function
 * -----------------------------------------------------------
 * Takes a string and returns a function that returns that string.
 */
function redundant(str) {
  return function () {
    return str;
  };
}

/**
 * Level 3: Get Notes Distribution
 * -----------------------------------------------------------
 * Takes an array of students and returns an object representing
 * the distribution of their valid notes (1 - 5).
 */
function getNotesDistribution(students) {
  const validNotes = [1, 2, 3, 4, 5];

  return students
    .flatMap((student) => student.notes)
    .filter((note) => validNotes.includes(note))
    .reduce((distribution, note) => {
      distribution[note] = (distribution[note] || 0) + 1;
      return distribution;
    }, {});
}

/**
 * -----------------------------------------------------------
 * Examples / Quick Tests
 * -----------------------------------------------------------
 * Run this file directly with Node.js to see the output:
 *   node solutions.js
 */
if (require.main === module) {
  // Level 1
  console.log("Level 1: Bitwise Operations");
  console.log("bitwiseAND(7, 12) ➞", bitwiseAND(7, 12)); // 4
  console.log("bitwiseOR(7, 12) ➞", bitwiseOR(7, 12));   // 15
  console.log("bitwiseXOR(7, 12) ➞", bitwiseXOR(7, 12)); // 11
  console.log("");

  // Level 2
  console.log("Level 2: A Redundant Function");
  const f1 = redundant("apple");
  console.log('f1() ➞', f1()); // "apple"
  const f2 = redundant("pear");
  console.log('f2() ➞', f2()); // "pear"
  const f3 = redundant("");
  console.log('f3() ➞', JSON.stringify(f3())); // ""
  console.log("");

  // Level 3
  console.log("Level 3: Get Notes Distribution");
  const result = getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ]);
  console.log("getNotesDistribution([...]) ➞", result);
  // { '2': 1, '3': 2, '5': 3 }
}

// Export functions so they can be imported/tested elsewhere
module.exports = {
  bitwiseAND,
  bitwiseOR,
  bitwiseXOR,
  redundant,
  getNotesDistribution,
};
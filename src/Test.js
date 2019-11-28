/*

  Below is the function to complete, feel free to split/organise 
  your code however you want. You shouldn't need any external
  libraries beyond the ones that are already included for testing.
  
  Aim to write the function in such a way that it satisfies
  all of the test cases in main.test.js
  
*/

const firstClause = `\n  The specific gifts given by this Will shall be paid free of\n  inheritance tax and other taxes or duties payable as a result\n  of my death and the cost of delivering any gift to a beneficiary\n  or vesting it in them shall be an executorship expense as shall\n  be the cost of the upkeep of the gift until delivery or vesting.\n`;
const secondClause = `\n  Any item that fails to pass to a beneficiary will return to my\n  estate to be included in the residue of my estate.\n`;

const specificGifts = (startIndex, giftsArray) => {
  let clauseNumbers = [];
  let clauseArray = [];
  // I want to create the 3 clause numbers for the outputted array pairs
  // ...and put them into arrays of their own inside the final array:
  for (let i = 0; i < 3; i++) {
    clauseArray.push([startIndex + i]);
  }
  // Adding the three clauses alongside their appropriate numbers:
  clauseArray[0].push(firstClause);
  clauseArray[1].push(secondClause);
  clauseArray[2].push(itemiseGifts(giftsArray));
  // making sure an empty array is returned if the giftsArray is empty:
  if (giftsArray.length === 0) {
    return [];
  } else {
    return clauseArray;
  }
};

const itemiseGifts = giftsArray => {
  let firstRecipient = (name, identifier) => `I give to ${name} of ${identifier}`;
  let additionalRecipient = (name, identifier) => ` and ${name} of ${identifier}`;
  let itemName = item => ` my '${item}'.`;
  let sentenceArray = [];
  let numberOfGifts = giftsArray.length;
  // iterating through each gift to create the appropraite sentence
  giftsArray.forEach((gift, index) => {
    let length = gift.beneficiaries.length;
    let i = 0;
    // the first recipient (i=0) has different string from the rest
    sentenceArray.push(
      firstRecipient(
        capitaliseName(gift.beneficiaries[i].name),
        gift.beneficiaries[i].identifier
      )
    );
    // mapping through and pushing in the additional recipients
    while (i < length - 1) {
      i++;
      sentenceArray.push(
        additionalRecipient(
          capitaliseName(gift.beneficiaries[i].name),
          gift.beneficiaries[i].identifier
        )
      );
    }
    //finally ending with the itemName at the end of the sentence:
    sentenceArray.push(itemName(gift.name));
    if (numberOfGifts > 1) {
      sentenceArray.push(" ");
    }
  });
  // removing an unwanted final space before joining into a string:
  numberOfGifts > 1 ? sentenceArray.pop() : null
  return sentenceArray.join("");
};

// ensures both the first and last names are capitalised:
const capitaliseName = name => {
  let firstLastArray = name.split(" ");
  firstLastArray = firstLastArray.map(
    name => name.charAt(0).toUpperCase() + name.slice(1)
  );
  return firstLastArray.join(" ");
};

module.exports = {
  specificGifts
};

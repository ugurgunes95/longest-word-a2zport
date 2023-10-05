const findTheLongestWord = (txt) => {
  const countVowels = (word) => {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      }
    }
    return vowelCount;
  };

  const words = txt.split(" ").map((word) => {
    const replacedWord = word.replace(/[^a-zA-Z]/g, "");
    return {
      word: replacedWord,
      length: replacedWord.length,
      vovels: countVowels(replacedWord),
    };
  });

  const longestWordLength = Math.max(...words.map((word) => word.length));
  const longestWords = words.filter(
    (word) => word.length === longestWordLength
  );
  const maxVovelCount = Math.max(...longestWords.map((word) => word.vovels));

  const longestOne = longestWords.find(
    (word) => word.vovels === maxVovelCount
  ).word;

  return longestOne;
};

console.log(
  findTheLongestWord(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
  )
);

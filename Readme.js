const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// arrow function ES6
const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

// The print call for dynamic output 
printProfileData(profileDataArgs);


// console.log(generatePage('Marvann', 'cmarvannhub'));

// // Multi-line Strings
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };
//   console.log(Marvan, cmarvannhub);


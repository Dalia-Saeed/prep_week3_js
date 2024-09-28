import { modules, students, mentors, classes } from "./hyf.js";





const possibleMentorsForModule = (moduleName) => {
  const mentorTeachModule = mentors.filter(mentor => mentor.canTeach.includes(moduleName));
  const mentorsNames = mentorTeachModule.map((mentor => mentor.name));
  return mentorsNames;
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));


const findMentorForModule = (moduleName) => {
  const mentorsNames = possibleMentorsForModule(moduleName);
  const randomnNm = Math.floor(Math.random());
  return mentorsNames[randomnNm];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
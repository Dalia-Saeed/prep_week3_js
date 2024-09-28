import { modules, students, mentors, classes } from "./hyf.js";


const getPeopleOfClass = (className) => {

  const findClass = classes.find(cls => cls.name.includes(className));

 


  const studentsClass = students
    .filter(student => student.class === className)
    .map(student => ({ name: student.name, role: 'student' }));

  
  const mentorsInClass = mentors
    .filter(mentor => mentor.nowTeaching === findClass.currentModule)
    .map(mentor => ({ name: mentor.name, role: 'mentor' }));

  
  return [...studentsClass, ...mentorsInClass];
};

// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));


const getActiveClasses = () => {
  
  const activeClasses = {};

  classes
  .filter(actCls => actCls.active)
  .forEach(actCls => { activeClasses[actCls.name] = getPeopleOfClass(actCls.name);
  });

  return activeClasses;
};


console.log(getActiveClasses());
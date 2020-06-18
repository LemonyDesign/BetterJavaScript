import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/// Nsming things best practice
// CONSISTENCY
// Clear, serachable, obvious
// var names that make sense - don't be too terse

// cap up - application constants - won't change + reuseable
// good for urls
const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({ firstName, age, job, lastName }) => {
  return {
    name: `${firstName} ${lastName}`,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER
  };
};

const dev = makePerson({
  firstName: "Mel",
  job: "web dev",
  lastName: "Ashby",
  age: 32
});

// Incorrect
// const hireDev = ({ devInfo }) => {
//   const hiredDev = {
//     hired: true,
//     ...devInfo
//   }
//   return hiredDev
// }
// console.log(hireDev({devInfo: dev}));

// Correct
const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  };
  return hiredDev;
};

console.log(hireDev({ dev }));

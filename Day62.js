// 🟢 Question 1 – Employee Appointment Date
// A hospital stores an appointment date:
// let appointmentDate = new Date("2026-10-15T14:30:00");
// Do the following:
// Print the year
// Print the month
// Print the date
// Print the hour
// Print the minutes
// Create and print a formatted output in this style:
// 15/10/2026
// Condition: Use JavaScript Date methods.
// Don't manually hardcode 15/10/2026.

let appointmentDate = new Date("2026-10-15T14:30:00");

console.log(appointmentDate.getFullYear());
console.log(appointmentDate.getMonth()+1);
console.log(appointmentDate.getDate());
console.log(appointmentDate.getHours());
console.log(appointmentDate.getMinutes());

console.log(`${appointmentDate.getDate()}/${appointmentDate.getMonth()+1}/${appointmentDate.getFullYear()}`);


// 🟢 Question 2 – Set a Future Deadline
// A developer has a project deadline:
// let deadline = new Date("2026-09-23");
// Using JavaScript Date methods:
// Change the year to 2027
// Change the month to December
// Change the date to 25
// Print the final date.
// Print the year, month, and date separately.
// Expected concept:
// 2027
// 11
// 25
// Remember: December = 11 because JavaScript months start from 0.

let deadline = new Date("2026-09-23");

deadline.setFullYear(2027);
deadline.setMonth(11);
deadline.setDate(25);

console.log(deadline.getFullYear());
console.log(deadline.getMonth());
console.log(deadline.getDate());
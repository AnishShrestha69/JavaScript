// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => {
//   return num > 7;
// });
// console.log(newNums);

const randomData = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    isActive: true,
    preferences: {
      language: "English",
      theme: "dark",
    },
    skills: ["JavaScript", "Python", "React"],
    createdAt: "2022-03-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    isActive: false,
    preferences: {
      language: "Spanish",
      theme: "light",
    },
    skills: ["Graphic Design", "Adobe Illustrator", "Figma"],
    createdAt: "2023-05-20T14:45:00Z",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 28,
    email: "michael.brown@example.com",
    isActive: true,
    preferences: {
      language: "French",
      theme: "dark",
    },
    skills: ["Photography", "Video Editing", "Adobe Premiere"],
    createdAt: "2021-11-10T08:15:00Z",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 22,
    email: "emily.davis@example.com",
    isActive: true,
    preferences: {
      language: "English",
      theme: "light",
    },
    skills: ["Content Writing", "SEO", "Blogging"],
    createdAt: "2024-01-10T12:00:00Z",
  },
  {
    id: 5,
    name: "Chris Johnson",
    age: 35,
    email: "chris.johnson@example.com",
    isActive: false,
    preferences: {
      language: "German",
      theme: "dark",
    },
    skills: ["Project Management", "Agile", "Scrum"],
    createdAt: "2020-06-25T18:20:00Z",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    age: 27,
    email: "sophia.wilson@example.com",
    isActive: true,
    preferences: {
      language: "Italian",
      theme: "light",
    },
    skills: ["Marketing", "Brand Strategy", "Social Media"],
    createdAt: "2023-09-05T07:50:00Z",
  },
];

let userdata = randomData.filter((data) => data.age === 22);
userdata = randomData.filter((data) => {
  return data.age >= 27 && data.isActive == true;
});
console.log(userdata);

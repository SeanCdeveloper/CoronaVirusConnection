const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ccmessagelist"
);

const messageSeed = [
  {
    title: "Hello",
    author: "John",
    message:
      "Test1",
    date: new Date(Date.now())
  },
  {
    title: "Chillin'",
    author: "AJAX Johnson",
    message:
      "Test 2",
    date: new Date(Date.now())
  },
  {
    title: "Should have done that",
    author: "Dom Nodes",
    message:
      "Test 3",
    date: new Date(Date.now())
  },
  {
    title: "Chillin",
    author: "Captain Anonymous",
    message:
      "Test 4",
    date: new Date(Date.now())
  },
  {
    title: "Hello",
    author: "Chillin B. Chill",
    message:
      "Test 5",
    date: new Date(Date.now())
  },
  {
    title: "Goodbye",
    author: "John React",
    message:
    "Test 6",
    date: new Date(Date.now())
  },
  {
    title: "CoronaQuiz",
    author: "Randy UseState",
    message:
    "Test 7",
    date: new Date(Date.now())
  },
  {
    title: "Running",
    author: "Cindy Stone",
    message:
      "Test 8",
    date: new Date(Date.now())
  },
  {
    title: "What to Do?",
    author: "Ezekiel Effect",
    message:
      "Test 9",
    date: new Date(Date.now())
  },
  {
    title: "What not to do",
    author: "John Ross",
    message:
    "Test 10",
    date: new Date(Date.now())
  },
  {
    title: "Anyone Around?",
    author: "Ross Message",
    message:
      "Test 11",
    date: new Date(Date.now())
  },
  {
    title: "Testing this out",
    author: "Bob Henderson",
    message:
      "Test 12",
    date: new Date(Date.now())
  },
];

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

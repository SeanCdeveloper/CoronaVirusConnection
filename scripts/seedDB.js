const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ccmessagelist"
);

const messageSeed = [
  {
    title: "0100",
    author: "Monica",
    message:
      "Hey!! How are you guys doing during this quarantine??",
    date: new Date(Date.now())
  },
  {
    title: "0200",
    author: "Brandon",
    message:
      "Stressed but luckily still working",
    date: new Date(Date.now())
  },
  {
    title: "0300",
    author: "Nikki",
    message:
      "Same.. working from home but glad to spend more time with my son",
    date: new Date(Date.now())
  },
  {
    title: "0201",
    author: "Brandon",
    message:
      "Awe man, I haven't seen the lil guy in soo long!",
    date: new Date(Date.now())
  },
  {
    title: "0101",
    author: "Monica",
    message:
      "Same here! How is the little guy?",
    date: new Date(Date.now())
  },
  {
    title: "0400",
    author: "Colleen",
    message:
    "Hey guys, sorry was driving home from work",
    date: new Date(Date.now())
  },
  {
    title: "0301",
    author: "Nikki",
    message:
    "Hey Colleen!. My son is doing good, teaching him is the hardest thing ever thou",
    date: new Date(Date.now())
  },
  {
    title: "0203",
    author: "Brandon",
    message:
      "Yea I bet! I don't remember nothing from school! Did you all see these news updates??",
    date: new Date(Date.now())
  },
  {
    title: "0102",
    author: "Monica",
    message:
      "Yea, I've been basically reading all the articles. I'm glad I'm informed all the time thou.",
    date: new Date(Date.now())
  },
  {
    title: "0401",
    author: "Colleen",
    message:
    "Oh yea I read most like Monica. I'm trying to stay ahead to make sure I'm safe.",
    date: new Date(Date.now())
  },
  {
    title: "0302",
    author: "Nikki",
    message:
      "The fact that I can talk to you all and keep an eye on the news all at the same time is a GAME CHANGER!",
    date: new Date(Date.now())
  },
  {
    title: "0103",
    author: "Monica",
    message:
      "Yessssss! This app is awesome and designed so elegantly. ",
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

import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        username: "David",
        createTime: "2024-04-05T11:52:18+0000",
        body: "Does anyone know which room the lab is in today?",
        picture: "",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Sarah",
        createTime: "2024-10-19T11:57:30+0000",
        body: "Is it possible to cry underwater?",
        picture: "",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Jason",
        createTime: "2024-08-07T16:41:06+0000",
        body: "Summer!!!!!",
        picture: "",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Victoria",
        createTime: "2024-03-16T03:26:20+0000",
        body: "",
        picture: "src/assets/sintra.jpg",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Link",
        createTime: "2024-01-27T12:12:39+0000",
        body: "",
        picture: "src/assets/porto.jpg",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Rhett",
        createTime: "2024-11-19T09:08:26+0000",
        body: "Good morning!",
        picture: "src/assets/south-tyrol.jpg",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Patricia",
        createTime: "2024-06-03T15:19:30+0000",
        body: "Did you know that the mitochondria is the powerhouse of the cell?",
        picture: "",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Dante",
        createTime: "2024-12-09T08:11:20+0000",
        body: "Exploring nature today",
        picture: "src/assets/flowers.jpg",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Sam",
        createTime: "2024-05-29T20:49:37+0000",
        body: "Crazy weather we're having",
        picture: "",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
      {
        username: "Cole",
        createTime: "2024-04-13T08:30:29+0000",
        body: "",
        picture: "src/assets/taoism.jpg",
        profilePic: "src/assets/profilepic.webp",
        likesAmount: 0,
      },
    ],
  },
  getters: {},
  mutations: {
    SetLikesToZero: (state) => {
      state.posts.forEach((post) => {
        post.likesAmount = 0;
      });
    },
  },
  actions: {},
  modules: {},
});

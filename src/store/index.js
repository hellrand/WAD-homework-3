import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        username: "David",
        createTime: "2024-04-05T11:52:18+0000",
        body: "Does anyone know which room the lab is in today?",
        picture: "",
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Sarah",
        createTime: "2024-10-19T11:57:30+0000",
        body: "Is it possible to cry underwater?",
        picture: "",
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Jason",
        createTime: "2024-08-07T16:41:06+0000",
        body: "Summer!!!!!",
        picture: "",
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Victoria",
        createTime: "2024-03-16T03:26:20+0000",
        body: "",
        picture: require("../assets/sintra.jpg"),
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Link",
        createTime: "2024-01-27T12:12:39+0000",
        body: "",
        picture: require("../assets/porto.jpg"),
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Rhett",
        createTime: "2024-11-19T09:08:26+0000",
        body: "Good morning!",
        picture: require("../assets/south-tyrol.jpg"),
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Patricia",
        createTime: "2024-06-03T15:19:30+0000",
        body: "Did you know that the mitochondria is the powerhouse of the cell?",
        picture: "",
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Dante",
        createTime: "2024-12-09T08:11:20+0000",
        body: "Exploring nature today",
        picture: require("../assets/flowers.jpg"),
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Sam",
        createTime: "2024-05-29T20:49:37+0000",
        body: "Crazy weather we're having",
        picture: "",
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
      {
        username: "Cole",
        createTime: "2024-04-13T08:30:29+0000",
        body: "",
        picture: require("../assets/taoism.jpg"),
        profilePic: require("../assets/profilepic.webp"),
        likesAmount: 0,
      },
    ],
  },
  getters: {},
  mutations: {
    IncreaseLikes: (state, index) => {
      state.posts[index].likesAmount++;
    },
    SetLikesToZero: (state) => {
      state.posts.forEach((post) => {
        post.likesAmount = 0;
      });
    },
  },
  actions: {
    increaseLikes({ commit }, index) {
      commit("IncreaseLikes", index);
    },
    resetLikes({ commit }) {
      commit("SetLikesToZero");
    },
  },
  modules: {},
});

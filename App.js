require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "SYBATRONbhai",
  id: 180721932,
  node_id: "U_kgDOCsWZDA",
  avatar_url: "https://avatars.githubusercontent.com/u/180721932?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SYBATRONbhai",
  html_url: "https://github.com/SYBATRONbhai",
  followers_url: "https://api.github.com/users/SYBATRONbhai/followers",
  following_url:
    "https://api.github.com/users/SYBATRONbhai/following{/other_user}",
  gists_url: "https://api.github.com/users/SYBATRONbhai/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SYBATRONbhai/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/SYBATRONbhai/subscriptions",
  organizations_url: "https://api.github.com/users/SYBATRONbhai/orgs",
  repos_url: "https://api.github.com/users/SYBATRONbhai/repos",
  events_url: "https://api.github.com/users/SYBATRONbhai/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SYBATRONbhai/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-09-07T02:49:03Z",
  updated_at: "2024-09-27T16:21:15Z",
};

app.get("/", (req, res) => {
  res.send("Hope & You Guys Are Doing Well !");
});

app.get("/twitter", (req, res) => {
  res.send("I5gtf6na");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login at Code with Barnamoy Dhar.</h1>");
});

app.get('/github', (req, res) => {
  res.json(githubData);
})

app.get("/youtube", (req, res) => {
  res.send("<h2>youtube.com</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

require('dotenv').config()

const express =require('express');
// import express from "express"; another way of writting the require methode
const app=express();
const port=3000;

const githubData=
    {
        "login": "bisworanjan2004",
        "id": 138195813,
        "node_id": "U_kgDOCDyzZQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/138195813?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bisworanjan2004",
        "html_url": "https://github.com/bisworanjan2004",
        "followers_url": "https://api.github.com/users/bisworanjan2004/followers",
        "following_url": "https://api.github.com/users/bisworanjan2004/following{/other_user}",
        "gists_url": "https://api.github.com/users/bisworanjan2004/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bisworanjan2004/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bisworanjan2004/subscriptions",
        "organizations_url": "https://api.github.com/users/bisworanjan2004/orgs",
        "repos_url": "https://api.github.com/users/bisworanjan2004/repos",
        "events_url": "https://api.github.com/users/bisworanjan2004/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bisworanjan2004/received_events",
        "type": "User",
        "site_admin": false,
        "name": "BISWORANJAN ROUT",
        "company": null,
        "blog": "",
        "location": "Bhubaneswar",
        "email": null,
        "hireable": null,
        "bio": "Learn coding with me and explore the new era of technology.",
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 0,
        "following": 3,
        "created_at": "2023-06-30T06:51:13Z",
        "updated_at": "2024-06-04T15:34:38Z"
      }


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/Service',(req,res)=>{
    res.send('Welcome to the service page');
});
app.get('/Hi',(req,res)=>{
    res.send("<h1>Hello Everyone!</h1>");
});
app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listining on port ${port}`);
})
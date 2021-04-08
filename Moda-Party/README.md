# ModaParty


A website to rediscover to collaborative shopping experience!

## Description

The app provides a truly collaborative experience by providing the ability to create rooms, host voice and video calls.
Users would be given the option to interact with their friends either in real time or later,they can interact asynchronously.

## Quick Start

- Clone this repo via `git clone git@github.com:howardchung/watchparty.git`
- Install npm dependencies for the project via `npm install`
- Start the server via `npm run dev`
  - Defaults to port 8080, customize with `PORT` env var
  - Run using self-signed HTTPS cert with `HTTPS=true`. This is needed for some WebRTC features (camera, etc.)
- Start the React application in a separate shell and port via `PORT=3000 npm run start`
  - Point to server using `REACT_APP_SERVER_HOST` env var if you customized it above
  - Run using self-signed HTTPS cert with `HTTPS=true`. This is needed for some WebRTC features (camera, etc.)
- Duplicate the `.env.example` file
- Rename it to `.env`
- Add config for the features you want as described in the advanced setup



### Firebase Config (user authentication)

This project uses Firebase for authentication. This is used for user login, account management, subscriptions, and handling some features like room locking/permanence.

To set up, create a new Firebase app (or reuse an old one) from [here](https://console.firebase.google.com/). After creating an application, click on the settings cog icon in the left menu next to "Project overview" and click on project settings. From there, scroll down, create a web application and copy the Firebase SDK configuration snippet JSON data.

Next, you have to stringify it: `JSON.stringify(PASTE_CONFIG_HERE)` in your browser console, then add it to `REACT_APP_FIREBASE_CONFIG` in your .env file.

For server verification of accounts you'll also need `FIREBASE_ADMIN_SDK_CONFIG`, which you should do the same steps for.


## Tech

- React
- TypeScript
- Node.js
- Redis (to be implemented)
- Docker(to be implemented)

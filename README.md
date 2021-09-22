![cover](.github/cover.png?style=flat)

# 💻 Project

🎮 Application to help you connect and organize fun time and play with friends. Create groups to play your favorite games with your friends with this App that has Discord authentication. 🎮

<span style="color: white; font-weight: bold;">Game</span><span style="color: red; font-weight: bold;">Play</span> allows you to SignIn authenticating with Discord. You can schedule a game and invite your friend by sharing a link.

In order to invite people you need to be a server owner.

So, you need create your own server on Discord.
It has SignIn and SignOut functionalities.

# 🛠️ Features

- OAuth2 Social Authentication with Discord server.
- Gets user registration profile in Discord (username and avatar);
- Lists the Discord servers that the user is part of;
- Allows you to schedule matches;
- Allows you to filter matches by category;
- Displays if the match was scheduled on its own server (host) or on other servers (guest);
- Share the invitation to join the user's server;
- Allows you to redirect the user to your own server;
- Provides the Logout function.

# ✨ Technologies

- React Native
- Typescript
- Expo
- Context API
- Async Storage
- Vector Icons
- React Native Svg e Svg Transform
- Axios
- Gradient colors
- OAuth2 Discord
- Expo Google Fonts
- React Navigation Stack
- React Native Gesture Handler
- Expo Authentication
- React Native Share
- Deep Link

# 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). You must have an account on [Figma](http://figma.com/) to access it.

# 🚀 Running the project

Use **yarn** or **npm install** to install project dependencies. Then start the project.

```bash
expo start
```

Remember to create your App on the Discord server to get the authentication credentials. Then define your App settings in the **.env** file (remove the example from the .env.example file).

```bash
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=token
CLIENT_ID=
CDN_IMAGE=
```

# 🔥 Additional functionalities

- Implemented validations to alert the user to pick Category, Day, Month, Hour, Minute and Description when creating an appointment.
- Improved the 'SignOut' functionality by implementing a Modal with Buttons 'ButtonNo' and 'ButtonYes'.

# 📄 Licence

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

<br />

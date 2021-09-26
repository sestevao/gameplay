![cover](.github/cover.png?style=flat)

# 💻 Project

🎮 This application was created to help you connect and organize fun time and play with friends. Create groups to play your favorite games with your friends and that has Discord authentication. 🎮

<span style="color: white; font-weight: bold;">Game</span><span style="color: red; font-weight: bold;">Play</span> allows you to **SignIn** authenticating with Discord. You can schedule a game and invite your friend by sharing a **link**.

In order to invite people you need to be a server owner. So, you need create your own server on Discord.

It has **SignIn** and **SignOut** functionalities.

# 🛠️ Features

- `OAuth2 Social Authentication` with Discord server.
- Gets user registration profile in `Discord` (username and avatar);
- Lists the `Discord servers` that the user is part of;
- Allows you to schedule matches;
- Allows you to filter matches by category;
- Displays if the match was scheduled on its own server (host) or on other servers (guest);
- Share the invitation to join the user's server;
- Allows you to redirect the user to your own server;
- Provides the `Logout` function.

# ✨ Technologies

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://docs.expo.dev/)
- [Context API](https://reactjs.org/docs/context.html)
- [Async Storage](https://reactnative.dev/docs/asyncstorage)
- [Vector Icons](https://docs.expo.dev/guides/icons/)
- [React Native Svg](https://github.com/react-native-svg/react-native-svg) & [Svg Transform](https://github.com/kristerkari/react-native-svg-transformer)
- [Axios](https://axios-http.com/docs/intro)
- [Gradient colors](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [OAuth2 Discord](https://discord.com/developers/docs/topics/oauth2)
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)
- [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [Expo Authentication/Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [React Native Share](https://docs.expo.dev/versions/latest/react-native/share/)
- [Deep Link](https://reactnavigation.org/docs/deep-linking/)

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
- Improved the 'SignOut' functionality by implementing a Modal with Buttons.

# 📄 Licence

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

<br />

Made with 💜 by sestevao 👋

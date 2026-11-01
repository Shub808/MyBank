# MyBank — React Native banking app UI

A React Native (0.73) mobile banking interface with splash, sign-up, login, a home dashboard, card details and a transfer flow. State is managed with Redux Toolkit and navigation with React Navigation.

> **Personal project by Shubham Naik.** All names, balances and transactions are fictional demo data. This is a UI and state-management exercise, not a real banking product: there is no backend, no real authentication and no real money movement.

## Screens

| Screen | What it does |
|---|---|
| Splash | Brand screen that routes to login |
| Sign up / Login | Form flows backed by a Redux auth slice |
| Home | Account summary, cards, charts and promo cards |
| Card details | Card information view |
| Transfer | Transfer form with validation, recorded in a transactions slice |

## Stack

React Native 0.73 · React 18 · Redux Toolkit · React Navigation (stack, native-stack, drawer) · AsyncStorage · react-native-linear-gradient · Jest

## Run it

```bash
npm install
npm start          # Metro bundler on port 8082
npm run android    # or: npm run ios
npm test           # smoke test
```

## Status

- `tsc --noEmit`, ESLint (no errors) and the Jest smoke test pass.
- The Android JavaScript bundle builds with Metro.
- Not run on a device or emulator by the author's assistant during this clean-up; verify on your own device before demoing.

## Author

Shubham Naik — [github.com/Shub808](https://github.com/Shub808)

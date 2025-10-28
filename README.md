# Stock Trading Mobile App

A React Native mobile banking application that allows a user to

- View,
- Manage (edit and remove),
- Create stock orders for available financial instruments

## Tech Stack

- **State Management**: Tanstack/React Query and local state management (useState, useEffect)
- **Styling**: Styled Components with the Emotion library
- **API Integration**: REST API for orders and instruments

## Getting Started

### Prerequisites

```bash
1. In the `backend` directory, run `npm install` in order to install all packages needed to run the backend locally
2. In the `carnegie-app` directory, run `npm install` in order to install all packages that are needed
(2.5. If you need to prebuild, unless npm in the `carnegie-app` directory took care of it) Run `npx expo prebuild` to generate the `android/` and `ios/` folders
3. To run the frontend locally on an iOS emulator, run `npm run ios`. This will run the app on the latest emulator you have worked with
4. To run the frontend locally on an Android simulator, run `npm run android`
5. To run unit tests, run `npm run jest` to run all unit tests

```

#### What kind of testing?

### Unit tests

We're covering the helper functions with unit tests using jest. The helper functions are general functions that can be used throughout the app, for instance to truncate text or format dates

### UI test

We're covering part of the UI by testing the rendering of the components. For now, we've covered the initial screen where the orders are rendered (the `OrdersScreen`), and the idea is that you can keep building on top of this

### Navigating through the app

1. See all your orders on the initial screen
2. To see a specific order, press the order you're interested in to get more information
3. To edit an order, press the "edit" button inside an order
4. To delete an order, press the "delete" button inside an order
5. To create an order, go to "Create order", search for the instrument you want, press it to buy and fill in the order form to create your order

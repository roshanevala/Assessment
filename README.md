# Assessment
This is a React Native application built for the assessment task. It contains multiple features accessible through a side navigation menu:

## Features

- Add Numbers   : Input two numbers and view their sum.
- Two Sum II    : Given a sorted array and target, returns the indices of two numbers that add up to the target.

## Project Structure

/Assessment
├── /features
│ ├── AddNumbers.tsx
│ ├── TwoSum.tsx
│ └── Navbar.tsx
├── App.tsx
├── package.json
└── README.md

## Requirements

- Node.js >= 16
- npm or yarn
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (`sudo gem install cocoapods`) for iOS dependencies

# Getting Started

## Step 1: Clone the Repository

git clone https://github.com/roshanevala/Assessment.git


## Step 2: Install Dependencies

npm install

### Android

```sh
npx react-native run-android
```

### iOS

```sh
cd ios
pod install
cd ..
npx react-native run-ios
```

## Author

Roshane de Silva
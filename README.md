# TYPLogin

##To create/install/run React Native Apps:

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. If you want to develop for both iOS and Android, that's fine - you just have to pick one to start with, since the setup is a bit different.
For WINDOWS go to: https://facebook.github.io/react-native/docs/getting-started.html for detailed instructions.
For MAC follow these instructions:

##Installing dependencies 
You will need Node, Watchman, the React Native command line interface, and Xcode.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

##Node, Watchman 
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```brew install node```
```brew install watchman```

If you have already installed Node on your system, make sure it is version 4 or newer.

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

##The React Native CLI 
Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

```npm install -g react-native-cli```

If you get an error like Cannot find module 'npmlog', try installing npm directly: 
```curl -0 -L https://npmjs.org/install.sh | sudo sh.```

##Xcode 
The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 8 or higher.

##Command Line Tools 

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

##Xcode Command Line Tools

**Creating a new application**
Use the React Native command line interface to generate a new React Native project called "AwesomeProject":

```react-native init AwesomeProject```

This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Create React Native App, or if you're adding iOS support to an existing React Native project (see Platform Specific Code).

**Running your React Native application**

Run 

```react-native run-ios``` 

inside your React Native project folder:

```cd TYPLogin```
```react-native run-ios```

You should see your new app running in the iOS Simulator shortly.

react-native run-ios is just one way to run your app. You can also run it directly from within Xcode or Nuclide.

If you can't get this to work, see the Troubleshooting page.

##Running on a device 
The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions here.



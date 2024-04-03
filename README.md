# How to use in-app purchase with Capacitor?

### This project is an example to use "in app purchase" feature with Capacitor. it is built with Solid JS, though it is Framework Agnostic by nature.

#### Usage:

##### Stores:

-   create a new app in the stores.
-   on both platforms (ios and Play) go to **in app products** section and create a new product.

**Note:** the `product id` will be used in our code later on. in this sample app, we use a product called `new_samples`.

-   Choose 'consumable' if you want a one-time purchase that expires (e.g - 50 coins in a game)
-   Choose 'non-consumable' if its a permanent item (e.g - lifetime entrance to the "dark caves" in a game)
-   In this sample app, we use a non-consumable prodct "new samples" the user can theoratically use to enter new samples to the grid (maybe i will actually implement it one day!)
-   try to purchase via the testing tools (internal testing for play store, and testflight with ios)

**ios only** under [business](https://appstoreconnect.apple.com/business), you should fill the tax forms. **The purchase will wont work otherwise and will not throw any error and its painly frustrating**. No need to thank me.

##### Code:

-   install Capacitor under every framework you would like. in this example we use Solid Js with Vite.
-   npm install `cordova-plugin-purchase`
-   Follow the code snippet in App.tsx
-   This is all you need

##### Resources:

-   [Purchase manual docs](https://purchase.cordova.fovea.cc)
-   [Devtactics (shoutout!) guide +| video guide for usage, unfortunately with angular...](https://devdactic.com/ionic-in-app-purchase-capacitor)

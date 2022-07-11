## To run the application locally

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## To run a production version of the application

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Approach

For the sake of providing a simple MVP for this assessment, I chose to use the idea of stateless components in react while making use of react hooks. Although I would have liked to add a state management library like redux to make use of smaller components, for now it was sufficient to provide some small genderal components while still putting much of the logic inside of the main component.

## What went well and what didn't

Without a statement management library each component will either remain large containing lots of actions and state or can remain small but contain unnecessary prop tunnelling. This can become difficult as components will be large and move away from the Single Responsibility Principle.

## Updates

Make use of a state management library like redux, so we can make more use of smaller components without prop tunnelling. We can keep track of the state through the whole application and call any action inside any component.

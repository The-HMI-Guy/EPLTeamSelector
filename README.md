# EPL Team Randomizer README

This project is a simple React application that allows users to select their favorite football teams and shuffle them to randomly pick one to root for. The application is styled with a minimalistic CSS design, and the list of teams is hard-coded in the application.

## Features

- List of football teams with checkboxes for selection
- Shuffle button to randomly pick a team from the selected ones
- Display the winner team's logo (if available) after shuffling

## Setup

To get started with the project, follow these steps:

1. Make sure you have Node.js and npm installed on your system.
2. Clone the repository: `git clone https://github.com/user/repo.git`
3. Change into the project directory: `cd team-randomizer`
4. Install the dependencies: `npm install`
5. Start the development server: `npm start`

The application will now be running at `http://localhost:3000/`. You can view it in your browser by navigating to that URL.

## Usage

1. Check the boxes next to the teams you'd like to possibly support.
2. Click the "Shuffle" button.
3. The application will randomly pick a team from the selected ones and display its logo (if available).

## Adding Teams

To add more teams, simply add new team objects to the `teams` array in the `App.js` file:

```javascript
const teams = [
  // ...
  { id: 21, name: "New Team", logoUrl: "https://example.com/new_team_logo.png" },
  // Add more teams here
];
```

## Contributing

Feel free to contribute to this project by creating a pull request or opening an issue. Any help is appreciated.

## License

This project is open-source and licensed under the MIT License.
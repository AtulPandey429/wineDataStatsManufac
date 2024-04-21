# Wine Data Statistics Dashboard

This project is a web application for displaying statistics on wine data. It provides insights into the flavanoids and gamma statistics of different wine classes.

## Features

- Display statistics for flavanoids and gamma data
- Calculate mean, median, and mode for each wine class
- Visualize statistics in a tabular format

![UI Preview](/image.png)

## NOTE:
- When calculating mode, some values may have the same frequency even after rounding to 3 decimal places. In such cases, all values with the same frequency are displayed.
- If new types of alcohol are added, the application dynamically creates additional classes. For instance, if there are initially 3 types of alcohol, there will be 3 corresponding classes. Upon adding an extra type, a new class (e.g., class4) is automatically generated as a new column.




## Installation

1. Clone the repository:

    ```
    git clone '[text](https://github.com/AtulPandey429/wineDataStatsManufac)'
    ```

2. Navigate into the project directory:

    ```
    cd wineData
    ```

3. Install dependencies with Yarn:

    ```
    yarn install
    ```

## Usage

1. Start the development server:

    ```
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- [Create React App (CRA)](https://create-react-app.dev/)
- [React.js](https://reactjs.org/)
- [Mantine UI library (v7)](https://mantine.dev/)

## Folder Structure

- **components/**: Contains React components for displaying statistics.
  - **FlavanoidsStatistics/**: Component for displaying flavanoids statistics.
  - **GammaStatistics/**: Component for displaying gamma statistics.
- **pages/**: Contains the main page component for rendering statistics.
- **utils/**: Contains utility functions for calculations.
- **data/**: Contains the JSON file with wine data.
- **App.js**: Entry point of the application.

## Created By

ATUL PANDEY

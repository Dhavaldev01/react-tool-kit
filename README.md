Overview
This project demonstrates how to write unit tests for React components using Jest and React Testing Library. It includes tests for various components, including displaying text, managing state, and fetching data from an API.

Table of Contents
Installation
Running Tests
Components
Testing Strategy
Screenshots
Installation
To run the project and tests, make sure you have Node.js installed. Then, clone the repository and install the dependencies:

bash
Copy code
git clone <https://github.com/Dhavaldev01/react-tool-kit.git>
cd <react-tool-kit>
npm install
Running Tests
To run the tests, use the following command:

bash
Copy code
npm test
This command will execute all test files and display the results in your terminal.

Components

1. HelloWorld

Description: Renders a simple "Hello World" text and displays a name using a data-testid.
Tests:
Renders "Hello World" text.
Checks if the name displayed is "Dhaval Patel".

2. Counter

Description: Implements a simple counter that increments on button clicks.
Tests:
Verifies the initial count is 0.
Checks if the count increments correctly upon button clicks.

3. Child

Description: Displays a count and toggles a boolean state on button clicks.
Tests:
Confirms the initial count is displayed correctly.
Tests the toggle button functionality.

4. ApiCallTest

Description: Fetches a list of users from an API and displays their names.
Tests:
Checks if the loading text is displayed during the fetch.
Verifies that user names are rendered correctly after fetching.
Testing Strategy
Each component has corresponding tests to ensure functionality and correctness. The tests utilize:

Jest for running the test framework.
React Testing Library for rendering components and simulating user interactions.
Example Test Structure
Each test file generally follows this structure:

Import necessary libraries and components.
Define the test cases using test or it.
Use assertions to verify expected outcomes.
Code Example for HelloWorld

Screenshots
![Screenshot 2024-10-14 134645](https://github.com/user-attachments/assets/9cc19f65-b88c-4204-ab4d-35b8cfa507a3)
![Screenshot 2024-10-14 135127](https://github.com/user-attachments/assets/8cabfca3-3c20-4e6a-a59c-afd956e6fbf4)
![Screenshot 2024-10-14 141349](https://github.com/user-attachments/assets/db9ea559-4b6f-4589-962b-19071e503c66)
![Screenshot 2024-10-14 141444](https://github.com/user-attachments/assets/a13934f3-fc44-4e61-a001-f8b89e5b2f90)
![Screenshot 2024-10-14 145219](https://github.com/user-attachments/assets/fdeb91b1-6960-47cc-b215-33749696ddbb)
![Screenshot 2024-10-14 151430](https://github.com/user-attachments/assets/1821003f-9b82-449b-a5c4-279a4159d5dc)
![Screenshot 2024-10-14 155933](https://github.com/user-attachments/assets/bac7250e-49f0-4010-a62a-39e410c92816)

Conclusion
This project provides a solid foundation for testing React components using Jest and React Testing Library. You can extend the tests and components as needed for your application. For more advanced testing strategies, consider looking into testing hooks and context providers.

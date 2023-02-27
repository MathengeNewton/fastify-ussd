# JavaScript USSD API with Fastify, Postgres, and Node

This is a sample USSD API built with Fastify, Postgres, and Node. It allows users to interact with your service by entering digits on their phone's keypad, and provides a simple way to build interactive text-based interfaces for mobile devices.

## Getting Started

To run the API on your local machine, you'll need to have Node.js and Postgres installed. Then, follow these steps:

1. Clone the repository: `git clone https://github.com/MathengeNewto/fastify-ussd.git`
2. Install the dependencies: `npm install`
3. Create a PostgreSQL database and configure the connection in `.env.example` file.
4. Generate a `secret-key` file.
5. Start the application: `npm start`

## Features

- Customizable USSD menus with multiple levels of options
- Integration with Postgres database for data storage and retrieval
- Fast and scalable API built with Fastify framework
- Flexible routing and middleware support for easy customization

## API Endpoints

| Method | Endpoint                | Description                                  |
| ------ | -----------------------| -------------------------------------------- |
| GET    | /ussd                   | Retrieve the current USSD response  |
| POST   | /ussd                   | Handle a user's USSD input and return a response |

## Usage

1. Dial the USSD code on your mobile device (*123#)
2. Follow the menu prompts and enter the corresponding digits on your phone keypad
3. View the response message on your mobile device

## Contributing

Contributions are always welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


# LoLLMs Playground

<div align="center">
  <img src="https://github.com/ParisNeo/lollms/blob/main/lollms/assets/logo.png" alt="Logo" width="200" height="200">
</div>

![GitHub license](https://img.shields.io/github/license/ParisNeo/lollms-playground)
![GitHub issues](https://img.shields.io/github/issues/ParisNeo/lollms-playground)
![GitHub stars](https://img.shields.io/github/stars/ParisNeo/lollms-playground)
![GitHub forks](https://img.shields.io/github/forks/ParisNeo/lollms-playground)
[![Discord](https://img.shields.io/discord/1092918764925882418?color=7289da&label=Discord&logo=discord&logoColor=ffffff)](https://discord.gg/4rR282WJb6)
[![Follow me on Twitter](https://img.shields.io/twitter/follow/SpaceNerduino?style=social)](https://twitter.com/SpaceNerduino)
[![Follow Me on YouTube](https://img.shields.io/badge/Follow%20Me%20on-YouTube-red?style=flat&logo=youtube)](https://www.youtube.com/user/Parisneo)
[![pages-build-deployment](https://github.com/ParisNeo/lollms-playground/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ParisNeo/lollms-playground/actions/workflows/pages/pages-build-deployment)


This tool provides a web-based interface to test LoLLMs endpoints and generate text using a LoLLMs server.

## Prerequisites

To use this tool, you need to have [Node.js](https://nodejs.org) installed on your machine.

## Installation

1. Clone this repository or download the source code.

   ```bash
   git clone https://github.com/ParisNeo/lollms-playground.git
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

Now you are ready for some action.

## Usage

1. Start the LoLLMs server. You can use `lollms-server` to run the server with the desired configuration. Here are a few examples:

   - To run the server on `localhost` and port `9600`:

     ```bash
     lollms-server --host localhost --port 9600
     ```

   - To run the server on a different host and port:

     ```bash
     lollms-server --host mydomain.com --port 8080
     ```

   - For more information on the available options, you can use the `--help` flag:

     ```bash
     lollms-server --help
     ```

2. Start the web server for the LoLLMs Playground.

   ```bash
   node server.js
   ```
   or if you want to use custom port number:

   ```bash
   node server.js 8080
   ```


3. Open your web browser and visit `http://localhost:3000` (or the appropriate URL) to access the LoLLMs Playground.
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/f69811c5-b029-4321-b31a-e4699b57ff49)
4. Press the icon to get to the connection ui.
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/df7de411-8017-4f8a-a86a-c9482f62ef94)

4. Fill in the host and port fields with the appropriate values for your LoLLMs server.

5. Click the "Connect" button to establish a connection with the LoLLMs server.
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/bb112985-b55a-4b31-9aa4-e42c0e703610)

6. Once connected, you can enter a prompt and click the "Generate Text" button to initiate text generation.
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/6c91dc3a-887f-410f-a0ff-c10331f5a6a6)

7. The generated text will be displayed in the output section of the page.
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/ae7733ab-f7aa-4fe8-8f51-33afa6ab903b)
![image](https://github.com/ParisNeo/lollms-playground/assets/827993/33e95e4e-3763-4d4c-b1a7-1e3620f416bc)

## Customization

You can customize the appearance and behavior of the tool by modifying the HTML, CSS, and JavaScript code in the `lollms_playground.html` file.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [Apache 2.0](LICENSE).
```

# Website File Downloader

## Description
This Node.js package provides a simple way to download files from a website. It uses the axios library to handle HTTP requests and the fs module for file system operations.

## Installation
To install the package, run the following command in your project directory:
```bash
npm install website-file-downloader

## Usage
To use this package in your Node.js application, first import the downloadFile function and then call it with the URL of the file you want to download and the path where you want the file to be saved:
const downloadFile = require('website-file-downloader');

downloadFile('https://example.com/file.pdf', 'path/to/save/file.pdf')
    .then(() => console.log('Download completed!'))
    .catch(err => console.error('Error: ', err));

## Features
Simple and easy to use
Downloads files from any accessible URL
Saves files to a specified path on your local system

## Requirements
Node.js
npm

## Contributing
Contributions to this package are welcome. Please fork the repository and submit a pull request.

## License
This project is licensed under the ISC License.

Support and Contact
For support, bug reports, or feature requests, please open an issue on the GitHub repository:
https://github.com/CullPen/website-file-downloader/issues

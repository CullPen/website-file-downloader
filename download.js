const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadFile(fileUrl, outputLocationPath) {
    const writer = fs.createWriteStream(outputLocationPath);

    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
    }).then(response => {
        return new Promise((resolve, reject) => {
            response.data.pipe(writer);
            let error = null;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) {
                    resolve(true);
                }
                // no need to call the reject here, as it will have been called in the
                // 'error' handler above if an error occurred.
            });
        });
    });
}

module.exports = downloadFile;

const {ImageKit} = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: "private_grXhWjFv/qLVtc0BvCtAjPdUAZM="
});

async function uploadFile(buffer){
    console.log(buffer);
    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg"
    });
    return result;
}

exports.uploadFile = uploadFile;
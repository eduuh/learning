var fs = require("fs");
var googledrive = require("googleapis");

let clientId =
    "868312984914-954inujevelf9u7fqnre7bkkf605r3p1.apps.googleusercontent.com";
let clientSecret = "800-aNpXG6EFGxV6kiab6Iq2";
let refreshToken =
    "1//040KfqvmVNHX0CgYIARAAGAQSNwF-L9IraVf9ruxYMHkYW3G_AlmLxfiYo_SdyS9EZE8Tf8s3_EEzZpc_YmMyN_0Z-KKDGlqlAsA";
let accessToken =
    "ya29.a0AfH6SMCEdi11oFLnVbX6nP6KjPAWUjPBWjrjwF2gOUGJC5BqEXIJLF2rnqPhwyPW3Cbuam_QC5jVNRpKIPAyLcgW_-fgQ6KHoxDdn39ziMR4npWC0S5q6_CCD14eb1uCA0Kc5FvcNLSrR2uFj2ZdPj2q82ab";


function createDriveClient(clientid, clientSecret, redirectUrl, refreshToken){
   const client = new googledrive.Auth.OAuth2Client(clientid,clientSecret,redirectUrl);
    client.setCredentials({ refresh_token: refreshToken });

    return googledrive.dir
}

console.log(googledrive);
console.log(clientId);
console.log(clientSecret);
console.log(refreshToken);
console.log(accessToken);

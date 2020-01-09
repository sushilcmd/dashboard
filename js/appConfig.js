var ioUrl;
var appUrl;

//App mode
var env = "LOCAL"; // LOCAL, STAGE, PROD

function setEnvironmentSpecifics(env) {
    switch (env) {
        case "LOCAL":
            ioUrl = "http://localhost:7000";
            break;
        case "PROD":
            ioUrl = "http://2.8.15.34:5024";
            break;
    }

    appUrl = ioUrl + "/";
}

setEnvironmentSpecifics(env);

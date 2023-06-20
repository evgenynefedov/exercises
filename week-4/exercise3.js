const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const alertData = data => alert(data)
const logData = data => console.log(data)

displayData(alertData, logData, "I like to party")
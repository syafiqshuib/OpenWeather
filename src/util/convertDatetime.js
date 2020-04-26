export function convertDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var date = date.split(" ");
    var d = new Date(date[0]);
    var month = monthNames[d.getMonth()];
    var newDateArray = date[0].split("-");
    return dayNames[d.getDay()] + ", " + newDateArray[2] + " " + month + " " + newDateArray[0] + " " + convertTime(date[1]);
}

 function convertTime(time) {
    var time = time.split(":")
    var AmOrPm = parseInt(time[0]) >= 12 ? 'PM' : 'AM';
    var hours = (parseInt(time[0]) % 12) || 12;
    return hours + ":" + time[1] + " " + AmOrPm;
}

export function convertDate2(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var date = date.split(" ");
    var d = new Date(date[0]);
    var month = monthNames[d.getMonth()];
    var newDateArray = date[0].split("-");
    return newDateArray[2] + " " + month + " " + newDateArray[0] + ", " + dayNames[d.getDay()];
}

export function tempConverter(temp) {
    temp = parseFloat(temp);
    var temp = ((temp - 273.15) * 1.8) + 32;
    return temp.toFixed(1);
}

export function temperatureConverter(temp_min, temp_max) {
    temp_min = parseFloat(temp_min);
    temp_max = parseFloat(temp_max);
    var newTempMin = ((temp_min - 273.15) * 1.8) + 32;
    var newTempMax = ((temp_max - 273.15) * 1.8) + 32;
    return newTempMin.toFixed(1) + " - " + newTempMax.toFixed(1);
}



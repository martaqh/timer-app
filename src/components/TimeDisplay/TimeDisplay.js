const TimeDisplay = timeInMs => {

    const convertTime = timeInMs => {
        let hours = timeInMs / (1000*60*60);
        let absoluteHours = Math.floor(hours);
        let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        let minutes = (hours - absoluteHours) * 60;
        let absoluteMinutes = Math.floor(minutes);
        let m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

        let seconds = (minutes - absoluteMinutes) * 60;
        let absoluteSeconds = Math.floor(seconds);
        let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        let milliseconds = (seconds - absoluteSeconds) * 1000;
        let absoluteMilliseconds = Math.floor(milliseconds);
        let ms = absoluteMilliseconds > 9 ? absoluteMilliseconds : '0' + absoluteMilliseconds;

        return h + ':' + m + ':' + s + '.' + ms;
    }

    return (
        <div>
            {convertTime(timeInMs)}
        </div>
    )
}

export default TimeDisplay;
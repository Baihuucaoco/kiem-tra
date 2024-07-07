let stopwatches = {
    1: { startTime: 0, elapsedTime: 0, running: false, interval: null },
    2: { startTime: 0, elapsedTime: 0, running: false, interval: null },
    3: { startTime: 0, elapsedTime: 0, running: false, interval: null },
    4: { startTime: 0, elapsedTime: 0, running: false, interval: null },
    5: { startTime: 0, elapsedTime: 0, running: false, interval: null },
};

function updateDisplay(id) {
    const stopwatch = document.getElementById(`stopwatch-${id}`);
    const totalSeconds = Math.floor(stopwatches[id].elapsedTime / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    stopwatch.textContent = `${minutes}:${seconds}`;
}

function startWatch(id) {
    if (!stopwatches[id].running) {
        stopwatches[id].startTime = Date.now() - stopwatches[id].elapsedTime;
        stopwatches[id].interval = setInterval(() => {
            stopwatches[id].elapsedTime = Date.now() - stopwatches[id].startTime;
            updateDisplay(id);
        }, 1000);
        stopwatches[id].running = true;
    }
}

function stopWatch(id) {
    if (stopwatches[id].running) {
        clearInterval(stopwatches[id].interval);
        stopwatches[id].running = false;
        stopwatches[id].elapsedTime = 0;
        updateDisplay(id);
    }
}

function stopAll() {
    for (const id in stopwatches) {
        clearInterval(stopwatches[id].interval);
        stopwatches[id].running = false;
        stopwatches[id].elapsedTime = 0;
        updateDisplay(id);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay(1);
    updateDisplay(2);
    updateDisplay(3);
    updateDisplay(4);
    updateDisplay(5);

});
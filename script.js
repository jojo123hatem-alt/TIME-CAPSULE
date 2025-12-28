// SET YOUR UNLOCK DATE HERE (Year, Month (0-11), Day, Hour, Minute)
const unlockDate = new Date(2026, 0, 1, 0, 0, 0).getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = unlockDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // IF THE DATE IS PASSED
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("locked-view").classList.add("hidden");
        document.getElementById("unlocked-view").classList.remove("hidden");
    }
}, 1000);
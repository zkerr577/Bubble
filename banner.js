/*global setInterval, document, setTimeout, window, clearInterval*/
var bannerStatus = 1;
var bannerTimer = 3000;

window.onload = function() {
    document.getElementById("ban1").style.zIndex = "1201";
    bannerLoop();
}
    
var startBannerLoop = setInterval(function () {
    bannerStatus++;

    if (bannerStatus > 3) {
        bannerStatus = 1;
    }

    bannerLoop();
}, bannerTimer);

function bannerLoop() {

    if (bannerStatus === 1) {

        //Makes 2 transparent to hide while moving to right
        document.getElementById("ban2").style.opacity = "0";

        setTimeout(function () {
            //Moves 3 to the left
            document.getElementById("ban3").style.right = "100%";
            document.getElementById("ban3").style.zIndex = "900";
            //Displays 1
            document.getElementById("ban1").style.right = "0px";
            document.getElementById("ban1").style.zIndex = "1000";
            //places 2 on deck
            document.getElementById("ban2").style.right = "-100%";
            document.getElementById("ban2").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Makes 2 opaque for display
            document.getElementById("ban2").style.opacity = "1";
        }, 1000);

    } else if (bannerStatus === 2) {

        //3 transparent to hide while moving to right
        document.getElementById("ban3").style.opacity = "0";

        setTimeout(function () {
            //Moves 1 to left
            document.getElementById("ban1").style.right = "100%";
            document.getElementById("ban1").style.zIndex = "900";
            //Displays 2
            document.getElementById("ban2").style.right = "0px";
            document.getElementById("ban2").style.zIndex = "1000";
            //Moves 3 to right
            document.getElementById("ban3").style.right = "-100%";
            document.getElementById("ban3").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Makes 3 opaque for display
            document.getElementById("ban3").style.opacity = "1";
        }, 1000);

    } else if (bannerStatus === 3) {

        //1 transparent to hide while moving
        document.getElementById("ban1").style.opacity = "0";

        setTimeout(function () {
            //Moves 2 to left
            document.getElementById("ban2").style.right = "100%";
            document.getElementById("ban2").style.zIndex = "900";
            //Displays 3
            document.getElementById("ban3").style.right = "0px";
            document.getElementById("ban3").style.zIndex = "1000";
            //Moves 1 to right
            document.getElementById("ban1").style.right = "-100%";
            document.getElementById("ban1").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Opaque 1 for display
            document.getElementById("ban1").style.opacity = "1";
        }, 1000);
    }
}

function reverseBanner() {

    if (bannerStatus === 1) {

        //Makes 3 transparent to hide while moving to left
        document.getElementById("ban3").style.opacity = "0";

        setTimeout(function () {
            //Moves 3 to the left
            document.getElementById("ban3").style.right = "100%";
            document.getElementById("ban3").style.zIndex = "900";
            //Displays 1
            document.getElementById("ban1").style.right = "0px";
            document.getElementById("ban1").style.zIndex = "1000";
            //places 2 on deck
            document.getElementById("ban2").style.right = "-100%";
            document.getElementById("ban2").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Makes 2 opaque for display
            document.getElementById("ban3").style.opacity = "1";
        }, 1000);

    } else if (bannerStatus === 2) {

        //1 transparent to hide while moving to left
        document.getElementById("ban1").style.opacity = "0";

        setTimeout(function () {
            //Moves 1 to left
            document.getElementById("ban1").style.right = "100%";
            document.getElementById("ban1").style.zIndex = "900";
            //Displays 2
            document.getElementById("ban2").style.right = "0px";
            document.getElementById("ban2").style.zIndex = "1000";
            //Moves 3 to right
            document.getElementById("ban3").style.right = "-100%";
            document.getElementById("ban3").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Makes 1 opaque for display
            document.getElementById("ban1").style.opacity = "1";
        }, 1000);

    } else if (bannerStatus === 3) {

        //2 transparent to hide while moving left
        document.getElementById("ban2").style.opacity = "0";

        setTimeout(function () {
            //Moves 2 to left
            document.getElementById("ban2").style.right = "100%";
            document.getElementById("ban2").style.zIndex = "900";
            //Displays 3
            document.getElementById("ban3").style.right = "0px";
            document.getElementById("ban3").style.zIndex = "1000";
            //Moves 1 to right
            document.getElementById("ban1").style.right = "-100%";
            document.getElementById("ban1").style.zIndex = "1100";

        }, 500);

        setTimeout(function () {
            //Opaque 2 for display
            document.getElementById("ban2").style.opacity = "1";
        }, 1000);
    }
}

document.getElementById("imgtabs").onmouseenter = function () {
    clearInterval(startBannerLoop);
}

document.getElementById("imgtabs").onmouseleave = function () {
    startBannerLoop = setInterval(function () {
        bannerStatus++;

        if (bannerStatus > 3) {
            bannerStatus = 1;
        }

        bannerLoop();
    }, bannerTimer);
}

document.getElementById("nxtbtn").onclick = function () {
    bannerStatus++;

    if (bannerStatus > 3) {
        bannerStatus = 1;
    }

    bannerLoop();
}

document.getElementById("prvbtn").onclick = function () {
    bannerStatus--;

    if (bannerStatus < 1) {
        bannerStatus = 3;
    }

    reverseBanner();
}

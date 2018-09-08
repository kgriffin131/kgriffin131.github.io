const pics = [
	"iastate.jpg",
	"brothers.JPG",
	"friends.jpg",
];

const profilePictureShowOrder = getProfilePictureShowOrder();
let pic = 0;

document.addEventListener('DOMContentLoaded', function() {
    updateProfilePicture();

    setInterval(function() {
        updateProfilePicture();
    }, 5000);
}, false);

function getProfilePictureShowOrder() {
    let inOrder = [];
    for (let i=0; i<pics.length; i++) {
        inOrder.push(i);
    }

    let realOrder = [];
    while (inOrder.length > 0) {
        const randPic = getRandInt(0, inOrder.length-1);
        realOrder.push(inOrder[randPic]);
        inOrder.splice(randPic, 1);
    }

    return realOrder;
}

function updateProfilePicture() {
    const real = document.getElementById('profilePicture');
    if (!profilePicture.src) {
        profilePicture.src = "../res/image/" + pics[profilePictureShowOrder[pic++]];
        return;
    }

    const faded = document.getElementById('profilePictureFader');
    faded.style.opacity = 0;
    faded.src = "../res/image/" + pics[profilePictureShowOrder[pic++]];
    if (pic > profilePictureShowOrder.length - 1) pic = 0;

    let faderOpacity = 0;
    var timer = setInterval(function() {
        if (faderOpacity >= 1) {
            clearInterval(timer);

            real.src = faded.src;
            faded.style.opacity = 0;
            return;
        }

        faded.style.opacity = faderOpacity;
        faded.style.filter = 'alpha(opacity=' + faderOpacity * 100 + ")";
        faderOpacity += 0.05;
    }, 50);
}

function getRandInt (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
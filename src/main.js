/** @format */

// equals https://sjh.smartschool.be/ ==> automaticly beforepageL

// SETUP
const head = document.head;
const body = document.body;
const docRoot = document.querySelector(":root");
const header = document.querySelector("header");
const main = document.querySelector(".smscMain");

head.appendChild(
    Object.assign(document.createElement("meta"), {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
    })
);

const themes = {
    shrek: {
        background: [
            "https://www.dropbox.com/s/rbewd9jzcfq4xx2/Shrek_Donkey_watch_Puss.jpg?dl=1",
            "https://www.dropbox.com/s/bu8am8n061bu4oa/Shrek_outhouse.webp?dl=1",
            "https://www.dropbox.com/s/d16pydbe1egebwg/Shrek_puss_and_donkey_walking.jpg?dl=1",
            "https://www.dropbox.com/s/6ozwrfx4s97hbyw/Shrek_welcome_duloc_donkey.jpg?dl=1",
            "https://www.dropbox.com/s/y7baiprdj0us95m/shrek-gallery-1.jpg?dl=1",
        ],
        profiles: [
            "https://static1.personality-database.com/profile_images/b88c2b0170544df7babc1c865e5ce00a.png",
            "https://i.pinimg.com/736x/41/2d/f3/412df3925e684a504733525b6d94f4ac.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRgKp48dXhilP4W0CqL0N5uNxM6aThK8G5jrGjiFLuqi8_fiwnfchf0HrIavcEjlrW5Y&usqp=CAU",
            "https://pbs.twimg.com/profile_images/1493289203/Puss-In-Boots-Shrek-497126_400x400.jpeg",
            "https://images.squarespace-cdn.com/content/v1/5e9deb9fc3c5f268f8e07f67/1592840862456-S1GCZSV3ZHC365WH0LVA/Screen+Shot+2020-06-22+at+9.47.18+AM.png",
        ],
        song: "https://www.dropbox.com/s/nsfccvljwcx21zt/235820-766c823d-2ada-4e45-b810-806e3ca996f3.mp3?dl=1",
        color: "#6cc346",
    },
    panda: {
        background: [
            "https://wallpapers.com/images/hd/kung-fu-panda-and-the-furious-five-posing-0ubtybuzlb6oim7e.jpg",
            "https://images4.alphacoders.com/219/219896.JPG",
            "https://images8.alphacoders.com/128/1280133.jpg",
            "https://images8.alphacoders.com/690/690191.jpg",
        ],
        profiles: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILbmzEtokni8mvFH1SgvyR2Wr_nHOluE16iRWkv4&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUy2NjSJbJczGpI1sre4mQspMm_t7_kn_jAI9ieeP_15pD9KUqky5O8YPNnqD0S5kIRA&usqp=CAU",
            "https://i.pinimg.com/280x280_RS/3c/11/43/3c1143c5fd4e5a35f8c76717d26cea76.jpg",
            "data:image/jpeg;base64,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",
        ],
        song: "https://www.dropbox.com/scl/fi/km2dru4oyxn58bc6jjxhs/Kung-Fu-Fighting.mp3?rlkey=ut7wy7jw47xxu7pgc18fe7qfh&dl=1",
        color: "#C39546",
    },
    cars: {
        background: [
            "https://wallpapers.com/images/featured/disney-cars-background-v6wp05ehyj80iqbz.jpg",
            "https://m.media-amazon.com/images/I/913DwRJBqiL.jpg",
            "https://i.ytimg.com/vi/mzzI7F2ldqQ/maxresdefault.jpg",
            "https://m.media-amazon.com/images/I/913DwRJBqiL.jpg",
        ],
        profiles: [
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJhG7cRmb7gcnMmw3SA4_pqkqBuNfnW9lExVDEtYePSWADpNcVx7VSQGWeg&s=10",
        ],
        song: "https://www.dropbox.com/scl/fi/xld3dt5jc0ufacxhjg876/Life-is-a-Highway.mp3?rlkey=lok3vs26dkh15pauqk1q3q63h&dl=1",
        color: "#D02525",
    },
};

//todo localstorage & save
//todo games
//todo remove/edit links

//edit, fix, add and move icons & shortcuts
class Icons {
    constructor() {
        this.iconWrapper = document.querySelector(".smartTitel");
        this.replaceImages();
        this.reArrange();
        this.fixGoogleClassroom();
        this.addSpotify();
        this.fixBrokenBib();
        this.addShortcutSvg();
    }

    replaceImages() {
        const imgLinks = [
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Google_Classroom_Logo.svg",
            "https://www.dropbox.com/s/63z1b95a7rxrm5b/lettersFinal1.svg?dl=1",
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Junk_food_portail.svg",
            "https://college.petrusenpaulus.be/wp-content/uploads/2020/03/click4food-150x150.png",
            "https://cdn-icons-png.flaticon.com/512/207/207313.png",
            "https://ingeniumbooks.com/wp-content/uploads/2021/09/preparation.svg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        ];

        document.querySelectorAll(".smartTitel img").forEach((icon, i) => {
            if (i == 1) {
                let attr = {
                    viewBox: "356.062 162.654 487.876 574.692",
                    width: "487.876",
                    height: "574.692",
                    xmlns: "http://www.w3.org/2000/svg",
                };
                let content =
                    "<g style='' transform='matrix(1, 0, 0, 0.9638, 0, 58.300678)'><title>envelope</title><path d='M 843.938 323.346 C 843.938 311.688 836.43 306.536 833.265 304.634 L 600 195.4 L 366.183 304.174 C 363.018 306.076 356.063 311.438 356.063 323.096 L 356.091 683.45 C 356.091 695.05 365.491 704.55 377.191 704.55 L 821.691 704.55 C 833.291 704.55 842.791 695.05 842.791 684.45 L 843.938 323.346 Z' style='stroke-width: 11px; stroke-linecap: round; stroke-linejoin: round; fill: rgb(224, 153, 1);'> <title>darkOranje</title> </path> <g style='' transform='matrix(1, 0, 0, 1.03756, 36.266998, -113.088554)'> <title>letter</title> <rect style='stroke-linejoin: round; stroke-linecap: round; stroke-width: 11px; fill: rgb(242, 242, 244); paint-order: fill;' x='384.25' y='217.188' width='359.286' height='498.444' rx='22' ry='22'/>    <polyline style='fill: none; stroke: rgb(215, 215, 225); paint-order: fill; stroke-linecap: round; stroke-width: 15px;' points='555.699 605.79 730.955 482.141 732.849 225.289' transform='matrix(1, -0.000018, 0.000018, 1, -0.007496, 0.011619)'/>    <rect style='stroke-linejoin: round; stroke-linecap: round; stroke-width: 11px; stroke: rgb(60, 59, 116); paint-order: fill; fill: none;' x='383.93' y='213.348' width='359.286' height='498.444' rx='22' ry='22'/>    <line style='fill: rgb(60, 59, 116); stroke-linejoin: round; stroke-linecap: round; stroke: rgb(60, 59, 116); stroke-width: 10px;' x1='447' y1='298' x2='569.7' y2='298'/>    <line style='fill: rgb(60, 59, 116); stroke-linejoin: round; stroke-linecap: round; stroke: rgb(60, 59, 116); stroke-width: 10px;' x1='447' y1='348.803' x2='665.589' y2='348.78'/>    <line style='fill: rgb(60, 59, 116); stroke-linejoin: round; stroke-linecap: round; stroke: rgb(60, 59, 116); stroke-width: 10px;' x1='447' y1='398.502' x2='665.59' y2='398.521'/>    <line style='fill: rgb(60, 59, 116); stroke-linejoin: round; stroke-linecap: round; stroke: rgb(60, 59, 116); stroke-width: 10px;' x1='447' y1='448' x2='665.589' y2='447.996'/>  </g>  <path d='M 360.099 349.451 L 598.724 523.011 M 598.724 523.011 L 840.283 349.451 L 840.283 698.77 L 360.099 698.77 M 360.099 698.77 L 360.099 349.451' style='fill: rgb(244, 197, 65); stroke-linejoin: round; stroke-linecap: round; stroke-width: 0px;'>    <title>lightOranje</title>  </path>  <path d='M 843.937 323.346 C 843.937 311.688 836.429 306.536 833.264 304.634 L 779.658 279.614 M 419.778 279.029 L 366.182 304.174 C 363.017 306.076 356.062 311.438 356.062 323.096 L 356.09 683.45 C 356.09 695.05 365.49 704.55 377.19 704.55 L 821.69 704.55 C 833.29 704.55 842.79 695.05 842.79 684.45 L 843.937 323.346' style='stroke-width: 11px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(60, 60, 116); fill: none;'>    <title>border</title>  </path></g><path d='M 541.186 626.888 L 706.722 865.83 L 375.649 865.83 L 541.186 626.888 Z' style='stroke-linecap: round; stroke-linejoin: round; stroke-width: 11px; fill: rgb(243, 220, 153);' transform='matrix(0, 1, -1, 0, 1226.179555, 18.792047)' bx:shape='triangle 375.649 626.888 331.073 238.942 0.5 0 1@d7f1e58c'/><path style='stroke-width: 7px; fill: rgb(244, 197, 65);' d='M 379.647 715.398 C 379.647 715.398 379.602 683.966 379.188 668.396 C 378.774 652.826 372.969 536.665 375.161 508.25 C 377.352 479.834 383.515 463.791 400.268 458.965 C 417.021 454.139 435.335 470.027 464.532 489.748 C 493.729 509.469 580.562 573.666 580.562 573.666'/><g transform='matrix(1, 0, 0, 0.9638, 0, 69.277358)' style=''>  <title>crosses</title>  <line style='fill: rgb(216, 216, 216); stroke-width: 11px; stroke: rgb(60, 60, 116);' x1='358.545' y1='693.161' x2='839.317' y2='344.442' transform='matrix(-1, 0, 0, -1, 1200.001059, 1029.999028)'>    <title>cross2</title>  </line>  <line style='fill: rgb(216, 216, 216); stroke-width: 11px; stroke: rgb(60, 60, 116);' x1='356.174' y1='335.687' x2='839.826' y2='688.298'> <title>cross1</title> </line></g>";
                icon.parentNode.replaceChild(this.addSvg(attr, content, 10), icon);
                return;
            }

            if (i == 6) {
                let attr = {
                    viewBox: "0 0 36 36",
                    width: "800px",
                    height: "800px",
                    xmlns: "http://www.w3.org/2000/svg",
                };
                let content = `<path xmlns="http://www.w3.org/2000/svg" fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"/><path xmlns="http://www.w3.org/2000/svg" fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"/><path xmlns="http://www.w3.org/2000/svg" fill="#EEE" d="M12 5h12v26H12z"/>`;
                icon.parentNode.replaceChild(this.addSvg(attr, content, 10), icon);
                return;
            }

            icon.src = imgLinks[i];
        });
    }

    reArrange() {
        let iconLinks = [];
        for (let link of document.querySelectorAll(".smartTitel a")) {
            if (link.children.length > 0 && link.children[0].tagName != "BR") {
                iconLinks.push(link);
            }
        }

        this.iconWrapper.replaceChildren();
        let wrapwrap;
        iconLinks.forEach((x, i) => {
            if (!wrapwrap || wrapwrap.children.length == 3) {
                wrapwrap = this.iconWrapper.appendChild(document.createElement("section"));
                wrapwrap.dataset.number = Math.floor(i / 3) + 1;
                wrapwrap.classList.add(`section${wrapwrap.dataset.number}`);
            }

            let wrap = wrapwrap.appendChild(document.createElement("div"));
            let wrapContent = wrap.appendChild(x);
        });
    }

    fixGoogleClassroom() {
        document.querySelector("a[href='https://classroom.google.com/']").href = "https://classroom.google.com/u/4/h";
    }

    addSpotify() {
        this.lastSection = document.querySelector(".smartTitel").lastChild;
        if (this.lastSection.children.length == 3) {
            this.lastSection = this.iconWrapper.appendChild(document.createElement("section"));
            this.lastSection.classList.add("section3");
        }

        const spotify = document.querySelector(".section1 div:nth-child(1)").cloneNode(true);
        var newLink = spotify.innerHTML.replace("https://classroom.google.com/u/4/h", "https://open.spotify.com/collection/tracks");
        var newImg = newLink.replace(
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Google_Classroom_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        );

        spotify.innerHTML = newImg;
        spotify.classList.add("spotifyLink");
        this.lastSection.appendChild(spotify);
    }

    fixBrokenBib() {
        document.querySelector(".homepage__image-link").href = "https://brugge.bibliotheek.be/";
        const bibSearch = document.querySelector(".homepage__search").children;

        // new input
        bibSearch[0].remove();
        const newBibInput = document.createElement("input");
        Object.assign(newBibInput, {
            id: "newBibInput",
            type: "search",
            size: "23",
            maxlength: "255",
            style: "min-width: 70%; max-width: 80%;",
            required: true,
        });
        bibSearch[0].parentElement.insertBefore(newBibInput, bibSearch[0]);

        //new input on enter
        newBibInput.onkeydown = (e) => {
            if (e.keyCode == 13 && newBibInput.value) {
                window.open(`https://brugge.bibliotheek.be/catalogus?q=${newBibInput.value}`);
            }
        };

        //new button
        bibSearch[1].remove();
        const newBibButton = document.createElement("button");
        Object.assign(newBibButton, {
            className: "smscButton grey",
            innerHTML: "Zoeken",
        });
        newBibInput.parentElement.appendChild(newBibButton);

        //new button onclick
        newBibButton.onclick = () => {
            newBibInput.value ? window.open(`https://brugge.bibliotheek.be/catalogus?q=${newBibInput.value}`) : 0;
        };
    }

    addShortcutSvg() {
        //todo valid image?
        this.addLinkIcon = document.querySelector(".section1 div:nth-child(1)").cloneNode(true);
        this.addLinkIcon.querySelector("img").remove();
        this.addLinkIcon.appendChild(this.addLinkIcon.querySelector("span"));
        this.addLinkIcon.removeChild(this.addLinkIcon.querySelector("a"));

        this.addLinkIcon.classList.add("clickable");

        const content =
            "<g style='transform-box: fill-box; transform-origin: center center; transition: rotate 1s ease-in-out 0s;'><path fill='#374856' d='M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192 c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z'></path></g>";
        const newSvg = this.addSvg(
            {
                viewBox: "0 0 512 512",
                style: "enable-background:new 0 0 512 512;",
                width: "512",
                height: "512",
            },
            content,
            "14px"
        );
        this.addLinkIcon.querySelectorAll("span")[1].appendChild(newSvg);
        this.lastSection.appendChild(this.addLinkIcon);

        //popup
        const popup = document.createElement("dialog");
        const popupContent =
            "<form id='dialogForm'><label>image url:<input id='imgUrl' class=''></label><br><label>OR (not both)</label><br><label>svg attributes:<input id='svgAtributes'><br><label>svg conent:<input id='svgContent'><br><label>target url:<input id='targetUrl'><br><label>extra padding?:<input type='checkbox'></label><br><button>add link</button><br><i>don't forget to press the save button</i></label></form>";
        popup.innerHTML = popupContent;
        body.appendChild(popup);

        popup.onsubmit = (e) => {
            e.preventDefault();

            let elem = document.querySelector("dialog");
            let inputs = elem.querySelectorAll("input");

            if (inputs[0].value) {
                this.lastSection.appendChild(this.addLinkIcon);

                if (this.iconWrapper.lastChild.children.length == 4) {
                    this.lastSection = this.iconWrapper.appendChild(document.createElement("section"));
                    this.lastSection.classList.add(`section${this.iconWrapper.children.length}`);

                    this.lastSection.appendChild(this.addLinkIcon);
                }

                let newImg = this.addImg(inputs[0].value, inputs[3].value, inputs[4].checked ? "10px" : false);
                this.lastSection.insertBefore(newImg, this.addLinkIcon);
            } else {
                let newSvgRes = this.addSvg(inputs[1].value, inputs[2].value, inputs[4].checked ? "10px" : false, inputs[3].value);
                this.addLinkIcon.querySelectorAll("span")[1].appendChild(newSvgRes);
            }
        };

        document.onkeydown = (e) => {
            e.key == "Escape" && popup.open ? (popup.close(), (newSvg.children[0].style.rotate = "0deg")) : 0;
        };
        this.addLinkIcon.onclick = () => {
            popup.open ? ((newSvg.children[0].style.rotate = "0deg"), popup.close()) : ((newSvg.children[0].style.rotate = "180deg"), popup.show());
        };
    }

    addSvg(svgAttributes, content, customPadding, url) {
        //todo zijn die 2 spans en strong wel nodig?
        const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tools.setAttributes(newSvg, svgAttributes);
        Object.assign(newSvg.style, {
            /*aspectRatio: "auto",*/ padding: customPadding ? customPadding : undefined,
        });

        newSvg.innerHTML = content;

        if (url) {
            let a = document.createElement("a");
            a.href = url;
            a.appendChild(newSvg);
        }
        return newSvg;
    }

    addImg(imgUrl, targetUrl, customPadding) {
        let newImg = document.querySelector(".section1 div:nth-child(1)").cloneNode(true);
        newImg.querySelector("a").href = targetUrl;
        newImg.querySelector("img").src = imgUrl;

        customPadding ? (newImg.querySelector("img").style.padding = customPadding) : 0;
        return newImg;
    }
}

// FOLDABLE
class Foldable {
    constructor() {
        this.contents = document.querySelectorAll(".homepage__block__content:not(#homepage__block--bibnet > div)");
        this.tops = document.querySelectorAll(".homepage__block__top");
        this.tops.forEach((x, i) => {
            x.classList.add("foldable");
            x.addEventListener("click", () => this.foldContent(this.contents[i]));
        });
        this.foldedElements = [];
    }

    foldContent(content) {
        let folded = content.offsetHeight == 0 ? true : false;

        content.animate(
            [
                { maxHeight: content.scrollHeight + "px", opacity: "100%" },
                { maxHeight: "0px", opacity: "0%" },
            ],
            {
                duration: 1250,
                fill: "forwards",
                easing: "ease-in-out",
                direction: folded ? "reverse" : "normal",
            }
        );

        let id = content.parentNode.id;
        id == "" ? (id = "main") : 0;
        !folded ? this.foldedElements.push(content.parentNode.id) : this.foldedElements.splice(this.foldedElements.indexOf(content.parentNode.id), 1);
    }
}

// add a colorPicker that changes some colors on the page
// affected: lines between homepage__block, .navbar, shadow van icons, ...
class menuButtons {
    constructor() {
        this.colorPicker();
        this.createMenu();
        this.navbar();
    }

    colorPicker() {
        this.input = document.createElement("input");
        this.gradientActivated = true;

        docRoot.style.setProperty("--backgroundColor", "#F7F2EE");
        Object.assign(this.input, {
            type: "color",
            id: "colorPicker",
            value: "#ff520e",
        });

        this.input.addEventListener("input", () => {
            if (this.gradientActivated) {
                document.querySelector(".topnav").style.setProperty("background", "var(--colorPicker)", "important");
                this.gradientActivated = false;
            }

            docRoot.style.setProperty("--colorPicker", this.input.value);
            docRoot.style.setProperty("--colorPickerTransparent", `${this.input.value}40`);
        });
    }

    createMenu() {
        let buttons = [];

        //buttonReset
        let newButton = document.createElement("button");
        newButton.innerHTML = "reset";
        newButton.onclick = () => modes.default();
        buttons.push(newButton);

        //themes
        for (let theme in themes) {
            newButton = document.createElement("button");
            newButton.innerHTML = theme;
            newButton.onclick = () => modes.toggle_theme(theme);
            buttons.push(newButton);
        }

        //rainbow
        newButton = document.createElement("button");
        newButton.id = "rainbow";
        newButton.innerHTML = "rainbow";
        buttons.push(newButton);

        //buttonSave
        newButton = document.createElement("button");
        newButton.innerHTML = "save";
        newButton.onclick = () => savePref();
        buttons.push(newButton);

        //button-wrapper
        this.buttonWrapper = document.createElement("div");
        this.buttonWrapper.classList.add("buttonWrapper");

        this.buttonWrapper.appendChild(this.input);
        for (let button of buttons) {
            button.classList.add("buttons");
            this.buttonWrapper.appendChild(button);
        }

        body.appendChild(this.buttonWrapper);
    }

    navbar() {
        //change opacity onscroll
        var prevScrollPos = 0;
        main.onscroll = (e) => {
            var currentScrollPos = main.scrollTop;

            if (prevScrollPos >= currentScrollPos) {
                header.style.opacity = "100%";
            } else {
                header.style.opacity = "50%";
            }

            prevScrollPos = currentScrollPos;
        };

        //move gradient
        const navBar = document.querySelector(".topnav");

        navBar.onmousemove = (e) => {
            navBar.style.setProperty("background-position", e.screenX - navBar.offsetWidth * 0.58 + "px", "important");
        };

        //hide manual and 'start' ==> see css
        const btnWrapper = document.querySelector(".topnav__btn-wrapper").cloneNode();
        btnWrapper.appendChild(document.querySelector(".js-btn-messages"));
        navBar.insertBefore(btnWrapper, document.querySelector(".js-btn-notifs").parentNode);

        //todo meldingen icon, gebruik nieuwe tool!
        //todo hover/click => text rechts van icon
    }
}

class Modes {
    constructor(savedMode) {
        this.mode = "default";
        this.speed = 50;
        this.rainbowSetup();
        this.theme_setup();
        // this.toggle_theme("panda");
        this.defaultSetup();
    }

    theme_setup(mode = "shrek") {
        // setup custom theme
        this.stopTheme();
        this.mode = mode;
        this.theme = themes[mode];
        this.backgroundImgs = this.theme.background;
        this.profileImgs = this.theme.profiles;
        this.color = this.theme.color;

        this.background = document.querySelector(".homepage__center img");
        this.profElem = document.querySelector(".topnav__btn--profile img");

        this.soundTrack = new Audio(this.theme.song);
        this.soundTrack.loop = true;
    }

    toggle_theme(mode = "shrek") {
        this.theme_setup(mode);
        this.background.onload = this.profElem.onload = (e) => {
            e.target.style.opacity = "100%";
        };

        this.stopTheme().then(() => {
            //play music
            this.soundTrack.pause();
            this.soundTrack.currentTime = 0;
            this.soundTrack.play();

            //change colors
            if (menu.gradientActivated) {
                document.querySelector(".topnav").style.setProperty("background", "var(--colorPicker)", "important");
                menu.gradientActivated = false;
            }
            docRoot.style.setProperty("--colorPicker", this.color);
            docRoot.style.setProperty("--colorPickerTransparent", `${this.color}40`);
            document.querySelector("input[type='color']").value = this.color;

            //choose random img
            let random_background = Math.floor(Math.random() * this.backgroundImgs.length);
            let random_profile = Math.floor(Math.random() * this.profileImgs.length);

            this.background.style.opacity = "0%";
            this.background.src = this.backgroundImgs[random_background];
            this.profElem.style.opacity = "0%";
            this.profElem.src = this.profileImgs[random_profile];
        });
    }

    rainbowSetup() {
        this.musicRainbow = new Audio("https://www.dropbox.com/s/ahvqkq1faos9qbt/nyan-cat-song.mp3?dl=1");
        this.musicRainbow.loop = true;

        document.querySelector("#rainbow").onclick = () => {
            this.mode = "rainbow";

            this.soundTrack?.pause();
            this.musicRainbow.currentTime = 0;
            this.musicRainbow.play();

            this.background.src =
                "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1";
            if (menu.gradientActivated) {
                document.querySelector(".topnav").style.setProperty("background", "var(--colorPicker)", "important");
                menu.gradientActivated = false;
            }

            this.intervalId ? clearInterval(this.intervalId) : 0;
            this.intervalId = setInterval(this.changeBackgroundColor, this.speed);
        };
    }

    changeBackgroundColor() {
        this.mode = "rainbow";
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        docRoot.style.setProperty("--colorPicker", `rgb(${r}, ${g}, ${b})`);
        docRoot.style.setProperty("--colorPickerTransparent", `rgba(${r}, ${g}, ${b}, 40)`);

        this.mode != "rainbow" ? modes.stopTheme() : 0;
    }

    async stopTheme() {
        if (this.mode == "rainbow") {
            clearInterval(this.intervalId);
            this.musicRainbow?.pause();
            return true;
        }

        this.soundTrack?.pause();
    }

    defaultSetup() {
        this.oldProfileImage = this.profElem.src;
        this.oldBackgroundImage = this.background.src;
    }

    default() {
        this.mode = "default";

        this.profElem.src = this.oldProfileImage;
        this.background.src = this.oldBackgroundImage;

        document.querySelector(".topnav").style.removeProperty("background");
        menu.gradientActivated = true;

        this.soundTrack?.pause();
        this.stopTheme();

        docRoot.style.setProperty("--colorPicker", "#ff520e");
        docRoot.style.setProperty("--colorPickerTransparent", "#ff520e40");
        document.querySelector("input[type='color']").value = "#ff520e";
    }
}

//just to make the long, unreadable and unnecessary parts easier
class SimplifyingTools {
    constructor() {}

    setAttributes(element, attrObj) {
        for (let key in attrObj) {
            element.setAttribute(key, attrObj[key]);
        }
    }

    appendChilds(parent, childObj) {
        for (let child of childObj) {
            parent.appendChild(child);
        }
    }

    replaceExternalSvg(imgElement) {
        var svgContent = imgElement.contentDocument.documentElement;
        var svgXML = new XMLSerializer().serializeToString(svgContent);

        var parser = new DOMParser();
        var svgDoc = parser.parseFromString(svgXML, "image/svg+xml");
        var svgElement = svgDoc.documentElement;

        var container = imgElement.parentNode;
        container.replaceChild(svgElement, imgElement);
    }
}

//on/of button:
let disabled = JSON.parse(localStorage.getItem("disabled"));
if (!disabled) localStorage.setItem("disabled", "false");

var OnOfButton = document.createElement("button");
OnOfButton.classList.add("buttons");
OnOfButton.innerHTML = disabled ? "enable" : "disable";
Object.assign(OnOfButton.style, {
    height: "20px",
    width: "auto",
    position: "absolute",
    right: 0,
    bottom: 0,
});
body.appendChild(OnOfButton);

OnOfButton.onclick = () => {
    localStorage.setItem("disabled", !disabled);
    OnOfButton.innerHTML = disabled ? "enable" : "disable";
    location.reload();
};

//setup:
if (!disabled) {
    window.tools = new SimplifyingTools();
    window.icons = new Icons();
    window.foldable = new Foldable();
    window.menu = new menuButtons();
    window.modes = new Modes();
    style();
}

//SAVE COLORS, MODES, ...
function savePref() {
    let pref = {};

    pref.folded = foldable.foldedElements;
    pref.mode = modes.mode;
    pref.color = getComputedStyle(docRoot).getPropertyValue("--colorPicker");
    pref.colorTransp = getComputedStyle(docRoot).getPropertyValue("--colorPickerTransparent");
    pref.extraIcons = document.querySelector(".smartTitel").cloneNode(true);

    localStorage.setItem("preferences", JSON.stringify(pref));
}

// STYLES
function style() {
    const style = document.createElement("style");
    style.src = "https://cdn.jsdelivr.net/gh/myfirstepicgitaccount/test@main/src/style.css";
    head.appendChild(style);
}

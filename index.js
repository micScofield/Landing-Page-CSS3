//Functionality1
// Handling of scroll effect on showcase2 (zoom-in and zoom-out effect)
var scrollPos = 0;

window.addEventListener('scroll', function () {
    var currentScroll = this.scrollY
    var flag = true //for scrolling down

    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')

    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // console.log('scrolling up')
        flag = false
    }
    else {
        // console.log('scrolling down')
        flag = true
    }

    if (currentScroll > 250 && flag) {
        img1.style = 'transform: scale(0.6);'
        img2.style = 'transform: scale(0.6);'
        img3.style = 'transform: scale(0.6);'

    } else {
        img1.style = 'transform: scale(1)'
        img2.style = 'transform: scale(1)'
        img3.style = 'transform: scale(1)'
    }
    // saving the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
});
//Finished


//Functionality2
//Handling displaying of cards on hover and on touch for mobile devices

//list items
const item5 = document.getElementById('item5')
const item4 = document.getElementById('item4')
const item3 = document.getElementById('item3')
const item2 = document.getElementById('item2')
const item1 = document.getElementById('item1')

//image cards
const card5 = document.getElementById('child5')
const card4 = document.getElementById('child4')
const card3 = document.getElementById('child3')
const card2 = document.getElementById('child2')
const card1 = document.getElementById('child1')

// picking serial numbers for styles on desktop devices
const item5Sn = document.getElementById('item5-sn')
const item4Sn = document.getElementById('item4-sn')
const item3Sn = document.getElementById('item3-sn')
const item2Sn = document.getElementById('item2-sn')
const item1Sn = document.getElementById('item1-sn')

// List items for mobile devices
const showcase3mobile = document.getElementById('showcase3mobile')
const item5M = document.getElementById('item5-m')
const item4M = document.getElementById('item4-m')
const item3M = document.getElementById('item3-m')
const item2M = document.getElementById('item2-m')
const item1M = document.getElementById('item1-m')

// picking serial numbers for styles on mobile devices
const item5MSn = document.getElementById('item5-m-sn')
const item4MSn = document.getElementById('item4-m-sn')
const item3MSn = document.getElementById('item3-m-sn')
const item2MSn = document.getElementById('item2-m-sn')
const item1MSn = document.getElementById('item1-m-sn')


item5M.addEventListener('click', function () {
    showcase3mobile.style = "background-image: url('./resources/OneDrive-2021-04-06/images/untitled+\(21+of+22\).jpg')"
    // item5MSn.innerHTML = "01.________"
    // item5MSn.style = "margin-left: -1.5rem"
})

item4M.addEventListener('click', function () {
    showcase3mobile.style = "background-image: url('./resources/OneDrive-2021-04-06/images/Ess-y4qXYAEbmMW.jpg')"
})

item3M.addEventListener('click', function () {
    showcase3mobile.style = "background-image: url('./resources/OneDrive-2021-04-06/images/rahul-ranjit-4Pmr__6Cme4-unsplash.jpg')"
})

item2M.addEventListener('click', function () {
    showcase3mobile.style = "background-image: url('./resources/OneDrive-2021-04-06/images/photo-1478860409698-8707f313ee8b.jpg')"
})

item1M.addEventListener('click', function () {
    showcase3mobile.style = "background-image: url('./resources/OneDrive-2021-04-06/images/Es_6nuNW4AQrq_a.jpg')"
})

// For desktop devices
item5.addEventListener('mouseover', function () {
    card5.style = "background-image: url('./resources/OneDrive-2021-04-06/images/untitled+\(21+of+22\).jpg')"
})

item4.addEventListener('mouseover', function () {
    card5.style = "background-image: url('./resources/OneDrive-2021-04-06/images/Ess-y4qXYAEbmMW.jpg')"
})

item3.addEventListener('mouseover', function () {
    card5.style = "background-image: url('./resources/OneDrive-2021-04-06/images/rahul-ranjit-4Pmr__6Cme4-unsplash.jpg')"
})

item2.addEventListener('mouseover', function () {
    card5.style = "background-image: url('./resources/OneDrive-2021-04-06/images/photo-1478860409698-8707f313ee8b.jpg')"
})

item1.addEventListener('mouseover', function () {
    card5.style = "background-image: url('./resources/OneDrive-2021-04-06/images/Es_6nuNW4AQrq_a.jpg')"
})
//finished


//Functionality3
// Hiding cookie message on clicking close icon
// And showing it when clicked on either header or overlay content on showcase1
const closeCookieMessage = document.getElementById('close-cookie-message')
const cookieContainer = document.getElementById('cookie-container')
const header = document.getElementsByClassName('header')[0]
const overlayContent = document.getElementsByClassName('overlay-content')[0]

closeCookieMessage.addEventListener('click', function() {
    cookieContainer.style = "opacity: 0;"
})

function showCookie() {
    cookieContainer.style = "opacity: 1;"
}
header && header.addEventListener('click', showCookie)
overlayContent && overlayContent.addEventListener('click', showCookie)
//finished
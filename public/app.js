// get user's data
// get user's coordinates


// get user's time
// Get the user's time:                                                              
function userTime(){
    const now = new Date();
    return now.getHours();
}                            

function getMealTime(){
    const tod = userTime()
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}

                                                             
// Build Ad 1:                                                           
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let adText = document.createElement('p')
    adText.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(adText)
}
                                                            
function getCoords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}


// On load, build ads:                                                             
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}

                                                        


const darkBody = document.querySelector('.container')
const toggleDark = document.querySelector('.darkmode')

function switchTheme(){
    if(darkBody.classList.contains('dark') ){
        darkBody.classList.remove('dark')
    } else {
        darkBody.classList.add('dark')
    }
    
}
 toggleDark.addEventListener('click', switchTheme)
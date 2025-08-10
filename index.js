const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('color-scheme')
const generateColorSchemeBtn = document.getElementById('generate-color-scheme-btn')

const fetchColors = (seed_color, scheme_mode) => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed_color.slice(1)}&mode=${scheme_mode.toLowerCase()}&count=5`)
        .then(res => res.json())
        .then(output => console.log(output))
}

generateColorSchemeBtn.addEventListener('click', function(){
    fetchColors(colorPicker.value, colorScheme.value)
})


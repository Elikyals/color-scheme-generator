const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('color-scheme')
const generateColorSchemeBtn = document.getElementById('generate-color-scheme-btn')

const renderColors = (colorArr) => {
    const colorPalette = document.getElementById('color-palette')
    let html = ""
    colorArr.forEach((element) => {
        html += `
                <div class="color">
                    <div class="color-space" style="background-color:${element.hex.value};"></div>
                    <p class="hex-values">${element.hex.value}</p>
                </div>
                `
    });
    colorPalette.innerHTML = html
}
const fetchColors = (seed_color, scheme_mode) => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed_color.slice(1)}&mode=${scheme_mode.toLowerCase()}&count=5`)
        .then(res => res.json())
        .then(output => {
            const colorArr = output.colors
            renderColors(colorArr)
        }
    )
}

fetchColors("#F55A5A", "Monochrome")

generateColorSchemeBtn.addEventListener('click', function(){
    fetchColors(colorPicker.value, colorScheme.value)
})


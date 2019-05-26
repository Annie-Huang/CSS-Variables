var swatches = document.querySelectorAll('.swatches span');

// https://developer.mozilla.org/en-US/docs/Web/CSS/:root
// The :root CSS pseudo-class matches the root element of a tree representing the document. In HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.
var root = document.querySelector(':root');

swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
    })
});

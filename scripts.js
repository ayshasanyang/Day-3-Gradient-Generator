function generateGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    document.getElementById('cssCode').textContent = `background: ${gradient};`;
}

function copyToClipboard() {
    const cssCode = document.getElementById('cssCode');
    navigator.clipboard.writeText(cssCode.textContent).then(() => {
        alert('CSS code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
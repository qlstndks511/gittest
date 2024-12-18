const text = document.getElementById('text');
const treeLeft = document.getElementById('tree-left');
const treeRight = document.getElementById('tree-right');
const gateLeft = document.getElementById('gate-left');
const gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    // Adjusting the marginTop based on the scroll value
    text.style.marginTop = value * 2.5 + 'px';  // Using a factor of 0.5 to control the scroll speed
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});

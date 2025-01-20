// const navbarbtn = () => {
//     document.getElementById("name").classList.toggle("show-navbar")
//     document.getElementById("rotates").classList.toggle("rotate40")
//     document.getElementById("transparent").classList.toggle("bg-transparent")
//     document.getElementById("rotates2").classList.toggle("rotate-45")
//     document.body.classList.toggle("overflow-hidden")
// }


function navbarbtn() {
    const navLinks = document.getElementById('name');
    navLinks.classList.toggle('show');

    const rotates = document.getElementById('rotates');
    const rotates2 = document.getElementById('rotates2');

    rotates.classList.toggle('rotate1');
    rotates2.classList.toggle('rotate2');
}

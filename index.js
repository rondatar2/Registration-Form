const output = document.querySelector('#output')
const input = document.querySelector('#input')
const h1 = document.querySelector('#h1')
const submit = document.querySelector('#submit')
const namee = document.querySelector('#name')
const sn = document.querySelector('#sn')
const address = document.querySelector('#address')
const year = document.querySelector('#year')
const course = document.querySelector('#course')
const inpname = document.querySelector('#inp-name')
const inpsn = document.querySelector('#inp-sn')
const inpaddress = document.querySelector('#inp-address')
const inpyear = document.querySelector('#inp-year')
const inpcourse = document.querySelector('#inp-course')
submit.addEventListener('click', () => {
    if (namee.value && sn.value && address.value && year.value && course.value) {
        output.style.display = 'block'
        inpname.textContent = namee.value
        inpsn.textContent = sn.value
        inpaddress.textContent = address.value
        inpyear.textContent = year.value
        inpcourse.textContent = course.value
        input.style.display = 'none'
        h1.style.display = 'none'
        submit.style.display = 'none'
    }
    else {
        alert('Please fill out all the fields')
    }
})
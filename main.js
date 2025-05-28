'use strict';

const search = document.querySelector('.search')
const searchItem = document.querySelector('.search_item')
const cart = document.querySelector('.cart')
const cartBox = document.querySelector('.cart_box')
const user = document.querySelector('.user')
const userForm = document.querySelector('.user_form')
const bar = document.querySelector('.bar')
const nav = document.querySelector('nav')
const dragRows = document.querySelectorAll('.row')

let isDown = false
let startX
let scrollLeft


search.addEventListener('click', (e) => {
    searchItem.classList.toggle('show') 
    })

cart.addEventListener('click', (e) => {
    cartBox.classList.toggle('show')
})

user.addEventListener('click', (e) => {
    userForm.classList.toggle('show')
})

bar.addEventListener('click', (e) => {
    nav.classList.toggle('show')
});

// product setction drag logic

dragRows.forEach((dragRow) => {

    dragRow.addEventListener('mousedown', (e) => {
        isDown = true
        startX = e.pageX - dragRow.offsetLeft
        scrollLeft = dragRow.scrollLeft
    })
    
    dragRow.addEventListener('mouseleave', () => {
        isDown = false
    })
    
    dragRow.addEventListener('mouseup', () => [
        isDown = false
    ])
    
    dragRow.addEventListener('mousemove', (e)=> {
        if(!isDown) return
        e.preventDefault()
        const x = e.pageX - dragRow.offsetLeft;
        let walk = (x - startX) * 2
        dragRow.scrollLeft = scrollLeft - walk;
    })
})

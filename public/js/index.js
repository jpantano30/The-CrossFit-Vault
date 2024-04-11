document.querySelectorAll('.category-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault()
    const category = this.getAttribute('data-category')
    document.querySelectorAll('.workout-item').forEach(item => {
      if (item.getAttribute('data-category') === category || category === 'All') {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
})

document.getElementById('showAll').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelectorAll('.workout-item').forEach(item => {
    item.style.display = 'block'
  })
})

document.getElementById('showNone').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelectorAll('.workout-item').forEach(item => {
    item.style.display = 'none'
  })
})
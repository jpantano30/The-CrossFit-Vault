document.addEventListener('DOMContentLoaded', () => {
  const favoriteButton = document.getElementById('favorite')
  if (favoriteButton) {
    favoriteButton.addEventListener('click', async (event) => {
      event.preventDefault()
      const workoutId = favoriteButton.dataset.workoutId
      const isFavorited = favoriteButton.classList.contains('favorited') // check if already favorited
      try {
        // fetch request to toggle the favorite status
        const response = await fetch(`/workouts/${workoutId}/favorite`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ isFavorite: !isFavorited }) // Send the opposite of the current status
        })
        if (response.ok) {
          // toggle the favorited class on the button based on the current state
          favoriteButton.classList.toggle('favorited')
          console.log('Favorite status updated')
        } else {
          console.error('Error updating favorite status')
        }
      } catch (err) {
        console.error('Error:', err)
      }
    })
  } else {
    console.log('Favorite button not found')
  }
})

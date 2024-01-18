// Sample user data, replace this with actual user data from your server
const usersData = [
    { id: 1, userId: 'user123' },
    { id: 2, userId: 'user456' },
    // Add more user data as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    const userCardsContainer = document.getElementById('userCardsContainer');
  
    // Function to create a user card
    function createUserCard(user) {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
  
      const userCardNumber = document.createElement('div');
      userCardNumber.classList.add('user-card-number');
      userCardNumber.textContent = user.id;
  
      const userCardId = document.createElement('div');
      userCardId.classList.add('user-card-id');
      userCardId.textContent = user.userId;
  
  
      userCard.appendChild(userCardNumber);
      userCard.appendChild(userCardId);
  
      return userCard;
    }
  
    // Function to render user cards
    function renderUserCards() {
      userCardsContainer.innerHTML = ''; // Clear existing cards
  
      usersData.forEach(user => {
        const userCard = createUserCard(user);
        userCardsContainer.appendChild(userCard);
      });
    }
  
    // Initial render
    renderUserCards();
  });
  
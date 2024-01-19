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

        const userCardContent = document.createElement('div');
        userCardContent.classList.add('user-card-content');

        const userCardIdContainer = document.createElement('div');
        userCardIdContainer.classList.add('user-card-id-container');

        const userCardIdInner = document.createElement('div');
        userCardIdInner.classList.add('user-card-id-inner');
        userCardIdInner.textContent = user.userId;

        userCardIdContainer.appendChild(userCardIdInner);
        userCardContent.appendChild(userCardIdContainer);

        userCard.appendChild(userCardNumber);
        userCard.appendChild(userCardContent);

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

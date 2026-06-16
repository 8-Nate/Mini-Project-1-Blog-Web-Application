document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    //const taskCategory = document.getElementById('taskCategory').value;

    // Calculate the number of days until the due date
    const today = new Date();
    const dueDate = new Date(taskDueDate);
    const timeDiff = dueDate - today; // in milliseconds
    const daysUntilDue = Math.ceil(timeDiff / (1000 * 3600 * 24)); // convert to days

    // Determine the priority based on the due date
    let priority = 'Low'; // Default to Low
    if (daysUntilDue <= 7) {
        priority = 'High';
    } else if (daysUntilDue <= 30) {
        priority = 'Medium';
    }

    // Create the front and back faces for the card
    const frontFace = document.createElement('div');
    frontFace.classList.add('card-face', 'card-front');
    frontFace.style.backgroundImage = "url('cardFront.png')"; // Set the background image for the front of the card
    frontFace.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
        <p class="due-date">Due: ${taskDueDate}</p>
        <p class="priority">Priority: ${priority}</p>
    `;

    frontFace.innerHTML = `
    <h3>${taskTitle}</h3>
    <div class="task-description">${taskDescription}</div>
    <p class="due-date">${taskDueDate}</p>

    `;



    // Create a task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('card');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');



    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation();
        taskCard.remove();
    });

    taskCard.appendChild(deleteButton);
    taskCard.appendChild(frontFace);


    // Append the card to the appropriate priority container
    let containerId = '';
    if (priority === 'High') {
        containerId = 'highPriorityContainer';
    } else if (priority === 'Medium') {
        containerId = 'mediumPriorityContainer';
    } else {
        containerId = 'lowPriorityContainer';
    }

    const priorityContainer = document.getElementById(containerId);
    priorityContainer.appendChild(taskCard);
    document.getElementById('taskForm').reset();
});



const input = document.getElementById('search_bar');

input.addEventListener('input', function () {
    const checker = this.value.toLowerCase();

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(checker)) {
            card.style.display = 'flex';
            card.style.display = 'flex';
            card.style.flexWrap = 'wrap';
        } else {
            card.style.display = 'none';
        }
    });
});



const filter = document.getElementById('filter');
const cardsHigh = document.querySelectorAll('#highPriorityContainer');
const cardsMed = document.querySelectorAll('#mediumPriorityContainer');
const cardsLow = document.querySelectorAll('#lowPriorityContainer');
const cards = document.querySelectorAll('.task-container');
let count = 0;

filter.addEventListener('click', function() {
    content1.style.display = 'block';
    count++
    switch(count) {
        case 1:
            cards.forEach(card => {
                card.style.display = 'none';
            });
            cardsHigh.forEach(card => {
                card.style.display = 'block';
                card.style.display = 'flex';
                card.style.flexWrap = 'wrap';
            });
            content2.style.display = 'none';
            content3.style.display = 'none';
            break
        case 2:
            cardsHigh.forEach(card => {
                card.style.display = 'none';
            });
            cardsMed.forEach(card => {
                card.style.display = 'block';
                card.style.display = 'flex';
                card.style.flexWrap = 'wrap';
            });
            content1.style.display = 'none';
            content2.style.display = 'block';
            break
        case 3:
            cardsMed.forEach(card => {
                card.style.display = 'none';
            });
            cardsLow.forEach(card => {
                card.style.display = 'block';
                card.style.display = 'flex';
                card.style.flexWrap = 'wrap';
            });
            content1.style.display = 'none'
            content2.style.display = 'none';
            content3.style.display = 'block';
            break
        case 4:
            cards.forEach(card => {
                card.style.display = 'block';
                card.style.display = 'flex';
                card.style.flexWrap = 'wrap';
            });
            content1.style.display = 'block';
            content2.style.display = 'block'
            content3.style.display = 'block';
            count = 0;
            break
        default:
            cards.forEach(card => {
                card.style.display = 'block';
                card.style.display = 'flex';
                card.style.flexWrap = 'wrap';
            });
            content1.style.display = 'block';
            content2.style.display = 'block'
            content3.style.display = 'block';
            count = 0;
    }
    console.log(count);
});
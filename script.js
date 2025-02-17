document.addEventListener('DOMContentLoaded', function () {
    const habitInput = document.getElementById('habit-input');
    const addHabitButton = document.getElementById('add-habit');
    const habitList = document.getElementById('habit-list');

    addHabitButton.addEventListener('click', function () {
        const habitText = habitInput.value.trim();
        if (habitText !== '') {
            addHabit(habitText);
            habitInput.value = '';
        }
    });

    function addHabit(habitText) {
        const habitItem = document.createElement('li');
        habitItem.classList.add('habit-item');

        const habitTextSpan = document.createElement('span');
        habitTextSpan.textContent = habitText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            habitList.removeChild(habitItem);
        });

        habitItem.appendChild(habitTextSpan);
        habitItem.appendChild(deleteButton);

        habitItem.addEventListener('click', function () {
            habitItem.classList.toggle('completed');
        });

        habitList.appendChild(habitItem);
    }
});























































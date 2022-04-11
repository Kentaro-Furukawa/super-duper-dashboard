feather.replace()

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// *************************************************************

const selectedUser = document.getElementById('user-selecter');
const targetInput = document.querySelector('.target-input input');
const msg = document.querySelector('.msg');
const sendButton = document.querySelector('.target-send button');
const stateTable = document.querySelector('.table-container table');

sendButton.addEventListener('click', clickSend);


function clickSend(e){
    e.preventDefault();

    const current = new Date();
    currentHours = current.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    currentMinutes = current.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);
    currentSeconds = current.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);

    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    
    if (targetInput.value.trim() === '' || selectedUser.value === '') {
        msg.classList.add('msg-on');
        msg.innerHTML = 'Please Enter value and select user.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="td-key">${selectedUser.value}</td><td class="td-time">${currentTime}</td><td class="td-value">${targetInput.value}</td>`;
        stateTable.appendChild(tr);
    }

}
function showCountry(country) {

    let allContents = document.querySelectorAll('.text-wrapper > div');
    for (let i = 0; i < allContents.length; i++) {
        allContents[i].classList.add('hidden');
    }

    let allButtons = document.querySelectorAll('.btn-wrapper > button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('btn-color');
    }

    let selectedContent = document.getElementById(`${country}content`);
    selectedContent.classList.remove('hidden');

    let selectedButton = document.getElementById(`${country}button`);
    selectedButton.classList.add('btn-color');
}
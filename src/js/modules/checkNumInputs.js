const checkNumInputs = (seletor) => {
    const numInputs = document.querySelectorAll(seletor);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;
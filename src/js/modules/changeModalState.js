const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state);
        });
    });

};

export default changeModalState;
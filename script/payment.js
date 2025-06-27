document.querySelectorAll('.p-input').forEach(input => {
    const updateClass = () => {
        if (input.value.trim() !== "") {
            input.parentElement.classList.add('has-value');
        } else {
            input.parentElement.classList.remove('has-value');
        }
    };

    updateClass();

    input.addEventListener('input', updateClass);
});

function setupSingleSelectCheckboxes(selector) {
    const checkboxes = document.querySelectorAll(`${selector} input`);

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            checkboxes.forEach(other => {
                if (other !== cb) other.checked = false;
                other.closest(selector)?.classList.remove('active');
            });

            if (cb.checked) {
                cb.closest(selector)?.classList.add('active');
            }
        });
    });
}

setupSingleSelectCheckboxes('.delivery-type-item');
setupSingleSelectCheckboxes('.payment-method');

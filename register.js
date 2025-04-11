// Password toggle visibility
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '👁️';
        } else {
            input.type = 'password';
            this.textContent = '👁️';
        }
    });
});
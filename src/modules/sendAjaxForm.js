
const sendAjaxForm = () => {
    const forms = document.querySelectorAll('form');
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
    };
    forms.forEach(form => {
        form.addEventListener('input', (event) => {
            alert('hello');
        });

    });


};
export default sendAjaxForm();
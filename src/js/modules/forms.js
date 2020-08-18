const forms = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('.input');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо, скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    const writeData = () => {
        inputs.forEach(input => {
            console.log(input.placeholder);
            console.log(input.type);
            state[input.placeholder] = input.value;
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            writeData();
            for(let key in state) {
                formData.append(key, state[key]);
            }
            

            postData('./server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 10000);
                })
                cleanState();
        });
        const cleanState = () => {
            for(let elem in state) {
                delete state[elem];
            };
        }
    });

}

export default forms;
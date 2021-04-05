function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const addBtn = document.getElementById('add');

    const sections = document.querySelectorAll('section');
    const openSection = sections.item(1).querySelectorAll('div').item(1);
    const inProgressSection = sections.item(2).querySelectorAll('div').item(1);
    const completedSection = sections.item(3).querySelectorAll('div').item(1);

    addBtn.addEventListener('click', openSectionFunction);

    function openSectionFunction(e) {
        e.preventDefault();
        if (task.value === '' || description.value === '' || date.value === '') {
            return
        }

        const articleOpen = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task.value;
        const p1 = document.createElement('p');
        p1.textContent = `Description: ${description.value}`;
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date.value}`;

        let div = document.createElement('div');
        div.setAttribute('class', 'flex');
        let btnStart = document.createElement('button');
        btnStart.textContent = 'Start';
        btnStart.setAttribute('class', 'green')
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('class', 'red');

        div.appendChild(btnStart);
        div.appendChild(deleteBtn);

        articleOpen.appendChild(h3);
        articleOpen.appendChild(p1);
        articleOpen.appendChild(p2);
        articleOpen.appendChild(div);
        openSection.appendChild(articleOpen);

        task.value = '';
        description.value = '';
        date.value = '';

        deleteBtn.addEventListener('click',(e)=>e.target.parentElement.parentElement.remove());

        btnStart.addEventListener('click',inProgressFunction);

        function inProgressFunction(e) {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();

            const articleProgress = document.createElement('article');

            const divFlex = document.createElement('div');
            divFlex.setAttribute('class', 'flex');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('class', 'red');

            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.setAttribute('class', 'orange');
            divFlex.appendChild(deleteBtn)
            divFlex.appendChild(finishBtn)

            articleProgress.appendChild(h3);
            articleProgress.appendChild(p1);
            articleProgress.appendChild(p2); 
            articleProgress.appendChild(divFlex);
            inProgressSection.appendChild(articleProgress)

            deleteBtn.addEventListener('click', (e) =>e.target.parentElement.parentElement.remove())
       
            finishBtn.addEventListener('click',finishFunction);

            function finishFunction(e) {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();

                const articleComplete = document.createElement('article');
                articleComplete.appendChild(h3);
                articleComplete.appendChild(p1);
                articleComplete.appendChild(p2);

                completedSection.appendChild(articleComplete)
            }
        }
    }
}
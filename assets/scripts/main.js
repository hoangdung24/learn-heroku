$(".submit")[0].addEventListener('click', (e) =>{

    e.preventDefault();

    $.getJSON('/api', (data) => {

        const listItem = data.map((el) =>{
            return `<p>${el.item.name}</p>`;
        })
    
        document.querySelector('.data').insertAdjacentHTML('afterbegin', listItem.join(""));
        
    })
})

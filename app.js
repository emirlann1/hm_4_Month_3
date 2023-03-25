const btn = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach((item) => {
            const block = document.createElement('div')
            block.innerHTML = `
            <div class="block">
                <img src="${item.url}" alt="">
                <h2>Name: ${item.title}</h2>
                <p>Price: ${item.price}</p>
            </div>
            `
            wrapper.append(block)
        })
    })
})
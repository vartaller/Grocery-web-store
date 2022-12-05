const toCurrency = price => {
    return new Intl.NumberFormat('en-EN', {
    currency: 'usd',
    style: 'currency'
}).format(price)
    
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

const $cart = document.querySelector('#cart')
if ($cart) {
    $cart.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id

            fetch('/cart/remove/' + id, {
                method: 'delete' //http metod to delete elements
            }).then(res => res.json())
                .then(cart => {
                    if (cart.products.length) {
                        const html = cart.products.map(c => {
                            return `
                        <tr>
                        <td>${c.title}</td>
                        <td>${c.count}</td>
                        <td>
                            <button class="btn btn-small js-remove" data-id="${c.id}">Remove</button>
                        </td>
                    </tr>
                        `
                        }).join('')
                        $cart.querySelector('tbody').innerHTML = html
                        $cart.querySelector('.price').textContent = toCurrency(cart.price)
                    } else {
                        $cart.innerHTML = '<p>Your cart is empty</p>'
                    }
                })
        }
    })
}
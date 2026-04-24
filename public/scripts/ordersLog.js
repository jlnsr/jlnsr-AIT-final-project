import * as help from './helpers.js'

const form = document.querySelector('.analytics-form')

const toAnalytics = document.querySelector('.to-analytics')
toAnalytics.addEventListener('click', async function() {
    const allItems = document.querySelectorAll('.list-item')
    // unique items
    const itemCount = Array.from(allItems).reduce((acc, curr) => {
        const itemName = curr.textContent
        acc[itemName] = !Object.hasOwn(acc, itemName) ? 1 : acc[itemName] + 1
        return acc
    }, {})
    //HOF 4
    // FORM 3
    Object.entries(itemCount).forEach(([item,count]) => {
        help.createElement('input', form, {
            'type':'hidden',
            'name':item,
            'value':count
        })
    })
    form.submit()
})
/* HOF 1
 * A general purpose function to create DOM elements.
 * Positional Arguments:
 *  - tagName
 *  - parent
 * Optional Arguments:
 *  - options, an object with all the element attributes the caller wishes to target
 *  - eventListener, an array with a String, the type of event, and a function, the handler
**/
export function createElement(tagName, parent, options = {}, eventListener = []){
  const e = document.createElement(tagName);
  // give element optional attributes
  if(!isEmpty(options)){
    Object.entries(options).
    forEach(([prop,val]) => e[prop] = val)
    /*["classList", "textContent", "src", "alt"].forEach((attr) => {
      if(Object.hasOwn(options, attr)){
        e[attr] = options[attr]
      }
    })*/
  }
  // attach event listener to element
  if(!isEmpty(eventListener)){
    const [event, handler] = eventListener
    e.addEventListener(event, handler)
  }
  parent.appendChild(e)
  return e;
}
/* HOF 2
 * A general purpose function for pulling elements from the DOM tree and optionally adding event listeners.
 * Renders the ability to make long DOM queries and set event handlers in one line, improving readability in the app.
 * finder - String name of object function to find elements with (e.g. querySelector, querySelectorAll, etc..)
 * identifier - String used to identify DOM elements (i.e. tagName, className, id, etc...)
 * eventListener - An array with a string, the type of event, and a function, the handler
**/
export function getDom(finder, identifier, eventListener = []){
    const target = document[finder](identifier)
    console.log(finder, identifier)
    // add event listener to target?
    if(!isEmpty(eventListener)){
        const [event, handler] = eventListener
        // many elements or single element?
        if(target instanceof NodeList || target instanceof HTMLCollection){
          Array.from(target).forEach(el =>
            el.addEventListener(event, handler))  
        }else {
          target.addEventListener(event, handler)
        }
    }
    return target
}

export function remove(arr, ele){
  if(isEmpty(arr)){
    return
  }
  arr.splice(arr.indexOf(ele),1)
}

export function isEmpty(obj){
    return Object.entries(obj).length === 0
}

export function isInstance(thing, type){
    return typeof(thing) === type
}
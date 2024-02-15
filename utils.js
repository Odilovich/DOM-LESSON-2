function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function render(element, className, HTMLcontent) {
    let tag = document.createElement(element);

    if (className) {
        tag.className
    }
    tag.classList.add(className);
    tag.innerHTML = HTMLcontent;
    return tag;
}
let tags = [];
const tagContainer = document.querySelector('.tag-container');
const input = tagContainer.querySelector('input');

input.addEventListener('keyup',addTags)

function addTags( event ){
    const keyIsEnter = event.key === 'Enter'
    if(keyIsEnter){
        input.value.split(',').forEach( tag => {
            if(tag){
                tags.push(tag.trim());
            }
        })
        
        updateTags();
        input.value = "";
    }
}

function updateTags(){
    clearTags();
    const tagsReversed = tags.slice().reverse()
    tagsReversed.forEach(tag => {
        tagContainer.prepend(createTag(tag))
    })
}

function createTag(tag){
    const div = document.createElement('div')
    div.classList.add('tag');

    const span = document.createElement('span');
    span.innerText = tag;

    const i = document.createElement('i');
    i.classList.add('close')
    i.setAttribute('data-id', tag)
    i.addEventListener('click',removeTag)

    div.append(span)
    div.append(i)

    return div;
}

function removeTag(event){
    const buttonClose = event.currentTarget;
    const id = buttonClose.dataset.id;
    const index = tags.indexOf(id);

    tags.splice(index , 1);

    updateTags();
}

function clearTags(){
    tagContainer
        .querySelectorAll('.tag')
        .forEach( tagElement => tagElement.remove());
}
let elPostsList = document.querySelector('.posts-wrapper');
let elSearchInp = document.querySelector('#search')
let xMark = document.querySelector('.fa-xmark')

document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetch('https://dummyjson.com/posts', {
        method: 'GET',
    });
    let post_data = await data.json();
    let elFrag = document.createDocumentFragment();
    post_data.posts.forEach(element => {
        let newTitle = document.createElement('a');
        let newLi = document.createElement('li');
        let newBody = document.createElement('p');
        let newInfoPannel = document.createElement('div');
        let newUserID = document.createElement('p');
        let newReactions = document.createElement('i');
        let newCategory = document.createElement('p');


        newTitle.href = '#';
        newTitle.textContent = element.title;
        newBody.textContent = element.body;
        newReactions.textContent = `: ${element.reactions}`;
        newUserID.textContent = `By user: ${element.userId}`
        newCategory.textContent = element.newUserID;


        newLi.append(newTitle);
        newLi.append(newBody);
        newLi.append(newInfoPannel);
        newInfoPannel.append(newUserID)
        newInfoPannel.append(newReactions)
        elFrag.append(newLi);


        newLi.classList.add("post-li")
        newTitle.classList.add("post-title")
        newBody.classList.add("post-body")
        newInfoPannel.classList.add("post-info-div")
        newUserID.classList.add("post-info-userid")
        newReactions.classList.add("fa-solid")
        newReactions.classList.add("fa-thumbs-up")

        elSearchInp.addEventListener('change', () => {
            if (newTitle.textContent.toLowerCase().includes(elSearchInp.value.toLowerCase()) == false) {
                newTitle.parentElement.classList.add('none')
            } else if (elSearchInp.value !== "") {
                xMark.classList.remove('none')
                xMark.classList.add('block')
            }
        })
        elSearchInp.addEventListener('change', () => {
            if (elSearchInp.value !== "") {
                xMark.classList.remove('none')
                xMark.classList.add('block')
            }
        })

        xMark.addEventListener('click', () => {
            location.reload();
        })

    });
    elPostsList.append(elFrag);
});


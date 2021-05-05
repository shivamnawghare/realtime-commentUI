

//  ----------------Till the user writes his name while loop goes on --------------------------

let username

do {

    username = prompt('Enter your name:')

} while(!username)

const textarea = document.querySelector('#textarea')
const submitBtn = document.querySelector('#submitBtn')

const commentBox = document.querySelector('.comment_box')

submitBtn.addEventListener('click', (e) => {

    e.preventDefault()
    let comment = textarea.value

    //----------------------if nothing written in comment then return otherwise post comment---------------

    if (!comment) {

        return
    }

    postComment(comment)

})

function postComment(comment) {

    //Append to dom

    let data = {

        username: username,
        comment: comment
    }

    appendToDom(data)
    textarea.value = ''

    //Sync with Mongodb

    s
}

function appendToDom(data) {

    let lTag = document.createElement('li')
    lTag.classList.add('comment', 'mb-3')

    // ----------For getting the comment section comments dynamically by user with time------------- 
    let markup = ` <div class="card border-light mb-3">
            <div class="card-body">
                <h6>${data.username}</h6>
                <p>
                   ${data.comment}
                            </p>
                <div> ${moment(data.time).format('LT')} </div>
            </div>
        </div> `

    //--------------------For getting newer comments above older ones----------------------
    lTag.innerHTML = markup

    commentBox.prepend(lTag)
  
}


//Api calls

 /* function syncWithDb(data) {

    const headers = {

        'Content-Type': 'application/json'
    }

    fetch('/api/comments', { method: 'Post', body: JSON.stringyfy(data), headers })
        .then(response => response.json())
        .then(result => {

           

            console.log(result)

        })
}

function fetchComments() {
    fetch('/api/comments')
        .then(res => res.json())
        .then(result => {

            result.forEach((comment) => {

                comment.time = comment.creatredAt
                appendToDom(comment)
            })

       
        })
}
window.onload = fetchComments  */
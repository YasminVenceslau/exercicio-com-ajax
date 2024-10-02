document.addEventListener('DOMContentLoaded',function(){
    const nameElemt = document.querySelector('#name')
    const urserNameElemt = document.querySelector('#username')
    const avatarElemt = document.querySelector('#avatar')
    const reposElemt = document.querySelector('#repos')
    const followersElemt = document.querySelector('#followers')
    const followingElemt = document.querySelector('#following')
    const linkElemt = document.querySelector('#link')


    fetch('https://api.github.com/users/YasminVenceslau')
        .then(function(resposta){
            return resposta.json()
        })

        .then(function(json){
            nameElemt.innerHTML = json.name
            urserNameElemt.innerHTML = `@${json.login}`
            avatarElemt.src = json.avatar_url
            followingElemt.innerHTML = json.following
            followersElemt.innerHTML  = json.followers
            reposElemt.innerHTML = json.public_repos
            linkElemt.href = json.html_url
        })
})
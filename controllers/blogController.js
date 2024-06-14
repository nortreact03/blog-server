const posts =  [
    {
      id: '23423rwer3',
      title: 'Minu esimene blogipostitus',
      content: 'asödfjasdöflkajd öalsjd föalsdf öalkjdf aöldfkja fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: '2324243477',
      title: 'Minu Teine blogipostitus',
      content: 'erwer rterte öalsjd föalsdf öalkjdf aöldfkja fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: '123hgh676',
      title: 'Minu kolmas blogipostitus',
      content: 'slödfgkj sdöflgkjsdfgsöldkfgj  fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: 'utyyut68768',
      title: 'Minu neljas blogipostitus',
      content: 'slödfgkj sdöflgkjsdfgsöldkfgj  fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: 'utyyut68768',
      title: 'Minu viies blogipostitus',
      content: 'slödfgkj sdöflgkjsdfgsöldkfgj  fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
  ]   

function getPosts() {
    return posts
}

function addPost(newPost) {
    posts.push(newPost)
}

module.exports = {
    getPosts,
    addPost
} 
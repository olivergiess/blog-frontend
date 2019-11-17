let client

function setupAPI (newclient) {
  client = newclient
}

function getBlogByURLIdentifier (URLIdentifier) {
  return client.get(`/blogs/${URLIdentifier}?expand=user,published`)
    .then(res => res.data)
}

export {
  setupAPI,
  getBlogByURLIdentifier
}

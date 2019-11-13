let client

function setupAPI (newclient) {
  client = newclient
}

function getBlogBySlug (slug) {
  return client.get(`/users/${slug}?expand=published`)
    .then(res => res.data)
}

export {
  setupAPI,
  getBlogBySlug
}

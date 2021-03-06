export function JsonAPIConverter (response) {
  const payload = response.data
  const result = []

  if (Array.isArray(payload)) {
    for (const key in payload) {
      result.push(formatResource(payload[key]))
    }
  } else {
    result.push(formatResource(payload))
  }

  return result
}

function formatResource (resource) {
  for (const relationship in resource.relationships) {
    resource[relationship] = resource.relationships[relationship].data
  }

  return resource
}

function request(object) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let patternForUri = /^([A-Za-z0-9.]+)$|\*/g
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let messagePattern = /^([^<>\\&'"]*)$/g

    if(!methods.includes(object.method) || !object.hasOwnProperty('method')){
        throw new Error(`Invalid request header: Invalid Method`)
    }

    if(!object.uri.match(patternForUri) || object.uri === '' || !object.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!versions.includes(object.version) || !object.hasOwnProperty('version')){
        throw new Error(`Invalid request header: Invalid Version`)
    }

    if(!object.message.match(messagePattern) || !object.hasOwnProperty('message')){
        throw new Error(`Invalid request header: Invalid Message`)
    }

    return object;
}
request({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  )
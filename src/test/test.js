var method = 'GET'
var params = 'test'
var data = method === 'POST' || method === 'PUT' ? params : null
var param = method === 'GET' || method === 'DELETE' ? params : null
console.log(data)
console.log(param)

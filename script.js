function getDadosEnderecoPorCep(cep) {
  console.log(cep)

  let url = 'http://viacep.com.br/ws/'+cep+'/json/unicode/'
  console.log(url)

  let xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', url)

  xmlHttp.onreadystatechange = () => {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
      console.log(xmlHttp.responseText)
    }
  }

  xmlHttp.send()
}
// Função que limpa o campo da calculadora
function clean(){
    document.getElementById("resultado").innerHTML = ''
}

// Função de inserir os números da operação
function insert(num){
    const numero = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = numero + num
}

// Função que exclui o último valor do campo
function back(){
    const resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

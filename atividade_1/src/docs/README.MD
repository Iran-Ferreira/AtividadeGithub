Foi usado o HTML, CSS e para fazer o corpo e a estilização da calculadora e as funções foi feito em Javascript. 

O id = resultado foi feito para pegar os números que o usuário digita.
O campo C é para apagar todo o campo.
E o < para apagar um de cada vez.

Todas as funções foram feitas com o document pegando por parâmetro o ID resultado.

Precisamos inserir os números no campo, então criamos uma função insert. Recebe o id resultado e com o innerHTML faz a junção de um número/operador com outro.

Para apagar os todos os números do campo criamos a função clean. Recebe o id resultado e com o innerHTML apaga o campo.

E o de apagar um de cada vez criamos a função back. Recebe o id resultado e com a função substring ele apaga o último valor no campo.

A função calcular faz as operações que a atividade pede, soma, subtração, multiplicação e divisão. Recebe o id resultado e com a função eval ele consegue fazer as operações matemáticas.
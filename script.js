

function TelaAluno() {
    const button = document.getElementById('button');
if (button)
{
    button.addEventListener("click", function() {
        window.location.href = "AlunoPage.html";
    });
}
}
 
TelaAluno();






// function Enviar() {
  
//     const nome = document.getElementById('input_nome').value;
//     const idade = document.getElementById('input_idade').value;
//     const email = document.getElementById('input_email').value;


//     alert("Dados capturados:", nome, idade, email);


//     if (nome == "" || idade == "" || email == "") {
//         alert('Erro ao cadastrar: verifique se há algum campo vazio!');
//         return;
//     } 

//     else if (!email.endsWith("@gmail.com")) {
//         console.log('Email inválido! Deve ser @gmail.com');
//         return;
//     } 
//     else if (isNaN(idade)) {
//         alert("Por favor, digite apenas números na idade");
//         return;
//     }

//     // 3. Chamada ao Servidor
   
//     fetch('http://localhost:3000/alunos', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             nome: nome,
//             idade: idade,
//             email: email
//         })
//     }) 
//     .then(res => res.json())
//     .then(dados => {
//         alert("Enviado para o servidor!");
//         console.log("Resposta do servidor:", dados);
//     })
//     .catch(erro => {
//         alert("Erro ao conectar com o servidor!");
//         console.error("Detalhes do erro:", erro);
//     });
// }
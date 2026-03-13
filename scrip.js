

function Enviar() {
  
    const nome = document.getElementById('input_nome').value;
    const idade = document.getElementById('input_idade').value;
    const gmail = document.getElementById('input_gmail').value;
   

     console.log("Dados capturados:", nome, idade, gmail);

      if(nome==""||idade==""||gmail==""){
            console.log('Erro ao cadastrar verifique se há algum campo vazio!')
            return;
         }
         else if(!gmail.endsWith("@gmail.com")){
         console.log('Gmail inválido!')
               return;
       }
       else if (isNaN(idade)){
          console.log("Por favor digite apenas números")
         return;
        }
    //  else if(nome.){

      fetch('http://localhost:3000/alunos'), {
          method: "POST",
      headers: {
         "Content-Type": "application/json"
          },
     body: JSON.stringify({nome: nome,
          idade: idade,
              gmail: gmail
           })
   
      .then(res => res.json())
        .then(dados => {
        
         alert("Enviado para o servidor!");
     
       console.log(dados);
     })
      .catch(erro => {
           alert("Erro ao conectar com o servidor!");
      console.error(erro);
         })
        }
    }


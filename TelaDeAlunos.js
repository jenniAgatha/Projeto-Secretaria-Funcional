function addStudent(){
    const btn=document.getElementById('addButton')
    if(btn)
    {
        btn.addEventListener("click", function() {
        window.location.href = "AdicionarAlunoPage";
    });
}
}
addStudent();
 

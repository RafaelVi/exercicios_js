
function adicionaExamesCachorro(exame){
    this.exames.push(exame);
}


var cachorro = {
    nome : "Rex",
    fiv : true,
    idade:10,
    felv:false,
    exames: ["Ultrassonografia","Exame de sangue","Exames de urina e de fezes"],
    verificaFelv: function()
    {
        if(this.felv)
        {
            console.log("Seu cachorro esta com felv :(");
        }
        else
        {
            console.log("Seu cachorro está bem! :)");
        }
    },
    verificaFiv: function()
    {
        if(this.fiv)
        {
            console.log("Seu cachorro esta com fiv :(");
        }
        else
        {
            console.log("Seu cachorro está bem! :)");
        }
    },
    adicionaExamesCachorro

}
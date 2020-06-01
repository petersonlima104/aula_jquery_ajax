
var tempo = 1;
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            setTimeout(() => {                
            console.log(response);                
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //$("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            }, 300);
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})


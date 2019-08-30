var musicas = ["Axé"
  , "Blues"
  , "Brega , Bregas Marcantes"
  , "Country"
  , "Eletrônica"
  , "Forró"
  , "Funk"
  , "Gospel"
  , "Hip Hop"
  , "Jazz"
  , "Melody , Tecnomelody"
  , "Metal , Heavy Metal"
  , "MPB"
  , "Música clássica"
  , "Pagode"
  , "Pop"
  , "Rap"
  , "Reggae"
  , "Rock"
  , "Samba"
  , "Sertanejo"
];

var cinemas = [
    "Ação"
    ,"Aventura"
    ,"Cinema de arte"
    ,"Chanchada"
    ,"Cinema catástrofe"
    ,"Comédia"
    ,"Comédia romântica"
    ,"Comédia dramática"
    ,"Comédia de ação"
    ,"Dança"
    ,"Documentário"
    ,"Docuficção"
    ,"Drama"
    ,"Espionagem"
    ,"Faroeste (ou western)"
    ,"Fantasia científica"
    ,"Ficção científica"
    ,"Filmes de guerra"
    ,"Musical"
    ,"Filme policial"
    ,"Romance"
    ,"Suspense"
    ,"Terror"
];

var literarios = [
    "Adolescente e Jovem Adulto"
    ,"Artes e fotografia"
    ,"Artesanato, Hobbies & Casa"
    ,"Auto-ajuda"
    ,"Biografias e Memórias"
    ,"Calendários"
    ,"Ciência matemática"
    ,"Computadores e Tecnologia"
    ,"Criação de Filhos & Relacionamentos"
    ,"Educação e Ensino"
    ,"Educação Financeira , Finanças"
    ,"Empreendedorismo"
    ,"Engenharia e Transportes"
    ,"Esportes e Ar Livre"
    ,"Ficção científica e fantasia"
    ,"História"
    ,"Humor e Entretenimento"
    ,"Lei"
    ,"Literatura e ficção"
    ,"Livros de culinária, comida e vinho"
    ,"Livros e Bíblias Cristãs"
    ,"Livros infantis"
    ,"Livros Lésbicas, Gays, Bissexuais e Transgêneros"
    ,"Livros médicos"
    ,"Mistério, suspense e suspense"
    ,"Negócios e Dinheiro"
    ,"Política e Ciências Sociais"
    ,"Preparação para teste"
    ,"Quadrinhos e romances gráficos"
    ,"Referência"
    ,"Religião e Espiritualidade"
    ,"Romance"
    ,"Saúde, Fitness e Dieta"
    ,"Viagem"
];

var escolaridades = [
    "Ensino Médio"
    ,"Ensino Superior Incompleto"
    ,"Ensino Superior Completo"
    ,"Especialização Completa"
    ,"Mestrado Completo"
    ,"Doutorado Completo"
]

function defineSessao(tipo, nome, checks, icone) {
    //var sessao = $('#gostomusical');
      
    var sessao = $('#'+nome);
  
      var row = $(`<div class="row" >
       
        </div>
      `);
      sessao.append(row);
      checks.forEach((check, index) => {
        var col = $(`<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 " />`);

        var radioButtonPrimeiro =  tipo == "radio" && index == 0;
        var checkedPadrao =  radioButtonPrimeiro ? 'checked' : '' ;
        var activePadrao = radioButtonPrimeiro ? 'active' : '' ;

        var html = `
                <div class="choice ${tipo} ${nome} ${activePadrao}" data-toggle="wizard-${tipo}">
                    <input type="${tipo}" name="${nome}" class="${nome}" value="${index}" ${checkedPadrao}>
                    <div class="icon">
                        <i class="${icone}"></i>
                    </div>
                        <label class="text-icon">${check}</label> 
                </div>
           `;
        //html = `<div style="width: 100px; height: 100px; border: solid 1px;">Celula${index}</div>`;
        col.html(html);
        // if(index > 0 && ((index) % 3 == 0)){
        //     row = $(`<div class="row" >
        //     <div class="col-sm-10 col-sm-offset-1">
        //     </div>
        //     </div>
        //   `);
        //     sessao.append(row);
        // }
        row.append(col);
      });
}



defineSessao('checkbox', 'gostomusical', musicas, 'fa fa-music');
defineSessao('checkbox', 'cinema', cinemas, 'fa fa-play-circle' );
defineSessao('checkbox', 'literario', literarios, 'fa fa-book');
defineSessao('radio', 'escolaridade', escolaridades, 'fa fa-university');


function envia(){
    var obj = {};
    obj.nome = $('input[name="nome"]').val();
    obj.idade = $('input[name="idade"]').val();
    obj.genero = $(`[type="radio"][name="genero"][checked]`).val();
    obj.ecolaridade = $(`[type="radio"][name="ecolaridade"][checked]`).val();
    obj.gostomusical = $(`[type="checkbox"][name="gostomusical"][checked]`).val();
    obj.cinema = $(`[type="checkbox"][name="cinema"][checked]`).val();
    obj.literario = $(`[type="checkbox"][name="literario"][checked]`).val();
    console.log('Dados', obj);
}
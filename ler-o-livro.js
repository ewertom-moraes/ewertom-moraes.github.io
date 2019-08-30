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
  , "Aventura"
  , "Cinema de arte"
  , "Chanchada"
  , "Cinema catástrofe"
  , "Comédia"
  , "Comédia romântica"
  , "Comédia dramática"
  , "Comédia de ação"
  , "Dança"
  , "Documentário"
  , "Docuficção"
  , "Drama"
  , "Espionagem"
  , "Faroeste (ou western)"
  , "Fantasia científica"
  , "Ficção científica"
  , "Filmes de guerra"
  , "Musical"
  , "Filme policial"
  , "Romance"
  , "Suspense"
  , "Terror"
];

var literarios = [
  "Adolescente e Jovem Adulto"
  , "Artes e fotografia"
  , "Artesanato, Hobbies & Casa"
  , "Auto-ajuda"
  , "Biografias e Memórias"
  , "Calendários"
  , "Ciência matemática"
  , "Computadores e Tecnologia"
  , "Criação de Filhos & Relacionamentos"
  , "Educação e Ensino"
  , "Educação Financeira , Finanças"
  , "Empreendedorismo"
  , "Engenharia e Transportes"
  , "Esportes e Ar Livre"
  , "Ficção científica e fantasia"
  , "História"
  , "Humor e Entretenimento"
  , "Lei"
  , "Literatura e ficção"
  , "Livros de culinária, comida e vinho"
  , "Livros e Bíblias Cristãs"
  , "Livros infantis"
  , "Livros Lésbicas, Gays, Bissexuais e Transgêneros"
  , "Livros médicos"
  , "Mistério, suspense e suspense"
  , "Negócios e Dinheiro"
  , "Política e Ciências Sociais"
  , "Preparação para teste"
  , "Quadrinhos e romances gráficos"
  , "Referência"
  , "Religião e Espiritualidade"
  , "Romance"
  , "Saúde, Fitness e Dieta"
  , "Viagem"
];

var escolaridades = [
  "Ensino Médio"
  , "Ensino Superior Incompleto"
  , "Ensino Superior Completo"
  , "Especialização Completa"
  , "Mestrado Completo"
  , "Doutorado Completo"
]

function defineSessaoCheckBox(nome, checks, icone) {
  var tipo = "checkbox";
  var sessao = $('#' + nome);

  var row = $(`<div class="row" >
        </div>
      `);
  sessao.append(row);
  checks.forEach((check, index) => {
    var col = $(`<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 " />`);
    var html = `
                <div class="choice ${tipo} ${nome} " data-toggle="wizard-${tipo}">
                    <input type="${tipo}" name="${nome}" class="${nome}" data-index="${index}"  >
                    <div class="icon">
                        <i class="${icone}"></i>
                    </div>
                        <label class="text-icon">${check}</label> 
                </div>
           `;
    col.html(html);
    row.append(col);
  });
}

function defineSessaoRadio(nome, checks, icone){
  var sessao = $('#' + nome);
  var row = $(`<div class="row" >
        </div>
      `);
  sessao.append(row);
  checks.forEach((check, index) => {
    var col = $(`<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 " />`);

    var radioButtonPrimeiro = index == 0;
    var checkedPadrao = radioButtonPrimeiro ? 'checked' : '';
    var activePadrao = radioButtonPrimeiro ? 'active' : '';
    var tipo = "radio";

    var html = `
                <div class="choice ${tipo} ${nome} ${activePadrao}" data-toggle="wizard-${tipo}">
                    <input type="${tipo}" name="${nome}" class="${nome}" data-index="${index}"  ${checkedPadrao}>
                    <div class="icon">
                        <i class="${icone}"></i>
                    </div>
                        <label class="text-icon">${check}</label> 
                </div>
           `;
    col.html(html);
    row.append(col);
  });
}




defineSessaoCheckBox( 'gostomusical', musicas, 'fa fa-music');
defineSessaoCheckBox( 'cinema', cinemas, 'fa fa-play-circle');
defineSessaoCheckBox( 'literario', literarios, 'fa fa-book');
defineSessaoRadio( 'escolaridade', escolaridades, 'fa fa-university');


function envia() {
  var obj = {};
  //obj.nome = $('input[name="nome"]').val();
  obj.idade = $('input[name="idade"]').val();
  obj.genero = $(`[type="radio"][name="genero"][checked]`).val();
  obj.ecolaridade = $(`[type="radio"][name="escolaridade"][checked]`).val();
  obj.s = getArrayBooleanCheckboxs($(`[type="checkbox"][name="gostomusical"]`));
  obj.m = getArrayBooleanCheckboxs($(`[type="checkbox"][name="cinema"]`));
  obj.b = getArrayBooleanCheckboxs($(`[type="checkbox"][name="literario"]`));
  console.log('Dados', obj);
  resultado = knn(obj);
  

  $('.card.wizard-card').removeClass('opacity-1');

  $('body').addClass('bg-loading-book');
  $('.card.wizard-card').addClass('opacity-0');

  setTimeout(()=>{
    $('body').removeClass('bg-loading-book');
    $('.card.wizard-card').removeClass('opacity-0');
    $('.card.wizard-card').addClass('opacity-1');
    $('body').addClass('opacity-1');
    
  },10000);
}


function getArrayBooleanCheckboxs(checkboxs) {
  var array = [];
  $(checkboxs).each(function (icheck, check) {
    var index = $(check).data('index');
    index = parseInt(index);
    var valor = check.checked;
    array[index] = valor;
  });
  return array;
}

function knn(pessoa){

  return  [
    {
      r : "Gestão de projetos - livro preferido de todos",
      ri : "https://d3pvly1u1c1g2.cloudfront.net/images/livros/capa_gerenciamento_projetos_9edicao.jpg",
      p : "GOT - Mais recente lido",
      pi : "https://www.extra-imagens.com.br/livros/LivrodeLiteraturaEstrangeira/FiccaoCientifica/1995678/8561460/Livro-Game-of-Thrones-Por-Dentro-da-Serie-da-HBO-George-R-R-Martin-1995678.jpg"
    }
  ]
}

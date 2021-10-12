var listaNomes = [
    "Episódio IV: Uma Nova Esperança (1977)",
    "Rogue One: Uma História Star Wars (2016)",
    "Episódio V: O Império Contra-Ataca (1980)",
    "Episódio I: A Ameaça Fantasma (1999)",
    "Episódio II: Ataque dos Clones (2002)",
    "Episódio III: A Vingança dos Sith (2005)",
    "Han Solo: Uma História Star Wars (2018)",
    "Episódio VI: O Retorno do Jedi (1983)",
    "Episódio VII: O Despertar da Força (2015)",
    "Episódio VIII: Os Últimos Jedi (2017)",
    "Episódio IX: A Ascensão Skywalker (2019)"];

var listaLinks = [
    "https://www.youtube.com/watch?v=Q8b09bE1iGQ",
    "https://www.youtube.com/watch?v=9oISQcXuki0",
    "https://www.youtube.com/watch?v=JNwNXF9Y6kY",
    "https://www.youtube.com/watch?v=IBcwY3BrQtA",
    "https://www.youtube.com/watch?v=zcpygp8QKN8",
    "https://www.youtube.com/watch?v=h5KJPq4X71Q",
    "https://www.youtube.com/watch?v=UtpnRFzZWlM",
    "https://www.youtube.com/watch?v=7L8p7_SLzvU",
    "https://www.youtube.com/watch?v=4r0287tUEgk",
    "https://www.youtube.com/watch?v=4JB3tHn2S5A",
    "https://www.youtube.com/watch?v=W0squnw6Jp8"
];

var listaImagem = [
    "https://assetsgn.nowonline.com.br/assets/p4407_v_v8_bc.jpg",
    "https://img.elo7.com.br/product/zoom/2C25D38/big-poster-filme-rogue-one-uma-historia-star-wars-90x60-cm-presente-nerd.jpg",
    "https://www.themoviedb.org/t/p/original/iXXSUFpfBKZimPyugKQShUO5NMS.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",
    "https://images.moviefit.me/t/o/13-star-wars-episode-ii-attack-of-the-clones.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg",
    "https://s2.glbimg.com/NOe4Bo4qzt4ju2eFNxQk-Jtg7Ow=/e.glbimg.com/og/ed/f/original/2018/04/09/han-solo.jpg",
    "https://i.pinimg.com/originals/ed/5e/09/ed5e0955bfd5425f9a8fd3d49feeeb23.jpg",
    "https://pixeldramadotcom.files.wordpress.com/2015/10/star-wars-force-awakens-official-poster.jpg",
    "https://farm5.staticflickr.com/4638/25246135478_1bddd9d77b_c.jpg",
    "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/2/527120201013-uau-posters-star-wars-episode-ix-the-rise-of-skywalker-ascencao-2.jpg"
];

for (var i = 0; i < listaNomes.length; i++) {
    document.write(
        "<a target=_blank href=" +
        listaLinks[i] +
        "><img src=" +
        listaImagem[i] +
        " class=imagem ></a>"
    );
}

function adicionar() {
    var exibirInserido = document.getElementById("js");
    var jaExiste = document.getElementById("jaExiste").value;
    var newNameMovie = document.getElementById("addNome").value;
    var newLinkMovie = document.getElementById("addTrailer").value;
    var newImageMovie = document.getElementById("addImagem").value;

    if (newImageMovie.endsWith(".jpg")) {
        listaNomes.push(newNameMovie);
        listaLinks.push(newLinkMovie);
        listaImagem.push(newImageMovie);
        exibirInserido.innerHTML =
            "<a target=_blank href=" +
            listaLinks[listaLinks.length - 1] +
            "><img class=imagem src= " +
            listaImagem[listaImagem.length - 1] +
            ">";
    } else {
        jaExiste.innerHTML = "Adicione uma imagem com .jpg no final";
    }

    document.getElementById("addNome").value = "";
    document.getElementById("addTrailer").value = "";
    document.getElementById("addImagem").value = "";
}

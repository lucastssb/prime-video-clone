const main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=699cd839a62fe4b5f45cbf24999114d6')
.then(response => response.json())
.then(data => {
    data.results.map((i, j) => {
        if(j > 10) {
            return;
        }
        if(j == 0) {
            main.innerHTML+=`
            <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+ i.backdrop_path+`')"></div>
            `;
        }else {
            if(j == 1) {
                main.innerHTML+=`
                    <h2>Assista o melhor filme</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `;
            }else {
                main.innerHTML+=`
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                    `;
            }
        }
    })
});


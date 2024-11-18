document.addEventListener("DOMContentLoaded", () => {
  // Array anime movie
  const animeMovies = [
    {
      title: "Kimi no Na wa",
      image:
        "https://i.pinimg.com/736x/5f/aa/d4/5faad42ad125141220829e9111dcef6a.jpg",
      episodes: "1",
    },
    {
      title: "5 Centimeter Per Second",
      image:
        "https://i.pinimg.com/736x/eb/02/33/eb02335aad2cadbd59faa6814c569134.jpg",
      episodes: "1",
    },
    {
      title: "Tenki no Ko",
      image:
        "https://i.pinimg.com/736x/54/c6/33/54c63326627b5ed70d41c48142768b06.jpg",
      episodes: "1",
    },
    {
      title: "Kimi no Suizou wo Tabetai",
      image:
        "https://i.pinimg.com/736x/a9/52/cd/a952cdf7a2104196a1fea0f7c535683e.jpg",
      episodes: "1",
    },
    {
      title: "Ride Your Wave",
      image:
        "https://i.pinimg.com/736x/c5/dd/b9/c5ddb906bf4e1ab87cf0b39f7cffd5da.jpg",
      episodes: "1",
    },
    {
      title: "Summer Ghost",
      image:
        "https://i.pinimg.com/736x/4f/95/5b/4f955b514ae39dfff5e5ef9ac12b6e6e.jpg",
      episodes: "1",
    },
    {
      title: "Hotarubi no Mori e",
      image:
        "https://i.pinimg.com/736x/fd/4f/61/fd4f61ed68beb68bf6079fa448e05d75.jpg",
      episodes: "1",
    },
    {
      title: "Koe no Katachi",
      image:
        "https://i.pinimg.com/736x/5f/73/88/5f73884f4f060b7a3810b5f80a65eec7.jpg",
      episodes: "1",
    },
    {
      title: "Suzume no Tojimari",
      image: "",
      episodes: "1",
    },
    {
      title: "Arriety",
      image: "",
      episodes: "1",
    },
    {
      title: "Josee tora no sakana tachi",
      image: "",
      episodes: "1",
    },
    {
      title: "Bubble",
      image: "",
      episodes: "1",
    },
  ];

  // Array anime season
  const animeSeasons = [
    {
      title: "One Piece",
      image:
        "https://i.pinimg.com/736x/8d/2b/2d/8d2b2da040e549ea5296a83a1a3e6a3d.jpg",
      episodes: "1070+",
    },
    {
      title: "Black Clover",
      image:
        "https://i.pinimg.com/736x/23/95/c0/2395c02e7831ce08dbe0e3afaa81b3ae.jpg",
      episodes: "170+",
    },
    {
      title: "Kimetsu no Yaiba",
      image:
        "https://i.pinimg.com/736x/3d/10/a2/3d10a2e10bc5748f9be2ed1b4efe0c53.jpg",
      episodes: "44+",
    },
    {
      title: "Attack on Titan",
      image:
        "https://i.pinimg.com/736x/0c/4d/b3/0c4db3190212965771fb86b4ffd71707.jpg",
      episodes: "100+",
    },
    {
      title: "Blue Lock",
      image:
        "https://i.pinimg.com/736x/bd/19/dc/bd19dc971a4089961c7249b2e23baab9.jpg",
      episodes: "25",
    },
    {
      title: "My Hero Academia",
      image:
        "https://i.pinimg.com/736x/bf/fb/14/bffb1449a0f5e3eb76384bb9f68393e6.jpg",
      episodes: "100+",
    },
    {
      title: "Masamune-kun no Revenge",
      image:
        "https://i.pinimg.com/736x/75/49/3e/75493edf221e5fb9b92f5c122dbb2df4.jpg",
      episodes: "12",
    },
    {
      title: "Kanojo, Okarishimasu",
      image:
        "https://i.pinimg.com/736x/89/7c/d6/897cd699427ae04d18a42ef288a1604d.jpg",
      episodes: "12",
    },
    {
      title: "Boku no Kokoro no Yabai Yatsu",
      image:
        "https://i.pinimg.com/736x/e0/de/c3/e0dec3729ff1ed72adf8a00d41d3b211.jpg",
      episodes: "12",
    },
    {
      title: "Yamada-kun to Lv999 no Koi wo Suru",
      image:
        "https://i.pinimg.com/736x/a0/28/ff/a028ff298eeda11db518d6d466b1a3bf.jpg",
      episodes: "12",
    },
    {
      title: "Jigokuroku",
      image:
        "https://i.pinimg.com/736x/dd/b5/5b/ddb55ba2674642ef4eaac05e330b07b7.jpg",
      episodes: "12",
    },
    {
      title: "Oshi no Ko",
      image:
        "https://i.pinimg.com/736x/63/00/d6/6300d6858f6f61409e0edcaa795f1e00.jpg",
      episodes: "12",
    },
    {
      title: "Karakai Jouzu no Takagi-san",
      image:
        "https://i.pinimg.com/736x/7e/8a/80/7e8a803aa0df75740e3e9bb31afa2cba.jpg",
      episodes: "12",
    },
    {
      title: "Gotoubun no Hanayome",
      image:
        "https://i.pinimg.com/736x/19/e4/30/19e430a473ca2e7ed754e345384a42c6.jpg",
      episodes: "12",
    },
    {
      title: "Chainsaw Man",
      image:
        "https://i.pinimg.com/736x/16/84/d3/1684d3733ac09848a4cd040a4629e602.jpg",
      episodes: "24+",
    },
    {
      title: "Tokyo Revengers",
      image:
        "https://i.pinimg.com/736x/ae/e9/3d/aee93df72c3a575c27f79840d6f4eb59.jpg",
      episodes: "24",
    },
    {
      title: "Your Lie in April",
      image:
        "https://i.pinimg.com/736x/03/77/32/0377326297fe6c70fe9b5da328b93682.jpg",
      episodes: "22",
    },
    {
      title: "Kubo-san wa Mob Yurusanai",
      image:
        "https://i.pinimg.com/736x/71/03/1f/71031f8c6210b5f59963d755a309d513.jpg",
      episodes: "12",
    },
    {
      title: "Saiki Kusuo",
      image:
        "https://i.pinimg.com/736x/cf/ff/e6/cfffe67434b6d2c7597a587b2b1f5098.jpg",
      episodes: "12",
    },
    {
      title: "Dandandan",
      image: "",
      episodes: "12+",
    },
    {
      title: "Handa-kun",
      image: "",
      episodes: "12",
    },
    {
      title: "Barakamon",
      image: "",
      episodes: "12",
    },
    {
      title: "Oregairu",
      image: "",
      episodes: "24+",
    },
    {
      title: "Giji Harem",
      image: "",
      episodes: "12",
    },
    {
      title: "Haikyuuu",
      image: "",
      episodes: "50+",
    },
    {
      title: "Naruto",
      image: "",
      episodes: "500+",
    },
    {
      title: "Spy x Family",
      image: "",
      episodes: "36+",
    },
    {
      title: "Zombie 100",
      image: "",
      episodes: "12+",
    },
  ];

  // Fungsi untuk menambahkan anime ke dalam container
  function displayAnime(animeList, containerId) {
    const container = document.getElementById(containerId);
    animeList.forEach((anime) => {
      const animeItem = document.createElement("div");
      animeItem.classList.add("anime-item");
      animeItem.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <h2>${anime.title}</h2>
                <p>Episode : ${anime.episodes}</p>
            `;
      container.appendChild(animeItem);
    });
  }

  // Urutkan anime berdasarkan abjad (A-Z)
  animeMovies.sort((a, b) => a.title.localeCompare(b.title));
  animeSeasons.sort((a, b) => a.title.localeCompare(b.title));

  // Tampilkan anime movie dan anime season
  displayAnime(animeMovies, "anime-movie-list");
  displayAnime(animeSeasons, "anime-season-list");
});

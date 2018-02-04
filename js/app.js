var app = angular.module('checkCalories',[]);
app.controller('caloriesController' , ['$scope', '$filter', function($scope){
    $scope.products = [



        {
            "Produkt": "Woda",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Pomidor",
            "Kalorie": 18,
            "Bialko": "0,9",
            "Wegle": "3,9",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Oliwa z oliwek",
            "Kalorie": 884,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "100,0"
        },
        {
            "Produkt": "Pieprz czarny",
            "Kalorie": 255,
            "Bialko": "11,0",
            "Wegle": "64,8",
            "Tluszcz": "3,5"
        },
        {
            "Produkt": "Banan",
            "Kalorie": 89,
            "Bialko": "1,0",
            "Wegle": "22,0",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Czosnek",
            "Kalorie": 149,
            "Bialko": "6,4",
            "Wegle": "33,1",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Cebula (świeża)",
            "Kalorie": 40,
            "Bialko": "1,1",
            "Wegle": "7,6",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Jabłko (świeży owoc)",
            "Kalorie": 57,
            "Bialko": "0,3",
            "Wegle": "13,8",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Sól biała",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Marchew (surowa)",
            "Kalorie": 41,
            "Bialko": "0,9",
            "Wegle": "9,6",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Ogórek",
            "Kalorie": 15,
            "Bialko": "0,7",
            "Wegle": "3,6",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Sól morska",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Płatki owsiane",
            "Kalorie": 389,
            "Bialko": "16,9",
            "Wegle": "66,3",
            "Tluszcz": "6,9"
        },
        {
            "Produkt": "Sok z cytryny",
            "Kalorie": 22,
            "Bialko": "0,4",
            "Wegle": "6,9",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Chleb żytni razowy",
            "Kalorie": 217,
            "Bialko": "6,7",
            "Wegle": "41,5",
            "Tluszcz": "1,2"
        },
        {
            "Produkt": "Sałata",
            "Kalorie": 13,
            "Bialko": "1,4",
            "Wegle": "2,2",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Papryka czerwona",
            "Kalorie": 28,
            "Bialko": "1,3",
            "Wegle": "6,6",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Rzodkiewka",
            "Kalorie": 14,
            "Bialko": "1,0",
            "Wegle": "4,4",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Miód pszczeli",
            "Kalorie": 304,
            "Bialko": "0,3",
            "Wegle": "82,4",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Jogurt naturalny 2% tłuszczu",
            "Kalorie": 60,
            "Bialko": "4,3",
            "Wegle": "5,2",
            "Tluszcz": "2,0"
        },
        {
            "Produkt": "Ziemniaki",
            "Kalorie": 77,
            "Bialko": "1,9",
            "Wegle": "18,5",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Ogórek kiszony",
            "Kalorie": 11,
            "Bialko": "0,3",
            "Wegle": "2,3",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Bulion warzywny",
            "Kalorie": 6,
            "Bialko": "0,2",
            "Wegle": "1,0",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Olej",
            "Kalorie": 884,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "100,0"
        },
        {
            "Produkt": "Kurczak (pierś bez skóry)",
            "Kalorie": 121,
            "Bialko": "21,8",
            "Wegle": "0,0",
            "Tluszcz": "3,7"
        },
        {
            "Produkt": "Cynamon",
            "Kalorie": 245,
            "Bialko": "3,9",
            "Wegle": "80,0",
            "Tluszcz": "1,0"
        },
        {
            "Produkt": "Mleko 2% tłuszczu",
            "Kalorie": 50,
            "Bialko": "3,3",
            "Wegle": "4,8",
            "Tluszcz": "2,0"
        },
        {
            "Produkt": "Seler (korzeń)",
            "Kalorie": 21,
            "Bialko": "1,6",
            "Wegle": "7,7",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Bułka grahamka",
            "Kalorie": 270,
            "Bialko": "8,5",
            "Wegle": "56,8",
            "Tluszcz": "1,7"
        },
        {
            "Produkt": "Pietruszka korzeń",
            "Kalorie": 83,
            "Bialko": "2,6",
            "Wegle": "17,1",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Szczypiorek",
            "Kalorie": 27,
            "Bialko": "1,0",
            "Wegle": "5,7",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Masło ekstra",
            "Kalorie": 717,
            "Bialko": "0,9",
            "Wegle": "0,1",
            "Tluszcz": "81,1"
        },
        {
            "Produkt": "Awokado",
            "Kalorie": 160,
            "Bialko": "2,0",
            "Wegle": "8,5",
            "Tluszcz": "15,0"
        },
        {
            "Produkt": "Cukier",
            "Kalorie": 386,
            "Bialko": "0,0",
            "Wegle": "100,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Szpinak świeży",
            "Kalorie": 23,
            "Bialko": "2,9",
            "Wegle": "3,6",
            "Tluszcz": "0,4"
        },
        {
            "Produkt": "Kiwi",
            "Kalorie": 61,
            "Bialko": "1,1",
            "Wegle": "14,7",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Jajo kurze (całe)",
            "Kalorie": 143,
            "Bialko": "12,6",
            "Wegle": "0,0",
            "Tluszcz": "9,5"
        },
        {
            "Produkt": "Pomidor koktajlowy",
            "Kalorie": 18,
            "Bialko": "1,0",
            "Wegle": "4,0",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Pomarańcza",
            "Kalorie": 53,
            "Bialko": "0,9",
            "Wegle": "15,5",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Pietruszka liście",
            "Kalorie": 36,
            "Bialko": "3,0",
            "Wegle": "6,3",
            "Tluszcz": "0,8"
        },
        {
            "Produkt": "Jajko ugotowane na twardo",
            "Kalorie": 155,
            "Bialko": "12,6",
            "Wegle": "1,1",
            "Tluszcz": "10,6"
        },
        {
            "Produkt": "Ziemniaki gotowane",
            "Kalorie": 86,
            "Bialko": "1,7",
            "Wegle": "20,0",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Rukola",
            "Kalorie": 25,
            "Bialko": "2,6",
            "Wegle": "3,7",
            "Tluszcz": "0,7"
        },
        {
            "Produkt": "Cukinia",
            "Kalorie": 17,
            "Bialko": "1,2",
            "Wegle": "3,1",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Jajko",
            "Kalorie": 145,
            "Bialko": "14,0",
            "Wegle": "0,0",
            "Tluszcz": "10,0"
        },
        {
            "Produkt": "Jogurt grecki light",
            "Kalorie": 57,
            "Bialko": "10,2",
            "Wegle": "5,2",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Rodzynki",
            "Kalorie": 299,
            "Bialko": "3,1",
            "Wegle": "79,2",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Cebula (czerwona)",
            "Kalorie": 32,
            "Bialko": "1,2",
            "Wegle": "6,1",
            "Tluszcz": "0,4"
        },
        {
            "Produkt": "Papryka (surowa)",
            "Kalorie": 31,
            "Bialko": "1,0",
            "Wegle": "6,0",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Oregano",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Koperek",
            "Kalorie": 43,
            "Bialko": "3,5",
            "Wegle": "7,0",
            "Tluszcz": "1,1"
        },
        {
            "Produkt": "Gruszka (świeży owoc)",
            "Kalorie": 58,
            "Bialko": "0,4",
            "Wegle": "15,4",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Chleb graham",
            "Kalorie": 221,
            "Bialko": "8,3",
            "Wegle": "48,7",
            "Tluszcz": "1,7"
        },
        {
            "Produkt": "Brokuły",
            "Kalorie": 34,
            "Bialko": "2,8",
            "Wegle": "4,0",
            "Tluszcz": "0,4"
        },
        {
            "Produkt": "Sałata lodowa",
            "Kalorie": 14,
            "Bialko": "0,9",
            "Wegle": "3,0",
            "Tluszcz": "0,1"
        },
        {
            "Produkt": "Kawa parzona bez cukru",
            "Kalorie": 1,
            "Bialko": "0,1",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Śmietana 12% tłuszczu",
            "Kalorie": 134,
            "Bialko": "2,8",
            "Wegle": "4,3",
            "Tluszcz": "12,0"
        },
        {
            "Produkt": "Mandarynka",
            "Kalorie": 53,
            "Bialko": "0,8",
            "Wegle": "13,3",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Kukurydza (konserwa)",
            "Kalorie": 61,
            "Bialko": "2,0",
            "Wegle": "13,9",
            "Tluszcz": "0,8"
        },
        {
            "Produkt": "Truskawki",
            "Kalorie": 32,
            "Bialko": "0,7",
            "Wegle": "7,7",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Słonecznik ziarno",
            "Kalorie": 584,
            "Bialko": "20,8",
            "Wegle": "20,0",
            "Tluszcz": "51,5"
        },
        {
            "Produkt": "Orzechy włoskie",
            "Kalorie": 645,
            "Bialko": "16,0",
            "Wegle": "18,0",
            "Tluszcz": "60,3"
        },
        {
            "Produkt": "Kawa z mlekiem (2 łyżki mleka 2%)",
            "Kalorie": 7,
            "Bialko": "1,0",
            "Wegle": "3,0",
            "Tluszcz": "1,0"
        },
        {
            "Produkt": "Migdały",
            "Kalorie": 575,
            "Bialko": "21,2",
            "Wegle": "21,7",
            "Tluszcz": "49,4"
        },
        {
            "Produkt": "Kasza jaglana",
            "Kalorie": 378,
            "Bialko": "11,0",
            "Wegle": "72,9",
            "Tluszcz": "4,2"
        },
        {
            "Produkt": "Ksylitol cukier brzozowy",
            "Kalorie": 240,
            "Bialko": "0,0",
            "Wegle": "100,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Masło śmietankowe",
            "Kalorie": 670,
            "Bialko": "1,1",
            "Wegle": "1,1",
            "Tluszcz": "73,5"
        },
        {
            "Produkt": "Bazylia - otarta",
            "Kalorie": 251,
            "Bialko": "14,0",
            "Wegle": "61,0",
            "Tluszcz": "4,0"
        },
        {
            "Produkt": "Herbata (parzona)",
            "Kalorie": 1,
            "Bialko": "0,1",
            "Wegle": "0,3",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Mleko 0,5% tłuszczu",
            "Kalorie": 38,
            "Bialko": "3,4",
            "Wegle": "5,0",
            "Tluszcz": "0,5"
        },
        {
            "Produkt": "Kalafior",
            "Kalorie": 25,
            "Bialko": "1,9",
            "Wegle": "5,0",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Kawa rozpuszczalna (bez cukru)",
            "Kalorie": 2,
            "Bialko": "0,1",
            "Wegle": "0,3",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Przecier pomidorowy",
            "Kalorie": 24,
            "Bialko": "1,3",
            "Wegle": "5,4",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Jogurt naturalny",
            "Kalorie": 69,
            "Bialko": "4,6",
            "Wegle": "5,8",
            "Tluszcz": "3,0"
        },
        {
            "Produkt": "Masło 83%",
            "Kalorie": 753,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "83,0"
        },
        {
            "Produkt": "Żurawina (suszona)",
            "Kalorie": 308,
            "Bialko": "0,1",
            "Wegle": "82,4",
            "Tluszcz": "1,4"
        },
        {
            "Produkt": "Tymianek - otarty",
            "Kalorie": 270,
            "Bialko": "10,0",
            "Wegle": "60,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Jogurt naturalny 0% tłuszczu",
            "Kalorie": 48,
            "Bialko": "5,7",
            "Wegle": "5,2",
            "Tluszcz": "0,2"
        },
        {
            "Produkt": "Jogurt naturalny Natur - Zott",
            "Kalorie": 67,
            "Bialko": "4,9",
            "Wegle": "4,2",
            "Tluszcz": "3,0"
        },
        {
            "Produkt": "Oliwki zielone",
            "Kalorie": 145,
            "Bialko": "1,0",
            "Wegle": "3,8",
            "Tluszcz": "15,3"
        },
        {
            "Produkt": "Papryka chili",
            "Kalorie": 40,
            "Bialko": "1,9",
            "Wegle": "8,8",
            "Tluszcz": "0,4"
        },
        {
            "Produkt": "Serek wiejski",
            "Kalorie": 97,
            "Bialko": "11,8",
            "Wegle": "2,7",
            "Tluszcz": "5,0"
        },
        {
            "Produkt": "Por",
            "Kalorie": 24,
            "Bialko": "2,2",
            "Wegle": "5,7",
            "Tluszcz": "0,3"
        },
        {
            "Produkt": "Ser Gouda",
            "Kalorie": 356,
            "Bialko": "25,0",
            "Wegle": "2,2",
            "Tluszcz": "27,0"
        },
        {
            "Produkt": "Mleko 1,5% tłuszczu",
            "Kalorie": 45,
            "Bialko": "3,0",
            "Wegle": "4,8",
            "Tluszcz": "1,5"
        },
        {
            "Produkt": "Chleb żytni",
            "Kalorie": 259,
            "Bialko": "8,5",
            "Wegle": "48,3",
            "Tluszcz": "3,3"
        },
        {
            "Produkt": "Kasza jaglana (ugotowana)",
            "Kalorie": 119,
            "Bialko": "3,5",
            "Wegle": "24,0",
            "Tluszcz": "1,0"
        },
        {
            "Produkt": "Chleb",
            "Kalorie": 247,
            "Bialko": "13,0",
            "Wegle": "41,3",
            "Tluszcz": "3,4"
        },
        {
            "Produkt": "Miód",
            "Kalorie": 324,
            "Bialko": "0,3",
            "Wegle": "79,5",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Herbata (parzona) - Lipton",
            "Kalorie": 4,
            "Bialko": "0,4",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Przyprawa kmin rzymski (mielony)",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Papryka (proszek)",
            "Kalorie": 0,
            "Bialko": "0,0",
            "Wegle": "0,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Ryż brązowy (ugotowany)",
            "Kalorie": 112,
            "Bialko": "2,3",
            "Wegle": "23,5",
            "Tluszcz": "0,8"
        },
        {
            "Produkt": "Ocet balsamiczny",
            "Kalorie": 88,
            "Bialko": "0,5",
            "Wegle": "17,0",
            "Tluszcz": "0,0"
        },
        {
            "Produkt": "Musztarda",
            "Kalorie": 111,
            "Bialko": "5,2",
            "Wegle": "10,5",
            "Tluszcz": "5,4"
        },
        {
            "Produkt": "Czosnek granulowany",
            "Kalorie": 350,
            "Bialko": "14,5",
            "Wegle": "70,0",
            "Tluszcz": "1,2"
        },
        {
            "Produkt": "Serek wiejski lekki - Piątnica",
            "Kalorie": 81,
            "Bialko": "11,0",
            "Wegle": "2,4",
            "Tluszcz": "3,0"
        },
        {
            "Produkt": "Kawa z mlekiem (2 łyżki mleka 3.2%)",
            "Kalorie": 9,
            "Bialko": "1,0",
            "Wegle": "3,0",
            "Tluszcz": "1,0"
        },
        {
            "Produkt": "Ser Mozzarella light",
            "Kalorie": 254,
            "Bialko": "24,3",
            "Wegle": "2,8",
            "Tluszcz": "15,9"
        },
        {
            "Produkt": "Łosoś wędzony",
            "Kalorie": 153,
            "Bialko": "24,6",
            "Wegle": "0,0",
            "Tluszcz": "5,3"
        }


    ]
}]);

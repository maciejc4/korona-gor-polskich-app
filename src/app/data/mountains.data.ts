import { Mountain } from '../models/mountain.model';

export const KORONA_GOR_POLSKICH: Mountain[] = [
  {
    id: 1,
    name: 'Rysy',
    height: 2499,
    region: 'Tatry',
    difficulty: 'trudna',
    climbed: false,
    details: {
      description: 'Rysy to najwyższy szczyt Polski, położony na granicy polsko-słowackiej w Tatrach Wysokich. Składa się z trzech wierzchołków, z których środkowy (2503 m) leży na Słowacji. Szczyt oferuje spektakularne widoki na Morskie Oko i otaczające szczyty tatrzańskie. Jest to cel marzeń wielu turystów górskich.',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.1795,
      longitude: 20.0885,
      trails: [
        { name: 'Szlak z Morskiego Oka', distance: '4.5 km', duration: '3-4 h', difficulty: 'trudny' },
        { name: 'Szlak od Słowacji (Popradské pleso)', distance: '6 km', duration: '4-5 h', difficulty: 'trudny' }
      ]
    }
  },
  {
    id: 2,
    name: 'Babia Góra',
    height: 1725,
    region: 'Beskid Żywiecki',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Babia Góra, zwana też Diablakiem, to najwyższy szczyt Beskidów. Charakteryzuje się zmiennymi warunkami pogodowymi i surowym klimatem. Jest siedzibą Babiogórskiego Parku Narodowego, chroniącego unikalne ekosystemy i endemiczne gatunki roślin.',
      imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.5731,
      longitude: 19.5294,
      trails: [
        { name: 'Szlak z Przełęczy Krowiarki', distance: '5 km', duration: '2.5-3 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Zawoi Markowe', distance: '7 km', duration: '3-4 h', difficulty: 'umiarkowany' },
        { name: 'Perć Akademików', distance: '3 km', duration: '2-3 h', difficulty: 'trudny' }
      ]
    }
  },
  {
    id: 3,
    name: 'Śnieżka',
    height: 1603,
    region: 'Karkonosze',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Śnieżka to najwyższy szczyt Karkonoszy i Sudetów. Na szczycie znajduje się charakterystyczna dyskoidalna budowla obserwatorium meteorologicznego. Jest jednym z najbardziej wietrznych miejsc w Polsce, z częstymi mgłami i opadami.',
      imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.7361,
      longitude: 15.7397,
      trails: [
        { name: 'Szlak z Karpacza', distance: '8 km', duration: '3-4 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Przełęczy Okraj', distance: '4 km', duration: '1.5-2 h', difficulty: 'łatwy' },
        { name: 'Szlak jubileuszowy', distance: '6 km', duration: '2.5-3 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 4,
    name: 'Śnieżnik',
    height: 1425,
    region: 'Masyw Śnieżnika',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Śnieżnik to najwyższy szczyt Masywu Śnieżnika w Sudetach Wschodnich. Na szczycie znajduje się kamienna wieża widokowa z XIX wieku. Góra jest znana z bogatej flory i jaskiń w swoich zboczach, w tym Jaskini Niedźwiedziej.',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.2069,
      longitude: 16.8489,
      trails: [
        { name: 'Szlak z Międzygórza', distance: '7 km', duration: '3-3.5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Kletna', distance: '5 km', duration: '2.5-3 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 5,
    name: 'Tarnica',
    height: 1346,
    region: 'Bieszczady',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Tarnica to najwyższy szczyt polskich Bieszczadów. Charakteryzuje się rozległymi połoninami i dzikimi krajobrazami. Jest częścią Bieszczadzkiego Parku Narodowego, gdzie można spotkać niedźwiedzie, wilki i żubry.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.0747,
      longitude: 22.7267,
      trails: [
        { name: 'Szlak z Wołosatego', distance: '4 km', duration: '2-2.5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Ustrzyk Górnych', distance: '9 km', duration: '4-5 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 6,
    name: 'Turbacz',
    height: 1310,
    region: 'Gorce',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Turbacz to najwyższy szczyt Gorców, pokryty rozległymi polanami reglowymi. Na szczycie znajduje się schronisko PTTK. Góra oferuje piękne widoki na Tatry, Beskidy i Pieniny.',
      imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.5431,
      longitude: 20.1108,
      trails: [
        { name: 'Szlak z Rabki', distance: '10 km', duration: '4-5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Koninek', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 7,
    name: 'Radziejowa',
    height: 1262,
    region: 'Beskid Sądecki',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Radziejowa to najwyższy szczyt Beskidu Sądeckiego. Na szczycie stoi metalowa wieża widokowa, z której roztacza się panorama na Tatry, Pieniny i Gorce. Góra jest popularna wśród turystów dzięki dobrze oznakowanym szlakom.',
      imageUrl: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.4428,
      longitude: 20.6047,
      trails: [
        { name: 'Szlak z Piwnicznej', distance: '8 km', duration: '3.5-4 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Rytra', distance: '7 km', duration: '3-3.5 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 8,
    name: 'Pilsko',
    height: 1557,
    region: 'Beskid Żywiecki',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Pilsko to drugi co do wysokości szczyt Beskidów po Babiej Górze. Charakteryzuje się rozległymi polanami i torfowiskami wysokogórskimi. Jest częścią Żywieckiego Parku Krajobrazowego.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.5253,
      longitude: 19.3344,
      trails: [
        { name: 'Szlak z Korbielowa', distance: '6 km', duration: '3-3.5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Hali Miziowej', distance: '4 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 9,
    name: 'Skrzyczne',
    height: 1257,
    region: 'Beskid Śląski',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Skrzyczne to najwyższy szczyt Beskidu Śląskiego. Na szczycie znajduje się wieża telewizyjna i schronisko. Jest popularnym celem wycieczek ze Szczyrku, do którego prowadzi również kolej linowa.',
      imageUrl: 'https://images.unsplash.com/photo-1445363692815-ebcd599f7621?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.6847,
      longitude: 19.0317,
      trails: [
        { name: 'Szlak ze Szczyrku', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Wisły', distance: '8 km', duration: '3.5-4 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 10,
    name: 'Mogielica',
    height: 1170,
    region: 'Beskid Wyspowy',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Mogielica to najwyższy szczyt Beskidu Wyspowego. Charakteryzuje się stożkowatym kształtem i metalową wieżą widokową na szczycie. Oferuje panoramę 360 stopni na okoliczne pasma górskie.',
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.6547,
      longitude: 20.2769,
      trails: [
        { name: 'Szlak z Jurkowa', distance: '4 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Przyszowej', distance: '5 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 11,
    name: 'Wysoka Kopa',
    height: 1126,
    region: 'Góry Izerskie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Wysoka Kopa to najwyższy polski szczyt Gór Izerskich. Góra porośnięta jest lasem świerkowym i otoczona torfowiskami. Jest częścią Izerskiego Parku Krajobrazowego.',
      imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.8575,
      longitude: 15.3606,
      trails: [
        { name: 'Szlak ze Świeradowa', distance: '8 km', duration: '3-3.5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Orle', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 12,
    name: 'Wielka Sowa',
    height: 1015,
    region: 'Góry Sowie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Wielka Sowa to najwyższy szczyt Gór Sowich. Na szczycie stoi zabytkowa, kamienna wieża widokowa z XIX wieku, nazywana Wieżą Bismarcka. Okolice góry kryją tajemnicze tunele z czasów II wojny światowej.',
      imageUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.6797,
      longitude: 16.4856,
      trails: [
        { name: 'Szlak z Przełęczy Walimskiej', distance: '3 km', duration: '1-1.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Jedlinki', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 13,
    name: 'Lackowa',
    height: 997,
    region: 'Beskid Niski',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Lackowa to najwyższy szczyt Beskidu Niskiego. Góra leży na granicy polsko-słowackiej i oferuje spokojne szlaki przez bukowe lasy. Jest doskonałym miejscem na jesienne wędrówki.',
      imageUrl: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.4147,
      longitude: 21.0964,
      trails: [
        { name: 'Szlak z Nieznajowej', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Banicy', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 14,
    name: 'Orlica',
    height: 1084,
    region: 'Góry Orlickie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Orlica to najwyższy polski szczyt Gór Orlickich na granicy z Czechami. Na szczycie znajduje się drewniana wieża widokowa. Góra oferuje malownicze widoki na Kotlinę Kłodzką i Góry Bystrzyckie.',
      imageUrl: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.3553,
      longitude: 16.3839,
      trails: [
        { name: 'Szlak z Zieleńca', distance: '4 km', duration: '1.5-2 h', difficulty: 'łatwy' },
        { name: 'Szlak z Lasówki', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 15,
    name: 'Kowadło',
    height: 989,
    region: 'Góry Złote',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Kowadło to najwyższy szczyt Gór Złotych. Charakteryzuje się charakterystycznym, płaskim wierzchołkiem przypominającym kowadło. Na szczycie stoi drewniana wieża widokowa.',
      imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.2919,
      longitude: 17.0614,
      trails: [
        { name: 'Szlak z Głuchołaz', distance: '7 km', duration: '3-3.5 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Jarnołtówka', distance: '4 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 16,
    name: 'Szczeliniec Wielki',
    height: 919,
    region: 'Góry Stołowe',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Szczeliniec Wielki to najwyższy szczyt Gór Stołowych, znany z unikalnych formacji skalnych i labiryntu szczelin. Jest częścią Parku Narodowego Gór Stołowych. Wejście prowadzi przez malownicze skalne korytarze.',
      imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.4847,
      longitude: 16.3408,
      trails: [
        { name: 'Szlak z Karłowa', distance: '3 km', duration: '1.5-2 h', difficulty: 'łatwy' },
        { name: 'Szlak z Kudowy-Zdroju', distance: '8 km', duration: '3-4 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 17,
    name: 'Jagodna',
    height: 977,
    region: 'Góry Bystrzyckie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Jagodna to najwyższy szczyt Gór Bystrzyckich. Na szczycie znajduje się schronisko turystyczne i wieża widokowa. Góra jest popularna wśród narciarzy biegowych zimą.',
      imageUrl: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.2642,
      longitude: 16.5536,
      trails: [
        { name: 'Szlak z Międzylesia', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' },
        { name: 'Szlak z Długopola', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 18,
    name: 'Rudawiec',
    height: 1106,
    region: 'Góry Kamienne',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Rudawiec to najwyższy szczyt Gór Kamiennych. Położony w Parku Krajobrazowym Sudetów Wałbrzyskich, oferuje widoki na okoliczne pasma górskie. Szlaki prowadzące na szczyt biegną przez malownicze lasy.',
      imageUrl: 'https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.6969,
      longitude: 16.2175,
      trails: [
        { name: 'Szlak z Sokołowska', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Przełęczy Trzech Dolin', distance: '3 km', duration: '1.5-2 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 19,
    name: 'Waligóra',
    height: 936,
    region: 'Góry Kamienne',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Waligóra to drugi co do wysokości szczyt Gór Kamiennych. Na szczycie znajduje się kamienna wieża widokowa z początku XX wieku. Jest popularnym celem wycieczek z Wałbrzycha.',
      imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.7028,
      longitude: 16.2644,
      trails: [
        { name: 'Szlak z Jedliny-Zdrój', distance: '4 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Rzeczki', distance: '5 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 20,
    name: 'Chełmiec',
    height: 851,
    region: 'Góry Wałbrzyskie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Chełmiec to najwyższy szczyt Gór Wałbrzyskich. Góra położona jest w bezpośrednim sąsiedztwie Wałbrzycha i oferuje widoki na miasto i okoliczne góry. Szlaki są łatwo dostępne.',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.7564,
      longitude: 16.2017,
      trails: [
        { name: 'Szlak z Wałbrzycha', distance: '4 km', duration: '1.5-2 h', difficulty: 'łatwy' },
        { name: 'Szlak z Szczawna-Zdroju', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 21,
    name: 'Skalnik',
    height: 945,
    region: 'Rudawy Janowickie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Skalnik to najwyższy szczyt Rudaw Janowickich. Na szczycie znajduje się kamienne schronisko. Góra słynie z malowniczych formacji skalnych i pozostałości dawnego górnictwa.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.8436,
      longitude: 15.9314,
      trails: [
        { name: 'Szlak z Kowar', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Janowic Wielkich', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 22,
    name: 'Wysoka',
    height: 1050,
    region: 'Pieniny',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Wysoka to najwyższy szczyt Pienin Właściwych. Góra położona jest w Pienińskim Parku Narodowym i oferuje spektakularne widoki na Przełom Dunajca i Tatry. Charakteryzuje się wapiennymi formacjami skalnymi.',
      imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.4178,
      longitude: 20.4089,
      trails: [
        { name: 'Szlak z Szczawnicy', distance: '5 km', duration: '2.5-3 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Sromowiec', distance: '6 km', duration: '3-3.5 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 23,
    name: 'Lubomir',
    height: 904,
    region: 'Beskid Makowski',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Lubomir to jeden z głównych szczytów Beskidu Makowskiego. Charakteryzuje się rozległą polaną szczytową z panoramicznymi widokami. Jest popularnym celem rodzinnych wycieczek.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.8203,
      longitude: 19.9503,
      trails: [
        { name: 'Szlak z Rabki', distance: '6 km', duration: '2.5-3 h', difficulty: 'łatwy' },
        { name: 'Szlak z Pcimia', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 24,
    name: 'Łysica',
    height: 612,
    region: 'Góry Świętokrzyskie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Łysica to najwyższy szczyt Gór Świętokrzyskich i jednocześnie najniższy z koronnych szczytów. Góra porośnięta jest świętokrzyską puszczą jodłową. W pobliżu znajdują się gołoborza - pola głazów kwarcytowych.',
      imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.8917,
      longitude: 20.9019,
      trails: [
        { name: 'Szlak z Nowej Słupi', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak ze Świętej Katarzyny', distance: '3 km', duration: '1-1.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 25,
    name: 'Ślęża',
    height: 718,
    region: 'Masyw Ślęży',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Ślęża to izolowany masyw górski na Przedgórzu Sudeckim. Góra ma bogatą historię kultową sięgającą czasów celtyckich. Na szczycie znajdują się tajemnicze kamienne rzeźby i bazylika.',
      imageUrl: 'https://images.unsplash.com/photo-1445363692815-ebcd599f7621?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.8653,
      longitude: 16.7092,
      trails: [
        { name: 'Szlak z Sobótki', distance: '4 km', duration: '1.5-2 h', difficulty: 'łatwy' },
        { name: 'Szlak z Sulistrowiczek', distance: '5 km', duration: '2-2.5 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 26,
    name: 'Kłodzka Góra',
    height: 765,
    region: 'Góry Bardzkie',
    difficulty: 'łatwa',
    climbed: false,
    details: {
      description: 'Kłodzka Góra to najwyższy szczyt Gór Bardzkich. Na szczycie znajduje się wieża widokowa oferująca panoramę na Kotlinę Kłodzką. Góra jest częścią Parku Krajobrazowego Gór Bardzkich.',
      imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 50.4425,
      longitude: 16.6953,
      trails: [
        { name: 'Szlak z Barda', distance: '4 km', duration: '2-2.5 h', difficulty: 'łatwy' },
        { name: 'Szlak z Przyłęku', distance: '3 km', duration: '1.5-2 h', difficulty: 'łatwy' }
      ]
    }
  },
  {
    id: 27,
    name: 'Luboń Wielki',
    height: 1022,
    region: 'Beskid Makowski',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Luboń Wielki to najwyższy szczyt Beskidu Makowskiego. Na szczycie stoi charakterystyczna wieża telewizyjna widoczna z daleka. Góra oferuje rozległe widoki na Tatry i Beskidy.',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.7378,
      longitude: 19.9631,
      trails: [
        { name: 'Szlak z Rabki', distance: '6 km', duration: '2.5-3 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Mszany Dolnej', distance: '7 km', duration: '3-3.5 h', difficulty: 'umiarkowany' }
      ]
    }
  },
  {
    id: 28,
    name: 'Wielka Rawka',
    height: 1307,
    region: 'Bieszczady',
    difficulty: 'średnia',
    climbed: false,
    details: {
      description: 'Wielka Rawka to jeden z najwyższych szczytów polskich Bieszczadów. Charakteryzuje się rozległymi połoninami i widokami na dzikie bieszczadzkie krajobrazy. Jest częścią Bieszczadzkiego Parku Narodowego.',
      imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800',
      imageAttribution: 'Unsplash - Free to use',
      latitude: 49.0856,
      longitude: 22.6128,
      trails: [
        { name: 'Szlak z Ustrzyk Górnych', distance: '8 km', duration: '3.5-4 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Bereżek', distance: '6 km', duration: '3-3.5 h', difficulty: 'umiarkowany' }
      ]
    }
  }
];

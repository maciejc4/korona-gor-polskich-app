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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Rysy_z_Polskiej_Strony.jpg/1280px-Rysy_z_Polskiej_Strony.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.17947,
      longitude: 20.08825,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Babia_G%C3%B3ra_a1.jpg/1280px-Babia_G%C3%B3ra_a1.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.57306,
      longitude: 19.52944,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/20190602_Sn%C4%9B%C5%BEka_1318_2961_DxO.jpg/1280px-20190602_Sn%C4%9B%C5%BEka_1318_2961_DxO.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.73611,
      longitude: 15.73972,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Snieznik_BM.jpg/1280px-Snieznik_BM.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.20694,
      longitude: 16.84889,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tarnica_a1.jpg/1280px-Tarnica_a1.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.07472,
      longitude: 22.72667,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gorce_-_Turbacz_01.jpg/1280px-Gorce_-_Turbacz_01.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.54306,
      longitude: 20.11083,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Radziejowa.jpg/1280px-Radziejowa.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.44278,
      longitude: 20.60472,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pilsko_z_Romanki.jpg/1280px-Pilsko_z_Romanki.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.52528,
      longitude: 19.33444,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Skrzyczne1.jpg/1280px-Skrzyczne1.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.68472,
      longitude: 19.03167,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mogielica_BW_01.JPG/1280px-Mogielica_BW_01.JPG',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.65472,
      longitude: 20.27694,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wysoka_Kopa_z_Rozdro%C5%BCa_Izerskiego.jpg/1280px-Wysoka_Kopa_z_Rozdro%C5%BCa_Izerskiego.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.85750,
      longitude: 15.36056,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Wielka_Sowa_BW_3.JPG/1280px-Wielka_Sowa_BW_3.JPG',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.67972,
      longitude: 16.48556,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lackowa_04.jpg/1280px-Lackowa_04.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.41472,
      longitude: 21.09639,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Orlica_wieza.jpg/800px-Orlica_wieza.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.35528,
      longitude: 16.38389,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kowadlo-G%C3%B3ry_Z%C5%82ote.jpg/1280px-Kowadlo-G%C3%B3ry_Z%C5%82ote.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.29194,
      longitude: 17.06139,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Szczeliniec_Wielki_a1.jpg/1280px-Szczeliniec_Wielki_a1.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.48472,
      longitude: 16.34083,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Jagodna%2C_Bystrzyckie_Mountains.jpg/1280px-Jagodna%2C_Bystrzyckie_Mountains.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.26417,
      longitude: 16.55361,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Rudawiec.jpg/1280px-Rudawiec.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.69694,
      longitude: 16.21750,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Walig%C3%B3ra.jpg/1280px-Walig%C3%B3ra.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.70278,
      longitude: 16.26444,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Che%C5%82miec_Wa%C5%82brzyski.jpg/1280px-Che%C5%82miec_Wa%C5%82brzyski.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.75639,
      longitude: 16.20167,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Skalnik_RJ_1.jpg/1280px-Skalnik_RJ_1.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.84361,
      longitude: 15.93139,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Wysoka_Pieniny.jpg/1280px-Wysoka_Pieniny.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.41778,
      longitude: 20.40889,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lubomir_012.JPG/1280px-Lubomir_012.JPG',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.82028,
      longitude: 19.95028,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%C5%81ysica_BW.jpg/1280px-%C5%81ysica_BW.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.89167,
      longitude: 20.90194,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%C5%9Al%C4%99%C5%BCa_Mountain.jpg/1280px-%C5%9Al%C4%99%C5%BCa_Mountain.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.86528,
      longitude: 16.70917,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/K%C5%82odzka_G%C3%B3ra.jpg/1280px-K%C5%82odzka_G%C3%B3ra.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 50.44250,
      longitude: 16.69528,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Lubo%C5%84_Wielki_from_Lubomir.jpg/1280px-Lubo%C5%84_Wielki_from_Lubomir.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.73778,
      longitude: 19.96306,
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wielka_Rawka_BdPN.jpg/1280px-Wielka_Rawka_BdPN.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA',
      latitude: 49.08556,
      longitude: 22.61278,
      trails: [
        { name: 'Szlak z Ustrzyk Górnych', distance: '8 km', duration: '3.5-4 h', difficulty: 'umiarkowany' },
        { name: 'Szlak z Bereżek', distance: '6 km', duration: '3-3.5 h', difficulty: 'umiarkowany' }
      ]
    }
  }
];

import type { BingoGame } from '@/types/bingo-game-module';
import type { BingoSquare } from '@/types/bingo-square';

/**
 * Unique identifier for the Bingo Game
 */
const GameId = 'da-nordicnoir-tv-tropes';

/**
 * Name of the Bingo Game
 */
const GameName = '🇩🇰🌧️ Nordisk Noir Krimi ❄️🇩🇰';

/**
 * Nordic Noir TV Tropes Bingo Squares.
 * These tropes are commonly found in Scandinavian crime dramas.
 * Each trope has a unique ID, title, description, and category.
 * Array of bingo squares without the 'marked' property.
 */
const GameSquares: Array<Omit<BingoSquare, 'marked'>> = [
  {
    id: 'RoADbZgxcz',
    title: 'Trist vejr',
    description: 'Det regner, sner eller er på anden måde dystert vejr.',
    category: 'visual',
  },
  {
    id: 'K1TeyaIh2v',
    title: 'Den defekte detektiv',
    description:
      'Efterforskeren kæmper med alkohol, søvnløshed, skilsmisse eller andre personlige dæmoner.',
    category: 'character',
  },
  {
    id: 'fVOEz7uApy',
    title: 'Gråtoner overalt',
    description: 'Farveskalaen er desatureret - alt er gråt, blåt og dystert.',
    category: 'visual',
  },
  {
    id: 'VYQI3L1LsL',
    title: 'Ligfundet',
    description: 'Et lig bliver fundet på et øde sted - i skoven, på stranden eller i en sø.',
    category: 'mainPlot',
  },
  {
    id: 'eXTcsYZCWR',
    title: 'Den ikoniske sweater',
    description: 'Hovedpersonen bærer en karakteristisk striktrøje eller uldsweater.',
    category: 'visual',
  },
  {
    id: 'IHsvzBR842',
    title: 'Småbyens hemmeligheder',
    description: 'En tilsyneladende fredelig småby viser sig at skjule mørke hemmeligheder.',
    category: 'mainPlot',
  },
  {
    id: 'my6wERZ2l8',
    title: 'Ødelagt familieliv',
    description: 'Efterforskerens ægteskab eller familierelationer er i opløsning.',
    category: 'subPlot',
  },
  {
    id: 'yUf43EhafQ',
    title: 'Mordtavlen',
    description: 'En opslagstavle med billeder, tråde og noter forbinder ofrene.',
    category: 'visual',
  },
  {
    id: 'pFPv0IvV7V',
    title: 'Storbyens skyggeside',
    description: 'København, Stockholm eller Oslo vises fra sin mørkeste side.',
    category: 'visual',
  },
  {
    id: 'DNomuszgQj',
    title: 'Nordisk tavshed',
    description: 'Lange pauser og minimal dialog - folk stirrer ud af vinduer.',
    category: 'visual',
  },
  {
    id: '7K6NxiiUDy',
    title: 'Seriemorder på fri fod',
    description: 'Morderen slår til igen og igen mens politiet jagter ham.',
    category: 'mainPlot',
  },
  {
    id: 'Hn9UGLJuyj',
    title: 'Rygepausen',
    description: 'Detektiven tager konstant rygepause - ofte i regnen.',
    category: 'character',
  },
  {
    id: '6HM7caTscj',
    title: 'Obduktionsscenen',
    description: 'Retsmedicineren forklarer detaljeret dødsårsagen ved obduktionsbordet.',
    category: 'visual',
  },
  {
    id: '02g2w0AZ9u',
    title: 'Den tomme flaske',
    description: 'En tom whiskyflaske eller øldåser signalerer detektivens problemer.',
    category: 'visual',
  },
  {
    id: 'k6dz1PtfhX',
    title: 'Broen som mødepunkt',
    description: 'En vigtig scene foregår på en bro - ofte Øresundsbroen.',
    category: 'visual',
  },
  {
    id: 'Pr6GJHtwdU',
    title: 'Politisk korruption',
    description: 'Sagen fører til magtfulde politikere eller erhvervsfolk.',
    category: 'mainPlot',
  },
  {
    id: 'RQeiJSWm7L',
    title: 'Kvindelig hovedefterforsker',
    description: 'En stærk kvindelig efterforsker leder sagen mod alle odds.',
    category: 'character',
  },
  {
    id: 'xG4LZiGo0P',
    title: 'Rockerbanden',
    description: 'Hells Angels eller lignende motorcykelbander er involveret.',
    category: 'character',
  },
  {
    id: 'jHcV1JueMj',
    title: 'Velfærdsstatens facade',
    description: 'Den perfekte skandinaviske velfærdsstat skjuler mørke sandheder.',
    category: 'mainPlot',
  },
  {
    id: 'SFUTJmP6Bc',
    title: 'Intens øjenkontakt',
    description: 'To karakterer holder øjenkontakt i ubehageligt lang tid.',
    category: 'visual',
  },
  {
    id: 'MYM8eW4gwT',
    title: 'Menneskehandel',
    description: 'Sagen involverer trafficking eller moderne slaveri.',
    category: 'mainPlot',
  },
  {
    id: 'Flu3Vh2IsV',
    title: 'Gammel uløst sag',
    description: 'En cold case fra fortiden dukker op igen.',
    category: 'mainPlot',
  },
  {
    id: 'hlkGqeyDaX',
    title: 'Isoleret location',
    description: 'Handlingen foregår på en ø, et fjernt landsted eller en afsides by.',
    category: 'visual',
  },
  {
    id: 'stqvyK4T1k',
    title: 'Familiens hemmelighed',
    description: 'En velstående familie skjuler en frygtelig sandhed.',
    category: 'mainPlot',
  },
  {
    id: 'XmjcCGvv8J',
    title: 'Mørke natscener',
    description: 'De fleste scener foregår i mørke eller skumring.',
    category: 'visual',
  },
  {
    id: 'IqzCqYlGzG',
    title: 'Minimalistisk arkitektur',
    description: 'Moderne skandinavisk design - betongulve og store vinduer.',
    category: 'visual',
  },
  {
    id: '7bE2NzWdW8',
    title: 'Russiske kriminelle',
    description: 'Den russiske mafia eller østeuropæiske bander er involveret.',
    category: 'character',
  },
  {
    id: 'pkshkhyzf1',
    title: 'Selvmord eller mord?',
    description: 'Et tilsyneladende selvmord viser sig at være mord.',
    category: 'mainPlot',
  },
  {
    id: 'yaGCRgXSwL',
    title: 'Kollegaen med hemmeligheder',
    description: 'En kollega på stationen skjuler noget afgørende.',
    category: 'character',
  },
  {
    id: 'brCAAsiRNJ',
    title: 'Mediernes pres',
    description: 'Pressen lægger pres på politiet og komplicerer efterforskningen.',
    category: 'subPlot',
  },
  {
    id: 'mLwrI3Evox',
    title: 'Barn som offer',
    description: 'Et forsvundet eller dræbt barn driver handlingen.',
    category: 'mainPlot',
  },
  {
    id: '6MXbMlN8Dn',
    title: 'Besværlig eksmage',
    description: 'Detektivens eks-kone eller eks-mand skaber drama.',
    category: 'subPlot',
  },
  {
    id: 'X0bmorDRk8',
    title: 'Scenen i skoven',
    description: 'En vigtig scene foregår i en mørk skandinavisk skov.',
    category: 'visual',
  },
  {
    id: 'aYaMT4Bfya',
    title: 'Grænseoverskridende samarbejde',
    description: 'Dansk-svensk, norsk-svensk eller andet tværnationalt politisamarbejde.',
    category: 'mainPlot',
  },
  {
    id: 'hJ9yAtjexv',
    title: 'Traumatisk fortid',
    description: 'Detektiven har et personligt traume der påvirker sagen.',
    category: 'character',
  },
  {
    id: 'SW67qBqN7M',
    title: 'Socialrealisme',
    description: 'Serien kommenterer på sociale problemer som fattigdom eller ulighed.',
    category: 'mainPlot',
  },
  {
    id: 'b5KAmzdEku',
    title: 'Morderen er bekendt',
    description: 'Morderen viser sig at være en person tæt på offeret.',
    category: 'mainPlot',
  },
  {
    id: '0wchOZRwQS',
    title: 'Den tavse bilkørsel',
    description: 'To karakterer kører i bil uden at tale - bare stirrer ud.',
    category: 'visual',
  },
  {
    id: 'HrODZvkeo6',
    title: 'Søvnløse nætter',
    description: 'Detektiven kan ikke sove og vandrer rundt om natten.',
    category: 'character',
  },
  {
    id: 'y8Kop2L8Zy',
    title: 'Barndomstraumer',
    description: 'Sagen involverer overgreb eller svigt fra barndommen.',
    category: 'mainPlot',
  },
  {
    id: 'gD36PLPlW3',
    title: 'Havneområdet',
    description: 'Vigtige scener foregår i industrielle havneområder.',
    category: 'visual',
  },
  {
    id: 'NwAkthkTOs',
    title: 'Den fraværende forælder',
    description: 'Detektiven forsømmer sit barn på grund af arbejdet.',
    category: 'subPlot',
  },
  {
    id: 'sJzqyhJBpY',
    title: 'Punkeren/den alternative',
    description: 'En karakter med piercinger, tatoveringer og alternativt look er nøgleperson.',
    category: 'character',
  },
  {
    id: 'xhsVI5STqR',
    title: 'Lisbeth Salander-typen',
    description: 'En socialt akavet, men genial kvindelig hacker eller outsider.',
    category: 'character',
  },
  {
    id: '7wcZkVg22J',
    title: 'Overhørt samtale',
    description: 'En vigtig oplysning bliver overhørt ved et tilfælde.',
    category: 'subPlot',
  },
  {
    id: 'AUDm7McD0v',
    title: 'Forfølgelsesscene i sneen',
    description: 'En jagt gennem sneklædt landskab.',
    category: 'visual',
  },
  {
    id: 'dZNSHzpDzU',
    title: 'Indvandrer-vinkel',
    description: 'Sagen involverer flygtninge eller indvandrermiljøer.',
    category: 'mainPlot',
  },
  {
    id: '4NGEvPyUXt',
    title: 'Konflikten med chefen',
    description: 'Detektiven er uenig med den overordnede om fremgangsmåden.',
    category: 'subPlot',
  },
  {
    id: 'OK6lkQZl2w',
    title: 'Det ensomme måltid',
    description: 'Detektiven spiser alene - ofte færdigmad eller rugbrød.',
    category: 'visual',
  },
  {
    id: 'Rt0Bs1oavl',
    title: 'Kirkegårdsscenen',
    description: 'En vigtig samtale eller afsløring finder sted på en kirkegård.',
    category: 'visual',
  },
  {
    id: 'MnFZnaOnOa',
    title: 'Fiskerindustrien',
    description: 'Sagen involverer fiskere, havne eller fiskersamfund.',
    category: 'mainPlot',
  },
  {
    id: 'SK13q8UILl',
    title: 'Alkoholisme',
    description: 'En hovedkarakter kæmper åbenlyst med alkoholmisbrug.',
    category: 'character',
  },
  {
    id: 'zeOadEHxuV',
    title: 'Drabsafdelingen',
    description: 'Scener fra det slidte politikontor med kaffe og papirarbejde.',
    category: 'visual',
  },
  {
    id: 'k3t7uPhnaf',
    title: 'Den oplagte mistænkte',
    description: 'En person virker skyldig, men viser sig at være uskyldig.',
    category: 'mainPlot',
  },
  {
    id: 'wG4OBK6S0n',
    title: 'Terror-truslen',
    description: 'Sagen har forbindelse til terrorisme eller ekstremisme.',
    category: 'mainPlot',
  },
  {
    id: 'AVEbXFmyIN',
    title: 'Højhusblokken',
    description: "Scener foregår i grå betonbyggerier fra 60'erne og 70'erne.",
    category: 'visual',
  },
  {
    id: 'JRqR6FU69H',
    title: 'Stirren ud af vinduet',
    description: 'En karakter stirrer tankefuldt ud af et vindue i lang tid.',
    category: 'visual',
  },
  {
    id: 'N9uBUnLqgj',
    title: 'Det anonyme tip',
    description: 'Et anonymt opkald eller brev sætter gang i efterforskningen.',
    category: 'subPlot',
  },
  {
    id: 'BlNKOsWKAZ',
    title: 'Psykisk sygdom',
    description: 'En karakter lider af depression, PTSD eller anden psykisk lidelse.',
    category: 'character',
  },
  {
    id: 'XWjsM3x4Xo',
    title: 'Koldkrigs-forbindelse',
    description: 'Sagen har rødder tilbage til Den Kolde Krig eller Sovjet.',
    category: 'mainPlot',
  },
  {
    id: '4O6BWsxp5f',
    title: 'Samtalen med de pårørende',
    description: 'Detektiven må fortælle en familie den tragiske nyhed.',
    category: 'visual',
  },
  {
    id: '56LzgEoWdd',
    title: 'Den gravende journalist',
    description: 'En journalist efterforsker sagen parallelt med politiet.',
    category: 'character',
  },
  {
    id: 'fMzIP0kOc7',
    title: 'Profileren',
    description: 'En psykolog eller profiler hjælper med at forstå morderen.',
    category: 'character',
  },
  {
    id: 'zRA2ZKYuhl',
    title: 'Fjordlandskabet',
    description: 'Dramatiske scener med norske fjorde eller svensk skærgård.',
    category: 'visual',
  },
  {
    id: 'L8kJcUWl0D',
    title: 'Hævnmotivet',
    description: 'Morderen handler ud fra et gammelt ønske om hævn.',
    category: 'mainPlot',
  },
  {
    id: 'sZ6SUL2wys',
    title: 'Fyrtårnet',
    description: 'Et fyrtårn eller en ø spiller en central rolle.',
    category: 'visual',
  },
  {
    id: 'j4sX9YeucP',
    title: 'Færgen',
    description: 'En færge bruges til flugt eller som mødested.',
    category: 'visual',
  },
  {
    id: 'naHnTN2Hrl',
    title: 'Grænseområdet',
    description: 'Handlingen foregår ved en landegrænse med jurisdiktionsproblemer.',
    category: 'mainPlot',
  },
  {
    id: 'alN5DvjysG',
    title: 'Narko-forbindelsen',
    description: 'Sagen involverer narkotikahandel eller smugling.',
    category: 'mainPlot',
  },
  {
    id: 'm48JzsNv9e',
    title: 'Aflytningen',
    description: 'Politiet aflyttes eller aflyttes selv ulovligt.',
    category: 'subPlot',
  },
  {
    id: '8GhY0BfDW5',
    title: 'Det nedlagte fabriksanlæg',
    description: 'En vigtig scene foregår i en forladt fabrik eller industribygning.',
    category: 'visual',
  },
  {
    id: 'qUhN8Nx91l',
    title: 'Ritualistisk mord',
    description: 'Morderen efterlader symboler eller arrangerer ligene rituelt.',
    category: 'mainPlot',
  },
  {
    id: 'oFYqzBSmYG',
    title: 'Kopibetjenten',
    description: 'En ung, idealistisk betjent udfordrer den erfarne detektivs metoder.',
    category: 'character',
  },
  {
    id: 'tw9gHHt8MI',
    title: 'Det intense forhør',
    description: 'En lang forhørsscene hvor sandheden langsomt afsløres.',
    category: 'visual',
  },
  {
    id: 'RjQjt7HVKM',
    title: 'Selvtægt',
    description: 'En karakter tager loven i egen hånd.',
    category: 'mainPlot',
  },
  {
    id: 'dFyJsl6mdi',
    title: 'Miljøforbrydelser',
    description: 'Sagen involverer miljøkriminalitet eller en korrupt virksomhed.',
    category: 'mainPlot',
  },
  {
    id: 'I1UXPTB69f',
    title: 'Pædofili-ringen',
    description: 'Sagen afslører et netværk af overgreb mod børn.',
    category: 'mainPlot',
  },
  {
    id: 'ZQYNEKwiWB',
    title: 'Saunaen',
    description: 'En scene foregår i en sauna - typisk finsk setting.',
    category: 'visual',
  },
  {
    id: 'Bhv7SlNP5S',
    title: 'Den hemmelige affære',
    description: 'En affære afsløres og komplicerer sagen.',
    category: 'subPlot',
  },
  {
    id: '6eo7nXNih1',
    title: 'Cyberkriminalitet',
    description: 'Sagen involverer hacking, darkweb eller digital kriminalitet.',
    category: 'mainPlot',
  },
  {
    id: 'KkCAXwB0Uj',
    title: 'Barnet der så noget',
    description: 'Et barn er vidne til forbrydelsen men kan ikke forklare sig.',
    category: 'subPlot',
  },
  {
    id: 'nLHtqW23oU',
    title: 'Hospitalsbesøget',
    description: 'En vigtig samtale foregår på et hospital med et offer.',
    category: 'visual',
  },
  {
    id: 'ozH6Q4pvVN',
    title: 'Kodenavnet',
    description: 'Operationen får et dramatisk kodenavn.',
    category: 'subPlot',
  },
  {
    id: '0NSz5wihIC',
    title: 'Den åbne slutning',
    description: 'Serien slutter uden at alle tråde bindes sammen.',
    category: 'meta',
  },
  {
    id: 'ddlUndpAVf',
    title: 'Institutionen',
    description: 'Sagen fører til et børnehjem, hospital eller plejehjem med mørk fortid.',
    category: 'mainPlot',
  },
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

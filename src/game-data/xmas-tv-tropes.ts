import type { BingoGame } from "@/types/bingo-game-module";
import type { BingoSquare } from "@/types/bingo-square";

/**
 * Unique identifier for the Bingo Game
 */
const GameId = "xmas-tv-tropes";

/**
 * Name of the Bingo Game
 */
const GameName = "🎄 Hallmark Julefilm Bingo 🎄";

/**
 * Xmas Romance Movie Tropes Bingo Squares
 * These tropes are commonly found in Christmas romance movies.
 * Each trope has a unique ID, title, description, and category.
 *
 * IDs were generated using https://shortunique.id/#md:use-in-cli
 *  npm install --global short-unique-id
 *  for i in {1..15}; do suid -l 10; done
 * Array of bingo squares without the 'marked' property.
 */
const GameSquares: Array<Omit<BingoSquare, "marked">> = [
  {
    id: "WO4GFxFzjh",
    title: "Den lokale handyman",
    description:
      "En jordnær, hjælpsom type der fikser alt - også hovedpersonens hjerte.",
    category: "character",
  },
  {
    id: "j2myDZerZh",
    title: "Karriere vs. kærlighed",
    description:
      "Et stort jobtilbud kolliderer med spirende romantik i småbyen.",
    category: "mainPlot",
  },
  {
    id: "T7H7XGUvjG",
    title: "Sneboldkamp i slowmotion",
    description: "En flirtende sneboldkamp ender i grin og øjenkontakt.",
    category: "visual",
  },
  {
    id: "jillJs4tTc",
    title: "Enkemand med juletraume",
    description: "En enkemand, der har mistet juleglæden, finder håb igen.",
    category: "character",
  },
  {
    id: "UCBLG0dlD5",
    title: "Gæstgiveriet i knibe",
    description:
      "En gammel kro er ved at lukke, og parret må redde den inden jul.",
    category: "mainPlot",
  },
  {
    id: "zzdoIRKtVF",
    title: "Kys foran byens juletræ",
    description: "Et skelsættende kys foran det tændte juletræ.",
    category: "visual",
  },
  {
    id: "q5gtADVZ0c",
    title: "Overhørt samtale",
    description:
      "En misforståelse opstår, da en karakter hører kun halvdelen af en sætning.",
    category: "subPlot",
  },
  {
    id: "wGz6zWBais",
    title: "Julemanden i forklædning",
    description: "En mystisk ældre mand viser sig at være Julemanden selv.",
    category: "character",
  },
  {
    id: "bV2EkCsEBl",
    title: "Storbychef på landet",
    description:
      "En streng chef sendes ud til en lille by - og bløder op af julestemning.",
    category: "character",
  },
  {
    id: "0J33hAchFJ",
    title: "Ufrivillige makkere",
    description: "To personer der ikke kan enes, tvinges til at samarbejde.",
    category: "mainPlot",
  },
  {
    id: "8nvZjQPGfs",
    title: "Snemand med betydning",
    description: "De bygger en snemand, som viser sig at få sentimental værdi.",
    category: "visual",
  },
  {
    id: "60EXGHz3te",
    title: `"Det føles som hjemme"`,
    description: "En klassisk replik der markerer romantisk gennembrud.",
    category: "quote",
  },
  {
    id: "H6zm0cklbt",
    title: "Butiksejeren med stort hjerte",
    description: "En lille butik rummer både julemagi og en potentiel partner.",
    category: "character",
  },
  {
    id: "fZyBEqOher",
    title: "Bagning som bonding",
    description: "Et romantisk øjeblik opstår midt i kaotisk småkagebagning.",
    category: "visual",
  },
  {
    id: "OZT61wjqDG",
    title: "Den magiske bedstemor",
    description:
      "En ældre slægtning orkestrerer kærlighed uden at indrømme det.",
    category: "character",
  },
  {
    id: "zwFuvptwXX",
    title: "Juletræslysningen",
    description: "En stor begivenhed hvor kærlighed opstår eller erkendes.",
    category: "visual",
  },
  {
    id: "9MaOQKHkTA",
    title: "Journalist på juleopgave",
    description:
      "En journalist sendes modvilligt til en lille by for at skrive en artikel.",
    category: "character",
  },
  {
    id: "kh2g23ot86",
    title: `"Jeg plejede at elske jul… "`,
    description: "En sørgmodig replik der afslører sårbarhed.",
    category: "quote",
  },
  {
    id: "kDADEGxDDS",
    title: "Julekort med hemmelig afsender",
    description: "Et mystisk julekort fører to mennesker sammen.",
    category: "subPlot",
  },
  {
    id: "oeZwjzdnjl",
    title: `"Hvor er dine handsker?"`,
    description: "Omsorg forklædt som flirt.",
    category: "quote",
  },
  {
    id: "WKtkPBe5cs",
    title: "Kaffebarejeren",
    description: "En charmerende, rolig type der laver verdens bedste kakao.",
    category: "character",
  },
  {
    id: "6XAx9MKg9b",
    title: "Slædeturen",
    description: "En romantisk slædetur med tæpper og nervøs latter.",
    category: "visual",
  },
  {
    id: "xn1MuMLZSu",
    title: `"Jeg tror bare ikke på mirakler"`,
    description: "Karakterens sidste forsvar før julemagi ændrer alt.",
    category: "quote",
  },
  {
    id: "RFhHnPpiqF",
    title: "Kæledyr bringer dem sammen",
    description: "Et bortkommet eller adopteret dyr skaber mødet.",
    category: "subPlot",
  },
  {
    id: "uhSo3OKec3",
    title: "Snefnug i håret",
    description: "Kameraet zoomer ind på snefnug der smelter i håret.",
    category: "visual",
  },
  {
    id: "oB17OSHaSm",
    title: "Projekt i sidste øjeblik",
    description: "Et projekt skal reddes inden jul, og parret arbejder sammen.",
    category: "mainPlot",
  },
  {
    id: "Cm6XaDw9Pc",
    title: "Den forkerte kæreste",
    description: "En partner der tydeligvis ikke er “den rigtige”.",
    category: "character",
  },
  {
    id: "n05iF3gHUj",
    title: `"Du ser anderledes ud her"`,
    description: "En replik fra en gammel klassekammerat.",
    category: "quote",
  },
  {
    id: "umASBxAIlT",
    title: "Hele byen hepper",
    description: "Lokalsamfundet fungerer som matchmaker.",
    category: "character",
  },
  {
    id: "icee6RoysE",
    title: "Perfekt pyntet hjem",
    description: "Et julepyntet hus der er helt urealistisk flot.",
    category: "visual",
  },
  {
    id: "j6MPCFeSWU",
    title: "Gammel pynt med historie",
    description: "En ornament genopliver barndomsminder.",
    category: "visual",
  },
  {
    id: "Ot62uvaPbb",
    title: `"Jul handler om traditioner"`,
    description: "Moraliserende julesætning fra en mentor.",
    category: "quote",
  },
  {
    id: "QjxZM9aX8f",
    title: "Velgørenhedsprojekt",
    description: "Parret mødes som frivillige ved et juleevent.",
    category: "subPlot",
  },
  {
    id: "R4pgDEDojy",
    title: "Kokken uden inspiration",
    description:
      "En bager eller kok der skal genfinde gnisten - og kærligheden.",
    category: "character",
  },
  {
    id: "6FJzdzReHT",
    title: "Antijul-chefen",
    description: "En chef der skaber konflikter pga. sit julehad.",
    category: "character",
  },
  {
    id: "Dh7thtkc7t",
    title: "Juletræ vælter",
    description: "Et komisk øjeblik når træet tipper.",
    category: "visual",
  },
  {
    id: "OIR6Ukq5M2",
    title: "Den lille butik redder julen",
    description: "En lokal butik har løsningen på julens problem.",
    category: "mainPlot",
  },
  {
    id: "5dF9EoRd1V",
    title: "Deadline d. 24. december",
    description: "Noget vigtigt skal være færdigt inden juleaften.",
    category: "mainPlot",
  },
  {
    id: "XftpOzs1Lq",
    title: "Lokal kunstner",
    description: "En kreativ person forbinder kunst og kærlighed.",
    category: "character",
  },
  {
    id: "LBG2hrimE7",
    title: "Konkurrence-kaos",
    description: "Noget går galt i en konkurrence og skaber fysisk komik.",
    category: "visual",
  },
  {
    id: "MWwfHOWWwY",
    title: `"Det her var ikke planen"`,
    description: "Replik ved vendepunktet.",
    category: "quote",
  },
  {
    id: "qZUcIvzjXC",
    title: "Skøjtescenen",
    description: "Et fald på isen fører til øm romantik.",
    category: "visual",
  },
  {
    id: "4N7n6A7ZDM",
    title: "Storbytræt hovedperson",
    description: "En person flygter fra storbyens stress til en lille by.",
    category: "character",
  },
  {
    id: "UQwWpoI3vY",
    title: "Overivrig ven",
    description: "En ven arrangerer romantiske øjeblikke bag kulisserne.",
    category: "character",
  },
  {
    id: "wz5pu39NzF",
    title: "Magisk tidsrejse",
    description: "Et juleønske tager karakteren til en alternativ virkelighed.",
    category: "mainPlot",
  },
  {
    id: "NKMoG2I1Tc",
    title: "En ny familie",
    description: "Karakterer finder en “familie” i lokalsamfundet.",
    category: "subPlot",
  },
  {
    id: "iRm4YcSlRh",
    title: `"Følg dit hjerte"`,
    description: "Mentorens go-to juleråd.",
    category: "quote",
  },
  {
    id: "NpFArqmDnj",
    title: "Julemarked",
    description: "Romantik mellem boder og lys.",
    category: "visual",
  },
  {
    id: "c8y702ixRC",
    title: "Papirhjertet",
    description: "Hjemmelavet pynt får sentimental betydning.",
    category: "visual",
  },
  {
    id: "eJbOUJ1Mgw",
    title: "Aflyst rejse",
    description: "En aflyst rejse skaber nye muligheder.",
    category: "subPlot",
  },
  {
    id: "Ju7Cln3tTD",
    title: "Skjult identitet",
    description: "En karakter skjuler sin baggrund eller status.",
    category: "mainPlot",
  },
  {
    id: "GTg4GhNfsb",
    title: "Kor-optræden",
    description: "En følelsesladet scene til juleshowet.",
    category: "visual",
  },
  {
    id: "hJqEtC5TnF",
    title: `"Jeg tror, jeg har kendt dig altid"`,
    description: "Et skæbnesvangert øjeblik.",
    category: "quote",
  },
  {
    id: "RsRifes2LY",
    title: "Den perfekte men kedelige mand",
    description: "En fejlfri men gnistløs bejler.",
    category: "character",
  },
  {
    id: "bs3d121LVo",
    title: "Uventet gæst",
    description: "En person dukker op juleaftensdag og vender alt på hovedet.",
    category: "subPlot",
  },
  {
    id: "osUZfe8vI1",
    title: "Julemagi ved midnat",
    description: "Noget overnaturligt sker lige ved midnat.",
    category: "visual",
  },
  {
    id: "LMa3W7Cu4j",
    title: "Overraskelsesfest",
    description: "En hemmelig julefest planlægges.",
    category: "subPlot",
  },
  {
    id: "KYnztPpq0o",
    title: "Peberkagehus i verdensklasse",
    description: "Et overdådigt peberkagehus overrasker alle.",
    category: "visual",
  },
  {
    id: "JVD14DxTHy",
    title: `"Du er ikke den jeg troede"`,
    description: "Replik ved konfliktens højdepunkt.",
    category: "quote",
  },
  {
    id: "bq7aQcMGAv",
    title: "Den stædige lokale",
    description: "En stærk lokalperson nægter at give op.",
    category: "character",
  },
  {
    id: "F3hikxZAG5",
    title: "Julegalla",
    description:
      "En velgørenhedsgalla bliver dramatisk og romantisk kulmination.",
    category: "mainPlot",
  },
  {
    id: "E4LSzayxCg",
    title: "Fyrværkeri i sneen",
    description: "Finale med lys og sne.",
    category: "visual",
  },
  {
    id: "iU4Osiz2bD",
    title: `"Jeg kan ikke miste dig igen"`,
    description: "Replik før forsoning.",
    category: "quote",
  },
  {
    id: "icwBNnI7p4",
    title: "Ødelagt plan",
    description: "En ferieplan falder fra hinanden og ændrer retning.",
    category: "subPlot",
  },
  {
    id: "sU0cvGMk2X",
    title: "Forvekslede gaver",
    description: "Pakker bliver byttet og fører karakterer sammen.",
    category: "subPlot",
  },
  {
    id: "D58am6L0J2",
    title: "TV-interview går galt",
    description: "Et interview ender med kaos og romantik.",
    category: "subPlot",
  },
  {
    id: "Ih1rdMQGKL",
    title: `"Jeg troede ikke på kærlighed før dig"`,
    description: "Finale-replik.",
    category: "quote",
  },
  {
    id: "HhgN8MOzF0",
    title: "Hemmelig beundrer",
    description: "En flirt starter med hemmelige beskeder.",
    category: "subPlot",
  },
  {
    id: "wIpUqImuGS",
    title: "Afsløring af hemmelighed",
    description: "Et sandhedsøjeblik skaber drama før happy ending.",
    category: "mainPlot",
  },
  {
    id: "97C0pDwF3o",
    title: "Lokale juletraditioner",
    description: "En tradition forener parret.",
    category: "visual",
  },
  {
    id: "rypT1q4Q4P",
    title: "Mall-julekaos",
    description: "En scene i et overpyntet butikscenter.",
    category: "visual",
  },
  {
    id: "7ShuDtFEBd",
    title: "Overeksponeret belysning",
    description: "Julelys så stærke at man kniber øjnene sammen.",
    category: "meta",
  },
  {
    id: "qFGVtMDwER",
    title: "Indspillet i Canada",
    description: "Arkitektur og natur afslører Vancouver-området.",
    category: "meta",
  },
  {
    id: "XYWAy91G5j",
    title: "Sneskum-effekt",
    description: "Sne der ligner sæbeskum.",
    category: "meta",
  },
  {
    id: "BIxayBHElB",
    title: "Manden fryser aldrig",
    description: "En mand uden hue eller jakke fryser aldrig i sneen.",
    category: "meta",
  },
  {
    id: "wpPtzUKeJP",
    title: "Rekvisit-genbrug",
    description: "Man genkender rekvisitter fra andre film.",
    category: "meta",
  },
  {
    id: "lpJpGRH3AR",
    title: `"Det må være skæbnen"`,
    description: "En sætning der forklarer tilfældigheder.",
    category: "quote",
  },
  {
    id: "1HB8TiNeOi",
    title: "Parallel kærlighed",
    description: "En sidekarakter finder også kærlighed.",
    category: "subPlot",
  },
  {
    id: "LmnjjTE0Fg",
    title: "Overraskende sangstemme",
    description: "En karakter synger overraskende godt.",
    category: "visual",
  },
  {
    id: "8fyTTyrhNy",
    title: "Frieri fra den forkerte",
    description: "En person bliver friet til af den forkerte.",
    category: "subPlot",
  },
  {
    id: "nbwLuedz3M",
    title: "Slutkys i sne",
    description: "Filmen slutter med et kys i snevejr.",
    category: "visual",
  },
  {
    id: "Dt6eS692jf",
    title: "Juleborgmesteren",
    description: "En ekstremt juleglad borgmester styrer byen.",
    category: "character",
  },
  {
    id: "bLvP9pyqli",
    title: "Pyntestige-ulykke",
    description: "Nogen falder ned fra en stige under pyntning.",
    category: "visual",
  },
  {
    id: "qVtaFKdtR5",
    title: `"Julen forbinder os alle"`,
    description: "Klichéfyldt afsluttende replik.",
    category: "quote",
  },
  {
    id: "NzhgHB6uNf",
    title: "Juleuniformen",
    description: "Alle i byen går i perfekt farvekoordineret vintertøj.",
    category: "visual",
  },
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

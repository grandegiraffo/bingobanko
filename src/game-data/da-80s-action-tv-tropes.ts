import type { BingoGame } from "@/types/bingo-game-module";
import type { BingoSquare } from "@/types/bingo-square";

/**
 * Unique identifier for the Bingo Game
 */
const GameId = "da-80s-action-tv-tropes";

/**
 * Name of the Bingo Game
 */
const GameName = "🇩🇰💥 80'er Action 🚓🇩🇰";

/**
 * 80'er Action-TV Troper Bingo Squares.
 * Disse troper ses ofte i 1980'ernes action-serier og film.
 * Hver trope har et unikt ID, titel, beskrivelse og kategori.
 * Array af bingo-felter uden 'marked'-egenskaben.
 */
const GameSquares: Array<Omit<BingoSquare, "marked">> = [
  {
    id: "a80sTro001",
    title: "Stenansigt-helt",
    description:
      "Hovedpersonen viser sjældent følelser og holder sig rolig under ekstremt pres.",
    category: "character",
  },
  {
    id: "a80sTro002",
    title: "Kvikkæftede makker",
    description: "Makkeren fyrer jokes af, selv når faren er tæt på.",
    category: "character",
  },
  {
    id: "a80sTro003",
    title: "Kæk bemærkning",
    description: "Bemærkningen falder lige efter skurken rammer gulvet.",
    category: "quote",
  },
  {
    id: "a80sTro004",
    title: "Træningsmontage",
    description: "Hurtige klip viser helten blive bedre gennem sved og træning.",
    category: "visual",
  },
  {
    id: "a80sTro005",
    title: "Neonlys i natten",
    description: "Byen gløder af neonskilte og våd asfalt.",
    category: "visual",
  },
  {
    id: "a80sTro006",
    title: "Eksplosion uden at se sig tilbage",
    description: "Helten kigger ikke tilbage, mens noget stort går i luften.",
    category: "visual",
  },
  {
    id: "a80sTro007",
    title: "Muskelbiljagt",
    description: "En brølende biljagt flår gennem gader og motorveje.",
    category: "visual",
  },
  {
    id: "a80sTro008",
    title: "Sprint gennem baggyder",
    description: "Nogen spurter gennem smalle gyder, mens skraldespandene flyver.",
    category: "visual",
  },
  {
    id: "a80sTro009",
    title: "Helikopter-spotlight",
    description: "En helikopter fejer området med en kraftig lyskegle.",
    category: "visual",
  },
  {
    id: "a80sTro010",
    title: "Opgør på lager",
    description: "Det sidste slagsmål ender i et enormt lagerlokale.",
    category: "mainPlot",
  },
  {
    id: "a80sTro011",
    title: "Hop mellem tage",
    description: "Et risikabelt spring mellem tage afgør jagten.",
    category: "visual",
  },
  {
    id: "a80sTro012",
    title: "Hængende på bus",
    description: "En karakter hænger på ydersiden af en kørende bus.",
    category: "visual",
  },
  {
    id: "a80sTro013",
    title: "Finale ved havnen",
    description: "Klimaks rykker til havnen blandt kraner og containere.",
    category: "mainPlot",
  },
  {
    id: "a80sTro014",
    title: "Udenlandsk bagmand",
    description: "Skurken er en kold outsider med kraftig accent.",
    category: "character",
  },
  {
    id: "a80sTro015",
    title: "Korrupt myndighed",
    description: "En højtstående person beskytter de kriminelle.",
    category: "mainPlot",
  },
  {
    id: "a80sTro016",
    title: "Makker på vej på pension",
    description: "Den garvede partner har kun få dage tilbage, før noget går galt.",
    category: "subPlot",
  },
  {
    id: "a80sTro017",
    title: "Familien i fare",
    description: "Nære relationer trues for at presse helten.",
    category: "subPlot",
  },
  {
    id: "a80sTro018",
    title: "Gidselredning",
    description: "Civile er fanget, og indsatsen stiger.",
    category: "mainPlot",
  },
  {
    id: "a80sTro019",
    title: "Nedtælling",
    description: "Et tikkende ur presser alle mod en deadline.",
    category: "mainPlot",
  },
  {
    id: "a80sTro020",
    title: "Strømmen går",
    description: "Lyset slukker, og handlingen foregår i skygger.",
    category: "visual",
  },
  {
    id: "a80sTro021",
    title: "Reglerne er ligegyldige",
    description: "Helten ignorerer procedurer for at få resultatet.",
    category: "character",
  },
  {
    id: "a80sTro022",
    title: "Ensom ulv",
    description: "En solo-operatør stoler ikke på holdet og går alene.",
    category: "character",
  },
  {
    id: "a80sTro023",
    title: "Taskforce samles",
    description: "En hårdtslående enhed samles til mission.",
    category: "mainPlot",
  },
  {
    id: "a80sTro024",
    title: "Rival bliver allieret",
    description: "En rival ender som uventet partner.",
    category: "subPlot",
  },
  {
    id: "a80sTro025",
    title: "Forræderi indefra",
    description: "Nogen i teamet lækker oplysninger.",
    category: "subPlot",
  },
  {
    id: "a80sTro026",
    title: "Gadget-vogn",
    description: "En rullende kommandovogn afslører avanceret udstyr.",
    category: "visual",
  },
  {
    id: "a80sTro027",
    title: "Gadeinformant",
    description: "En informant bytter tips for penge eller tjenester.",
    category: "character",
  },
  {
    id: "a80sTro028",
    title: "Skurkens base",
    description: "De kriminelle opererer fra et stærkt bevogtet skjulested.",
    category: "visual",
  },
  {
    id: "a80sTro029",
    title: "Uendelig ammunition",
    description: "Helten skyder uden nogensinde at lade om.",
    category: "meta",
  },
  {
    id: "a80sTro030",
    title: "En mod en hær",
    description: "En helt tager kampen mod en hel gruppe håndlangere.",
    category: "mainPlot",
  },
  {
    id: "a80sTro031",
    title: "Redning i sidste sekund",
    description: "Redningen sker lige inden tiden løber ud.",
    category: "mainPlot",
  },
  {
    id: "a80sTro032",
    title: "Uopslidelig bil",
    description: "Heltenes bil overlever stød, der burde have knust den.",
    category: "visual",
  },
  {
    id: "a80sTro033",
    title: "Slowmotion-spring",
    description: "Et dramatisk spring vises i slowmotion.",
    category: "visual",
  },
  {
    id: "a80sTro034",
    title: "Knust glas overalt",
    description: "Vinduer splintres på overdrevet vis.",
    category: "visual",
  },
  {
    id: "a80sTro035",
    title: "Glid over motorhjelm",
    description: "Helten glider hen over en bil, mens våbnet trækkes.",
    category: "visual",
  },
  {
    id: "a80sTro036",
    title: "Trenchcoat-helt",
    description: "En lang frakke flagrer, mens helten bevæger sig.",
    category: "visual",
  },
  {
    id: "a80sTro037",
    title: "Vred politichef",
    description: "Chefen skælder helten ud i en højlydt kontorscene.",
    category: "character",
  },
  {
    id: "a80sTro038",
    title: "\"Du er ude af sagen!\"",
    description: "En overordnet tager sagen fra helten, der fortsætter alligevel.",
    category: "quote",
  },
  {
    id: "a80sTro039",
    title: "Avisafsløring",
    description: "En overskrift eller et udklip leverer vigtig info.",
    category: "visual",
  },
  {
    id: "a80sTro040",
    title: "Synth-tungt soundtrack",
    description: "Pulserende synthesizere driver actionen frem.",
    category: "meta",
  },
  {
    id: "a80sTro041",
    title: "Freeze-frame-slutning",
    description: "Det sidste billede fryser på en heroisk pose.",
    category: "meta",
  },
  {
    id: "a80sTro042",
    title: "Hårbånd-helt",
    description: "Et hårbånd bliver en del af kampuniformen.",
    category: "visual",
  },
  {
    id: "a80sTro043",
    title: "Håndlangere i jakkesæt",
    description: "Skurkene bærer matchende jakkesæt og mørke solbriller.",
    category: "character",
  },
  {
    id: "a80sTro044",
    title: "Barsk kvindelig fighter",
    description: "En stærk kvinde matcher actionen på lige fod.",
    category: "character",
  },
  {
    id: "a80sTro045",
    title: "Buddy-cop-drilleri",
    description: "Hovedpersonerne bytter jokes og brok midt i missionen.",
    category: "quote",
  },
  {
    id: "a80sTro046",
    title: "Slagsmål på bar",
    description: "Et slagsmål bryder ud i en fyldt bar.",
    category: "visual",
  },
  {
    id: "a80sTro047",
    title: "Motorcykel-spring",
    description: "En motorcykel hopper over et hul eller en barrikade.",
    category: "visual",
  },
  {
    id: "a80sTro048",
    title: "Eksplosive tønder",
    description: "Røde tønder eksploderer belejligt ved et træf.",
    category: "visual",
  },
  {
    id: "a80sTro049",
    title: "Haglgeværspump",
    description: "En høj pumpelyd fra haglgeværet varsler ballade.",
    category: "visual",
  },
  {
    id: "a80sTro050",
    title: "Plantegning af hemmelig base",
    description: "Et skema afslører skurkens indretning.",
    category: "visual",
  },
  {
    id: "a80sTro051",
    title: "Ung tech-ekspert",
    description: "En ung hacker løser et problem med et hurtigt hack.",
    category: "character",
  },
  {
    id: "a80sTro052",
    title: "TV-nyheder opsummerer",
    description: "En nyhedsudsendelse opsummerer kaosset.",
    category: "visual",
  },
  {
    id: "a80sTro053",
    title: "Stor rød knap",
    description: "Nogen tøver over en stor, ildevarslende knap.",
    category: "visual",
  },
  {
    id: "a80sTro054",
    title: "Forhør på lager",
    description: "Et forhør foregår under en dinglende lampe.",
    category: "visual",
  },
  {
    id: "a80sTro055",
    title: "Biltelefon-opkald",
    description: "Vigtig info kommer via en murstensstor biltelefon.",
    category: "visual",
  },
  {
    id: "a80sTro056",
    title: "Walkie-støj",
    description: "Radioen knitrer på det værst tænkelige tidspunkt.",
    category: "visual",
  },
  {
    id: "a80sTro057",
    title: "Skurkens latter",
    description: "Skurken griner, mens planen udfolder sig.",
    category: "quote",
  },
  {
    id: "a80sTro058",
    title: "Heltens kodeks",
    description: "Helten nægter at overskride en personlig grænse.",
    category: "character",
  },
  {
    id: "a80sTro059",
    title: "\"Bare denne ene gang\"",
    description: "Et løfte om at bøje reglerne bliver sagt højt.",
    category: "quote",
  },
  {
    id: "a80sTro060",
    title: "Finale i lufthavn",
    description: "Klimaks udspiller sig i en lufthavn eller hangar.",
    category: "mainPlot",
  },
  {
    id: "a80sTro061",
    title: "Kamp i tog",
    description: "Et slagsmål bryder ud i et kørende tog.",
    category: "mainPlot",
  },
  {
    id: "a80sTro062",
    title: "Våbenlayout",
    description: "Våben og gear lægges frem før missionen.",
    category: "visual",
  },
  {
    id: "a80sTro063",
    title: "Krigsflashback",
    description: "En tidligere konflikt dukker op i flashbacks.",
    category: "subPlot",
  },
  {
    id: "a80sTro064",
    title: "Tatoveret bølle",
    description: "En tung bølle med tydelige tatoveringer signalerer fare.",
    category: "character",
  },
  {
    id: "a80sTro065",
    title: "Engangshåndlangere",
    description: "Skurke falder hurtigt, så helten kan gå videre.",
    category: "meta",
  },
  {
    id: "a80sTro066",
    title: "Slips-justering",
    description: "Helten retter slipset før eller efter slagsmålet.",
    category: "visual",
  },
  {
    id: "a80sTro067",
    title: "Flænget skjorte",
    description: "En revnet skjorte viser heltens kampmærker.",
    category: "visual",
  },
  {
    id: "a80sTro068",
    title: "Små gnister, stort brag",
    description: "Et par gnister udløser en overdrevet eksplosion.",
    category: "meta",
  },
  {
    id: "a80sTro069",
    title: "Finale i regn",
    description: "Det sidste opgør foregår i styrtende regn.",
    category: "visual",
  },
  {
    id: "a80sTro070",
    title: "Plan på whiteboard",
    description: "En plan tegnes med tusch på et whiteboard.",
    category: "visual",
  },
  {
    id: "a80sTro071",
    title: "Mentor falder",
    description: "Heltens mentor mistes, og indsatsen stiger.",
    category: "subPlot",
  },
  {
    id: "a80sTro072",
    title: "Hævnmotivation",
    description: "Missionen bliver personlig efter et tab.",
    category: "mainPlot",
  },
  {
    id: "a80sTro073",
    title: "Dækningsild",
    description: "En allieret giver ilddække, så en anden kan rykke.",
    category: "visual",
  },
  {
    id: "a80sTro074",
    title: "\"Gå! Jeg holder dem tilbage!\"",
    description: "En ofringsreplik køber teamet få sekunder.",
    category: "quote",
  },
  {
    id: "a80sTro075",
    title: "Hemmeligt tvillinge-twist",
    description: "En overraskende tvilling komplicerer konflikten.",
    category: "mainPlot",
  },
  {
    id: "a80sTro076",
    title: "Jagten går tværs af landet",
    description: "Forfølgelsen spænder over flere byer eller stater.",
    category: "mainPlot",
  },
  {
    id: "a80sTro077",
    title: "Ferie går galt",
    description: "En ferie udvikler sig til en mission.",
    category: "subPlot",
  },
  {
    id: "a80sTro078",
    title: "Undercover i klub",
    description: "Helten blander sig i en larmende natklub.",
    category: "subPlot",
  },
  {
    id: "a80sTro079",
    title: "Kæmpe hår",
    description: "Stort hår og masser af styling fylder skærmen.",
    category: "visual",
  },
  {
    id: "a80sTro080",
    title: "Læderjakke",
    description: "En læderjakke er en fast del af heltens look.",
    category: "visual",
  },
  {
    id: "a80sTro081",
    title: "Solbriller om natten",
    description: "Solbriller bliver på, selv efter mørkets frembrud.",
    category: "visual",
  },
  {
    id: "a80sTro082",
    title: "Flag-positur",
    description: "En heroisk positur med et flag i baggrunden.",
    category: "visual",
  },
  {
    id: "a80sTro083",
    title: "Merchandise-nik",
    description: "Et øjeblik føles som et nik til legetøjslinjen.",
    category: "meta",
  },
  {
    id: "a80sTro084",
    title: "Teaser til efterfølger",
    description: "Slutningen antyder næste eventyr.",
    category: "meta",
  },
  {
    id: "a80sTro085",
    title: "Tema-sang-stik",
    description: "Et signaturtema dukker op på de afgørende tidspunkter.",
    category: "meta",
  }
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

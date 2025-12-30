import type { BingoGame } from "@/types/bingo-game-module";
import type { BingoSquare } from "@/types/bingo-square";

/**
 * Unique identifier for the Bingo Game
 */
const GameId = "en-nordicnoir-tv-tropes";

/**
 * Name of the Bingo Game
 */
const GameName = "🇬🇧🌧️ Nordic Noir Crime Bingo ❄️🇬🇧";

/**
 * Nordic Noir TV Tropes Bingo Squares.
 * These tropes are commonly found in Scandinavian crime dramas.
 * Each trope has a unique ID, title, description, and category.
 * Array of bingo squares without the 'marked' property.
 */
const GameSquares: Array<Omit<BingoSquare, "marked">> = [
  {
    id: "RoADbZgxcz",
    title: "Dreary Weather",
    description: "It's raining, snowing, or otherwise gloomy weather.",
    category: "visual",
  },
  {
    id: "K1TeyaIh2v",
    title: "The Flawed Detective",
    description:
      "The investigator struggles with alcohol, insomnia, divorce, or other personal demons.",
    category: "character",
  },
  {
    id: "fVOEz7uApy",
    title: "Shades of Grey Everywhere",
    description: "The colour palette is desaturated - everything is grey, blue, and bleak.",
    category: "visual",
  },
  {
    id: "VYQI3L1LsL",
    title: "The Body Discovery",
    description:
      "A body is found in a remote location - in the forest, on the beach, or in a lake.",
    category: "mainPlot",
  },
  {
    id: "eXTcsYZCWR",
    title: "The Iconic Jumper",
    description:
      "The protagonist wears a distinctive knitted jumper or wool sweater.",
    category: "visual",
  },
  {
    id: "IHsvzBR842",
    title: "Small Town Secrets",
    description:
      "A seemingly peaceful small town turns out to be hiding dark secrets.",
    category: "mainPlot",
  },
  {
    id: "my6wERZ2l8",
    title: "Broken Family Life",
    description:
      "The investigator's marriage or family relationships are falling apart.",
    category: "subPlot",
  },
  {
    id: "yUf43EhafQ",
    title: "The Murder Board",
    description:
      "A notice board with photos, threads, and notes connecting the victims.",
    category: "visual",
  },
  {
    id: "pFPv0IvV7V",
    title: "The City's Dark Side",
    description: "Copenhagen, Stockholm, or Oslo is shown from its darkest side.",
    category: "visual",
  },
  {
    id: "DNomuszgQj",
    title: "Nordic Silence",
    description: "Long pauses and minimal dialogue - people stare out of windows.",
    category: "visual",
  },
  {
    id: "7K6NxiiUDy",
    title: "Serial Killer on the Loose",
    description: "The murderer strikes again and again whilst the police hunt them.",
    category: "mainPlot",
  },
  {
    id: "Hn9UGLJuyj",
    title: "The Smoking Break",
    description: "The detective constantly takes smoking breaks - often in the rain.",
    category: "character",
  },
  {
    id: "6HM7caTscj",
    title: "The Autopsy Scene",
    description:
      "The forensic pathologist explains the cause of death in detail at the autopsy table.",
    category: "visual",
  },
  {
    id: "02g2w0AZ9u",
    title: "The Empty Bottle",
    description:
      "An empty whisky bottle or beer cans signal the detective's problems.",
    category: "visual",
  },
  {
    id: "k6dz1PtfhX",
    title: "The Bridge as Meeting Point",
    description: "An important scene takes place on a bridge - often the Øresund Bridge.",
    category: "visual",
  },
  {
    id: "Pr6GJHtwdU",
    title: "Political Corruption",
    description: "The case leads to powerful politicians or business leaders.",
    category: "mainPlot",
  },
  {
    id: "RQeiJSWm7L",
    title: "Female Lead Investigator",
    description: "A strong female investigator leads the case against all odds.",
    category: "character",
  },
  {
    id: "xG4LZiGo0P",
    title: "The Biker Gang",
    description: "Hells Angels or similar motorcycle gangs are involved.",
    category: "character",
  },
  {
    id: "jHcV1JueMj",
    title: "The Welfare State Facade",
    description:
      "The perfect Scandinavian welfare state hides dark truths.",
    category: "mainPlot",
  },
  {
    id: "SFUTJmP6Bc",
    title: "Intense Eye Contact",
    description: "Two characters maintain eye contact for an uncomfortably long time.",
    category: "visual",
  },
  {
    id: "MYM8eW4gwT",
    title: "Human Trafficking",
    description: "The case involves trafficking or modern slavery.",
    category: "mainPlot",
  },
  {
    id: "Flu3Vh2IsV",
    title: "Old Unsolved Case",
    description: "A cold case from the past resurfaces.",
    category: "mainPlot",
  },
  {
    id: "hlkGqeyDaX",
    title: "Isolated Location",
    description:
      "The action takes place on an island, a remote country estate, or a secluded town.",
    category: "visual",
  },
  {
    id: "stqvyK4T1k",
    title: "The Family's Secret",
    description: "A wealthy family is hiding a terrible truth.",
    category: "mainPlot",
  },
  {
    id: "XmjcCGvv8J",
    title: "Dark Night Scenes",
    description: "Most scenes take place in darkness or twilight.",
    category: "visual",
  },
  {
    id: "IqzCqYlGzG",
    title: "Minimalist Architecture",
    description: "Modern Scandinavian design - concrete floors and large windows.",
    category: "visual",
  },
  {
    id: "7bE2NzWdW8",
    title: "Russian Criminals",
    description: "The Russian mafia or Eastern European gangs are involved.",
    category: "character",
  },
  {
    id: "pkshkhyzf1",
    title: "Suicide or Murder?",
    description: "An apparent suicide turns out to be murder.",
    category: "mainPlot",
  },
  {
    id: "yaGCRgXSwL",
    title: "The Colleague with Secrets",
    description: "A colleague at the station is hiding something crucial.",
    category: "character",
  },
  {
    id: "brCAAsiRNJ",
    title: "Media Pressure",
    description:
      "The press puts pressure on the police and complicates the investigation.",
    category: "subPlot",
  },
  {
    id: "mLwrI3Evox",
    title: "Child as Victim",
    description: "A missing or murdered child drives the plot.",
    category: "mainPlot",
  },
  {
    id: "6MXbMlN8Dn",
    title: "Difficult Ex-Spouse",
    description: "The detective's ex-wife or ex-husband creates drama.",
    category: "subPlot",
  },
  {
    id: "X0bmorDRk8",
    title: "The Forest Scene",
    description: "An important scene takes place in a dark Scandinavian forest.",
    category: "visual",
  },
  {
    id: "aYaMT4Bfya",
    title: "Cross-Border Cooperation",
    description:
      "Danish-Swedish, Norwegian-Swedish, or other transnational police cooperation.",
    category: "mainPlot",
  },
  {
    id: "hJ9yAtjexv",
    title: "Traumatic Past",
    description: "The detective has a personal trauma that affects the case.",
    category: "character",
  },
  {
    id: "SW67qBqN7M",
    title: "Social Realism",
    description:
      "The series comments on social issues such as poverty or inequality.",
    category: "mainPlot",
  },
  {
    id: "b5KAmzdEku",
    title: "The Killer is an Acquaintance",
    description: "The murderer turns out to be someone close to the victim.",
    category: "mainPlot",
  },
  {
    id: "0wchOZRwQS",
    title: "The Silent Car Journey",
    description: "Two characters drive in a car without talking - just staring out.",
    category: "visual",
  },
  {
    id: "HrODZvkeo6",
    title: "Sleepless Nights",
    description: "The detective cannot sleep and wanders around at night.",
    category: "character",
  },
  {
    id: "y8Kop2L8Zy",
    title: "Childhood Trauma",
    description: "The case involves abuse or neglect from childhood.",
    category: "mainPlot",
  },
  {
    id: "gD36PLPlW3",
    title: "The Harbour Area",
    description: "Important scenes take place in industrial harbour areas.",
    category: "visual",
  },
  {
    id: "NwAkthkTOs",
    title: "The Absent Parent",
    description: "The detective neglects their child because of work.",
    category: "subPlot",
  },
  {
    id: "sJzqyhJBpY",
    title: "The Punk/Alternative Type",
    description:
      "A character with piercings, tattoos, and an alternative look is a key person.",
    category: "character",
  },
  {
    id: "xhsVI5STqR",
    title: "The Lisbeth Salander Type",
    description:
      "A socially awkward but brilliant female hacker or outsider.",
    category: "character",
  },
  {
    id: "7wcZkVg22J",
    title: "Overheard Conversation",
    description: "Important information is overheard by chance.",
    category: "subPlot",
  },
  {
    id: "AUDm7McD0v",
    title: "Chase Scene in the Snow",
    description: "A pursuit through a snow-covered landscape.",
    category: "visual",
  },
  {
    id: "dZNSHzpDzU",
    title: "Immigrant Angle",
    description: "The case involves refugees or immigrant communities.",
    category: "mainPlot",
  },
  {
    id: "4NGEvPyUXt",
    title: "Conflict with the Boss",
    description: "The detective disagrees with their superior about the approach.",
    category: "subPlot",
  },
  {
    id: "OK6lkQZl2w",
    title: "The Lonely Meal",
    description: "The detective eats alone - often ready meals or rye bread.",
    category: "visual",
  },
  {
    id: "Rt0Bs1oavl",
    title: "The Graveyard Scene",
    description:
      "An important conversation or revelation takes place in a graveyard.",
    category: "visual",
  },
  {
    id: "MnFZnaOnOa",
    title: "The Fishing Industry",
    description: "The case involves fishermen, harbours, or fishing communities.",
    category: "mainPlot",
  },
  {
    id: "SK13q8UILl",
    title: "Alcoholism",
    description: "A main character openly struggles with alcohol abuse.",
    category: "character",
  },
  {
    id: "zeOadEHxuV",
    title: "The Homicide Department",
    description:
      "Scenes from the worn police office with coffee and paperwork.",
    category: "visual",
  },
  {
    id: "k3t7uPhnaf",
    title: "The Obvious Suspect",
    description: "A person seems guilty but turns out to be innocent.",
    category: "mainPlot",
  },
  {
    id: "wG4OBK6S0n",
    title: "The Terror Threat",
    description: "The case has connections to terrorism or extremism.",
    category: "mainPlot",
  },
  {
    id: "AVEbXFmyIN",
    title: "The Tower Block",
    description: "Scenes take place in grey concrete buildings from the 60s and 70s.",
    category: "visual",
  },
  {
    id: "JRqR6FU69H",
    title: "Staring Out of the Window",
    description: "A character stares thoughtfully out of a window for a long time.",
    category: "visual",
  },
  {
    id: "N9uBUnLqgj",
    title: "The Anonymous Tip",
    description: "An anonymous call or letter sets the investigation in motion.",
    category: "subPlot",
  },
  {
    id: "BlNKOsWKAZ",
    title: "Mental Illness",
    description:
      "A character suffers from depression, PTSD, or another mental illness.",
    category: "character",
  },
  {
    id: "XWjsM3x4Xo",
    title: "Cold War Connection",
    description: "The case has roots back to the Cold War or the Soviet era.",
    category: "mainPlot",
  },
  {
    id: "4O6BWsxp5f",
    title: "Informing the Next of Kin",
    description: "The detective must tell a family the tragic news.",
    category: "visual",
  },
  {
    id: "56LzgEoWdd",
    title: "The Investigative Journalist",
    description: "A journalist investigates the case in parallel with the police.",
    category: "character",
  },
  {
    id: "fMzIP0kOc7",
    title: "The Profiler",
    description: "A psychologist or profiler helps to understand the killer.",
    category: "character",
  },
  {
    id: "zRA2ZKYuhl",
    title: "The Fjord Landscape",
    description: "Dramatic scenes featuring Norwegian fjords or Swedish archipelago.",
    category: "visual",
  },
  {
    id: "L8kJcUWl0D",
    title: "The Revenge Motive",
    description: "The murderer acts from an old desire for revenge.",
    category: "mainPlot",
  },
  {
    id: "sZ6SUL2wys",
    title: "The Lighthouse",
    description: "A lighthouse or an island plays a central role.",
    category: "visual",
  },
  {
    id: "j4sX9YeucP",
    title: "The Ferry",
    description: "A ferry is used for escape or as a meeting place.",
    category: "visual",
  },
  {
    id: "naHnTN2Hrl",
    title: "The Border Area",
    description:
      "The action takes place at a national border with jurisdictional issues.",
    category: "mainPlot",
  },
  {
    id: "alN5DvjysG",
    title: "The Drug Connection",
    description: "The case involves drug trafficking or smuggling.",
    category: "mainPlot",
  },
  {
    id: "m48JzsNv9e",
    title: "The Wiretap",
    description: "The police are wiretapped or illegally wiretap others.",
    category: "subPlot",
  },
  {
    id: "8GhY0BfDW5",
    title: "The Abandoned Factory",
    description:
      "An important scene takes place in a deserted factory or industrial building.",
    category: "visual",
  },
  {
    id: "qUhN8Nx91l",
    title: "Ritualistic Murder",
    description:
      "The murderer leaves symbols or arranges the bodies ritualistically.",
    category: "mainPlot",
  },
  {
    id: "oFYqzBSmYG",
    title: "The Rookie Officer",
    description:
      "A young, idealistic officer challenges the experienced detective's methods.",
    category: "character",
  },
  {
    id: "tw9gHHt8MI",
    title: "The Intense Interrogation",
    description: "A long interrogation scene where the truth is slowly revealed.",
    category: "visual",
  },
  {
    id: "RjQjt7HVKM",
    title: "Vigilante Justice",
    description: "A character takes the law into their own hands.",
    category: "mainPlot",
  },
  {
    id: "dFyJsl6mdi",
    title: "Environmental Crimes",
    description:
      "The case involves environmental crime or a corrupt corporation.",
    category: "mainPlot",
  },
  {
    id: "I1UXPTB69f",
    title: "The Paedophile Ring",
    description: "The case reveals a network of child abuse.",
    category: "mainPlot",
  },
  {
    id: "ZQYNEKwiWB",
    title: "The Sauna",
    description: "A scene takes place in a sauna - typically a Finnish setting.",
    category: "visual",
  },
  {
    id: "Bhv7SlNP5S",
    title: "The Secret Affair",
    description: "An affair is revealed and complicates the case.",
    category: "subPlot",
  },
  {
    id: "6eo7nXNih1",
    title: "Cybercrime",
    description:
      "The case involves hacking, the dark web, or digital crime.",
    category: "mainPlot",
  },
  {
    id: "KkCAXwB0Uj",
    title: "The Child Who Saw Something",
    description: "A child witnesses the crime but cannot explain themselves.",
    category: "subPlot",
  },
  {
    id: "nLHtqW23oU",
    title: "The Hospital Visit",
    description: "An important conversation takes place at a hospital with a victim.",
    category: "visual",
  },
  {
    id: "ozH6Q4pvVN",
    title: "The Code Name",
    description: "The operation is given a dramatic code name.",
    category: "subPlot",
  },
  {
    id: "0NSz5wihIC",
    title: "The Open Ending",
    description: "The series ends without all loose ends being tied up.",
    category: "meta",
  },
  {
    id: "ddlUndpAVf",
    title: "The Institution",
    description:
      "The case leads to a children's home, hospital, or care home with a dark past.",
    category: "mainPlot",
  },
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

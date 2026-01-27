import type { BingoGame } from "@/types/bingo-game-module";
import type { BingoSquare } from "@/types/bingo-square";

/**
 * Unique identifier for the Bingo Game
 */
const GameId = "en-80s-action-tv-tropes";

/**
 * Name of the Bingo Game
 */
const GameName = "🇺🇸💥 80s Action 🚓🇺🇸";

/**
 * 80s Action TV Tropes Bingo Squares.
 * These tropes are commonly found in 1980s action television shows and movies.
 * Each trope has a unique ID, title, description, and category.
 * Array of bingo squares without the 'marked' property.
 */
const GameSquares: Array<Omit<BingoSquare, "marked">> = [
  {
    id: "a80sTro001",
    title: "Stoic Hero",
    description:
      "The main protagonist rarely shows emotion, staying calm even under extreme pressure.",
    category: "character",
  },
  {
    id: "a80sTro002",
    title: "Wisecracking Partner",
    description: "The sidekick keeps jokes flying even when danger is close.",
    category: "character",
  },
  {
    id: "a80sTro003",
    title: "Post-Punch One-Liner",
    description: "A quip lands right after the bad guy hits the floor.",
    category: "quote",
  },
  {
    id: "a80sTro004",
    title: "Training Montage",
    description: "Quick cuts show the hero leveling up through drills and sweat.",
    category: "visual",
  },
  {
    id: "a80sTro005",
    title: "Neon Night Streets",
    description: "The city glows with neon signs and wet asphalt.",
    category: "visual",
  },
  {
    id: "a80sTro006",
    title: "Explosion Walkaway",
    description: "The hero does not look back as something huge detonates.",
    category: "visual",
  },
  {
    id: "a80sTro007",
    title: "Muscle Car Chase",
    description: "A roaring car chase tears through streets or highways.",
    category: "visual",
  },
  {
    id: "a80sTro008",
    title: "Alley Sprint",
    description: "Someone bolts through tight alleys with bins flying.",
    category: "visual",
  },
  {
    id: "a80sTro009",
    title: "Helicopter Spotlight",
    description: "A chopper sweeps a bright searchlight over fleeing suspects.",
    category: "visual",
  },
  {
    id: "a80sTro010",
    title: "Warehouse Showdown",
    description: "The final fight goes down in a cavernous warehouse.",
    category: "mainPlot",
  },
  {
    id: "a80sTro011",
    title: "Rooftop Leap",
    description: "A risky jump between rooftops decides the chase.",
    category: "visual",
  },
  {
    id: "a80sTro012",
    title: "Bus Hanging Stunt",
    description: "A character clings to the outside of a moving bus.",
    category: "visual",
  },
  {
    id: "a80sTro013",
    title: "Dockside Finale",
    description: "The climax shifts to the docks with crates and cranes.",
    category: "mainPlot",
  },
  {
    id: "a80sTro014",
    title: "Foreign Mastermind",
    description: "The villain is an icy outsider with a distinct accent.",
    category: "character",
  },
  {
    id: "a80sTro015",
    title: "Corrupt Authority",
    description: "A high-ranking official secretly protects the bad guys.",
    category: "mainPlot",
  },
  {
    id: "a80sTro016",
    title: "Partner Near Retirement",
    description: "The veteran partner is days from retirement when trouble hits.",
    category: "subPlot",
  },
  {
    id: "a80sTro017",
    title: "Family in Peril",
    description: "Loved ones are threatened to force the hero's hand.",
    category: "subPlot",
  },
  {
    id: "a80sTro018",
    title: "Hostage Rescue",
    description: "Civilians are trapped, raising the stakes for the showdown.",
    category: "mainPlot",
  },
  {
    id: "a80sTro019",
    title: "Countdown Timer",
    description: "A ticking clock pushes everyone toward a deadline.",
    category: "mainPlot",
  },
  {
    id: "a80sTro020",
    title: "Power Cut Tension",
    description: "Lights die and the action shifts to shadows and silhouettes.",
    category: "visual",
  },
  {
    id: "a80sTro021",
    title: "Rules Be Damned",
    description: "The hero ignores protocol to get results.",
    category: "character",
  },
  {
    id: "a80sTro022",
    title: "Lone Wolf Cop",
    description: "A solo operator distrusts teams and runs the case alone.",
    category: "character",
  },
  {
    id: "a80sTro023",
    title: "Task Force Assembles",
    description: "A rough-and-ready unit is formed for the mission.",
    category: "mainPlot",
  },
  {
    id: "a80sTro024",
    title: "Rival Turned Ally",
    description: "A competitor becomes an unexpected partner.",
    category: "subPlot",
  },
  {
    id: "a80sTro025",
    title: "Betrayal Inside",
    description: "Someone in the unit is leaking intel.",
    category: "subPlot",
  },
  {
    id: "a80sTro026",
    title: "Gadget Van",
    description: "A rolling command van reveals surprising tech.",
    category: "visual",
  },
  {
    id: "a80sTro027",
    title: "Street Informant",
    description: "An informant trades tips for cash or favors.",
    category: "character",
  },
  {
    id: "a80sTro028",
    title: "Villain's Lair",
    description: "The bad guys operate from a heavily guarded hideout.",
    category: "visual",
  },
  {
    id: "a80sTro029",
    title: "Endless Ammo",
    description: "The hero fires without ever reloading.",
    category: "meta",
  },
  {
    id: "a80sTro030",
    title: "One vs. Army",
    description: "A single hero takes on a small army of henchmen.",
    category: "mainPlot",
  },
  {
    id: "a80sTro031",
    title: "Last-Minute Save",
    description: "Rescue happens at the very final second.",
    category: "mainPlot",
  },
  {
    id: "a80sTro032",
    title: "Indestructible Car",
    description: "The hero's vehicle survives impacts that should end it.",
    category: "visual",
  },
  {
    id: "a80sTro033",
    title: "Slow-Motion Dive",
    description: "A dramatic leap plays out in slow motion.",
    category: "visual",
  },
  {
    id: "a80sTro034",
    title: "Glass Everywhere",
    description: "Windows shatter in spectacular fashion.",
    category: "visual",
  },
  {
    id: "a80sTro035",
    title: "Hood Slide",
    description: "The hero slides across a car hood while drawing a weapon.",
    category: "visual",
  },
  {
    id: "a80sTro036",
    title: "Trench Coat Lead",
    description: "A long coat flaps as the lead stalks crime scenes.",
    category: "visual",
  },
  {
    id: "a80sTro037",
    title: "Furious Police Chief",
    description: "The boss chews out the hero in a loud office rant.",
    category: "character",
  },
  {
    id: "a80sTro038",
    title: "\"You're off the case!\"",
    description: "A superior benches the hero, who keeps investigating anyway.",
    category: "quote",
  },
  {
    id: "a80sTro039",
    title: "Newspaper Exposition",
    description: "A headline or clipping delivers key information.",
    category: "visual",
  },
  {
    id: "a80sTro040",
    title: "Synth-Heavy Score",
    description: "Pulsing synthesizers drive the action.",
    category: "meta",
  },
  {
    id: "a80sTro041",
    title: "Freeze-Frame Ending",
    description: "The final shot freezes on a heroic pose.",
    category: "meta",
  },
  {
    id: "a80sTro042",
    title: "Headband Hero",
    description: "A headband becomes part of the hero's combat uniform.",
    category: "visual",
  },
  {
    id: "a80sTro043",
    title: "Henchmen in Suits",
    description: "The bad guys wear matching suits and dark shades.",
    category: "character",
  },
  {
    id: "a80sTro044",
    title: "Tough Female Fighter",
    description: "A capable woman holds her own in the action.",
    category: "character",
  },
  {
    id: "a80sTro045",
    title: "Buddy-Cop Banter",
    description: "The leads trade jokes and complaints mid-mission.",
    category: "quote",
  },
  {
    id: "a80sTro046",
    title: "Bar Brawl",
    description: "A fight erupts in a crowded bar.",
    category: "visual",
  },
  {
    id: "a80sTro047",
    title: "Motorbike Jump",
    description: "A bike launch clears a gap or barricade.",
    category: "visual",
  },
  {
    id: "a80sTro048",
    title: "Explosive Barrels",
    description: "Red barrels conveniently explode on impact.",
    category: "visual",
  },
  {
    id: "a80sTro049",
    title: "Shotgun Pump",
    description: "A loud cocking of the shotgun signals trouble.",
    category: "visual",
  },
  {
    id: "a80sTro050",
    title: "Secret Base Blueprint",
    description: "A schematic reveals the villain's layout.",
    category: "visual",
  },
  {
    id: "a80sTro051",
    title: "Kid Tech Whiz",
    description: "A young hacker solves a problem with a quick hack.",
    category: "character",
  },
  {
    id: "a80sTro052",
    title: "News Reporter Recap",
    description: "A TV report summarizes the chaos.",
    category: "visual",
  },
  {
    id: "a80sTro053",
    title: "Big Red Button",
    description: "Someone hovers over a large, ominous button.",
    category: "visual",
  },
  {
    id: "a80sTro054",
    title: "Warehouse Interrogation",
    description: "Questioning happens under a swinging light.",
    category: "visual",
  },
  {
    id: "a80sTro055",
    title: "Car Phone Call",
    description: "Important intel arrives via a brick-sized car phone.",
    category: "visual",
  },
  {
    id: "a80sTro056",
    title: "Walkie Static",
    description: "The radio crackles at the worst moment.",
    category: "visual",
  },
  {
    id: "a80sTro057",
    title: "Villainous Laugh",
    description: "The bad guy laughs as the plan unfolds.",
    category: "quote",
  },
  {
    id: "a80sTro058",
    title: "Hero's Code",
    description: "The lead refuses to cross a personal line.",
    category: "character",
  },
  {
    id: "a80sTro059",
    title: "\"Just this once\"",
    description: "A promise to bend the rules is made aloud.",
    category: "quote",
  },
  {
    id: "a80sTro060",
    title: "Airport Finale",
    description: "The climax races through an airport or hangar.",
    category: "mainPlot",
  },
  {
    id: "a80sTro061",
    title: "Train Fight",
    description: "A fight breaks out on a moving train.",
    category: "mainPlot",
  },
  {
    id: "a80sTro062",
    title: "Armoury Loadout",
    description: "Weapons and gear are laid out before the mission.",
    category: "visual",
  },
  {
    id: "a80sTro063",
    title: "War Flashback",
    description: "A past conflict resurfaces in memory.",
    category: "subPlot",
  },
  {
    id: "a80sTro064",
    title: "Tattooed Thug",
    description: "A heavy with bold tattoos signals danger.",
    category: "character",
  },
  {
    id: "a80sTro065",
    title: "Disposable Henchmen",
    description: "Bad guys drop fast so the hero can keep moving.",
    category: "meta",
  },
  {
    id: "a80sTro066",
    title: "Tie Adjustment",
    description: "The hero straightens their tie before or after the brawl.",
    category: "visual",
  },
  {
    id: "a80sTro067",
    title: "Ripped Shirt",
    description: "A torn shirt reveals the hero's battle damage.",
    category: "visual",
  },
  {
    id: "a80sTro068",
    title: "Tiny Sparks, Big Boom",
    description: "A few sparks trigger an oversized explosion.",
    category: "meta",
  },
  {
    id: "a80sTro069",
    title: "Rain-Soaked Finale",
    description: "The final fight happens in heavy rain.",
    category: "visual",
  },
  {
    id: "a80sTro070",
    title: "Plan on Whiteboard",
    description: "A marker-drawn plan explains the operation.",
    category: "visual",
  },
  {
    id: "a80sTro071",
    title: "Mentor Falls",
    description: "The hero's mentor is lost, raising the stakes.",
    category: "subPlot",
  },
  {
    id: "a80sTro072",
    title: "Revenge Drive",
    description: "The mission turns personal after a loss.",
    category: "mainPlot",
  },
  {
    id: "a80sTro073",
    title: "Covering Fire",
    description: "One ally lays down fire so another can move.",
    category: "visual",
  },
  {
    id: "a80sTro074",
    title: "\"Go! I'll hold them!\"",
    description: "A sacrifice line buys the team a few seconds.",
    category: "quote",
  },
  {
    id: "a80sTro075",
    title: "Secret Twin Reveal",
    description: "A surprise twin complicates the conflict.",
    category: "mainPlot",
  },
  {
    id: "a80sTro076",
    title: "Cross-Country Chase",
    description: "The pursuit spans multiple cities or states.",
    category: "mainPlot",
  },
  {
    id: "a80sTro077",
    title: "Vacation Gone Wrong",
    description: "A getaway turns into a mission.",
    category: "subPlot",
  },
  {
    id: "a80sTro078",
    title: "Undercover at the Club",
    description: "The hero blends in at a loud nightclub.",
    category: "subPlot",
  },
  {
    id: "a80sTro079",
    title: "Big Hair",
    description: "Huge hair and strong hold styles fill the screen.",
    category: "visual",
  },
  {
    id: "a80sTro080",
    title: "Leather Jacket",
    description: "A leather jacket is part of the hero's look.",
    category: "visual",
  },
  {
    id: "a80sTro081",
    title: "Sunglasses at Night",
    description: "Shades stay on even after dark.",
    category: "visual",
  },
  {
    id: "a80sTro082",
    title: "Flag Pose",
    description: "A heroic pose lands with a flag in the background.",
    category: "visual",
  },
  {
    id: "a80sTro083",
    title: "Toy-Line Wink",
    description: "A moment plays like a nod to merchandising.",
    category: "meta",
  },
  {
    id: "a80sTro084",
    title: "Sequel Tease",
    description: "The ending hints at the next adventure.",
    category: "meta",
  },
  {
    id: "a80sTro085",
    title: "Theme Song Sting",
    description: "A signature theme kicks in at key moments.",
    category: "meta",
  }
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

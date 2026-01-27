import type { BingoGame } from "@/types/bingo-game-module";
import type { BingoSquare } from "@/types/bingo-square";

/**
 * Unique identifier for the Bingo Game
 */
const GameId = "en-xmas-tv-tropes";

/**
 * Name of the Bingo Game
 */
const GameName = "🇬🇧🎄 Hallmark Christmas Movie 🎄🇬🇧";

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
    title: "The Local Handyman",
    description:
      "A down-to-earth, helpful type who fixes everything - including the protagonist's heart.",
    category: "character",
  },
  {
    id: "j2myDZerZh",
    title: "Career vs. Love",
    description:
      "A big job offer clashes with budding romance in a small town.",
    category: "mainPlot",
  },
  {
    id: "T7H7XGUvjG",
    title: "Slow-Motion Snowball Fight",
    description: "A flirty snowball fight ends in laughter and eye contact.",
    category: "visual",
  },
  {
    id: "jillJs4tTc",
    title: "Widower with Christmas Trauma",
    description: "A widower who has lost his Christmas spirit finds hope again.",
    category: "character",
  },
  {
    id: "UCBLG0dlD5",
    title: "The Inn in Trouble",
    description:
      "An old inn is about to close, and the couple must save it before Christmas.",
    category: "mainPlot",
  },
  {
    id: "zzdoIRKtVF",
    title: "Kiss in Front of the Town Tree",
    description: "A pivotal kiss in front of the lit Christmas tree.",
    category: "visual",
  },
  {
    id: "q5gtADVZ0c",
    title: "Overheard Conversation",
    description:
      "A misunderstanding occurs when a character only hears half of a sentence.",
    category: "subPlot",
  },
  {
    id: "wGz6zWBais",
    title: "Father Christmas in Disguise",
    description: "A mysterious elderly man turns out to be Father Christmas himself.",
    category: "character",
  },
  {
    id: "bV2EkCsEBl",
    title: "City Boss in the Countryside",
    description:
      "A strict boss is sent to a small town - and softens up from the Christmas spirit.",
    category: "character",
  },
  {
    id: "0J33hAchFJ",
    title: "Reluctant Partners",
    description: "Two people who can't get along are forced to work together.",
    category: "mainPlot",
  },
  {
    id: "8nvZjQPGfs",
    title: "Meaningful Snowman",
    description: "They build a snowman that turns out to have sentimental value.",
    category: "visual",
  },
  {
    id: "60EXGHz3te",
    title: "\"It feels like home\"",
    description: "A classic line that marks a romantic breakthrough.",
    category: "quote",
  },
  {
    id: "H6zm0cklbt",
    title: "The Big-Hearted Shop Owner",
    description: "A small shop contains both Christmas magic and a potential partner.",
    category: "character",
  },
  {
    id: "fZyBEqOher",
    title: "Baking as Bonding",
    description: "A romantic moment arises amidst chaotic biscuit baking.",
    category: "visual",
  },
  {
    id: "OZT61wjqDG",
    title: "The Magical Grandmother",
    description:
      "An elderly relative orchestrates love without admitting it.",
    category: "character",
  },
  {
    id: "zwFuvptwXX",
    title: "The Tree Lighting Ceremony",
    description: "A big event where love emerges or is acknowledged.",
    category: "visual",
  },
  {
    id: "9MaOQKHkTA",
    title: "Journalist on Christmas Assignment",
    description:
      "A journalist is reluctantly sent to a small town to write an article.",
    category: "character",
  },
  {
    id: "kh2g23ot86",
    title: "\"I used to love Christmas...\"",
    description: "A melancholy line that reveals vulnerability.",
    category: "quote",
  },
  {
    id: "kDADEGxDDS",
    title: "Christmas Card with Secret Sender",
    description: "A mysterious Christmas card brings two people together.",
    category: "subPlot",
  },
  {
    id: "oeZwjzdnjl",
    title: "\"Where are your gloves?\"",
    description: "Care disguised as flirtation.",
    category: "quote",
  },
  {
    id: "WKtkPBe5cs",
    title: "The Coffee Shop Owner",
    description: "A charming, calm type who makes the world's best hot chocolate.",
    category: "character",
  },
  {
    id: "6XAx9MKg9b",
    title: "The Sleigh Ride",
    description: "A romantic sleigh ride with blankets and nervous laughter.",
    category: "visual",
  },
  {
    id: "xn1MuMLZSu",
    title: "\"I just don't believe in miracles\"",
    description: "The character's last defence before Christmas magic changes everything.",
    category: "quote",
  },
  {
    id: "RFhHnPpiqF",
    title: "Pet Brings Them Together",
    description: "A lost or adopted animal creates the meeting.",
    category: "subPlot",
  },
  {
    id: "uhSo3OKec3",
    title: "Snowflakes in the Hair",
    description: "The camera zooms in on snowflakes melting in the hair.",
    category: "visual",
  },
  {
    id: "oB17OSHaSm",
    title: "Last-Minute Project",
    description: "A project must be saved before Christmas, and the couple works together.",
    category: "mainPlot",
  },
  {
    id: "Cm6XaDw9Pc",
    title: "The Wrong Partner",
    description: "A partner who is clearly not 'the one'.",
    category: "character",
  },
  {
    id: "n05iF3gHUj",
    title: "\"You look different here\"",
    description: "A line from an old classmate.",
    category: "quote",
  },
  {
    id: "umASBxAIlT",
    title: "The Whole Town Cheers",
    description: "The local community acts as matchmaker.",
    category: "character",
  },
  {
    id: "icee6RoysE",
    title: "Perfectly Decorated Home",
    description: "A Christmas-decorated house that is unrealistically beautiful.",
    category: "visual",
  },
  {
    id: "j6MPCFeSWU",
    title: "Old Decoration with History",
    description: "An ornament revives childhood memories.",
    category: "visual",
  },
  {
    id: "Ot62uvaPbb",
    title: "\"Christmas is about traditions\"",
    description: "Moralising Christmas quote from a mentor.",
    category: "quote",
  },
  {
    id: "QjxZM9aX8f",
    title: "Charity Project",
    description: "The couple meets as volunteers at a Christmas event.",
    category: "subPlot",
  },
  {
    id: "R4pgDEDojy",
    title: "The Uninspired Chef",
    description:
      "A baker or chef who needs to rediscover their spark - and love.",
    category: "character",
  },
  {
    id: "6FJzdzReHT",
    title: "The Anti-Christmas Boss",
    description: "A boss who creates conflicts due to their hatred of Christmas.",
    category: "character",
  },
  {
    id: "Dh7thtkc7t",
    title: "Christmas Tree Topples Over",
    description: "A comical moment when the tree tips over.",
    category: "visual",
  },
  {
    id: "OIR6Ukq5M2",
    title: "The Little Shop Saves Christmas",
    description: "A local shop has the solution to Christmas's problem.",
    category: "mainPlot",
  },
  {
    id: "5dF9EoRd1V",
    title: "Deadline on 24th December",
    description: "Something important must be finished before Christmas Eve.",
    category: "mainPlot",
  },
  {
    id: "XftpOzs1Lq",
    title: "Local Artist",
    description: "A creative person connects art and love.",
    category: "character",
  },
  {
    id: "LBG2hrimE7",
    title: "Competition Chaos",
    description: "Something goes wrong in a competition and creates physical comedy.",
    category: "visual",
  },
  {
    id: "MWwfHOWWwY",
    title: "\"This wasn't the plan\"",
    description: "Line at the turning point.",
    category: "quote",
  },
  {
    id: "qZUcIvzjXC",
    title: "The Ice Skating Scene",
    description: "A fall on the ice leads to tender romance.",
    category: "visual",
  },
  {
    id: "4N7n6A7ZDM",
    title: "City-Weary Protagonist",
    description: "A person escapes from the stress of the city to a small town.",
    category: "character",
  },
  {
    id: "UQwWpoI3vY",
    title: "Overeager Friend",
    description: "A friend arranges romantic moments behind the scenes.",
    category: "character",
  },
  {
    id: "wz5pu39NzF",
    title: "Magical Time Travel",
    description: "A Christmas wish takes the character to an alternative reality.",
    category: "mainPlot",
  },
  {
    id: "NKMoG2I1Tc",
    title: "A New Family",
    description: "Characters find a 'family' in the local community.",
    category: "subPlot",
  },
  {
    id: "iRm4YcSlRh",
    title: "\"Follow your heart\"",
    description: "The mentor's go-to Christmas advice.",
    category: "quote",
  },
  {
    id: "NpFArqmDnj",
    title: "Christmas Market",
    description: "Romance amongst stalls and lights.",
    category: "visual",
  },
  {
    id: "c8y702ixRC",
    title: "The Paper Heart",
    description: "Homemade decoration takes on sentimental meaning.",
    category: "visual",
  },
  {
    id: "eJbOUJ1Mgw",
    title: "Cancelled Trip",
    description: "A cancelled trip creates new opportunities.",
    category: "subPlot",
  },
  {
    id: "Ju7Cln3tTD",
    title: "Hidden Identity",
    description: "A character hides their background or status.",
    category: "mainPlot",
  },
  {
    id: "GTg4GhNfsb",
    title: "Choir Performance",
    description: "An emotional scene at the Christmas show.",
    category: "visual",
  },
  {
    id: "hJqEtC5TnF",
    title: "\"I feel like I've known you forever\"",
    description: "A fateful moment.",
    category: "quote",
  },
  {
    id: "RsRifes2LY",
    title: "The Perfect but Boring Man",
    description: "A flawless but sparkless suitor.",
    category: "character",
  },
  {
    id: "bs3d121LVo",
    title: "Unexpected Guest",
    description: "A person turns up on Christmas Eve and turns everything upside down.",
    category: "subPlot",
  },
  {
    id: "osUZfe8vI1",
    title: "Christmas Magic at Midnight",
    description: "Something supernatural happens right at midnight.",
    category: "visual",
  },
  {
    id: "LMa3W7Cu4j",
    title: "Surprise Party",
    description: "A secret Christmas party is planned.",
    category: "subPlot",
  },
  {
    id: "KYnztPpq0o",
    title: "World-Class Gingerbread House",
    description: "An extravagant gingerbread house surprises everyone.",
    category: "visual",
  },
  {
    id: "JVD14DxTHy",
    title: "\"You're not who I thought you were\"",
    description: "Line at the height of the conflict.",
    category: "quote",
  },
  {
    id: "bq7aQcMGAv",
    title: "The Stubborn Local",
    description: "A strong local person refuses to give up.",
    category: "character",
  },
  {
    id: "F3hikxZAG5",
    title: "Christmas Gala",
    description:
      "A charity gala becomes the dramatic and romantic climax.",
    category: "mainPlot",
  },
  {
    id: "E4LSzayxCg",
    title: "Fireworks in the Snow",
    description: "Finale with lights and snow.",
    category: "visual",
  },
  {
    id: "iU4Osiz2bD",
    title: "\"I can't lose you again\"",
    description: "Line before reconciliation.",
    category: "quote",
  },
  {
    id: "icwBNnI7p4",
    title: "Ruined Plans",
    description: "A holiday plan falls apart and changes direction.",
    category: "subPlot",
  },
  {
    id: "sU0cvGMk2X",
    title: "Mixed-Up Gifts",
    description: "Presents get swapped and bring characters together.",
    category: "subPlot",
  },
  {
    id: "D58am6L0J2",
    title: "TV Interview Goes Wrong",
    description: "An interview ends in chaos and romance.",
    category: "subPlot",
  },
  {
    id: "Ih1rdMQGKL",
    title: "\"I didn't believe in love before you\"",
    description: "Finale line.",
    category: "quote",
  },
  {
    id: "HhgN8MOzF0",
    title: "Secret Admirer",
    description: "A flirtation begins with secret messages.",
    category: "subPlot",
  },
  {
    id: "wIpUqImuGS",
    title: "Revelation of a Secret",
    description: "A moment of truth creates drama before the happy ending.",
    category: "mainPlot",
  },
  {
    id: "97C0pDwF3o",
    title: "Local Christmas Traditions",
    description: "A tradition unites the couple.",
    category: "visual",
  },
  {
    id: "rypT1q4Q4P",
    title: "Shopping Centre Christmas Chaos",
    description: "A scene in an over-decorated shopping centre.",
    category: "visual",
  },
  {
    id: "7ShuDtFEBd",
    title: "Overexposed Lighting",
    description: "Christmas lights so bright you have to squint.",
    category: "meta",
  },
  {
    id: "qFGVtMDwER",
    title: "Filmed in Canada",
    description: "Architecture and nature reveal the Vancouver area.",
    category: "meta",
  },
  {
    id: "XYWAy91G5j",
    title: "Foam Snow Effect",
    description: "Snow that looks like soap foam.",
    category: "meta",
  },
  {
    id: "BIxayBHElB",
    title: "The Man Never Gets Cold",
    description: "A man without a hat or jacket never freezes in the snow.",
    category: "meta",
  },
  {
    id: "wpPtzUKeJP",
    title: "Prop Recycling",
    description: "You recognise props from other films.",
    category: "meta",
  },
  {
    id: "lpJpGRH3AR",
    title: "\"It must be fate\"",
    description: "A sentence that explains coincidences.",
    category: "quote",
  },
  {
    id: "1HB8TiNeOi",
    title: "Parallel Love Story",
    description: "A side character also finds love.",
    category: "subPlot",
  },
  {
    id: "LmnjjTE0Fg",
    title: "Surprisingly Good Singing Voice",
    description: "A character sings surprisingly well.",
    category: "visual",
  },
  {
    id: "8fyTTyrhNy",
    title: "Proposal from the Wrong Person",
    description: "Someone gets proposed to by the wrong person.",
    category: "subPlot",
  },
  {
    id: "nbwLuedz3M",
    title: "Final Kiss in the Snow",
    description: "The film ends with a kiss in the falling snow.",
    category: "visual",
  },
  {
    id: "Dt6eS692jf",
    title: "The Christmas Mayor",
    description: "An extremely Christmas-loving mayor runs the town.",
    category: "character",
  },
  {
    id: "bLvP9pyqli",
    title: "Decorating Ladder Accident",
    description: "Someone falls off a ladder whilst decorating.",
    category: "visual",
  },
  {
    id: "qVtaFKdtR5",
    title: "\"Christmas connects us all\"",
    description: "Cliché-filled closing line.",
    category: "quote",
  },
  {
    id: "NzhgHB6uNf",
    title: "The Christmas Uniform",
    description: "Everyone in town wears perfectly colour-coordinated winter clothes.",
    category: "visual",
  },
];

export const GameModule: BingoGame = {
  GameId,
  GameName,
  GameSquares,
};

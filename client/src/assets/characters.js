const characterList = [
  {
    id: 1,
    name: "Mario",
    style: "All-Rounder",
    franchise: "Mario",
    url: "https://mario.wiki.gallery/images/thumb/3/3e/Mario_SSBUltimate.png/111px-Mario_SSBUltimate.png",
    move: "https://ultimateframedata.com/hitboxes/mario/MarioBAir.gif",
    moveName: "Back Aerial",
    synopsis: "Mario's greatest asset is his effective frame data; most of his moves have little startup lag and have relatively low end lag. This results in Mario being fairly difficult to punish relative to most of the cast. His combo game is quite flexible, as Mario can rack up damage quickly and reliably, most notoriously with his Up Aerial ladders. He can also zone with his Neutral Special (fireball) and use his Back Aerial to apply safe pressure. Mario's weaknesses include having short range and very specific K.O. options."
  },
  {
    id: 2,
    name: "Donkey Kong",
    style: "Bait and Punish",
    franchise: "Mario",
    url: "https://mario.wiki.gallery/images/thumb/7/7e/DonkeyKong_SSBU.png/120px-DonkeyKong_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/donkey_kong/DonkeyKongBAir.gif",
    moveName: "Back Aerial",
    synopsis: "Donkey Kong one of the fastest heavy characters in the game, but is surprisingly quick despite this advantage. His greatest asset is his amazing Grab game, as well as large hitboxes that can wall out opponents. Donkey Kong's greatest weakness is his generally exploitable recovery, as well as his large hurtbox that makes his disadvantage state very difficult."
  },
  {
    id: 3,
    name: "Link",
    style: "Zoner",
    franchise: "Zelda",
    url: "https://mario.wiki.gallery/images/thumb/5/5e/LinkSSBU.png/120px-LinkSSBU.png",
    move: "https://ultimateframedata.com/hitboxes/link/LinkNAir.gif",
    moveName: "Neutral Aerial",
    synopsis: "Link's greatest strength lies in his zoning abilities. His slightly heavier weight and amazing long-range tools gives him great survivability, and forces opponents to approach. Link has among the lowest jumps in the game, which is boht a positive and negative; he has slightly less mobility, but is able to fight in close quarters with his long-lasting, quick, and long-range Neutral Aerial. His greatest weakness lies in having poor mobility in the air."
  },
  {
    id: 4,
    name: "Samus",
    style: "Zoner",
    franchise: "Metroid",
    url: "https://mario.wiki.gallery/images/thumb/0/03/Samus_SSBU.png/113px-Samus_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/samus/SamusChargeShotMax.gif",
    moveName: "Charge Shot (Neutral Special)",
    synopsis: "Samus has a variety of tools and moves that make her versatile in combat. She can use her projectiles (such as her Charge Shot and Missiles) to control space and force her opponent to approach her. At the same time, she has strong melee options (such as her Up Tilt and Aerials) that allow her to pressure opponents up close. Samus' biggest weakness is her large size, as well as her lack of quick, safe options at close range."
  },
  {
    id: 5,
    name: "Yoshi",
    style: "All-Rounder",
    franchise: "Mario",
    url: "https://mario.wiki.gallery/images/thumb/c/ce/YoshiSSBU.png/107px-YoshiSSBU.png",
    move: "https://ultimateframedata.com/hitboxes/yoshi/YoshiUAir.gif",
    moveName: "Up Aerial",
    synopsis: "Yoshi has a unique moveset and one of the best Aerial drifts in the game that allows him to control space and pressure opponents in a variety of ways. His neutral special (Egg Lay) can be used to set up combos, edgeguard opponents, interrupt their approaches, and Grab shields. His Up Aerial is his main way of securing K.O.'s, as well as juggling opponents. Yoshi's greatest weakness is his limited range and predictable recovery."
  },
  {
    id: 6,
    name: "Kirby",
    style: "Bait and Punish",
    franchise: "Kirby",
    url: "https://mario.wiki.gallery/images/thumb/0/07/Kirby_SSBU.png/91px-Kirby_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/kirby/KirbyNAir.gif",
    moveName: "Neutral Aerial",
    synopsis: "Kirby, although a lightweight (which makes him susceptible to earlier K.O.'s), has a variety of moves that can be chained together for high damage and K.O. potential, particularly his Forward Throw, Up Tilt, and all of his Aerials that can lead into a variety of follow-ups. He is also explosive in his kill power, with nearly all of his Aerials being able to K.O. at high percents, while also being safe on shield. Kirby's greatest weakness is his lack of aerial and grounded mobility, as well as his vulnerable recovery."
  },
  {
    id: 7,
    name: "Fox",
    style: "Bait and Punish",
    franchise: "Starfox",
    url: "https://mario.wiki.gallery/images/thumb/2/2f/Fox_SSBU.png/106px-Fox_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/fox/FoxNAir.gif",
    moveName: "Neutral Aerial",
    synopsis: "Fox is one of the fastest characters in the game, with fast ground and air speed, making him difficult to catch and allowing him to easily move in and out of range. Fox has a variety of moves that can be chained together for high damage and K.O. potential, particularly his Neutral Aerial and Up Tilt which can lead into a variety of follow-ups. Fox also has a variety of moves that can K.O. opponents at lower percentages, including his Up Smash, Back Aerial, and Up Aerial. Fox's greatest weakness is his short range and his light weight, which makes him susceptible to earler K.O.'s from opponents with larger or stronger moves."
  },
  {
    id: 8,
    name: "Pikachu",
    style: "Move-Centric",
    franchise: "Pokemon",
    url: "https://mario.wiki.gallery/images/thumb/9/93/Pikachu_SSBU.png/111px-Pikachu_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/pikachu/PikachuThunderJoltAerial.gif",
    moveName: "Thunder Jolt (Neutral Special)",
    synopsis: "Pikachu is one of the fastest characters in the game, with fast ground and air speed, while also having one of the best projectiles in the game, allowing him to approach, retreat, and force aggression with ease. Pikachu's greatest strength lies in his versatile moveset that includes a strong projectile, quick aerial attacks, and a useful recovery move in Quick Attack, which can be used for both recovery and approaching opponents. His game plan centers around Thunder Jolt (Neutral B), as he would not be remotely good without it. Pikachu's greatest weakness is that he is short-ranged and light, so although he won't get hit often, he will often take a lot of damage when he does."
  },
  {
    id: 9,
    name: "Luigi",
    style: "Move-Centric",
    franchise: "Mario",
    url: "https://mario.wiki.gallery/images/thumb/1/1d/LuigiSSBU.png/109px-LuigiSSBU.png",
    move: "https://ultimateframedata.com/hitboxes/luigi/LuigiDThrow.gif",
    moveName: "Down Throw (After Grabbing)",
    synopsis: "Luigi is a combo-based character that has a variety of moves that can be chained together for high damage and K.O. potential, particularly his down throw which can lead into a variety of follow-ups that can K.O. opponents at any percentage. Luigi's entire gameplan centers around trying to get a Grab, using tools such as his Z-Aerial and Fireball (Neutral B) in order to achieve this sole goal. Luigi's greatest weakness is his predictable Neutral, as well as his middling Aerial mobility and recovery."
  },
  {
    id: 10,
    name: "Ness",
    style: "All-Rounder",
    franchise: "Mother",
    url: "https://mario.wiki.gallery/images/thumb/8/82/Ness_SSBU.png/81px-Ness_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/ness/NessUAir.gif",
    moveName: "Up Aerial",
    synopsis: ""
  },
  {
    id: 11,
    name: "Captain Falcon",
    style: "Bait and Punish",
    franchise: "F-Zero",
    url: "https://mario.wiki.gallery/images/thumb/7/76/CaptainFalcon_SSBU.png/114px-CaptainFalcon_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/captain_falcon/CaptainFalconNAir.gif",
    moveName: "Neutral Aerial",
    synopsis: ""
  },
  {
    id: 12,
    name: "Jigglypuff",
    style: "Move-Centric",
    franchise: "Pokemon",
    url: "https://mario.wiki.gallery/images/thumb/6/6a/Jigglypuff_SSBU.png/120px-Jigglypuff_SSBU.png",
    move: "https://ultimateframedata.com/hitboxes/jigglypuff/JigglypuffRest.gif",
    moveName: "Rest (Down Special)",
    synopsis: ""
  }
]

module.exports = characterList
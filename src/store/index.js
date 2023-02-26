const initState = {
    products: [
        {
            title: "Battlefield 2042",
            description: "Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.",
            image: "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048",
            imagewp: "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042GoldEdition_DICE_Editions_S1_2560x1440-98e3508c62e4d57c1ab8c109b49016a2_2560x1440-98e3508c62e4d57c1ab8c109b49016a2",
            price: "59.99",
            platform: "PC,XBOX ONE, PS4",
            tag: "Coop, PvP",
            id: 1
        },
        {
            image: "https://image.api.playstation.com/vulcan/img/cfn/11307xMxsC9RA7A8rQH4GiePP0BxYP_K8tJU1cWXe4eA189Q0ImmN8eZvJBx91eecK_vHIT2WZrrkqwKfiYvNGIu8NA2zvSV.png",
            title: "Control",
            price: "28.99",
            platform: "PC,XBOX ONE, PSt",
            tag: "Action, Shooter",
            description: "After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.\nFrom developer Remedy Entertainment, this supernatural 3rd person action-adventure will challenge you to master the combination of supernatural abilities, modifiable loadouts and reactive environments while fighting through a deep and unpredictable world.",
            imagewp: "https://gamervw.com/wp-content/uploads/2019/08/control-e3-2019-hands-on-preview-2-1.jpg",
            id: 2
        },
        {
            imagewp: "https://images8.alphacoders.com/112/1125856.jpg",
            price: "29.99",
            title: "Cyberpunk 2077",
            platform: "PC,XBOX ONE, PS4",
            tag: "Open-World, RPG",
            image: "https://assets-prd.ignimgs.com/2020/07/16/cyberpunk-2077-button-fin-1594877291453.jpg",
            description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
            id: 3
        },
        {
            title: "Grand Theft Auto V",
            image: "https://upload.wikimedia.org/wikipedia/az/2/20/GTA_5_Cover.jpg",
            price: "29.99",
            platform: "PC, PS5",
            tag: "Action, Shooter",
            imagewp: "https://images7.alphacoders.com/421/421641.jpg",
            description: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
            id: 4
        },
        {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1023/AgWIv9NHpkWc1vXdNYuSGI8p.jpg",
            imagewp: "https://cdn.akamai.steamstatic.com/steam/apps/1030840/ss_7a147e0dd092400229c6c1fd513625a62ae9a4eb.1920x1080.jpg?t=1632420251",
            price: "24.99",
            platform: "PC",
            tag: "Action, Adventure",
            title: "Mafia: Definitive Edition",
            description: "An inadvertent brush with the mob thrusts cabdriver Tommy Angelo into the world of organized crime. Initially uneasy about falling in with the Salieri family, the rewards become too big to ignore.",
            id: 5
        },
        {
            title: "Metro Exodus",
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5",
            imagewp: "https://s.yimg.com/uu/api/res/1.2/Wj.NSsXH_UBoS6TMLNDVlA--~B/aD05MDA7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/xi3D0LirPYyuj65HtUiL8Q--~B/aD05MDA7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/e83315a93ac8d53fdbf77f2ee6ac5863/206447898/metrolede.jpg.cf.jpg",
            price: "39.99",
            platform: "PC, PS5",
            tag: "Action, FPS",
            description: "Metro Exodus is an epic, story-driven first person shooter from 4A Games that blends deadly combat and stealth with exploration and survival horror in one of the most immersive game worlds ever created.\nFlee the shattered ruins of dead Moscow and embark on an epic, continent-spanning journey across post-apocalyptic Russia in the greatest Metro adventure yet.",
            id: 6
        },
        {
            title: "Red Dead Redeption 2",
            image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
            imagewp: "data:image/jpeg;base64,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",
            price: "24.99",
            platform: "PC,XBOX ONE, PS5",
            tag: "Adventure, Open-World",
            description: "Metro Exodus is an epic, story-driven first person shooter from 4A Games that blends deadly combat and stealth with exploration and survival horror in one of the most immersive game worlds ever created.\nFlee the shattered ruins of dead Moscow and embark on an epic, continent-spanning journey across post-apocalyptic Russia in the greatest Metro adventure yet.",
            id: 7
        },
        {
            title: "Watch_Dogs2",
            image: "https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/qBxvfDJJ9dbavai6xsWOcWaxRDGRb7h0.png",
            imagewp: "https://images6.alphacoders.com/709/thumb-1920-709832.jpg",
            price: "24.99",
            platform: "PC, PS5",
            tag: "Action, Adventure",
            description: "Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area.\nTeam up with Dedsec, a notorious group of hackers, to execute the biggest hack in history; take down ctOS 2.0, an invasive operating system being used by criminal masterminds to monitor and manipulate citizens on a massive scale.\nExplore the dynamic open-world, full of gameplay possibilities\nHack into every connected device and take control of the city infrastructure.",
            id: 8
        },
        {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202007/0217/OX5mEmwgRPeSQrhGFU3n4moZ.png",
            imagewp: "https://cdn1.epicgames.com/0a84818055e740a7be21a2e5b6162703/offer/WatchDogs_Legion_Store_Landscape_2560x1440-2560x1440-6564aab7daeb17650e7fc190714bba76.jpg",
            title: "Watch_Dogs: Legion",
            price: "23.99",
            platform: "PC, PS5",
            tag: "Action, Adventure",
            description: "Build a resistance from virtually anyone you see as you hack, infiltrate, and fight to take back a near-future London that is facing its downfall. Welcome to the Resistance.\nRecruit and play as anyone in the city. Everyone you see has a unique backstory, personality, and skill set.\nHack armed drones, deploy spider-bots, and take down enemies using an Augmented Reality Cloak.",
            id: 9
        },
        {
            image: "https://image.api.playstation.com/cdn/EP0082/CUSA00109_00/IrvjYUmMqx3flPwlrij5JPOw4Lci8Bmm.png",
            imagewp: "https://images5.alphacoders.com/337/337943.jpg",
            title: "Tomb Raider",
            price: "18.99",
            platform: "PC,XBOX ONE, PS4",
            tag: "Adventure",
            description: "Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
            id: 10
        },
        {
            image: "https://assets-prd.ignimgs.com/2022/01/20/arma-3-button-1642668082712.jpg",
            imagewp: "https://images.alphacoders.com/493/thumb-1920-493645.jpg",
            title: "Arma III",
            price: "39.99",
            platform: "PC",
            tag: "Coop, PvP",
            description: "Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
            id: 11
        },
        {
            title: "DayZ Standalone",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1014/ORrwkbfh9B1OwfQbPGLBsgs7.png",
            price: "23.99",
            platform: "PC",
            tag: "Open-World, Survival",
            imagewp: "https://venturebeat.com/wp-content/uploads/2017/05/dayz.jpg?fit=1920%2C1080&strip=all",
            description: "There are no map markers, daily quests, or scoreboards to help you create your story. There is only Chernarus – 230 square kilometers of post-Soviet country that was struck by an unknown virus, which turned the majority of its population into raging infected.\n\nYour task? To survive the collapse of civilization for as long as you possibly can. Keep in mind that death is permanent in unforgiving Chernarus. All you’ll have when you start over again are the memories of your final mistake.",
            id: 12
        },
        {
            title: "Saint's Row",
            image: "https://image.jeuxvideo.com/medias/163483/1634831588-672-jaquette-avant.gif",
            price: "12.99",
            platform: "PC, PS5",
            tag: "Action, Adventure",
            imagewp: "https://cdn1.epicgames.com/offer/0d23bb77ee2f45b7a571bde68caddb09/EGS_SaintsRow_DeepSilverVolition_S1_2560x1440-1ba560d3f228fe5c7341777a6ac9abb7",
            description: "There are no map markers, daily quests, or scoreboards to help you create your story. There is only Chernarus – 230 square kilometers of post-Soviet country that was struck by an unknown virus, which turned the majority of its population into raging infected.\n\nYour task? To survive the collapse of civilization for as long as you possibly can. Keep in mind that death is permanent in unforgiving Chernarus. All you’ll have when you start over again are the memories of your final mistake.",
            id: 13
        },
        {
            title: "Star Wars: Battlefront II",
            image: "https://store-images.s-microsoft.com/image/apps.59752.13982743944721264.aba8e5da-4441-4232-a0e1-21747a781f2b.42aa9607-05b4-44e7-93d2-d583d90e7a69",
            price: "27.99",
            platform: "PC",
            tag: "Coop, PvP",
            imagewp: "https://media.contentapi.ea.com/content/dam/walrus/en-us/migrated-images/2017/04/reveal-swbf2-fb-meta-image-alt.png.adapt.crop191x100.1200w.png",
            description: "Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition! Get STAR WARS Battlefront II and the complete collection of customization content acquirable through in-game purchase from launch up to – and including – items inspired by STAR WARS™: THE RISE OF SKYWALKER™.*",
            id: 14
        },
        {
            title: "Wolfenstein: The New Order",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3004/V6rH21cN1JtpOt6Hk9wFBrJS.png",
            price: "22.99",
            platform: "PC, PS5",
            tag: "RPG, Action",
            imagewp: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheNewOrder_MachineGames_S1_2560x1440-3a75b2c45a2a12e882feb2e2ff180b0c",
            description: "Developed by MachineGames, a studio comprised of a seasoned group of developers recognized for their work creating story-driven games, Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat.",
            id: 15
        },
        {
            title: "God Of War: Ragnarok",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/a0DyIs2SEHrYpciM1ideU1wv.jpg",
            price: "59.99",
            platform: "PC, PS5",
            tag: "Action, Adventure",
            slogan: "I Am The Gods Have Made Me!",
            imagewp: "https://image.api.playstation.com/vulcan/img/rnd/202008/2617/gCLof29n2eeFxVRGpo90xW1A.jpg",
            description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
            id: 16
        },
        {
            title: "Spider-Man",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png",
            price: "59.99",
            platform: "PS-5, PS-4",
            tag: "Action, Adventure",
            slogan: "This is my gift, my curse. Who am I? I'm Spider-Man!",
            imagewp: "https://images6.alphacoders.com/913/913243.jpg",
            description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
            id: 18
        },
        {
            title: "Call Of Duty",
            platform: "PC,XBOX ONE, PS5",
            tag: "Coop, PvP",
            image: "https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_FMjpg_UX1000_.jpg",
            price: "39.99",
            slogan: "Remember, switching to your pistol is always faster than reloading.",
            imagewp: "https://media.gamestop.com/i/gamestop/11206901_SCR01?fmt=auto",
            description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
            id: 19
        },
        {
            image: "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png",
            imagewp: "https://i.pinimg.com/originals/08/c6/ec/08c6ec51dbd764753cfa4874bf2f8099.jpg",
            price: "23.99",
            platform: "PC,XBOX ONE, PS5",
            tag: "Open-World, RPG",
            title: "The Witcher III",
            description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
            id: 20
        },
        {
            image: "https://image.api.playstation.com/cdn/UP0101/CUSA01140_00/09xZlCmW0Y248zmCw0GAfTIYWu3AEUty.png",
            imagewp: "https://cdn.akamai.steamstatic.com/steam/apps/287700/ss_0b38ffb37180ffbadcc0c1d645f65b59c5861d1b.1920x1080.jpg?t=1653977206",
            price: "18.99",
            platform: "PC",
            tag: "Multiplayer, Shooter",
            description: "Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
            title: "Metal Gear Solid V: The Phantom Pain",
            id: 21
        }
    ],
    basket: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, basket: [...state.basket, state.products.find((e) => e.id === action.payload)] }
            break;

        case "DEL":
            return { ...state, basket: state.basket.filter((e) => e.id !== action.payload) }
            break;
        default:
            return state;
    }
}
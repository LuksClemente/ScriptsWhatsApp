async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}

enviarScript(`
MEGAMIND 
directed by Tom McGrath
'''Megamind''': ''(voiceover.)'' Here's my day so far; went to jail, lost the girl of my dreams, and got my butt kicked pretty good. Still, things could be a lot worse. Oh, that's right. I'm falling to my death. Guess they can't. How did it all come to this you ask? My end starts at the beginning. The very beginning. Yes, that's me. I had a fairly standard childhood. I came from what you might call a broken home, literally broken. I was 8 days old and still living with my parents. How sad is that? Clearly it was time to move on.

''(to baby Megamind.)''

'''Megamind's Mother''': Here is your Minion, he will take care of you.

'''Megamind's Father''': And here is your binky.

''(He puts the binky into Megamind's mouth and then utters his last words to his son.)''

'''Megamind's Father''': You are destined for...

''(The ship closes and starts to take off.)''

'''Megamind''': ''[voice over]'' I didn't quite hear that last part, but it sounded important. Destined for... what? I set out to find my destiny. Turns out a kid from the Glaupunk Quadrant had the exact same idea. That was the day I met Mr. Goody-Two-Shoes. And our glorious rivalry was born!

''(baby Megamind's ship is heading towards a large beautiful house.)''

'''Megamind''': [voice over] Could this be what I was destined for? A dream life filled with luxury?

''(baby Metro Man’s ship appears in front and crash lands into the beautiful house.)''

'''Megamind''': ''(voice-over.)'' Apparently not! Even fate has its favorites. No big deal. A much different fate awaited me.

''(Megamind's ship lands in Metro City Prison.)''

'''Lady Scott''': A baby! How thoughtful.

''(holds infant Metro Man in her hands.)''

'''Lord Scott''': ''(reading his paper.)'' Oh, yes, yes. I saw and thought of you.

''(baby Megamind's ship opens and he sees the prisoners crowding around looking at him.)''

'''Megamind''': ''(voice-over.)'' Luckily I found a lovely little place to call home.

''(to the other prisoners.)''

'''Prisoner''': Can we keep it?

''(one of the prisoners is showing him picture cards of a policeman and a burglar.)''

'''Megamind''': ''(voice-over.)'' A place that taught me the differences between right and wrong. Mr. Goody-Two-Shoes on the other hand had life handed to him on a silver platter.

''(baby Metro Man flies around the ceiling.)''

'''Lady Scott''': Our baby can fly!

''(without looking he continues to read his paper.)''

'''Lord Scott''': Yes, yes, nothing but the best for you, darling.

'''Megamind''': ''(voice-over.)'' The power of flight, invulnerability, and great hair! [the image freezes at Mr. GTS as the tip of his hair shines] But I had something far, far greater. My amazing intellect! A knack for building objects of mayhem. [Now riding a tricycle made out of Metro City license plates, baby Megamind rides down the hall with some of the inmates following him. His pacifier shoots a beam through the wall and is stopped by the warden.

''(Megamind as a child is being escorted out of prison and taken to School)''

'''Megamind''': ''(voice-over.)'' After a few years and with some time off for good behavior, I was given an opportunity to better myself through learning at a strange place called ‘shool’. It was there that I once again ran into Mr. Goody-Two-Shoes. He had already amassed a gigantic army of soft-headed groupies.

''(Metro Man as a child uses his laser vision to heat up popcorn and all the school children cheer and clap.)''

'''Megamind''': ''(voice-over.)'' He bought their affections with showmanship, extravagant gifts of deliciousness. So I too would make this popped corn and win over those mindless drones.

'''Warden''': Lights out! ''(The prison lights turn off. Megamind uses his pacifier as a flashlight to add some more sketches to his invention while Minion watches.)''

''(Megamind's object to produce popcorn for the school children explodes and Metro Man uses his powers to put the fire out.)''

'''Megamind''': ''(voice-over.)'' That's when I learned a very hard lesson. Good receives all the praise and adulation while evil is sent to quiet time in the corner. [Metro Man sends Megamind to the back of the room and is rewarded with a gold star sticker. A class photo] So fitting in wasn’t really an option. ''(MM (Metro Man) plays a ukulele as the class sings "Itsy Bitsy Spider".)'' While they were learning Itzy Bitzy Spider, I learnt how to dehydrate inanimate objects and rehydrate them at will. ''(Megamind fires a ray at Minion turning him into a cube, and adds a drop of water on the cube to bring Minion back to life. The latter sees the former belly-up as he taps of the sphere. Minion wakes up as the two share a smile.)'' Some days it felt like it was just me and Minion against the world. No matter how hard I tried I was always the odd man out. ''(MM picks a girl with a cast and crutches to be on his team.)'' The last one picked. A screw up! Black sheep! ''(dodgeballs are being pelted at Megamind.)'' Bad boy! ''(As a new round begins, Megamind buckles up a helmet with spikes on them. As the dodgeballs fire, lightning from the spikes reflect the balls hitting a car, a man's head, and nearly hitting the teacher, but deflected by MM. He is rewarded with yet another gold star sticker.)'' Was this my destiny? Wait... maybe it was! Being bad is the one thing I'm good at. Then it hit me; if I was the bad boy, then I was going to be the baddest boy of them all!

''(sets off a chemical explosion in the schoolhouse.)'' I was destined to be a supervillain, and we were destined to be rivals! The die had been cast! And so began an enduring epic lifelong career…and I LOVED IT!

''(a gallery of newspaper articles appears, featuring Megamind and Metro Man's battles.)''

'''Megamind''': ''(voice-over.)'' Our battles quickly got more elaborate. He would win some, I would almost win others! He took the name Metro Man, defender of Metro City (pronounced 'met-traw-city'). I decided to pick something a little more humble; Megamind, incredibly handsome criminal genius and master of all villainy!

''(in prison.)''

'''Warden:''' ''(Noticing the cell guard reading a newspaper.)'' Read on your own time! Open up! ''(The guard opens the window and Warden and sees that Megamind is not sitting in his chair. Concerned, he presses his face up closer to the window.)''

'''Megamind:''' BOO! (Warden jumps back. Megamind laughs.) Good morning Warden. Great news, I'm a changed man and I’m ready to re-enter society as a solid citizen.

* '''Warden:''' You're a villain! And you’ll always be a villain. You’ll never change and you’ll never leave.
* '''Megamind:''' You're fun.
* '''Warden:''' You got a present in the mail.
* '''Megamind:''' Is it a puppy?
* [the warden opens the box to reveal a hand watch]
* '''Warden:''' From Metro Man.
* [reading the card from Metro Man]
* '''Warden:''' 'To count every second of your eighty-five life sentences.' That's funny, never thought Metro Man was the gloating type. Oh, but he does have nice taste.
* [he puts the watch on his wrist]
* '''Warden:''' I think I’ll keep it.
* '''Megamind:''' Any chance you could give me the time. I don’t want to be late for the opening of the Metro Man museum.
* [the warden looks at the watch]

'''Warden''': Oh, no! Looks like you’re gonna miss it, by several thousand years.

''(the warden walks away.)''

'''Megamind''': Oh, am I?

''(starts to do an evil laugh.)''

* '''Roxanne Ritchie:''' Happy Metro Man day, Metro City. It’s a beautiful day in downtown where we’re here to honor a beautiful Metro Man. His heart is an ocean that’s inside a bigger ocean. For years he’s been watching us with his supervision, saving us with his super strength and caring for us with his super heart. Now it’s our turn to give something back. This is Roxanne Ritchie, reporting live from the dedication of the Metro Man museum.
* [she does the cut sign to her cameraman]
* '''Hal:''' Wow! Okay, the stuff they make you read on air, that’s un-freaking-believable! It’s crazy.
* '''Roxanne Ritchie:''' I wrote that piece myself, Hal.
* '''Hal:''' What I was trying to say was, I can’t believe that in our modern society, they let, like actual art get onto the news.
* '''Roxanne Ritchie:''' Nice save, Hal.
* '''Hal:''' Why don’t we…like, let’s just get a coffee or something.
* '''Roxanne Ritchie:''' [Scoffs] Come on, it’s time to get into the metro man day spirit!
* '''Hal:''' Well, if I were Metro Man, Megamind wouldn’t be kidnapping you all the time, that’s the first thing.
* '''Roxanne Ritchie:''' [chuckles] That’s sweet, Hal.
* '''Hal:''' And I’d be watching you, like…like a dingo watches a human baby.
* '''Roxanne Ritchie:''' Mmm.
* '''Hal:''' Okay, that sounded…okay, that sounded a little weird.
* '''Roxanne Ritchie:''' A little bit, yeah.
* '''Hal:''' You’re making a face, and that’s making me feel weird.  (Roxanne is kidnapped by minion as Hal continues to speak)
* '''Hal:''' Point is, I would watch you like something watching something intently with love. Not love, we’re not in love. I’m not saying I love you. Okay, I love you, whatever. [chuckles] But I’m not saying, like, I’m in love with you, I’m saying… (he notices Roxanne is gone) Roxxane? Roxaroo?

''(Cut back to the prison. The warden’s appearance is changed into Megamind’s as he walks back from the cell.)''

'''Warden''': Get back to work! The city doesn't pay you to loaf.

'''Police Officers:''' Freeze!

'''Warden''': Woah, what are you doing guys? It’s meEE-

''(The officers taze the warden and drag him back to Megamind’s cell.)''

	''(As they cuff the Warden to the chair, Megamind steals back the watch and heads out the door as the Warden changes back)''

'''Warden''': Oh, you fools. He’s tricked us. 

'''Megamind''': You were right. (The watch changes him into the Warden) I’ll always be a villain. (Megamind cackles sinisterly as he locks the door behind him and leaves the prison)

* '''Minion:''' Well, hello good looking! Need a lift?
* '''Megamind:''' Certainly do, you fantastic fish, you!
* '''Minion:''' Get in the car, you.
* '''Megamind:''' Woo! I’m free! Nice work sending me the watch, Minion!
* '''Minion:''' You got it, boss!
* '''Megamind:''' Punch it!

(Cut to Metroman on stage punching through a brick wall)

* '''Metro Man:''' Alright. Put your hands in the air!

(the crowd cheers in delight)

* '''Mayor:''' Ladies and gentlemen, your Metro Man!
* '''Metro Man:''' Who’s your man?
* '''Mayor:''' Metro Man!
* '''Metro Man:''' Yeah, Metro City!

(Metro Man flies along the crowd, high-fiving the audience)

'''Metro Man:''' Give me some! Come on. Give it to me! Right on! Give me the good stuff! Alright!

(Metro Man picks up and juggles three babies before returning them and grabbing a microphone)

* '''Metro Man:''' Hey, Metro City. Hey. Hey
* (the crowd screams and cheers)
* '''Metro Man:''' Hey. You know, I just wanna bring it down a bit. Boys, a little lower. Thank you, fellas.
* [the crowd stops cheering]
* '''Metro Man:''' Let’s get real for a moment. That’s right, that’s right. Ha-ha. Although getting a whole museum is super cool, super cool. You wanna know what the greatest honor you’ve given me is? Do you really wanna know?
* [the crowd starts to cheer again]
* '''Metro Man:''' Really?
* [the crowd cheers louder]
* '''Metro Man:''' I’ll tell ya. The greatest honor you’ve given me is letting me serve you. The helpless people of Metro City. And at the end of every day, well, I often ask myself; who would I be without you?
* [a male voice from the crowd shouts]
* '''Voice from Crowd:''' I love you, Metro Man!
* '''Metro Man:''' And I love you, random citizen! Ha ha ha~!
* [In evil lair]
* '''Megamind:''' Aahh, I tell you Minion, there’s no place like evil lair.
* '''Minion:''' I’ve kept it cold and damp just for you, sir.
* '''Megamind:''' How…how do I look, Minion? Do I look bad?
* '''Minion:''' Disgustingly horrifying, sir.
* '''Megamind:''' You always know what to say.
* '''Minion:''' Oh, the brainbots certainly missed you, sir.
* '''Megamind:''' Did you miss your daddy? Who’s a menacing little cyborg? You are. Yes, you are. Uh-uh! No biting! No-no-no-no-no. You want the wrench? Go get the wrench!
* '''Minion:''' Oh, look at that.
* '''Megamind:''' Now, back to laughing.
* (both inhale and laugh uproariously, followed by Roxanne’s muffled voice)
* '''Megamind:''' She’s awake! Quick. To work.

[Minion removes a cloth bag from his captive, Roxanne Ritchie]

* '''Megamind:''' Miss Ritchie, we meet again.
* '''Roxanne Ritchie:''' Would it kill you to wash the bag?
* '''Megamind:''' You can scream all you wish, Miss Ritchie. I’m afraid no one can hear you!
* [Roxanne just looks at him coldly]
* '''Megamind:''' Why…uh, why isn’t she screaming?
* '''Minion:''' Miss Ritchie, if you don’t mind?
* '''Megamind:''' Like this…aaahhhh!
* '''Megamind:''' But that’s…that’s a poor lady scream.
* [the brain bot he’s holding in hand suddenly bites his hand and he screams in pain]
* '''Roxanne Ritchie:''' [sarcastically] That’s a little better.
* '''Roxanne Ritchie:''' Is there some kind of nerdy supervillan website where you get Tesla coils and blinky dials?
* '''Minion:''' Actually, most of it comes from an outlet store in-
* '''Megamind:''' Don’t answer that.
* '''Minion:''' (whispering) Romania.
* '''Megamind:''' Don’t! Stop! She’s using her nosy reporter skills on your weak-willed mind to find out all our secrets.
* '''Minion:''' (gasps)
* '''Megamind:''' Such tricks… won’t work on me…
* '''Roxanne Ritchie:''' Please talk slower.
* '''Megamind:''' …temptress!
* '''Roxanne Ritchie:''' Wait, what secrets? You’re so predictable!
* '''Megamind:''' Predictable, predictable! Oh, you call this… predictable?! [pulls a lever]
* '''Roxanne Ritchie:''' Your Alligators, yes! I was thinking about it on the way over.
* '''Megamind:''' What’s this? Boom! In your face. [deploys a gatling gun]
* '''Roxanne Ritchie:''' Clichéd.
* '''Megamind:''' No, look! Watch.
* [brings down the giant blades]
* '''Roxanne Ritchie:''' Juvenile.
* '''Megamind:''' Shock and awe!
* [Megamind brings up a chainsaw]
* '''Roxanne Ritchie:''' Tacky.
* '''Megamind:''' Oh, it’s so scary!
* [activates a cycle of spiked boots]
* '''Roxanne Ritchie''': Seen it.
* '''Megamind:''' What’s this one do?
* [now frantic he unleashes a flamethrower]
* '''Roxanne Ritchie:''' Garish!
* [Megamind breaks down]
* '''Roxanne Ritchie''': Okay, the spider’s new.
* '''Megamind:''' Spider?
* [sees the spider hanging in front of Roxanne]
* '''Megamind:''' Uh…yes! The…the speiiiider. Even the smallest bite from “arachnis deathicus” will instantly paralyze…
* [Roxanne blows the spider on Megamind’s nose]
* '''Megamind:''' Oh! Get it off! Ow, it bit me!
* '''Roxanne Ritchie''': (sigh) Give it up Megamind, your plans never work.
* '''Megamind:''' Let’s stop wasting time and call your boyfriend in tights, shall we?

(cut to Metro Museum debut)

* '''Mayor:''' It is with great pleasure that I present to Metro Man this new museum. If you please!

(MetroMan cuts the ribbon while a man with a trenchcoat in the crowd shuffles)

* '''Man in Crowd:''' Uh, hey! My kid can’t see.

(The brainbot in the trenchcoat reveals itself, as people begin to gasp and panic and black smoke surrounds the stage)

* '''Megamind:''' (evil laugh)
* '''Metro Man:''' Megamind!
* '''Megamind:''' Oh, bravo, Metro Man!

(Crowd booing)

* '''Megamind:''' Boo! Yes, I can play along, too. Boo!
* '''Metro Man:''' Should have known you’d try to crash the party.
* '''Megamind:''' Oh, I intend to do more than crash it. This is a day you and Metrocity shall not soon forget!
* '''Metro Man:''' It’s pronounced ‘Metro City’!
* '''Megamind''': Oh, potato, tomato, potato, tomato.
* '''Metro Man''': We all know how this ends; with you behind bars!
* '''Megamind''': Oh, I’m shaking in my custom baby seal leather boots! You will leave Metrocity, or this will be the last you ever hear of, Roxanne Ritchie! Huh?
* [the screen next to him shows Roxanne tied to a chair]
* '''Metro Man''': Roxanne! Don’t panic, Roxy. I’m on my way.
* '''Roxanne Ritchie''': I’m not panicking.
* '''Megamind''': [smirking] In order to stop me, you need to find me first, Metro Man!
* '''Roxanne Ritchie''': We’re at the abandoned observatory!
* '''Megamind:''' Ah-huh! No, we’re not! Don’t listen to her! She’s crazy!

(Metroman flies up and finds the old observatory, speeding towards it)

* '''Minion:''' (smiling) Metro Man approaching, sir.
* '''Roxanne Ritchie''': Ha!
* '''Megamind:''' (retorting) Ha ha!
* '''Roxanne Ritchie''': Ha ha ha! 
* '''Megamind:''' (megamind drops the fake laugh and cackles sinisterly as Roxanne becomes more concerned)

(Metro Man crashes into the observatory as the dome closes around him. Roxxane is nowhere to be seen)

* '''Metro Man:''' Hold on a second.

Roxxane and Metro Man look around, confused.

* '''Megamind:''' Oh, good heavens! You didn’t think you were in the real observatory, did you?

Megamind reveals that they are in a fake observatory, with cameras of Metro Man appearing all around themselves. Megamind cackles.

* '''Megamind:''' Ready the death ray, Minion.
* '''Minion:''' Death ray readying!
* '''Megamind:''' Over here, old friend! In case you’ve noticed, you’ve fallen right into my trap.
* '''Metro Man:''' You can’t trap justice. It’s an idea, a belief!
* '''Megamind:''' But, even the most heartfelt belief can be corroded over time.
* '''Metro Man:''' Justice is a non-corrosive metal.
* '''Megamind:''' But metals can be melted by the heat of ravange!
* '''Metro Man:''' It’s ‘revenge’, and it’s best served cold!
* '''Megamind:''' But it can be easily reheated in the microwave of evil!
* '''Metro Man:''' Well, I think your warranty’s about to expire!
* '''Megamind:''' Maybe I got an extended warranty!
* '''Metro Man:''' Warranties are invalid if you don’t use the product for its intended purpose!
* '''Roxanne Ritchie''': [exasperated] Uuhh! Girls, girls, you’re both pretty! Can I go home now?
* '''Megamind:''' Of course! That is if Metro Man can withstand the full concentrated power of the sun! FIRE!

(Nothing happens. After a long pause, Megamind moves off camera, frustrated)

* '''Megamind:''' Minion… fire?
* '''Minion:''' Uh, it’s still warming up, sir.
* '''Megamind''': Come again?
* '''Minion:''' Warming up, sir.
* '''Megamind''': Warming up! The sun is warming up?
* '''Minion:''' One…second…more…and…just…tippy tappy, tippy tap, tap, tip, top more.
* '''Megamind''': Honestly!
* '''Minion:''' And we are ready in just a few…hang on one second.
* '''Megamind:''' [exasperated] Uuhh! I told you to have things ready. I told you countless times.
* '''Minion:''' Why do you always blame me?
* [grabs his eye that the spider had bit earlier]
* '''Megamind:''' My spider bite is acting!
* '''Roxanne Ritchie:''' Your plan is failing. Just admit it.
* '''Minion:''' Yeah, good luck with that one!
* '''Megamind:''' Who’s side are you on?
* '''Roxanne Ritchie:''' The losing side.
* '''Minion:''' Thank you.
* '''Roxanne Ritchie:''' [sarcastically] Uh, could someone stamp my frequent kidnapping card?
* [Megamind laughs]
* '''Megamind:''' You of all people know we discontinued that promotion. Ciao-ciao, all!
* '''Roxanne Ritchie:''' Same time next week?

(Metro Man collapses in the observatory that Megamind has trapped him in)

* '''Metro Man:''' Fargin’ dag crab nuggets!
* '''Megamind:''' (turning) What did he just say?
* '''Minion:''' Crab nuggets?

(Metro Man flies into the walls of the observatory but doesn't break through)

* '''Metro Man:''' Fackled fish-cracker!
* '''Metro Man:''' Good lord, I’m trapped!
* '''Computer voice:''' Ten seconds to full power.
* [Megamind looks at Metro Man through the projector]
* '''Megamind:''' What kind of trickery is this?
* '''Metro Man:''' You mad genius. Your dark gift has finally paid off!
* '''Megamind:''' It…it has?
* '''Metro Man:''' This dome is obviously lined... with copper.
* '''Megamind:''' Yeah, so?
* '''Minion:''' Sir? Uh…
* [Minion points at computer screen]
* '''Metro Man:''' Copper drains my powers.
* '''Megamind:''' Your weakness is copper? You’re kidding, right?
* '''Computer voice:''' Full Power.

(The sun laser fully powers up and fires on the observatory Metro Man was trapped in, creating a massive explosion. After a moment, Megamind and Minion stand to observe.)

* '''Minion:''' (coughs) I don’t think… even HE could survive that.
* '''Megamind:''' Well, let’s not get our hopes up just yet.
* '''Minion:''' Look!

(A figure with Metro Mans cape flies out of the smoke)

* '''Roxanne Ritchie:''' (relieved gasp) Metro Man!
* '''Megamind:''' (relieved gasp) Metro Man! ...METRO MAN!!!

(Megamind is tackled by the figure, and he lifts up its cape, revealing a skeleton)

* '''Megamind:''' Oh god! Oh god!
* '''Minion:''' Ew!

(Both of them pause for a moment)

* '''Minion:''' You... you did it, sir!
* '''Megamind:''' …I did it?
* '''Mayor:''' (in disbelief) He did it!
* '''Megamind:''' I did it?
* '''Warden''': He did it…
* '''Minion:''' You did it, sir!
* '''Megamind:''' (excited) I did it!
* '''Minion:''' He did it!
* '''Megamind:''' I did it! Metrocity is mine!

(cut to Minion and Megamind walking down a street celebrating with a swarm of brainbots following)

* '''Minion:''' [singing] You did it, sir. You did it, sir.
* '''Megamind:''' [singing] Yes I did.
* '''Minion:''' Us!
* '''Megamind:''' I did it!
* '''Minion:''' We both did it.
* '''Megamind:''' Not us, I!
* '''Minion:''' You a little more than me, but still come on! When they’re giving out the awards I’m going to be right here next to you, right sir?
* '''Megamind:''' What awards? Awards for what? Hit it!

(highway to hell plays. A crowd of police and citizens have blockaded the City Hall, but when megamind enters, they’re all so scared of him that they surrender and lay their guns down)

* '''Megamind:''' Wooo! Hahaha! Drop ‘em!
* '''Megamind:''' First off, what a turnout! How wild is this, huh? 
* '''Megamind:''' All I did was eliminate the most powerful man in the universe. Are there any questions? Go on. Yes! You in the back.
* '''Roxanne Ritchie:''' I’m sure we’d all like to know what you plan to do with us and this city.
* '''Megamind:''' Good, I’m glad you asked that. Imagine the most horrible, terrifying, evil thing you can possibly think of… and multiply it…by six! In the meantime, I want you to carry on with the dreary normal things you, normal people do. Let’s just have fun with this, come on! And I will get back to you.
* [he walks backwards into City hall with Minion following behind him]
* '''Megamind:''' [whispering] Now slam the door really hard.
* [Minion slams the door hard but his shadow can been seen through the door]
* '''Megamind:''' They, they can still see you.
* '''Minion:''' Now?
* '''Megamind:''' Your elbow’s still in. (both laugh) Good.

Megamind blows open the door to the head office with a ray gun while Minion carries him inside

* '''Minion:''' There he is, Mr. Evil Overlord
* '''Megamind:''' Oh, Minion, did you think this day would ever come?
* '''Minion:''' (chuckles) No way. Not at all, sir. Never. Never in a million…
* [Megamind gives him an evil look]
* '''Minion:''' I mean, yes, I did.
* '''Megamind:''' Look at the intricate moldings.
* '''Minion:''' I’m looking, I’m looking!
* '''Megamind:''' And what’s this? It’s like one of the giant monitors in the lair, but it seems to carry only one station.
* '''Minion:''' Oh, that sir, is called a window.
* '''Megamind:''' Window!
* '''Minion:''' All the kids are looking through them.
* '''Megamind:''' Oooh! I’ve never had a view before. Metrocity, Minion. It’s all mine. If my parents could see me now…
* '''Minion:''' Sir, I am sure they’re smiling down from evil heaven.
* '''Megamind:''' And now that Mr.Goody Two-Shoes is out of the way, I can have everything I want! And there’s no one to stop me!

(Megamind and Minion both laugh. Crazy train plays. They go on a crime spree, which does not last long. Cut to Megamind sitting in his office staring at a drinking bird desk toy)

* '''Megamind:''' I know, I know. Always thirsty, never satisfied. I understand you, little well-dressed bird. Purposeless, emptiness. It’s a vacuum, isn’t it? It’s…What’s your vacuum like?

[Minion breaks through the door, singing and playing air guitar on a statue]

* '''Minion:''' [singing] Going off the rails on a crazy train, sir!
* '''Megamind:''' Hey, hey, hey, hey! Not now, Minion. I’m in a heated, existential discussion with this dead-eyed, plastic desk toy.
* '''Minion:''' Is…is something wrong, sir?
* '''Megamind:''' Just think about it. We have it all. Yet we have nothing. It’s just too easy now.
* '''Minion:''' I’m sorry. You’ve lost me, sir.
* '''Megamind:''' [wearily] I mean, we did it, right?
* '''Minion:''' Uh, well, YOU did it, sir. Yes, you’ve made that perfectly clear.
* '''Megamind:''' Then why do I feel so…melancholy?
* '''Minion:''' Melancholy?
* '''Megamind:''' Unhappy.
* '''Minion:''' Oh, well, uh…what if tomorrow we could go kidnap Roxanne Ritchie? That always seems to lift your spirits!
* '''Megamind:''' Good idea, Minion. But without him, what’s the point? (gesturing at the statue of Metro Man)
* '''Minion:''' Him, sir?
* '''Megamind:''' Nothing.
* '''Minion:''' Okay, um… All right, well…(stammers) That’s something to consider, and, um, well, I think I’ll just power down for a while, then.

(Cut to Roxxanne, broadcasting outside of the Metro Man museum for her news spot)

* '''Roxanne Ritchie:''' He was always there for us. Dependable. Perhaps we took him for granted, or maybe... we never really know how good we have it until it's gone. We miss you, Metro Man... I... miss you. And I have just one question for Megamind. Are you happy now? This is Roxanne Ritchie, reporting from a city without a hero. Coming up next, are you ready to be a slave army? What you need to know.
* [she does the cut sign to Hal]
* '''Hal:''' Aaand, wrap that up and give it to a child on Christmas! Cause we’re done
* '''Roxanne Ritchie:''' Okay. See you tomorrow, Hal.
* '''Hal:''' Wait, Roxie, I’m havin’ a party at my house, It’s gonna be like off the hook, or whatever. You should come over. I got a DJ, rented a bouncy house, made a gallon of dip. It’s gonna be sick!
* '''Roxanne Ritchie:''' Oh, I…I don’t know, Hal. I don’t really feel like being around a bunch of people.
* '''Hal:''' No, no, no! That’s the best part, it’ll just be like, you and me.

(Awkward Silence)

* '''Roxanne Ritchie:''' Wow! That…um, that’s certainly very tempting. But…
* '''Hal:''' I did hire a wedding photographer. That’s just in case we were like, something crazy happened and we wanted a picture of it like, maybe we should have this for like, ever. Like a memory, you know?
* '''Roxanne Ritchie:''' Um, I’m gonna pass. I have some work here that I need to do, anyway.
* '''Hal:''' Cool. So, Thursday? Soft Thursday?
* '''Roxanne Ritchie:''' Goodnight, Hal.
* '''Hal:''' It’s a soft yes on Thursday.

[Roxanne turns and goes up the stairs, he goes back to his van]

* '''Hal:''' [to himself] What’s wrong with me?! “Rented a bouncy house?” Chicks don’t like bouncy houses, they like clowns!

[he hits his van and Roxanne hears him shout]

* '''Hal:''' Ow! Aaah! Stupid van! You broke my finger!

[Megamind and Roxxane both ascend the museum to the statue of Metro Man on opposite sides of the building]

* '''Megamind:''' I’ve made a horrible mistake. I didn’t mean to destroy you. I mean, I meant to destroy you, but I didn’t think it would really work.
* '''Roxanne Ritchie:''' What are we supposed to do? Without you, evil is running rampant through the streets. 
* '''Megamind:''' I’m so tired of running rampant through the streets. What’s the point of being bad when there’s no good to try and stop you?
* '''Roxanne Ritchie:''' (sigh) Someone has to stop Megamind.
* '''Bernard:''' Hey, we’re closing soon. 
* '''Roxanne Ritchie:''' (gasp) Ugh! You scared me! Barry, right?
* '''Bernard:''' Bernard.
* '''Roxanne Ritchie:''' Bernard. I was just… (chuckles) Well, I was talking to myself. You probably think I’m a little bit nuts. 
* '''Bernard:''' I’m not allowed to insult guests directly. 
* '''Roxanne Ritchie:''' Thank you. I just… Bernard, I’ll just be another minute.
* '''Bernard:''' (exaggerated sigh) Okay.
* '''Roxanne Ritchie:''' Thanks.

(Cut back to Megamind)

* '''Megamind:''' I had so many evil plans in the works; The Illiteracy Beam, Typhoon Cheese, Robo Sheep. Battles we will now never have. 

(His voice echoes, and Roxxane starts walking around the platform to investigate the noise)

* '''Megamind:''' You know, I never had the chance to say goodbye. So it’s good that we have this time now. You know, before I destroy the place. Nothing personal, it just brings back too many painful memories.

[Megamind activates a countdown bomb and starts walking away]

* '''Roxanne Ritchie:''' Hello? 
* '''Megamind:''' (To himself) Roxxane?!

(Megamind runs towards the elevator, where he bumps into Bernard)

* '''Bernard:''' Uh, that’s a pretty tasteless costume.
* '''Megamind:''' Costume?!
* '''Bernard:''' Megamind’s head is not that grossly exaggerated.

[Megamind scans Bernard with his disguise watch]

* '''Bernard:''' Uuh! You even made a cheap replica of his dehydration gun. How unc…

[Megamind shoots his dehydration gun at Bernard and turns him into a cube]

* '''Roxanne Ritchie:''' Hello, who’s there?

(Megamind transforms himself into Bernard right as Roxxane turns the corner)

* '''Roxanne Ritchie:''' Oh! (laughs) Whoo! It’s just you, Bernard.
* '''Bernard:''' Oh, yes. It’s just me. ''Bernard''..
* '''Roxanne Ritchie:''' Well, thank you for letting me stay.
* '''Bernard:''' Look, I wouldn’t stay here for more than two minutes and thirty-seven seconds if I were you. We’re having the walls and ceiling removed.
* '''Roxanne Ritchie:''' Wow! That sounds like quite the renovation. I guess I’ll um…catch a ride down with you then.

[She gets into the elevator with Megamind disguised as Bernard]

* '''Roxanne Ritchie:''' I kept thinking he was gonna do one of his last-minute escapes.
* '''Bernard:''' Yeah, he was really good at those.
* '''Roxanne Ritchie:''' Oh! If only the world had a reset button.
* '''Bernard:''' I’ve looked into the reset button.(he starts to cry) The science is impossible.
* '''Roxanne Ritchie:''' Oh Bernard.. I didn’t know you had…''feelings''. Are you okay?
* '''Bernard:''' Metro Man’s gone. And now there’s no one left to challenge Megamind.
* '''Roxanne Ritchie:''' Oh, come on, Bernard! As long as there’s evil, good will rise up against it.
* '''Bernard:''' Uuh, I wish!
* '''Roxanne Ritchie:''' I believe someone’s gonna stand up to Megamind.
* '''Bernard:''' You really think so?
* '''Roxanne Ritchie:''' Yeah, it’s like they say. Heroes aren’t born, they’re made!

(Megamind has a realization)

* '''Bernard:''' Heroes can be made. That’s it! All you need are the right ingredients.
* '''Roxanne Ritchie:''' Yeah. Bravery.
* '''Bernard:''' Yes.
* '''Roxanne Ritchie:''' Strength.
* '''Bernard:''' Of course!
* '''Roxanne Ritchie:''' Determination.
* '''Bernard:''' Imperative! And a smidgen of DNA. Oh, with that anyone can be a hero!
* '''Roxanne Ritchie:''' Yeah!
* '''Bernard:''' Ohoho!

[he laughs and picks up Roxanne in excitement, and his alarm goes off to warn him of the bombs timer]

* '''Bernard:''' I think we should run!

(Roxxane leaves in a taxi outside the museum)

* '''Bernard:''' Bye! 

He turns to the statue of Metro Man

* '''Bernard:''' Time to put the past behind us.

[he transforms himself back into Megamind]

* '''Megamind:''' Only the future…

[the museum suddenly explodes in front of him]

* '''Megamind:''' Aaaah! Oh! I’m too close! I’m genuinely scared right now! Oh! I hope no one’s seeing this! Aah!

Cut to the evil lair with Minion, who is holding coffee and donuts.

* '''Minion:''' Create a hero? Wait, wait…what?! Why would you do that?
* '''Megamind:''' So I have someone to fight! Minion, I’m a villain without a hero. A yin with no yang! A bullfighter with no bull to fight. In other words, I have no purpose! Now, ask me how I’m going to do it. Go on! Ask!
* '''Minion:''' (sigh) How are you gonna do it?
* '''Megamind:''' Hahaha! I’m going to give someone, I don’t know who yet, Metro Man’s powers. I’m going to train that someone to become Metrocity’s new hero. Over here, follow!

[revealing the last poster board]

* '''Megamind:''' And then finally, I’m going to fight that hero in an epic battle of good and evil. Which will put everything back the way it was when the world was perfect and rosy!
* '''Megamind:''' Behold, Minion, Metro Man’s cape! Look closely.
* '''Megamind:''' Tell me what you see.
* '''Minion:''' Dandruff?
* '''Megamind:''' Ha…ha…yes! It’s his DNA! From this, we’ll extract the source of Metro Man’s awesome power.

[extracting Metro Man’s essence]

* '''Minion:''' Sir, I think this is a bad idea.
* '''Megamind:''' Yes, this is a very wickedly bad idea for the greater good of bad!
* '''Minion:''' But I’m saying this is a kind of bad that, okay, you might think it’s good in your “bad” perception, but from a “good” perception, it…it…it’s just plain bad!
* '''Megamind:''' Oh, you don’t know what’s good for bad!

(loading the essence bullet into an infuser gun)

* '''Megamind:''' Now, we have just one shot at this. We must find a suitable subject. Someone of noble heart and mind, who puts the welfare of others above their own.

[a tune from a cell phone goes off]

* '''Megamind:''' What on earth is that?
* '''Minion:''' It seems to be emanating from there, sir.

Megamind pulls out the cell phone from his back pocket and answers it]

* '''Megamind:''' Ollo?
* '''Minion:''' Um, it’s ‘hello’.
* '''Megamind:''' Oh. Hello?
* [to Minion]
* '''Megamind:''' Like that?
* [Roxanne’s voice comes through the cell phone]
* '''Roxanne Ritchie:''' Bernard, it’s Roxanne.
* [whispering to Minion]
* '''Megamind:''' It’s Roxanne!
* '''Roxanne Ritchie:''' I just want to thank you for inspiring me the other day.
* '''Bernard:''' Oh! You “inspired” me too.
* '''Roxanne Ritchie:''' Great. It’s time we stood up to Megamind and show him he can’t push us around.
* '''Bernard:''' Oh! Oh, really?
* [whispers to Minion]
* '''Megamind:''' She’s so cute!
* '''Roxanne Ritchie:''' I’m already hot on his trail.
* '''Megamind:'''  Uh-huh. And what gives you that idea?
* '''Minion:''' Uh, sir?
* '''Roxanne:''' I just found his secret hideout!
* [Roxanne’s face appears on the security TV screens]
* '''Megamind:''' [shouting] How did she find my hideout?!
* [back onto the cell phone]
* '''Megamind:''' Uh, how did you find his hideout?
* '''Roxanne Ritchie:''' This is the only building in Metro City with a fake observatory on the roof!
* [to Minion]
* '''Megamind:''' Okay. There’s no way she’ll find the secret entrance.
* '''Roxanne Ritchie:''' (gasps) There’s a doormat here that says ‘Secret Entrance’!

(Roxxane enters the hideout and Megamind turns to Minion)

* '''Megamind:''' Minion!
* '''Minion:''' I kept forgetting where it was!
* '''Megamind:''' She’ll discover all our secrets!
* '''Minion:''' Aah! Oh no! 
* '''Megamind:''' You dim-witted creation of science!!
* '''Roxanne Ritchie:''' (on the phone) What?
* '''Megamind:''' What? Oh no, not you, Roxxane. No, I was just yelling at…my mother’s urn. Don’t do anything I’ll be right there.
* [after Roxanne has entered into Megamind secret hideout]
* '''Hal:''' Roxxane? Oh no, not again!

(Cut to Roxxane walking around)

* '''Bernard:''' Roxanne?
* '''Roxanne Ritchie:''' (gasp) Oh!
* [Roxanne turns around in surprise and see’s Bernard who’s in fact Megamind in disguise]
* '''Bernard:''' (gasp) Wow!
* '''Roxanne Ritchie:''' Oh, I’m glad you’re here. Wait, how did you get here so fast?
* '''Bernard:''' Well, I uh, I happen to be speed walking nearby when you called.
* '''Roxanne Ritchie:''' In a suit?
* '''Bernard:''' Uh-huh. It’s called, formal speed walking. But that’s not important. I’d better take the lead. This way looks exciting.
* '''Roxanne Ritchie:''' No, it says exit.
* '''Bernard:''' Uh, which is the abbreviation for ex-citing, right?

(Roxxane finds Megaminds planning room with posters and notes everywhere)

* '''Roxanne Ritchie:''' This is the motherload!
* '''Bernard:''' Oh!
* '''Roxanne Ritchie:''' Wow! Just look at this thing! You know, I really could use your help in deciphering all this.
* '''Bernard:''' Really?
* '''Roxanne Ritchie:''' You’re an expert on all things Megamind, right?
* '''Bernard:''' Yes, right.
* '''Roxanne Ritchie:''' Together, we could figure out his plan for the city and stop it. Are you in?
* '''Bernard:''' Oh, what fun!
* '''Roxanne Ritchie:''' That’s what I want to hear!
* '''Bernard:''' (whispering into his watch) Minion, code: Send in the Brainbots.
* '''Minion:''' You know, the whole point of a code is-
* '''Bernard:''' Oh, code: Just do it, Minion!

(minion presses a button and a horde of brainbots floods into the room. They grab Bernard, not knowing he’s Megamind in disguise and carry him away) 

* '''Bernard:''' (grunts) It’s me, you fools!
* '''Roxanne Ritchie:''' Bernard!

(They knock over the locker minion was in, dropping the infusing gun on the floor. Roxxane notices it, picks it up, and runs after Bernard)

* '''Megamind:''' (turning off his disguise) It’s Daddy!

(The brainbots drop him as Roxxane catches up)

* '''Roxanne Ritchie:''' (gasps) Megamind! What have you done with Bernard?
* '''Megamind:''' Bernard? Oh, yes. I’m doing horrible things to that man. I don’t want to get into it, but lasers, spikes…
* [he opens a trap door and put his head in pretending to be Bernard shouting]
* '''Bernard:''' Oh, please, no! Not the lasers and the spikes!
* '''Megamind:''' You know, the drill.
* '''Bernard:''' Oh, no! Not the drill? Aaargh!
* '''Roxanne Ritchie:''' Let him go! Or…
* '''Megamind:''' Or what?
* '''Roxanne Ritchie:''' Or I’m gonna find out what this weird looking gun does!
* '''Megamind:''' No! Don’t shoot! Don’t shoot that gun! I’ll just go get him.

(Megamind jumps into the trapdoor, pretending to fight Bernard, turning his disguise on and off)

* '''Bernard:''' Unhand me you fiend! His strength, is too much!
* '''Megamind:''' Aargh! I work out!
* '''Bernard:''' Well, it’s really paying off! You’re so fit! And strangely charismatic!
* [After a moment Bernard shoots out of the door]
* '''Roxanne Ritchie:''' Are you okay?
* '''Bernard:''' I did my best. But he’s too fantastic! Here, let me carry that heavy gun for you. 
* '''Roxanne Ritchie:''' I got us covered. (walks down the hall)

(Bernard grumbles and turns back into Megamind, sneaking around Roxane) 

* '''Megamind:''' Let go, it’s mine!
* '''Roxanne Ritchie:''' Bernard, run!

(Roxanne and Megamind fight over the gun. On monitors we see Hal walking around outside searching)

* '''Hal:''' Roxane?
* '''Megamind:''' You’re going to break it! 
* '''Roxanne Ritchie:''' Give it to me!

(They accidentally fire the gun)

* '''Megamind:''' Oh no!

(The super-powered bullet ricochets back and forth before entering a pipe, pinging around inside and moving towards Hal, standing outside)

* '''Hal:''' Roxanne?

(The bullet fires out and hits Hal)

* '''Hal:''' Ow!
* '''Megamind:''' (gasp)
* '''Minion:''' Who on earth is that?

(Roxane sneaks around to the exit door, which turns out to be a room filled with Aligators)

* '''Bernard:''' Roxanne!
* '''Roxanne Ritchie:''' Oh, Bernard! You were right about that door being exciting.

(The brainbots fly after them.)

* '''Bernard:''' This way! 

(While running, they pass a stack of explosives. Roxanne grabs one and lights it)

* '''Roxanne Ritchie:''' Ha!
* '''Bernard:''' What are you doing? 
* '''Roxanne Ritchie:''' This’ll stop them! Here! (she tosses it to Bernard) 
* '''Bernard:''' Oh! Seems a bit extreme, doesn't it? (he tries to blow it out)
* '''Roxanne Ritchie:''' Just throw it!
* '''Bernard:''' (whispering to the brainbots) Daddy’s sorry!

(He tosses it behind him and the brainbots stop to inspect it. It explodes right as they both jump out of the secret entrance)

* '''Bernard:''' (Couching) Ah! 
* '''Roxanne Ritchie:''' (Panting) Wow. That was really exciting. 
* '''Bernard:''' Yeah. 
* '''Roxanne Ritchie:''' You were very strong in there. 
* '''Bernard:''' I know. 
* '''Roxanne Ritchie:''' I’ve never seen anyone but Metro Man stand up to him like that. 
* '''Hal:''' What’s going on? 
* '''Roxanne Ritchie:''' Hal, what happened?
* '''Hal:''' I think a bee flew up my nose. I was just about to make my frontal assault to rescue you, but like, fifty ninjas tried to attack me. So, I uh, had to beat them all up and I, I did and they were all like, crying and stuff…
* '''Bernard:''' Wow, a brave one, isn’t he?
* '''Hal:''' Who are you?
* '''Hal:''' Well loh, thi…this is Bernard. He’s my partner.
* '''Hal:''' Partner?
* '''Bernard:''' Yes, yes. Partner.
* '''Hal:''' Well look, partner, I’m her partner. She doesn’t know what she’s saying, she’s been through a traumatic experience.
* '''Roxanne Ritchie:''' I better take him home. Thanks again, Bernard.
* [she hugs him]
* '''Roxanne Ritchie:''' I’ll call you tomorrow, partner.
* '''Bernard:''' Yeah, okay. I’d like that.
* '''Hal:''' That was weird for everybody. Cause you accidentally hugged him instead of me. 

(Roxanne and Hal leave while Bernard smiles) 

* '''Minion:''' (From the watch) Sir! Code: Did you find out who it was?
* '''Bernard:''' Uh? Oh! Oh. (he undoes his disguise) 
* '''Megamind:''' Code: Get the car. 
* '''Minion:''' Code: Right away, sir.

(Cut to Roxanne dropping Hal off at his Apartment) 

* '''Hal:''' Bye!
* '''Roxanne Ritchie:''' See you tomorrow, Hal.
* '''Hal:''' I’ll leave the door unlocked in case you want to check on me later. 
* '''Megamind:''' Who is this man we’ve infused with god-like power?
* [Hal trips and falls onto Megamind’s invisible car]
* '''Hal:''' Ah! Ow! Augh!
* '''Minion:''' Well sir, his name is Hal Stewart. He’s twenty eight years old, no criminal record, actually no records at all. Apparently this man hasn’t accomplished anything.
* '''Hal:''' What just happened?
* '''Megamind:''' Not yet, Minion. Not yet!
* '''Hal:''' Could this day get any more fun-tastic?
* '''Minion:''' So, I will just go ahead and defuse him since this is clearly a mistake- (he switches the gun into DEFUSE mode)
* '''Megamind:''' No, Minion! There’s something much more powerful at work here. (He tosses the gun into the back seat. This will be important later)
* '''Megamind:''' This is no mistake. It’s destiny! 

[Megamind breaks into Hal’s apartment, folding Hal’s bed on himself, trapping him in the wall]

* '''Megamind:''' Hal Shtewart! Prepare for your destiny! Hal? Hal Shtewart? Am I saying it right? 
* '''Minion:''' It’s “Stewart.”
* '''Megamind:''' Ah!

(Minion pulls the bed down, releasing Hal)

* '''Hal:''' Ah! Is this a robbery? Cause the lady across the hall has way better stuff than me.
* '''Megamind:''' Oh, look! It’s Hal Stewart. Quick, the spray!
* '''Minion:''' (The can squeaks, empty) Oops! All out!
* '''Megamind:''' Well, use the forget-me stick.
* '''Minion:''' Oh, right! (knocks out Hal with the stick)
* '''Megamind:''' (gasp) Just look at him.
* '''Minion:''' No, he doesn’t look quite the hero type to me.
* '''Megamind:''' Oh, you’re such a pill, Minion. (They fold the bed on Hal again, hiding him in the wall) A potter couldn’t ask for finer clay. 
* '''Megamind:''' I smell a hero.
* '''Minion:''' I smell something burning.
* '''Megamind:''' I think it’s working! Places! Places! Pla…places!
* '''Megamind:''' Do you have your disguise?

[Minion puts on an apron and wig and Megamind activates his disguise of a space-themed old man]

* '''Minion:''' What?
* '''Megamind:''' Hh, you look fantastic.

(the pull out bed bursts and reveals a buffed up Hal)

* '''Space Dad:''' Rise, my glorious creation. Rise. And come to Papa!
* '''Hal:''' What’s going on? (Looking at his changed body)
* '''Space Dad:''' Easy, my child.
* '''Hal:''' Who are you?
* '''Space Dad:''' I sent you to this planet to teach you about justice, honor and nobility. I am your father.
* '''Hal:''' So you’re like… my space dad?
* '''Space Dad:''' …Yeah. I’m like your space dad.
* '''Hal:''' And you are what?
* '''Minion:''' I’m your space stepmom! I’ve had some work done recently.
* '''Hal:''' Is this some kind of dream?
* '''Space Dad:''' This is a dream come true. You’ve been blessed with unfathomable power.
* '''Hal:''' What kind of power?
* '''Space Dad:''' Unfathomable. It’s unf…with…without fathom.
* '''Hal:''' Woah!
* '''Space Dad:''' Yeah. We’ve come to guide you on your path to be Metrocity’s new hero and battle the super genius of Megamind!

(He replaces a newspaper of Metroman carrying Roxanne with Hal’s face. Hal notices Roxanne and it finally clicks for him)

* '''Space Dad:''' I know this is a lot to take in. It may take months for you to come to grips-
* '''Hal:''' No freakin’ way! (He flies out the wall)
* '''Space Dad:''' I wasn’t finished!

(Hal crashes into the street, accidentally lodging himself in a car while dancing)

*  '''Hal:''' Whoo-hoo! I’m gonna be a hero! I’m gonna be a hero!
* '''Space Dad:''' See, Minion? He’s perfect!

(Mr Blue Sky plays while a montage of Titan’s training and Bernard and Roxanne dating begins)

* '''Space Dad:''' And… action! 
* '''Minion:''' Someone help me! 
* '''Hal:''' (Falls) I’m okay! (He gets up and rather than save Minion, kills the prop of Megamind with his laser vision) Zap, zap, zap! Haha! 
* '''Space Dad:''' The flames of my evil burn bright. Now you say something cool back at me!
* '''Hal:''' (Wedging himself) Look! It doesn't even hurt, don’t even feel it.

(Cut to teaching Hal to fly)

* '''Space Dad:''' No, no, no! Stomach down, hands up! Like Metro Man!
* '''Hal:''' Woah! Wait!
* '''Space Dad:''' Watch out!

(They fly through a billboard of Metro Man)

* '''Megamind:''' He’s hopeless. Hopeless!
* '''Minion:''' Maybe we should change tactics.
* '''Megamind:''' You think so?
* '''Minion:''' Oh, you know how boys are.

[Megamind gets a text message from Roxanne asking him to meet her]

* '''Minion:''' They love video games. I could throw a few parts together…
* '''Megamind:''' Can’t wait. LOL. Smiley face.
* '''Minion:''' Can’t wait for what, sir?

(Megamind disguised as Bernard is having dinner with Roxanne)

* '''Bernard:''' [Both laughing] Aha! That was such a funny story! Huh! And brilliantly told by the way. Okay, now you tell one.
* '''Roxanne Ritchie:''' Bernard, I never knew you were so funny.
* '''Bernard:''' And I never heard you laugh before.
* '''Roxanne Ritchie:''' Yeah, it’s been a while. Feels pretty good.

(Cut to Titan’s training) 

* '''Space Dad:''' (Texting Roxanne) And… action. 
* '''Hal:''' Ah! Haha! Woah, woah!   (Hal progresses through a Donkey Kong inspired obstacle course)

[Cut to Roxanne and Bernard riding bikes]

* '''Roxanne Ritchie:''' You don’t get out much, do you? 
* '''Bernard:''' Oh, what fun!
* '''Roxanne Ritchie:''' I used to come here with my mother when I was a kid. It was one of my favorite things to do. Now look at it. It’s a dump. 

(Cut to Megamind and Minion using a dehydration ray to clean garbage off the streets) 

* '''Minion:''' Why are we cleaning up the city, sir? 
* '''Megamind:''' Um, well, we don’t want to battle our new hero in a dump now, do we? 

(Cut to Bernard showing Roxanne a museum, with the stolen paintings returned) 

* '''Roxanne Ritchie:''' They’re all back! But how? Why? 
* '''Bernard:''' Maybe Megamind isn’t so bad, after all. 

(Cut to Titan, comfortably flying through city) 

* '''Hal:''' Haha!
* '''Space Dad:''' That’s it! Be free! My beautiful dove!
* '''Hal:''' Whoo-hoo! 

(Cut to Bernard and Roxanne having a picnic) 

* '''Roxanne Ritchie:''' (laughs) Okay, okay. Metro Man and I were never a couple.
* '''Bernard:''' But I thought you two-
* '''Roxanne Ritchie:''' I know. Everybody did! It’s just… well he was never really my type.
* '''Bernard:''' Really?
* '''Roxanne Ritchie:''' Okay, now you tell me something. Something you’ve never told anyone.
* '''Bernard:''' Well, in shh…school, none of the other kids really liked me. I was always the last one picked for everything.
* '''Roxanne Ritchie:''' Mmm, well it’s too bad that we didn’t go to the same school.

[Cut to Space Dad giving Titan a present)

* '''Space Dad:''' Hal, I think you’re ready for this.
* [Hal opens and takes out a really small superhero costume]
* '''Hal:''' Do I have a son?
* '''Space Dad:''' No. Ha…ha! You make me laugh. It stretches, it’s for you.
* '''Hal:''' Hey, what’s the T stand for?
* '''Space Dad:''' Titan.
* '''Hal:''' Titan? What’s that supposed to mean?
* '''Space Dad:''' It was the only name I could trademark.
* '''Hal:''' Oh.
* '''Space Dad:''' Do you have someone special in your life, Hal? 
* '''Hal:''' No, not yet, but there’s this really, really good-looking one I’ve got my eye on currently. 
* '''Space Dad:''' That’s very good. Romance is very inspiring. 
* '''Hal:''' That’s what I hear. 
* '''Space Dad:''' All you have to do is save her, and she’ll be yours.
* '''Minion:''' Who wants churros? 
* '''Space Dad:''' I do!
* '''Hal:''' I do, yeah!
* '''Space Dad:''' Churros all around. 
* '''Hal:''' Thanks, Space Stepmom. 
* '''Space Dad:''' On the count of three, unsheathe your churro. One, two, three. To Titan! Tomorrow, you will fight Megamind, and the city will know your name!

[Cut to Megamind watching Roxanne on his many TV screens reporting news]

* '''Roxanne Ritchie:''' The city’s parks restored to their original glory. The streets the safest they’ve been. The banks reopened. Has something happened to Megamind? Has someone tamed this monster? This is Roxanne Ritchie, cautiously optimistic and pleasantly confused.
* '''Minion:''' Well you seem in a very good mood tonight, sir.
* '''Megamind:''' Ha? Oh, yes. How long is this going to take, Minion?

[Minion is measuring Megamind]

* '''Minion:''' Just a few alterations, sir, and I will be done with your most terrifying cape yet! I’m calling it the Black Mambaaaaa…!
* '''Megamind:''' Black Mamba. Perfect! Ooh. Gosh, I am running late. I have to go. 
* '''Minion:''' What? Where…where are you going, sir? We have our debut battle with Titan tomorrow morning. We haven’t even tested your big battle suit yet.
* '''Megamind:''' You attend to the details, Minion. I have to…run a quick errand.
* '''Minion:''' You don’t run errands. What’s going on here?
* '''Megamind:''' What?
* '''Minion:''' Oh, wait a minute!

[Minion smells Megamind]

* '''Minion:''' Are you wearing Jean Paul Gaultier’s Pour Homme?
* '''Megamind:''' It’s just my natural musk. Now, where are the car keys? Ah!

(Minion grabs the keys) 

* '''Minion:''' Nuh-uh-uh. This is about Miss Ritchie, isn’t it? You’re going on a date with her!
* '''Megamind:''' (laughs) No, my main man! Get out of town!
* '''Minion:''' Oh, this is bad. This is bad. You’ve fallen in love with her!
* '''Megamind:''' You are forgetting your place, Minion. Now give me the keys!
* '''Minion:''' What happens when Roxanne finds out who you really are?
* '''Megamind:''' She will never find out. That’s the point of lying!

[Megamind pushes a button on Minion which makes his stretched arm fall]

* '''Megamind:''' Honestly, if I didn’t know any better, I’d think this was your first day of being evil.
* '''Minion:''' No! This has gone far enough! (Minion steals the keys back and puts them in his fishbowl) 
* '''Megamind:''' Oh, that was really grown up!
* '''Minion:''' Sir. Sir, please, it’s for your own good!
* '''Megamind:''' Oh, what do you know? 
* '''Minion:''' I may not know much, but I do know this. The bad guy doesn’t get the girl.
* '''Megamind:''' Maybe I don’t want to be the bad guy anymore!
* '''Minion:''' (shrieks) 
* '''Megamind:''' You heard me!
* '''Minion:''' (whispering) Who are you?
* '''Megamind:''' Now give me the keys!
* '''Minion:''' No! My sole purpose in life is to look after you!
* '''Megamind:''' Well, I don’t need you to look after me.
* '''Minion:''' What’re you…what are you saying? You don’t need me?
* '''Megamind:''' Let me make it clear. Code; I don’t need you.
* '''Minion:''' You know what? You know what? (he spits out the keys) Code; I’ll just pack my thing and go!
* '''Megamind:''' Code; fine!
* '''Minion:''' Code; fine back! (He starts to leave) 
* '''Minion:''' Well, good luck on your date!
* '''Megamind:''' I will!
* '''Minion:''' That doesn’t even make any sense!
* '''Megamind:''' I know!

(Minion leaves. Both of them nearly cry, but Megamind turns on his Bernard disguise, leaving for his date. Cut to Roxanne in her apartment, with all her notes on megamind, trying to put the pieces together)

* '''Roxanne Ritchie:''' I know I am so close, I can feel it. (sigh) Okay, okay. I just have to take a step back. (gasp) Wait a minute. 

(She backs up onto her balcony, now seeing all the notes together forming an image of Titan with his name above)

* '''Roxanne Ritchie:''' Titan. What’s a Titan?

[Titan floats up behind her]

* '''Hal:''' My super ears are burning!
* [Roxanne screams in shock]
* '''Hal:''' I usually just scare criminals. You haven’t been naughty, have you?
* '''Hal:''' (laughing) I’m totally messin’ with you. I’m totally messing with you. The name’s Titan.
* '''Roxanne Ritchie:''' Titan!
* '''Hal:''' You very own heroic guardian of pure awesome. What’s your name? Just kidding, I know everything about you. Oh, oh! And I brought some flowers. (He lifts an entire cart of flowers that he got off the street)
* '''Hal:''' Didn’t know what you likes, so I just grabbed, you know, all of them. 

(Roxanne just looks at him, disturbed) 

* '''Hal:''' Okay, you don’t like flowers? Okay, uh, forget the flowers. (He tosses them away) 
* '''Roxanne Ritchie:''' What do you want? 
* '''Hal:''' I thought we could go for a little flight around town. Get to know each other first. 

(Titan lifts Roxanne up and starts flying with her)

* '''Roxanne Ritchie:''' Woah! Wha- 
* '''Hal:''' This must be very thrilling for you.
* '''Roxanne Ritchie:''' What do you think you’re doing?
* '''Hal:''' Oh, am I moving too fast? You’re probably right, I should just rescue you a few times before we get all romantic. (he drops her) Woops! 
* '''Roxanne Ritchie:''' (screams) 
* '''Hal:''' (catches her) Saved you!. You are lucky to have such a hero here! 
* '''Roxanne Ritchie:''' Don’t you ever- (she pushes him and actually falls while screaming) 
* '''Hal:''' Oh no! Somebody do something! Oh, right, right! Duh! I got you! I got you! 

(He just barely catches Roxanne, nearly killing her) 

* '''Hal:''' That was a close one! You almost died, but I saved you!
* '''Roxanne Ritchie:''' Uhh..! Building!!
* '''Hal:''' Ah! 

(He chucks her over the building while plowing himself right through it with no concern as Roxanne screams in terror) 

* '''Hal:''' (catches her) Gotcha! (chuckles) Whoo! I’m sorry, what were you saying? I couldn’t hear you over the sound of me saving your life!
* '''Roxanne Ritchie:''' Put me down! Right now!
* '''Hal:''' Okay, all right. All right. Hold on. 

(He sets her down on the top of Metro Tower) 

* '''Roxanne Ritchie:''' Are you crazy?
* '''Hal:''' I suppose I’m a little crazy…about you!
* '''Roxanne Ritchie:''' Who are you? Really?
* '''Hal:''' Oh, oh, right! Well, prepare to have your mind blown little lady. (he takes off his mask] Ta-da.
* '''Roxanne Ritchie:''' Hal?
* '''Hal:''' (chuckling) Yeah! Isn’t this great? Now there’s nothing keeping us apart.
* '''Roxanne Ritchie:''' No, it’s not great.
* '''Hal:''' Wow, our first fight. This is so us, we’re like an old married couple.
* '''Roxanne Ritchie:''' Look, there is no ‘us’! Okay? There will never be an ‘us’.
* '''Hal:''' But, I have powers. I have a cape! I’m the good guy!
* '''Roxanne Ritchie:''' You are a good guy, Hal, but you don’t understand.
* '''Hal:''' No…
* '''Roxanne Ritchie:''' We need to find out why-
* '''Hal:''' This- this isn’t right! 
* '''Roxanne Ritchie:''' Hal, just take a deep breath and listen to me for a moment. 
* '''Hal:''' You’re supposed to be with me! 
* '''Roxanne Ritchie:''' I’m trying to warn you, Hal. 
* '''Hal:''' It’s Titan! Its Titan, not Hal! (he huffs and flies off the building) 

( Cut to Bernard waiting at the restaurant for Roxanne when she arrives late with windswept hair)

* '''Roxanne Ritchie:''' Bernard! 
* '''Bernard:''' Roxanne!
* '''Roxanne Ritchie:''' Sorry I’m late.
* '''Bernard:''' Wow, your hair! It looks exciting
* '''Roxanne Ritchie:''' Hmm, not the only exciting development of the night. Megamind’s created a new hero, and I know why.
* '''Roxanne Ritchie:''' It all makes sense now. He missed getting his butt kicked…
* '''Bernard:''' Mmm-hmm.
* '''Roxanne Ritchie:''' …so he created a new hero…
* '''Bernard:''' Yeah.
* '''Roxanne Ritchie:''' …to kick it for him!

[Bernard is about to drink when he spits it out in surprise]

* '''Bernard:''' Wow.
* '''Roxanne Ritchie:''' But why would he pick Hal? Hal is the worst possible person you could pick.
* '''Bernard:''' Wow! That’s a lot to take in.
* '''Roxanne Ritchie:''' It…it…it boggles my mind!
* '''Bernard:''' I am extremely boggled. You know, I’m sure we’ll get to the bottom of who’s kicking whose butt. But in the meantime, let’s enjoy each other’s company.
* '''Roxanne Ritchie:''' (laughs) I’m sorry, Bernard. Of course, you’re right. You know, I could use a breather.

[she raises her champagne glass for a toast]

* '''Roxanne Ritchie:''' To Bernard. For being the only normal thing in my crazy, upside-down world.
* '''Bernard:''' To… being normal.

(They clink their glasses, and Titan can be seen outside, watching with sadness)

* '''Bernard:''' Roxanne?
* '''Roxanne Ritchie:''' Yes?
* '''Bernard:''' Say I wasn’t so normal. Say I was bald and had the complexion of…of a popular primary color as a random, non-specific example. Would you still enjoy my company?
* '''Roxanne Ritchie:''' Of course! You don’t judge a book by its cover or a person from the outside.
* '''Bernard:''' Aaah! That’s a relief to hear.
* '''Roxanne Ritchie:''' You judge them based on their actions.
* '''Bernard:''' Well, that seems kind of petty. Don’t you think?

(Roxanne laughs, and slowly moves in to kiss Bernard. As they kiss, she accidentally brushes his watch, disabling his disguise. Diners start to scream at seeing Megamind, causing Roxanne to open her eyes and push Megamind away in shock) 

* '''Megamind:''' What? What?
* '''Megamind:''' (gasp) Aaah! Don’t look at me! Just…just a technical glitch! Don’t look yet.

(He fiddles with the watch, accidentally turning himself into the Warden)

* '''Warden:''' Well, never mind that.
* '''Megamind:''' (groans) Okay!

(He turns himself into Space Dad by accident) 

* '''Space Dad:''' Where were we?

[Roxanne throws a glass of water onto the watch, shorting it out and turning him back into Megamind.

* '''Roxanne Ritchie:''' You…
* '''Megamind:''' Now, now, hold on!
* '''Roxanne Ritchie:''' You! 

(She leaves as it starts to rain. Garbage rehydrates and appears on the street again. Megamind pulls up in his invisible car.) 

* '''Megamind:''' I can explain.

[Roxanne groans and turns away in anger]

* '''Megamind:''' What about everything you just said? About judging a book by its cover?
* '''Roxanne Ritchie:''' Well, let’s take a look at the contents then, shall we? You destroyed Metro Man, you took over the city, and then you actually got me to care about you! (sighs) Why are you so evil? Tricking me! What could you possibly hope to gain?

[Megamind says nothing, looking at her with sadness) 

* '''Roxanne Ritchie:''' Wait a minute. Oh. I don’t believe this. 

(He says nothing) 

* '''Roxanne Ritchie:''' Do you really think that I would ever be with you?
* '''Megamind:''' No.

(She walks past him. Megamind leaves without his car, walking down the street. Roxanne takes a moment to look back at him before turning away. Cut to Megamind at his lair)

* '''Megamind:''' Okay, Minion! You were right! I was…less right! We should stick to what we’re good at. Being bad. Minion?

Minion is gone. Megamind looks at his plans with Titan and realizes there’s only one thing left for him now. Villany. He whistles the brainbots over)

* '''Megamind:''' (pointing at a brainbot) You there. 

(One of the Brainbots pushes another into the front) 

* '''Megamind:''' Yeah, you. Bring out the Black Mamba. 

(The brainbots dress Megamind into his Black Mamba cape, and unveil Megaminds giant mech battle suit)

* '''Megamind:''' Okay, Titan! It’s time to go down in style.

(Evil laughter and the suit activating is followed by Megamind in his Mech walking through the streets of the city. Back In Black plays.) 

* '''Megamind:''' (evil laughter) I hear there’s a new hero who dares challenge my evil. Where is the one they call Titan? (laughs) Challenge me, if you dare! 

(He readies himself outside of the city hall. A huge crowd waits to see the fight. Time passes and the crowd slowly dissipates. Megamind waits for hours, eventually playing with cars as toys) 

* '''Megamind:''' Brrrr.. Errrr! Oh no, we’re gonna crash! Ahhh!
* '''Megamind:''' (sighs) This is embarrassing.

(he gets up and walks over to Hal’s apartment building.)

* '''Megamind:''' Of all the inconsiderate, bone-head, irresponsible, rude…! Unprofessional! That’s what this is!

(He punches into Hals apartment, getting out of his mech)

* '''Megamind:''' Would Metro Man have kept me waiting? Of course not! He was a pro!
* '''Hal:''' Hey, Megamind. You’re actually the guy I want to see. Also, there’s a door here.
* '''Megamind:''' Do you have any idea how long I waited for you?
* '''Hal:''' No, no, no! I totally understand what you’re saying. Could you just…just shut up for one second, I’m trying to beat this level.
* '''Megamind:''' Were you even planning on showing up? What's this?

(He spots a large stash of money and objects at the end of Hal’s apartment) 

* '''Megamind:''' Where did you get all this stuff?
* '''Hal:''' It doesn’t belong to me.
* '''Megamind:''' You stole it!
* '''Hal:''' Pretty cool, right?
* '''Megamind:''' No, no, no, no! You’re a hero!
* '''Hal:''' Being a hero is for losers. It’s work, work, work, twenty-four-seven. And for what? I only took the gig to get the girl and it turns out Roxanne doesn’t want anything to do with me.
* '''Megamind:''' Roxanne Ritchie?
* '''Hal:''' Yeah, Roxanne Ritchie. I saw her having dinner and making googly eyes at some intellectual dweeb.
* '''Megamind:''' Oh.
* '''Hal:''' Who needs all that noise? That’s why I think we should team up.
* '''Megamind:''' You…wait…what?
* '''Hal:''' With my power and your big-headedness, we could rule the city!
* '''Megamind:''' You want to team up? 
* '''Hal:''' I even drew up some new costume designs. See?
* '''Megamind:''' Costume designs? 
* '''Hal:''' You’d be the brains, so you’d get a little brain wearing glasses on your costume or something, and since I’m the cool one, I’d have, like, two tanks sword fighting or-

(Megamind grunts and pushes him away)

* '''Megamind:''' I can’t believe you. All your gifts, all your powers and you…you squander them for your own personal gain!
* '''Hal:''' Yes!
* '''Megamind:''' No! I’m the villain! You’re the good guy! I do something bad, and you come and get me. That’s why I created you!
* '''Hal:''' Yeah, right! You’re nuts! Space dad told me-
* '''Megamind:''' Look, I’m your space dad!

(he transforms)

* '''Space Dad:''' You should be more like Metro Man.
* '''Hal:''' Ah! You tricked me?
* '''Megamind:''' Oh, don’t like that, huh? Well, there’s more.

[he transforms into Bernard]

* '''Bernard:''' I’m also the intellectual dweeb dating Roxanne.
* '''Hal:''' No…
* '''Bernard:''' And we were smooching up a storm!

[he transforms back into his real form]

* '''Megamind:''' *makes mocking kissing sounds*
* '''Hal:''' When I get my hands on you I'm gonna-
* '''Megamind:''' Yes, yes, I know! Bring me to justice. Oh god how I've missed this!

(Hal strikes and sends Megamind flying)

* '''Megamind:''' Oh! And the hero strikes the first blow! But evil returns with a backhand! (laughs maniacally while smacking Titan away) Yes!
* (Hal flies back to him but Megamind hides behind a wall, scaring a worker)
* '''Megamind:''' Shh! (laughs)
* '''Hal:''' Come out you little freak! I wanna see what that big brain looks like on the pavement!

(Megamind taps Hal’s shoulder from behind before punching him into a building. Hal flies out and gives chase) 

* '''Megamind:''' You fell for the oldest evil trick in the book!
* '''Hal:''' You little blue twerp!

(Hal flies to intercept, but Megamind strikes him using a streetlight as a sword)

* '''Megamind:''' En garde! (laughs)

(Hal picks up a streetlamp as well, and they engage in a swordfight)

* '''Megamind:''' Haha! Now, that’s the spirit! Parry! Thrust! Parry again! Now it’s time for some witty back-and-forth banter! You go first!
* '''Hal:''' (angry screaming)
* '''Megamind:''' Okay! Look, I’m not sure where to go with that!
* '''Hal:''' This one’s for stealing my girlfriend!

(He slices at the mechs heel, tripping it and launching it into the air)

* '''Hal:''' This one’s for Space Dad making a fool out of me!

(He punches the mech down, crashing it through multiple floors of a building)

* '''Hal:''' And Megamind, (he shatters the mech’s glass and grabs him) this one’s for Space Stepmom! You lied to her! 
* '''Megamind:''' Oh, well done! I thought that battle went really, really well. I mean, I have a few notes.
* '''Hal:''' Notes?!
* '''Megamind:''' But they can wait. (sighs) You can take me to jail now.
* '''Hal:''' Oh, no, no, no! I was thinking more like the morgue. You’re dead! (his eyes start to glow red)
* '''Megamind:''' Whoa, whoa, whoa! This isn’t how you play the game.
* '''Hal:''' Game over!

(Megamind gasps in shock, pressing an emergency button that ejects him into the street before getting zapped) 

* '''Megamind:''' Brainbots! 

(The brainbots catch him and carry him away from Hal as he chases him) 

* '''Megamind:''' I’m calling time out! Time out? Time out, time out!

(Hal punches through a gas truck, blasting the brainbots away and walks towards megamind laying on the street)

* '''Megamind:''' Brainbots, initiate the fail-safe. 

(Right as Hal is about to finish off Megamind, the brainbots drop a large Copper dome overtop of him)

* '''Megamind:''' (chuckles) Guess what, Buster Brown? It’s made from copper. You’re powerless against it. It’s the very same metal used to defeat…

[Hal’s fist punches out through the metal]

* '''Megamind:''' …Metro Man?
* '''Hal:''' You should stop comparing me to Metro Man.

(Hal chucks the copper dome at Megamind, who barely manages to escape down a subway tunnel)

* '''Hal:''' You can run, Megamind, but you can’t hide!

(The citizens start crowding around Hal, praising him)

* '''Mayor:''' We’re saved! We’re saved! What’s your name, new hero?
* '''Hal:''' It’s Titan.
* '''Mayor:''' Thank you. Thank you! Titan has freed us.
* '''Hal:''' Oh, I wouldn’t say free. More like, under new management.

(He flicks the Mayor, sending him rolling down the street. Cut to Megamind, ringing the doorbell to Roxanne's apartment)

* '''Roxanne Ritchie:''' (groans) What do you want?
* '''Megamind:''' Titan’s turned evil.
* '''Roxanne Ritchie:''' Congratulations, another one of your genius plans has backfired on you. And why did my doorman let you up?
* [Megamind gives her a dehydrated cube)
* '''Roxanne Ritchie:''' (gasps) Carlos!
* [Roxanne tries to shut the door on him]
* '''Megamind:''' Please Roxanne, no! No! I need your help.
* '''Roxanne Ritchie:''' Why do you need my help?
* '''Megamind:''' (sighs) Because you’re the smartest person I know.
* '''Roxanne Ritchie:''' (sighs) But you can’t hide here. (She lets him in)
* '''Megamind:''' The copper should have worked. Why didn’t the copper work? The copper worked perfectly well last time. 
* '''Roxanne Ritchie:''' Copper? You’re not making any sense. 
* '''Megamind:''' Look, if we don’t find Titan’s weakness, he’ll destroy the whole city.
* '''Roxanne Ritchie:''' Okay, how can I help?
* '''Megamind:''' We need to find answers. You knew Metro Man best, did he have a hideout? A cave? A solitary fortress of some kind? Anything that would give us clues?
* '''Roxanne Ritchie:''' Well, there is one place I know.

(Cut to them driving in a somewhat abandoned field) 

* '''Roxanne Ritchie:''' You gave him these powers, can’t you just take them away?
* '''Megamind:''' I can’t. I lost my diffuser gun when I misplaced the invisible car. The night you dumped me. Alone. In the rain. Did you ever look back?
* '''Roxanne Ritchie:''' No!

[she breaks hardm causing Megamind’s head to hit the windshield]

* '''Megamind:''' Ow! My giant blue head!
* '''Roxanne Ritchie:''' Whoops. I guess we’re here.
* '''Megamind:''' (grunts) So, this is where he hid it. After all these years. My old shoolhouse.

(Cut to them inside the abandoned schoolhouse) 

* '''Roxanne Ritchie:''' You know, I think there’s an apology in order for the other night. 
* '''Megamind:''' Okay, that would be nice, but make it quick. We have much more pressing matters to deal with. 
* '''Roxanne Ritchie:''' (frustrated groan) 

(He opens the door to a large Metro Man themed lounging area, with many different relics from his glory days) 

* '''Megamind:''' Wow! I can’t believe he kept all this stuff. (He sees a cape with a neck rest attached) (sighs) I remember when he wore that. 
* '''Roxanne Ritchie:''' Shouldn’t we try to stay focused here? 
* '''Megamind:''' Yes, of course, right, focused.
* '''Roxanne Ritchie:''' Hey! Come over and look at this.  

(Megamind stumbles over, wearing the neck rest cape) 

* '''Megamind:''' What is it? What did you find? 
* '''Roxanne Ritchie:''' Um. Look. This glass has ice cubes in it.
* '''Megamind:''' Yes, that’s what happens when water gets cold.

(Metro Man with a robe and beard walks behind them, shocked to see them, and tries to quietly walk away) 

* '''Roxanne Ritchie:''' No. What I’m saying is don’t you think it’s a little odd that the ice hasn’t melted yet?
* '''Megamind:''' One of life’s great mysteries.

(Metro Man’s step creaks a floorboard, causing Roxane and Megamind to both slowly turn and make eye contact with Metro Man)

* '''Metro Man:''' Hey.

[Megamind and Roxanne both scream. Cut to a news report of Titan destroying Metro City]

* '''News Reporter:''' We now have confirmed reports. Titan, first thought to be the city’s new hero, has turned evil. The city has never seen this level of destruction. If only Metro Man were still alive. 
* '''Roxanne Ritchie:''' You’re alive?
* '''Megamind:''' You’re alive?
* '''Metro Man:''' I’m alive.
* '''Roxanne Ritchie:''' But…but…but we…we saw your skeleton. You were dead.
* '''Megamind:''' Are you a ghost?
* '''Roxanne Ritchie:''' There had better be an amazing explanation for this.
* '''Megamind:''' Speak, apparition.
* '''Metro Man:''' (after a long pause) Okay. Okay, okay, okay. You both deserve the truth. It all started back at the observatory.

(flashback)

* '''Metro Man:''' [voice over] Roxanne was kidnapped, I was gonna stop you. My head wasn’t in the game that day. We were kind of goin’ through the motions. So, using my super speed, I decided to go clear my head. Then I realized, we had done this same silly charade our entire lives. I tried to get my mind off how I was feeling, but I just felt stuck. And I began to realize, despite all my powers, each and every citizen of Metro had something I didn’t. A choice. Ever since I can remember,  I’ve always had to be what this city wanted me to be. But what about what I wanted to do? Then it suddenly hit me. I do have a choice! I can be whatever I wanna be! No one said that this hero thing had to be a lifetime gig. You can’t just quit either. That’s when I got the brilliant idea… to fake my death.
* '''Metro Man:''' Copper drains my powers! 
* '''Megamind:''' Your weakness is copper? 
* '''Metro Man:''' Once your death ray hit, I’ve never felt so alive.
* '''Metro Man:''' So I borrowed a prop from a nearby nursing school. Metro Man was finally dead! And Music Man was born!
* '''Roxanne Ritchie:''' Music Man?
* '''Metro Man:''' That way I can keep my logo.
* '''Megamind:''' Cause of what?
* '''Roxanne Ritchie:''' Come again?
* '''Metro Man:''' I was finally free to get in touch with my true power. Weaving lyrical magic. Check this out.
* [he starts to play the guitar]
* '''Metro Man:''' [singing] I have eyes, that can see, right through lead…
* '''Roxanne Ritchie:''' You’re horrible!
* '''Megamind:''' Granted, you have talent! But there’s a madman out there destroying our… your city! 
* [Roxanne starts to throw things on to Metro Man’s head]
* '''Roxanne Ritchie:''' How could you do this? The people of the city relied on you and you deserted them.
* '''Roxanne Ritchie:''' You left us in the hands of…HIM! [to Megamind] No offense.
* '''Megamind:''' No, I’m with you! Look, we need your help. 
* '''Metro Man:''' I’m sorry. I really am. Um, I’m…I’m done. You know, little buddy, there’s a yin for every yang. If there’s bad, good will rise up against it. It’s taken me a long time to find my calling. Now it’s about time you find yours.

(outside)

* '''Roxanne Ritchie:''' Hey, who needs him? We can beat Titan ourselves. I say we go back to the evil lair, grab some ray guns, hold ’em sideways and just go all ‘gangsta’ on him.
* '''Megamind:''' We can’t.
* '''Roxanne Ritchie:''' So that’s it. You’re just giving up?
* '''Megamind:''' I’m the bad guy. I don’t save the day. I don’t fly off into the sunset and I don’t get the girl. I’m going home.

(Megamind turns himself in to prison)

* '''News Reporter:''' Unless someone comes to our aid soon, all may be lost. Thousands have already fled the city in a mass exodus. Remaining citizens are warned to stay indoors until further notice. Authorities have issued a warning to stay out of the downtown area at all costs.   (Roxanne drives downtown to find Titan) 

<br />

* '''Roxanne Ritchie:''' Hal! Hal! 
* '''Hal:''' Let me guess. After seeing how awesome I am, you’ve finally come to your senses. Well, I’m over you. 
* '''Roxanne Ritchie:''' I’ve come to stop you, Hal. 
* '''Hal:''' (scoffing) You? Oh, wow. Okay. What are you going to do? Report me to death?
* '''Roxanne Ritchie:''' I was going to try reasoning with you. You and I, we worked together for a long time. I know you. 
* '''Hal:''' You don’t know me. You never took the time to know me. This is the first time we’ve hung out socially, and it’s when I’m about to destroy the city! 
* '''Roxanne Ritchie:''' I want to talk to the real Hal. I want to talk to the guy who loved being a cameraman and eating dip and being a nerd, and being not as scary as the Titan Hal. 
* '''Hal:''' Too late! 

[watching TV in his prison cell, Megamind sees Hal holding a camera]

* '''Hal:''' Megamind! You and I have some unfinished business. I’ll be waiting at Metro Tower. Oh, and just so you don’t get cold feet… 
* (he points the camera at Roxxane, bound to the top of the tower) 
* '''Megamind:''' Roxanne…
* '''Hal:''' Come on, Roxy. Call for your hero to come rescue you!
* '''Roxanne Ritchie:''' (sigh) Megamind, I don’t even know if you’re listening. But if you are, you can’t give up! The Megamind I knew would never have run from a fight, even when he knew he had absolutely no chance of winning. It was your best quality. You need to be that guy right now. The city needs you. I need you.
* '''Megamind:''' Roxanne!
* '''Hal:''' You have one hour. Don’t keep me waiting. (the tv goes static) 
* '''Megamind:''' Warden! Warden! Listen to me, you have to let me go. Titan has to be stopped!
* '''Warden:''' Sorry, Megamind. You still have eighty-eight life sentences to go. Plenty of time to reflect on what you’ve done.
* '''Megamind:''' Do you want to hear me say it? I’ll say it. Here it is; from the blackest part of my heart. I am sorry.
* '''Warden:''' Not buying it.
* '''Megamind:''' (sighs) I don’t blame you. I’ve terrorized the city countless times. Created a hero who’s turned out to be a villain. I lied to Roxanne and… my best friend, Minion, I treated like dirt. But please don’t make this city, don’t make Roxanne pay for my wrongdoings.

[Warden opens the cell door]

* '''Warden:''' Apology accepted.

(The warden turns his watch and is revealed to have been Minion in disguise.) 

* '''Megamind:''' Oh, Minion. You fantastic fish, you!
* '''Minion:''' What are we waiting for? We better get going. 
* '''Megamind:''' (Both chuckling) You got me. 
* '''Warden:''' Good luck, fellas! 
* '''Megamind:''' We’re gonna die! 
* '''Minion:''' Wait, what? 

(Cut to titan, speaking into his camera again on TV) 

* '''Hal:''' Hey, Metro losers. This is Metro Tower. They say it’s supposed to be a symbol of our city’s strength. But for me, it’s a reminder of the day this woman ferociously ripped out my heart! And I hate reminders! 

(Titan flies down and cuts the entire tower in half, causing it to start falling with Roxxane still tied to it) 

* '''Roxanne Ritchie:''' Hal! 

(Titan lands on the top, stopping the tower from falling temporarily) 

* '''Roxanne Ritchie:''' Please don’t do this. I know there’s still good in you, Hal.
* '''Hal:''' You’re so naive, Roxy. You see the good in everybody, even when it’s not there. You’re living a fantasy. There is no Easter Bunny. There is no Tooth Fairy. And there is no Queen of England. This is the real world, and you need to wake up!

(Suddenly, black smoke begins to rise up. “Welcome to the Jungle” plays. Thousands of brainbots fly up and start congregating into a massive head as megamind speaks) 

* '''Megamind:''' You dare challenge Megamind?
* '''Hal:''' This town isn’t big enough for two supervillains!
* '''Megamind:''' Oh, you’re a villain all right, just not a super one!
* '''Hal:''' Yeah? What’s the difference?

[Megamind’s giant hologram head opens its mouth and from the inside appears Megamind]

* '''Megamind:''' Presentation!

(Titan charges at him but Megamind drops, landing on a hovercycle as Titan is trapped by the giant head) 

* [Megamind frees Roxanne from the tower]
* '''Roxanne Ritchie:''' I knew you’d come back.
* '''Megamind:''' Well, that made one of us!

(He frees Roxanne and she hops onto the bike. At the same time, Titan overpowers the giant head and shatters it, his eyes red. He flies down and picks up the tower, heaving it towards Megamind and Roxanne) 

* '''Roxanne Ritchie:''' What’s the plan?
* '''Megamind:''' Well, it mostly involves not dying!
* '''Roxanne Ritchie:''' I like that plan!

(The tower crashes and gains on Megamind, at the same time Megamind loses control of the bike, not able to turn it or make it go faster) 

* '''Roxanne Ritchie:''' Go faster! Make this thing go faster! 
* '''Megamind:''' I can’t control it! 

(He throws Roxanne off the bike onto a fabric awning, before the bike crashes and he is Impaled by the tower) 

* '''Roxanne Ritchie:''' No. 

(Titan lands on the ground behind Roxanne) 

* '''Hal:''' Well that was easy! Looks like there’s only one loose end now.

(He kicks a bus at Roxanne, but before it hits, it’s cut in half. Metro Man appears.)  

* '''Metro Man:''' Please, let’s have a little respect for public transportation.
* '''Roxanne Ritchie:''' You came back!
* '''Metro Man:''' You were right, Roxanne. I never should have left.
* '''Hal:''' Woah! I…I thought you were dead!
* '''Metro Man:''' My death was…greatly exaggerated. So, you’re the punk I’ve heard about.

(Titan flees while Metro Man flies after him. Roxanne holds Megamind.) 

* '''Megamind:''' I’m sorry. I did the best I could.
* '''Roxanne Ritchie:''' (sniffles) I’m so proud of you.
* [He turns his watch and transforms back into Minion, with his glass bowl shattered) ]
* '''Roxanne Ritchie:''' Minion?
* '''Minion:''' Surprise. Heh…heh…heh.. He’s the real hero.
* '''Roxanne Ritchie:''' Megamind!

(Metro Man flies after Titan while wearing his watch) 

* '''Metro Man:''' Going somewhere?
* '''Hal:''' [surprised] Ah!
* '''Metro Man:''' Besides jail?

(Metro Man grabs Titan, about to punch him) 

* '''Hal:''' No, not in the face man, please! 
* '''Metro Man:''' If you know what’s good for you, Titan, you’ll stay out of Metrocity. 
* '''Hal:''' You got it! 
* '''Metro Man:''' For good! 

(Titan flees, flying out of the city. Metro Man descends down to the crowd of people watching. Roxanne gestures for his hand, and Metro Man hesitantly gives it to Roxanne. She then turns the watch, showing everyone that it was, in fact, Megamind who saved them. The crowd is in an unsure silence, before Titan appears once again behind them.)

* '''Hal:''' Pretty sneaky, sis. But there’s only one person I know who calls this town Metrocity.
* '''Megamind:''' Oops.
* '''Hal:''' You.

(The crowd flees. Megamind tries to fight Titan, but his suit shatters upon impact.) 

* '''Megamind:''' (Nervously laughing) 
* '''Hal:''' Bet you think it’s really funny, huh? (He throws Megamind) Let’s all laugh at the really cool guy, huh? Well you’re not gonna be laughing for long!

(Megamind dodges Titans laser vision as Roxanne spots the invisible car behind them, where Megamind left his defusing gun) 

* '''Roxanne Ritchie:''' (gasps) The invisible car!
* '''Roxanne Ritchie:''' Hey, remember that night that I dumped you?
* '''Megamind:''' You’re bringing this up now?
* '''Roxanne Ritchie:''' Well, I did look back!
* '''Megamind:''' You did? You did?!
* '''Roxanne Ritchie:''' Yes! And you should “look back” right now.
* '''Megamind:''' (He looks behind him and spots the car) Oh! I get it!

(Megamind runs to the car, but Titan flies over and stomps him into the ground before picking him up)

* '''Hal:''' This is the last time you make a fool out of me!
* '''Megamind:''' I made you a hero. You did the fool thing all by yourself!

(Hal punches Megamind into the wall next to the car, cracking concrete. Megamind, now injured, crawls towards the car) 

* '''Hal:''' You’re so pathetic. No matter what side you’re on, you’re always the loser.
* '''Megamind:''' There’s a benefit to losing. You get to learn from your mistakes.

[he then jumps into the invisible car and grabs the diffuser gun, leaving Hal confused. Megamind grabs the gun, but it is warming up. ]

* '''Megamind:''' Oh, you’ve got to be kidding me! Minion, if I live, I will kill you. 

(Hal punches through the door and yanks it off, Megamind still on the door. The invisibility wears off and Titan sees him again) 

* '''Megamind:''' (Nervously chuckles and locks the door) 
* '''Hal:''' Enjoy your flight! (He hurls the door high into the air, Megamind still on it) 
* '''Roxanne Ritchie:''' Megamind!

(As Megamind falls to his death, his voiceover from before returns) 

* '''Megamind:''' So, this is how it ends. Normally I’d chalk this up to my last glorious failure. 

(As he’s falling, Megamind notices he’s falling towards a water fountain. He has a realization and takes out his dehydration gun, turning himself into a cube) 

* '''Megamind:''' But not today! What can I say? Old habits die hard.
* '''Hal:''' Say bye-bye, Roxy. 

(The cube lands in the water in front of Titan, rehydrating into Megamind with the de-fuser gun now fully powered) 

* '''Megamind:''' Ollo!

(He sticks the gun into Hal, extracting his super powers, turning him back into his old self) 

* '''Hal:''' (Gasps and yells) 
* '''Megamind:''' Thing about bad guys, they always lose!
* '''Hal:''' (groans) 
* '''Roxanne Ritchie:''' You did it. You won!
* '''Megamind:''' Well, I finally had a reason to win. You.

[Roxanne hugs him. The crowd re-emerges as Minion coughs)

* '''Megamind:''' Minion!
* '''Minion:''' I can’t see, it’s cold and warm, and dark and light.
* '''Megamind:''' It’s me, Minion. I’m right here.
* '''Minion:''' We’ve had a lot of adventures together, you and I.
* '''Megamind:''' We have, Minion.
* '''Minion:''' [coughing] Oh…I mean most of them ended in horrible failure, but we won today. Didn’t we, sir?
* '''Megamind:''' Yes, Minion. We did it. Thanks to you.
* '''Minion:''' Code; we’re the good guys now.
* '''Megamind:''' Code; I guess we are.
* '''Minion:''' Oh…oh…I…I’m going! I think this…this is it! I’m going, going far…!

[he shakes and coughs and finally closes his eyes.]

(Megamind gently picks up Minion, and simply tosses him in the water fountain) 

* '''Megamind:''' (groans) What a drama queen!

[Minion pops out of the water]

* '''Minion:''' You know, I’m feelin’ much better now. I guess I just needed a swim.
* '''Megamind:''' He had you, didn’t he?
* '''Roxanne Ritchie:''' [relieved] Whew!
* '''Megamind:''' Classic Minion. Don’t give me that face. Reels you in with that little face. Look at that face.
* '''Minion:''' We did it! We did it!
* (All laughing) 
* '''Megamind:''' Fist pump!
* '''Roxanne Ritchie:''' We did it!
* '''Megamind:''' We won! We won! We won!

[he hugs Roxanne. The crowd gets close as they’re celebrating their victory over, scaring Megamind into pulling his gun out]

* '''Megamind:''' Get back, you savages!
* '''Roxanne Ritchie:''' Sorry! Sorry! He’s just not used to positive feedback.

Bad starts playing as Megaminds final voice over begins. 

* '''Megamind:''' Funny, I guess destiny is not the path given to us… but the path we choose for ourselves.

(Pan to Megamind at a similar ceremony to the one Metro Man had at the beginning of the movie) 

* '''Megamind:''' All right! Put your hands in the air!
* (The crowd cheers) 
* '''Megamind:''' Now hand over your wallets!
* (The crowd gasps) 
* '''Megamind:''' I’m just kidding! (laughs) Just kidding.

(Roxanne hugs him, putting a white cape on him) 

* '''Megamind:''' [voice over] I have to admit, being good has its perks.
* 
* '''Roxanne Ritchie:''' You know, you look pretty good in white.
* '''Mayor:''' Megamind, if you ple-(screams) 

(Megamind spins around with his gun, shooting the ribbon and revealing the giant Megamind statue. A man in a large trench coat shuffles in front of a man in the crowd) 

* '''Man in Crowd:''' Uh, hey! My kid can’t see.
* '''Metro Man:''' Sorry, my friend. Way to go, little buddy. I knew he had it in him.
* '''Mayor:''' Ladies and gentlemen, Megamind! Defender of Metro City!

[the crowd cheers]

* '''Megamind:''' You know, I like the sound of that. Hit it!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)

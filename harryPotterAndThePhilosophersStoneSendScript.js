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
HARRY POTTER AND THE PHILOSOPHER'S STONE
By J.K. Rowling
==Doorstep Delivery==
''[It is nighttime in Surrey, we see an owl on the street sign "PRIVET DRIVE" and the camera pans to the street with very identical looking brown bricked houses. The owl flies away and an elderly man with crimson robes and a long silvery white beard named Albus Dumbledore walks out of a forest near the street, past a tabby cat standing next to what looks like a shed. He takes out his deluminator and activates it. Dumbledore zaps all the light out of the lampposts. He puts away the device and a cat meows. Dumbledore looks down at the cat.]''

'''Dumbledore''': I should have known that you would be here...Professor McGonagall.

''[The cat silently looks at him, and the camera turns towards a wall. The cat's shadow turns into a woman with a tall hat. There are footsteps and Minerva McGonagall is revealed.]''

'''McGonagall''': Good evening, Professor Dumbledore. Are the rumors true, Albus?

'''Dumbledore''': I'm afraid so, Professor. The good, and the bad

'''McGonagall''': And the boy?

'''Dumbledore''': Hagrid is bringing him.

'''McGonagall''': Do you think it wise to trust Hagrid with something as important as this?

'''Dumbledore''': Ah, Professor, I would trust Hagrid with my life.

''[There is a motor sound, and the two professors look up to see a flying motorcycle coming down from the air. It skids on the street and halts. A large man with shoulder length black hair and beard named Rubeus Hagrid takes off his goggles.]''

'''Hagrid''': Professor Dumbledore, Sir. Professor McGonagall.

'''Dumbledore''': No problems, I trust, Hagrid?

'''Hagrid''': No, sir. Little tyke fell asleep just as we were flying over Bristol. Heh. Try not to wake him. There you go.

''[Hagrid hands a baby wrapped in a bundle over to Dumbledore.]''

'''McGonagall''': Albus, do you really think it's safe, leaving him with these people? I've watched them all day. They're the worst sort of Muggles imaginable. They really are...

'''Dumbledore''': The only family he has.

''[They stop outside a house which is 4 Privet Drive.]''

'''McGonagall''': This boy will be famous. There won't be a child in our world who doesn't know his name.

'''Dumbledore''': Exactly. He's better off growing up away from all that. Until he is ready.

''[Dumbledore places the baby on the ground slowly. Hagrid sniffles, he is sobbing a little. He clears his throat.]''

'''Dumbledore''': There, there, Hagrid. It's not really goodbye, after all.

''[Hagrid nods. Dumbledore takes a letter and places it on the baby, who is now at the foot of the door.]''

'''Dumbledore''': Good luck...Harry Potter.

''[The baby has a lightning-bolt shaped scar on his forehead. The camera slowly zooms towards the scar which glows brightly and it immediately flashes, transitioning to a stormy cloud sky. The film's title in metallic gold zooms out around the camera, and lightning flashes to brighten it up. Then, the lightning flashes engulf the screen, transitioning it to the present time.]''
==The Vanishing Glass==
''[The scar's glow immediately dies down, and the camera pans to see Harry who is now 10 years old, still sleeping. Then, the light turns on outside his bedroom cupboard under the stairs]''

:'''Petunia''': Up. Get up. ''[She knocks on his closet door repeatedly]'' Now! ''[Smacks door of closet and walks into the living room]''
:''[Harry wakes up, turns on his bedroom light and puts on his glasses with tape on the bridge, indicating that it was partly damaged. A large, tubby boy, Dudley Dursley, suddenly comes running down the stairs above the closet. He stops half-way down and goes back, jumping on the staircase.]''
:'''Dudley''': Wake up, cousin! We're going to the zoo!
:''[Harry looks up to the join works of the stairs with small amounts of dusts rising. Dudley laughs, comes down the stairs and runs for the kitchen. Harry tries to come out of the closet, but is pushed back in by Dudley. Petunia is in the kitchen, where Dudley has gone.]''
:'''Petunia''': Oh, here he comes, the birthday boy!
:'''Vernon''': Happy birthday, son.
:''[Petunia and Dudley giggle together. Harry comes into the kitchen, dressed in outgrown clothes.]''
:'''Petunia''': ''[to Harry, unpleasantly]'' Why don't you just cook the breakfast, and try not to burn anything.
:'''Harry''': Yes, Aunt Petunia.
:''[Harry then gets to work on cooking the bacon]''
:'''Petunia''': I want everything to be perfect for my Dudley's special day.
:'''Vernon''': ''[to Harry, who is taking his time placing the bacon on the plates]'' Hurry up! Bring my coffee, boy!
:'''Harry''': Yes, Uncle Vernon.
:''[Petunia leads Dudley over to the family room, where there are a vast amount of presents. Dudley stares.]''
:'''Petunia''': Aren’t they wonderful, darling?
:'''Dudley''': How many are there?
:'''Vernon''': Thirty-six. Counted 'em myself.
:'''Dudley''': Thirty-six?! But last year last year I had thirty-seven!!
:'''Vernon''': Err yes, well, some of them are quite a bit bigger than last year.
:'''Dudley''': I don't care how big they are!
:'''Petunia''': ''[calming him down]'' Oh, now, now, now. This is what we're going to do, is that when we go out, we're going to buy you two new presents! How's that, pumpkin?
:''[Outside the house morning. The happy family is heading to the car.]''
:'''Petunia''': This will be a lovely day at the zoo. I'm really looking forward to it.
:''[Harry then goes to go in the car, but Vernon stops him, pointing his keys at him.]''
:'''Vernon''': I'm warning you now, boy. Any funny business, any at all, and you won't have any meals for a week. Get in.
:''[At the London Zoo. The family is in the reptile house, looking at a large Boa constructor.]''
:'''Dudley''': Make it move.
:''[Vernon taps the glass of the cage.]''
:'''Vernon''': Move!
:''[Dudley taps the glass much harder, and Vernon nervously winces.]''
:'''Dudley''': MOVE!
:'''Harry''': He's asleep!
:'''Dudley''': He's boring.
:''[Dudley and his parents head over to another enclosure. Harry is left with the snake.]''
:'''Harry''': Sorry about him. He doesn't understand what it's like, lying there day after day, having people press their ugly faces in on you. ''[The snake looks up and blinks.]'' Can you...hear me? ''[The snake nods]'' It's just...I've never talked to a snake before. Do you...I mean...do you talk to people often? ''[The snake shakes its head]'' You're from Burma, aren't you? Was it nice there, do you miss your family? ''[The snake turns its head in the direction of a sign which says, Bred in Captivity]'' I see. That's me as well. I never knew my parents, either.

''[The now awake snake has attracted Dudley's attention. He comes over to the glass, knocking Harry to the floor.]''
:'''Dudley''': Mommy, dad, come here! You won't believe what this snake is doing!
:''[Dudley puts his hands on the glass wall. With his back turned, Harry glares at him. Suddenly, the glass disappears, causing Dudley to wretch forward, losing his balance.]''
:'''Dudley''': Whoa! Ahh! Ahh!!
''[Dudley falls into the snake enclosure, sputtering in a pool of water. Harry snickers at what he saw. The snake gets out of the exhibit, stopping in front of Harry.]''
:'''Snake''': Thanks.
:'''Harry''': Anytime.
:''[The snake slivers off to the exit.]''
:'''Man''': SNAKE!
:''[There is a lot of screaming as the snake heads for freedom. Dudley gets up to get out, but the glass is now back over the enclosure. Seeing that he is now trapped, he pounds the glass in panic.]''
:'''Dudley''': Mom, mommy!
:'''Petunia''': ''[notices him in the exhibit]'' AHH!
:'''Dudley''': Mom, help! Help me!
:'''Petunia''': My darling boy! How did you get in there?! How did you get in there? Dudley, oh, Dudley!
:''[Harry grins and snickers, Vernon notices this and glares down at him. Harry's grin disappears, knowing that he is in trouble with Vernon.]''

==Letters from No One==
:''[Back at the Dursleys'. Petunia and a bundled up Dudley come in.]''
:'''Petunia''': ''[assuring a distressed Dudley]'' It's all right, sweetheart. It's all right.
:''[They walk in the living room. Harry and Vernon enter. Vernon slams the door and shoves Harry against a wall, taking his hair.]''
:'''Harry''': Ow!
:'''Vernon''': What happened?!
:'''Harry''': I swear I don't know! ''[Vernon snarls]'' One minute, the glass was there and then it was gone! It was like magic!
:''[Vernon scoffs at this, shoves Harry in the cupboard under the stairs and slams the door]''
:'''Vernon''': There's no such thing as magic! ''[he blackens out the vent on the door]''
:''[An owl flies into view and lands itself on a TV aerial on one of the houses' roof]''

'''''(Extended Version)'''''

''[The camera slowly pans up to reveal Dudley in his smartest school uniform, posing and smiling grandly.]''
:'''Petunia''': Awww, smile. ''[She takes a photograph of him. She gasps in joy.]'' Vernon, just look at him. I can't believe it. In just a week you'll be off to Smeltings.
:'''Vernon''': Caveat Smeltona. Proudest moment of my life.
:'''Harry''': Will I have to wear that, too?
''[They draw their attention to Harry]''
:'''Petunia''': What, you? Go to Smeltings? ''[Harry nods, questionably]''
:'''Vernon''': Ha!
''[They laugh in amusement]''
:'''Petunia''': Oh, don't be so stupid, you're going to the state school where you belong. ''[Goes to the kitchen and fishes out a grey shirt in a boiler.]'' And this is what you're gonna be wearing when I've finished dyeing it.
:'''Harry''': But that's Dudley's old uniform. It'll fit me like bits of old Elephant skin.
:'''Petunia''': It'll fit you well enough. Go get the post. ''[Harry then heads to the hallway]'' Go!

'''''(Normal Version)'''''

''[Harry leaves the living room area into the hallway and picks up some letters, one of which had his name on it with his address of where he slept. Uncle Vernon and Dudley sit at the table while Aunt Petunia is busy fixing breakfast. Harry walks in with the mail and hands it to Uncle Vernon, then walks to his seat with his letter.]''
:'''Vernon''': ''[after reading a postcard]'' Oh, Marge is ill! Ate a funny whelk.
''[Dudley suddenly notices Harry's letter and runs to grab it from him and give it to his father.]''
:'''Dudley''': Dad! Look! Harry's got a letter!
:'''Harry''': Hey, give it back! It's mine!
:'''Vernon''': Yours? Who'd be writing to you?
''[The family gathers to look at the address. There is a broken seal on the letter. The family looks up and Harry gulps. Much later, another owl flies by with a letter and drops it off. Inside, Vernon grabs a handful of letters and rips them up. In the closet, Harry hears a whirring noise. He looks out at Vernon drilling wood over the letterbox opening.]''
:'''Vernon''': No more mail through this letterbox.
''[Harry quietly closes the cupboard door. The next day, Vernon and Petunia are outside the door. Vernon is about to head off to work. Petunia kisses his cheek.]''
:'''Petunia''': Have a lovely day at the office, dear.
''[She stops, looks and sees a bunch of owls.]''
:'''Vernon''': Shoo! Go on!
''[She notices something and pats Vernon on the shoulder to get his attention, and what they see is more letters addressed to Harry.]''

'''''(Extended Version)'''''

''[Later, Petunia is cracking a egg into a bowl, and what instead comes out is a folded-up letter. She cracks another one, but another letter comes out as well. She then cracks yet another one, but the same happens again. She stares at the letter, and then she hears the owls screeching. She draws her attention to the outside of the window, and what she sees is four owls sitting on some garden chairs. Petunia then screams and runs off.]''

'''''(Normal Version)'''''

''[Much later, Vernon is tossing letters into the fireplace. Harry comes around the corner. Vernon grins evilly and tosses more in. The scene fades to the next day, the family is sitting around, Harry is serving cookies.]''
:'''Vernon''': Fine day Sunday. In my opinion, best day of the week. Why is that, Dudley?
:'''Harry''': ''[when Dudley shrugs and didn't answer, as Harry hands a cookie to Vernon]'' Because there's no post on Sunday?
:'''Vernon''': Ah, right you are, Harry. No post on Sunday. Ha! No blasted letters today. No, sir. Not one single bloody letter, not one. ''[Harry sees a shadow outside the window. Outside, millions of owls are perched.]'' No, sir, not one blasted, miserable-
''[As Vernon was talking, a letter shoots out of the fireplace and zips across Vernon's face, cutting him off. There is a rumbling and then millions of letters come shooting out of the fireplace. The family shrieks in horror as Harry watches in amazement.]''
:'''Dudley''': AHH! Make it stop! Please make it stop! ''[He jumps on Petunia's lap as she and Vernon continue screaming]''
:'''Vernon''': Go away, ahh!
:'''Dudley''': What is it? Please tell me what's happening!
''[Harry jumps onto the coffee table to grab a letter. He gets one and starts to run away. Vernon jumps up as well.]''
:'''Vernon''': Give me that! Give me that letter!
''[He chases Harry and grabs him before Harry gets into his closet.]''
:'''Harry''': Get off! Ahh!
''[Vernon restrains Harry as several letters begin to shoot everywhere around the house.]''
:'''Vernon''': Ahh!
:'''Harry''': They're my letters! Let go of me!
''[The wood plank nailed in front of the letterbox finally breaks from the excess pressure of the letters shooting through the letter.]''
:'''Vernon''': That's it! We're going away! Far away! Where they can't find us!
:'''Dudley''': Daddy's gone mad, hasn't he?!
''[Petunia watches with a horrified look on her face, knowing that Dudley may be right.]''

==Keeper of the Keys==
''[That stormy night, a tall house, on a rock island somewhere out at sea. The Dursleys, including Harry have moved there, due to the chaos with the letters. The family is sleeping, with Harry on the cold, dirt floor and Dudley sleeping on a sofa. Harry has drawn a birthday cake which reads, Happy Birthday Harry. Harry looks at Dudley's watch, which beeps 12:00.]''
:'''Harry''': ''[to himself]'' Make a wish, Harry. ''[he blows the "candles" on the drawn birthday cake]''
''[Suddenly, the door thumps, in sync with the thunder flashing. Harry jumps. The door thumps again and Dudley and Harry jump up and back away. Harry hides behind a wall, and Dudley cowers on a windowsill. Petunia and Vernon appear, with Vernon holding a double barrel gun.]''
:'''Vernon''': Who's there? Ahh!
''[The door bangs again and then falls down, and a giant man appears. As he comes into the clear lighting, he is revealed to be Hagrid.]''
:'''Hagrid''': Sorry 'about that. ''[He puts the door back up]''
:'''Vernon''': ''[aiming his gun at him]'' I demand that you leave at once, sir! You are breaking an entering!
''[As Petunia quietly gasps in fear, Hagrid grabs the gun and bends it upwards.]''
:'''Hagrid''': Dry up, Dursley, you great prune. ''[The gun fires upwards, blasting a hole in the ceiling, causing the two to shriek in fear. Hagrid notices Dudley.]'' Boy, I haven't seen you since you was a baby, Harry, but you're a bit more along than I would have expected. Particularly 'round the middle!
:'''Dudley''': I-I-I'm not Harry.
''[Harry reveals himself]''
:'''Harry''': I-I am.
:'''Hagrid''': Oh, well, of course you are! Got something for ya. 'Afraid I might have sat on it at some point! I imagine that it'll taste fine just the same. Ahh. Baked it myself. ''[Hands Harry the cake]'' Words and all. Heh.
''[Harry opens cake, which reads "Happee Birdae Harry" in green frosting.]''
:'''Harry''': Thank you!
:'''Hagrid''': It's not every day that your young man turns eleven, now is it aye?
''[Hagrid sits down on the sofa, takes out an umbrella and points it at the empty fire. Two sparks fly out and the fire starts. The family gasps.]''
:'''Harry''': ''[puts cake down]'' Excuse me, who are you?
:'''Hagrid''': Rubeus Hagrid. Keeper of keys and grounds at Hogwarts. Course, you'll know all about Hogwarts.
:'''Harry''': Sorry, no.
:'''Hagrid''': No? Blimey, Harry, didn't you ever wonder where your mum and dad learned it all?
:'''Harry''': Learned what?
:'''Hagrid''': You're a wizard, Harry.
''[Harry looks confused]''
:'''Harry''': I-I'm a what?
:'''Hagrid''': A wizard. And a thumping good one at that, I'd wager. Once you train up a little.
:'''Harry''': No, you've made a mistake. I can't be...a-a wizard. I mean, I'm just... Harry. Just Harry.
:'''Hagrid''': Well, just Harry. Did you ever make anything happen? Anything you couldn't explain when you were angry or scared? ''[Harry softens his expression]'' Ah.
''[Dudley whimpers. Hagrid hands Harry the same letter that has been sent the past while. Harry opens it.]''
:'''Harry''': Dear, Mr. Potter. We are pleased to inform you that you have been accepted at Hogwarts' School of Witchcraft and Wizardry.
:'''Vernon''': ''[to Hagrid]'' He'll not be going! We swore when we took him in, we’d put a stop to this rubbish!
:'''Harry''': You knew? You knew all along and you never told me?
:'''Petunia''': Of course we knew. How could you not be? My perfect sister being who she was. Oh, my mother and father were so proud the day she got her letter. We have a witch in the family. Isn't it wonderful? I was the only one to see her for what she was. A freak! And then she met that Potter, and then she had you, and I knew you'd be just the same, just as strange, just as ... abnormal. And then, if you please, she went and got herself blown up. And we got landed with you.
:'''Harry''': ''[to Petunia, angrily]'' Blown up? You told me my parents died in a car crash!
:'''Hagrid''': A car crash? A car crash kill James and Lily Potter?
:'''Petunia''': We had to tell him something.
:'''Hagrid''': It's an outrage! It's a scandal!
''[As the Dursleys argue with Hagrid, no one, including Harry, is noticing Dudley taking Harry's cake away]''
:'''Vernon''': He'll not be going!
:'''Hagrid''': Oh, and I suppose a great Muggle like yourself's going to stop him, are you?
:'''Harry''': Muggle?
:'''Hagrid''': ''[to Harry, calmly]'' Non magic folk. ''[he immediately draws his attention back to Vernon and Petunia in anger]'' This boy's had his name down ever since he was born! ''[As Hagrid was talking, Dudley was munching on Harry's cake.]'' He's going to the finest school of witchcraft and wizardry in the world, ''and'' he'll be under the finest headmaster that Hogwarts has ever seen: Albus Dumbledore.
''[Harry smiles upon hearing Dumbledore's name]''
:'''Vernon''': I will not pay for some crackpot old fool to teach him magic tricks!
''[Hagrid whips out his umbrella and points it at Vernon, threateningly.]''
:'''Hagrid''': Never, insult Albus Dumbledore, in front of me.
''[Hagrid finally sees Dudley eating Harry's cake, and aims his umbrella at his rear. He fires a magic spark at it, causing a grey tail to grow.]''
:'''Dudley''': Ahh!
''[The Dursleys shriek in both fright and horror, as they run off out of sight. Harry laughs at this, so does Hagrid.]''
:'''Hagrid''': Oh, um, I'd appreciate if you didn't tell anyone at Hogwarts about that. Strictly speaking, I'm not allowed to do magic.
:'''Harry''': ''[Nods]'' Okay.
:'''Hagrid''': ''[checks his pocket-watch]'' Ooh, we're a bit behind schedule. Best be off. ''[he goes off to the door and pulls it down again, before stepping out. He turns to Harry]'' Unless you'd rather stay, of course. Hmm?
''[He walks out. Harry grins, looks back at the direction where the Dursleys are gone, and grins again, before grabbing his jacket and joins Hagrid on their journey to London.]''

==Diagon Alley==
''[The next day, in the streets of London.]''

'''''(Extended Version)'''''

''[Harry and Hagrid are in the underground tube.]''
:'''Harry''': ''[reading the list]'' First year students will require: three sets of work robes, one wand. ''[He turns to Hagrid]''
:'''Hagrid''': Essential bit of equipment, Harry.
:'''Harry''': One pair of dragon-hide gloves. ''[he turns to Hagrid again]'' Hagrid, do they mean for a real dragon?
:'''Hagrid''': Well, they don't mean for a penguin, do they? Heh. Crikey, but not a dragon.
:'''Harry''': But you like a dragon?
:'''Hagrid''': Fast and misunderstood beasts, Harry. Fast and misunderstood. ''[He suddenly eyes a woman and then he nods. The woman returns to reading her paper.]''

'''''(Normal Version)'''''

''[The next scene, Hagrid and Harry are walking down the streets.]''
:'''Harry''': All students must be equipped with...one standard size two pewter cauldron and may bring if they desire either an owl, a cat or a toad. Could we find all this in London?
:'''Hagrid''': If you know where to go.
''[They walk towards a corner store and as they get closer, the sign above it has “The Leaky Cauldron” magically appearing. They enter the Leaky Cauldron. There was music and several patrons that are speaking to each other.]''
:'''Tom''': Ah, Hagrid! The usual, I presume?
:'''Hagrid''': No thanks, Tom. I'm on official Hogwarts business today. Just helping young Harry here buy his school supplies.
:'''Tom''': Bless my soul. It's Harry Potter.
''[The pub immediately goes silent and everyone notices. A man comes up and shakes Harry's hand.]''
:'''Man''': Welcome back, Mr. Potter, welcome back.
''[A witch comes up and shakes Harry's hand, as well.]''
:'''Witch''': Doris Crockford, Mr. Potter. I can't believe I'm meeting you at last.
''[A man in robes with a turban on his head appears. It is Professor Quirrell.]''
:'''Quirrell''': Harry P-potter. C-can't tell you how pleased I am to meet you.
:'''Hagrid''': Hello, Professor. I didn't see you there. Harry, this is Professor Quirrell. He'll be your Defense Against the Dark Arts teacher at Hogwarts.
:'''Harry''': Oh, nice to meet you. ''[puts out his hand, offering a handshake with Quirrell. But he looks at Harry's head and hesitatingly refuses]''
:'''Quirrell''': F-fearfully fascinating subject. N-not that you need it, e-eh, Potter? Heheh.
:'''Hagrid''': Yes, well, must be going now. Lots to buy. Heh.
:'''Harry''': Goodbye.
''[The two leave into a back room winery in front of a brick wall.]''
:'''Hagrid''': See, Harry, you're famous!
:'''Harry''': But why am I famous, Hagrid? All those people back there, how is it they know who I am?
:'''Hagrid''': I'm not exactly sure I'm the right person to tell you that, Harry. ''[Taps the brick wall clockwise with his umbrella. The blocks then magically shift and open up to reveal a hidden, busy street called Diagon Alley.]'' Welcome, Harry, to Diagon Alley. ''[Harry grins broadly as they step into the street and walk down it. An owl screeches.]'' Here's where you'll get your quills and ink, and over there all your bits and bobs for doing your wizardry.
''[Harry is amazed as they pass by shops and owls and bats. The camera pans on a broom store, where a group of boys are crowded around a shiny broom.]''
:'''Boy''': It's a world class racing broom. Look at it, it’s the new Nimbus 2000! It's the fastest model yet. ''[the camera pans to see the broom's model name on the handle]''

==Gringotts==
''[Harry and Hagrid continue walking down Diagon Alley]''
:'''Harry''': But, Hagrid, how am I to pay for all this? I haven't any money.
:'''Hagrid''': Well, there's your money, Harry. ''[he points to a tall, white, marble building, Gringotts Bank]'' Gringotts, the Wizard Bank. T'aint no place safer, 'cept perhaps Hogwarts.

:''[Inside the bank, they walk down the shiny aisle, passing tiny creatures working at their desks.]''
:'''Harry''': Uh, Hagrid, what exactly are these things?
:'''Hagrid''': They're goblins, Harry. Clever as they come goblins, but not the most friendly of beasts. Best stick close to me. ''[Harry sticks to him. Hagrid clears his throat as they approach a counter with a goblin, wearing spectacles and a waistcoat, in it.]'' Mr. Harry Potter wishes to make a withdrawal.
''[The goblin looks up.]''
:'''Goblin''': And does Mr. Harry Potter have his key?
:'''Hagrid''': Oh. Wait a minute. Got it here somewhere. Hah. There's the little devil. ''[Whispers]'' Oh, and there's something else as well. ''[Takes out a letter wrapped in a string.]'' Professor Dumbledore gave me this. ''[Hagrid hands the Goblin the letter.]'' It's about you-know-what in vault you-know-which.
:'''Goblin''': Very well.
''[Later, they race down the depth caverns in a cartlike structure. The cart stops, a goblin called Griphook, clambers out.]''
:'''Griphook''': Vault 687. Lamp, please. ''[Hagrid hands him the lamp and he walks to the vault]'' Key please.
''[Hagrid hands him the key and Griphook unlocks the vault. The room is filled nearly top to bottom with coins. Harry is amazed.]''
:'''Hagrid''': Didn't think your mum and dad would leave you with nothing now, did ya?
''[They continue on through the cavern.]''
:'''Griphook''': Vault 713.
:'''Harry''': What's in there, Hagrid?
:'''Hagrid''': Can't tell you, Harry. It's Hogwarts business. Very secret.
:'''Griphook''': Stand back. ''[Slides finger down the door. The vault opens to reveal a small white stone package. Hagrid enters the vault and scoops it up. The eerie light it was shining with disappears.]''
:'''Hagrid''': Best not mention this to anyone, Harry.
''[Harry nods in agreement]''

==Ollivanders==
''[Outside back in Diagon Alley, Harry and Hagrid are walking through the street. Harry has bought most of his equipment, and is reading his list.]''
:'''Harry''': I still need...a wand.
:'''Hagrid''': A wand? Well, you'll want Ollivanders. ''[he points to the store]'' No place better. Run along there, but wait. I just got one more thing I got to do. Won't be long.
''[Harry goes into the store, quietly. He looks around. There are shelves of wands in boxes, but no people.]''
:'''Harry''': ''[Softly]'' Hello? Hello?
''[Then, a nose came from the back, and a man appears on a ladder and looks at Harry. The man is Ollivander and he smiles.]''
:'''Ollivander''': I wondered when I'd be seeing you, Mr. Potter. It seems only yesterday that your mother and father were in here buying their first wands. ''[Picks a wand]'' Ah. Here we are. ''[Harry holds it, but does nothing]'' Well, give it a wave. ''[Harry is hesitant, but waves. This causes most of the boxes to come flying out and crashing down. Harry jumps and hurriedly puts the wand back on the counter. ]'' Apparently not. ''[Gets another wand from a box.]'' Perhaps this. ''[Harry waves at a vase, which shatters, startling Harry.]'' No, no, definitely not! No matter... ''[gets a wand from a box, but stops and becomes thoughtful]'' I wonder. ''[Ollivander hands the wand to Harry. No sooner after he touched it, Harry suddenly glows under it, blowing his hair up and several of the paperwork in the background. Ollivander looked a bit surprised and deep in thought.]'' Curious, very curious.
:'''Harry''': Sorry, but what's curious?
:'''Ollivander''': ''[examining the wand he gave to Harry]'' I remember every wand I've ever sold, Mr. Potter. It just so happens that the phoenix, whose tail feather resides in your wand gave one other feather, just one. It is curious that you should be destined for this wand when its brother gave you that scar. ''[Points to the lighting bolt scar on Harry's forehead]''
:'''Harry''': And...who owned that wand?
:'''Ollivander''': Oh, we do not speak his name. The wand chooses the wizard, Mr. Potter. It's not always clear why, but I think it is clear that we can expect great things from you. After all, He-Who-Must-Not-Be-Named did great things...terrible, yes, but great. ''[he hands Harry back his wand.]''
''[Harry then hears a knock on the window.]''
:'''Hagrid''': Harry! Harry! Happy birthday! ''[Has a snowy owl in a cage, which hoots, her name is Hedwig.]''
:'''Harry''': ''[amazed]'' Wow.

==The Boy Who Lived==
''[Later back in the Leaky Cauldron, Hagrid and Harry, are at a long table, eating soup. Everything is too quiet, Hagrid soon notices this.]''
:'''Hagrid''': You all right, Harry? You seem very quiet.
:'''Harry''': He killed my parents, didn't he? The one who gave me this. You know, Hagrid, I know you do.
:'''Hagrid''': ''[sighs and pushes his bowl away]'' First, and understand this, Harry, 'cause it's very important. Not all wizards are good. Some of them go bad. A few years ago, there was one wizard who went as bad as you can go. And his name was V-...his name was V-...
:'''Harry''': Maybe if you wrote it down?
:'''Hagrid''': No, I can't spell it. All right. ''[quietly]'' Voldemort.
:'''Harry''': Voldemort?
:'''Hagrid''': Shh!!
''[Harry looks around to see if anyone heard it]''
:'''Hagrid''': It was dark times, Harry, dark times. ''[We flash over to a flashback on the night at Godric's hollow, consisting off a cloaked man walking towards a house, breaking in with his wand, and proceeding to terrorize. Hagrid narrates.]'' Voldemort started to gather some followers, brought 'em over to the dark side. Anyone that stood up to him ended up dead. Your parents fought against him, but nobody lived once he decided to kill 'em. ''[Harry's mother, Lily, screams in pain as she is killed by Voldemort's wand. Green flashes are seen from the windows outside the house. Then, we see Voldemort pointing his wand at an infant Harry Potter's head.]'' Nobody...not one. ‘Cept you.
''[We flash back to the present time.]''
:'''Harry''': Me? Voldemort tried to kill...me?
:'''Hagrid''': Yes. That ain't no ordinary cut on your forehead, Harry. A mark like that only comes from being touched by a curse...and an evil curse at that.
:'''Harry''': What happened to...to You-Know-Who?
:'''Hagrid''': Well, some say he died. Codswallop in my opinion. Nope, I reckon he's out there, still, too tired to carry on. But one thing's absolutely certain. Something about you stumped him that night. That's why you're famous. That's why everybody knows your name. You're the boy who lived.

==Platform 9¾==
''[King's Cross Station. Up on a crossing bridge, Harry, with his cart of his baggage, equipment and Hedwig, walk beside Hagrid. A couple look at Hagrid, suspiciously.]''
:'''Hagrid''': What're you looking at? ''[He then checks watch]'' Blimey, is that the time? Sorry, Harry, I'm gonna have to leave you. Dumbledore'll be wanting his- well, he'll be wanting to see me. Now, uh, your train leaves in 10 minutes. Here's your ticket. ''[hands the train ticket]'' Stick to it, Harry that's very important. Stick to your ticket.
''[Harry looks at his ticket.]''
:'''Harry''': Platform 9¾? But, Hagrid, there must be a mistake. This says Platform 9¾. There's no such thing...is there? ''[Harry looks up, but we now see that Hagrid has vanished and Harry all alone with his cart.]''
''[Harry is walking down lane between trains. A man rushes by.]''
:'''Man''': Sorry.
''[Harry sees a guard.]''
:'''Harry''': Excuse me, excuse me.
:'''Guard''': Right on your left, ma'am.
:'''Harry''': Excuse me, sir. Can you tell me where I might find Platform 9¾?
:'''Guard''': ''[incredulous]'' 9¾? Think you're being funny, do ya? ''[he walks off]''
''[Harry then notices a woman, daughter, and four boys walk by, pushing carts.]''
:'''Mrs. Weasley''': It's the same year after year. Always packed with Muggles, of course.
:'''Harry''': Muggles?
:'''Mrs. Weasley''': Come on. Platform 9¾ this way! All right, Percy, you first.
''[A tall boy with red hair, called Percy, comes forward and runs towards a brick wall. Amazingly, he disappears right into it. Harry is amazed.]''
:'''Mrs. Weasley''': Fred, you next.
:'''George''': He's not Fred, I am!
:'''Fred''': Honestly, woman, you call yourself our mother.
:'''Mrs. Weasley''': Oh, I'm sorry, George.
''[Fred moves towards the wall]''
:'''Fred''': I'm only joking. I am Fred. ''[He runs through the wall, and is followed by his twin brother. Harry shakes his head in disbelief.]''
:'''Harry''': Excuse me! C-could you tell me how to-
:'''Mrs. Weasley''': How to get on the platform? Yes, not to worry, dear. It's Ron's first time to Hogwarts as well. ''[pan to a red haired boy, called Ron, who smiles]'' Now, all you've got to do is walk straight at the wall between platforms 9 and 10. Best do it at a bit of a run if you're nervous.
:'''Ginny:''' Good luck.
''[Harry takes a breath and runs at the wall. He shuts his eyes and emerges on the other side a magnificent station at Platform 9¾ with a red train, which is the Hogwarts Express, and bundles of people. A whistle blows, and Harry sighs with relief.]''

==Ron and Hermione==
''[Later on, the Hogwarts Express is travelling through the countryside. Harry is in sitting alone in a train compartment, and Ron appears in the doorway.]''
:'''Ron''': Excuse me, do you mind? Everywhere else is full.
:'''Harry''': No, not at all.
:'''Ron''': ''[sits across from Harry]'' I'm Ron, by the way. Ron Weasley.
:'''Harry''': I'm Harry. Harry Potter.
''[Ron goes agape.]''
:'''Ron''': So-so it's true? I mean, do you really have the...the...
:'''Harry''': The what?
:'''Ron''': ''[whispers]'' Scar...?
:'''Harry''': Oh ''[lifts up his hair bangs to reveal it]''
:'''Ron''': Wicked.
''[A trolley comes by the compartment, full of sweets.]''
:'''Woman''': Anything off the trolley, dears?
:'''Ron''': ''[Holds up his mushed sandwiches]'' No, thanks, I'm all set. ''[smacks lips.]''
:'''Harry''': We'll take the lot! ''[pulls out coins]''
:'''Ron''': Whoa!
''[A bit later, Harry and Ron are not sitting together eating bundles of sweets. Ron's rat, Scabbers, is perched on Ron's knee, a box over his head.]''
:'''Harry''': Bertie Bott's Every Flavour Beans?
:'''Ron''': They mean every flavour! There's chocolate and peppermint, and there's also spinach, liver and tripe. George sweared he got a bogey-flavoured one once!
''[Harry quickly takes the bean he was chewing out of his mouth.]''
:'''Harry''': ''[picks up a blue and gold package]'' These aren't real chocolate frogs, are they?
:'''Ron''': It's just a spell. Besides, it's the cards you want. Each pack's got a famous witch or wizard. I got about 500 meself. ''[Harry opens the package, and a chocolate frog jumps onto the window and climbs up.]'' Watch it! ''[The frog reaches the open gap in the window, and jumps out.]'' Oh, that's rotten luck. They've only got one good jump in them to begin with.
:'''Harry''': ''[seeing Dumbledore's image in the card]'' I got Dumbledore!
:'''Ron''': I got about 6 of him.
''[Harry looks at the card again, but Dumbledore has vanished.]''
:'''Harry''': Hey, he's gone!
:'''Ron''': Well, you can't expect him to hang around all day, can you? ''[Scabbers squeaks]'' This is Scabbers, by the way, pathetic, isn't he?
:'''Harry''': A little.
:'''Ron''': Fred gave me a spell as to turn him yellow. Want to see?
:'''Harry''': Yeah!
:'''Ron''': ''[clears throat]'' Ahem. Sun-
''[A girl called [[Hermione Granger]], with bushy brown hair, dressed in robes, appears at the doorway.]''
:'''Hermione''': Has anyone seen a toad? A boy named Neville's lost one.
:'''Ron''': No.
:'''Hermione''': Oh, are you doing magic? Let's see then.
:'''Ron''': ''[clears throat again]'' Sunshine, daises, butter mellow, turn this stupid fat rat yellow!
''[He zaps Scabbers, but nothing happens. Ron shrugs.]''
:'''Hermione''': Are you sure that's a real spell? Well, it's not very good, is it? Of course I've only tried a few simple spells myself, and they've all worked for me. For example... ''[Hermione goes over and sits across from Harry. He points her wand at his glasses and Harry tenses]'' Oculus Reparo. ''[The tape on the nose-band vanishes, repairing his glasses as if they were good as new. Harry takes them off, amazed.]'' That's better, isn't it? Holy Cricket, you're Harry Potter. I'm Hermione Granger...and you are...?
:'''Ron''': ''[with his mouth full]'' I'm...Ron Weasley. ..
:'''Hermione''': Pleasure. You two better change into your robes. I expect we'll be arriving soon. ''[Gets up and leaves, then comes back and looks at Ron.]'' You've got dirt, on your nose, by the way, did you know? Just there. ''[Points to the dirt mark on Ron's nose. Ron scratches his nose, embarrassed.]''

==Welcome to Hogwarts==
''[It is nighttime at Hogsmeade station, the train blows its whistle and pulls into outside the station. Hagrid walks along the side aisle, with a lantern. People, in their robes, begin pouring out of the train.]''
:'''Hagrid''': Right, then! First years! This way, please! Come on, now, don't be shy! Come on now, hurry up!
''[Harry and Ron, now in their robes, walk up to Hagrid.]''
:'''Hagrid''': Hello, Harry.
:'''Harry''': Hey, Hagrid.
:'''Ron''': Whoaa!
:'''Hagrid''': Right then. This way to the boats! Come on, now, follow me.
''[Later, a large number of boats are plugging across a vast lake, where up ahead a huge castle, known as the Hogwarts Castle, can be seen. People are in awe.]''
:'''Ron''': Wicked.
''[They continue on further towards the castle. Later on, the first year students walk in the castle, and up the staircase. As the camera pans, we see on a higher level, Professor McGonagall is waiting. She taps her fingers on a stone railing, and then goes to the top of the stairs to greet the newcomers.]''
:'''McGonagall''': Welcome to Hogwarts. Now, in a few moments, you will pass through these doors and join your classmates. But before you can take your seats, you must be sorted into your houses. They are Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. Now while you’re here, your house will be like your family. Your triumphs will earn you house points. Any rule breaking, and you will lose points. At the end of the year, the house with the most points is awarded the house cup.
''[A scared looking boy called Neville Longbottom, spots his toad sitting near McGonagall. He jumps forward.]''
:'''Neville''': Trevor! ''[he catches his toad; McGonagall stares down at him as some of the students laugh]'' Sorry. ''[He backs away, embarrassed.]''
:'''McGonagall''': The sorting ceremony will begin momentarily. ''[she leaves to go into the Great Hall]''
''[A young evil looking boy, with short blonde hair, called Draco Malfoy, speaks up.]''
:'''Draco''': It's true then, what they're saying on the train. Harry Potter has come to Hogwarts. ''[some of the students are heard whispering, "Harry Potter?" Draco introduces his two friends.]'' This is Crabbe and Goyle. And I'm Malfoy...Draco Malfoy. ''[Ron snickers at his name]'' Think my name's funny, do you? No need to ask yours. Red hair, and a hand-me-down robe? You must be a Weasley. Well, soon find that some wizarding families are better than others, Potter. Don’t want to go making friends with the wrong sort. I can help you there. ''[extends his hand to Harry.]''
:'''Harry''': ''[not going to take Draco's arrogance]'' I think I can tell who the wrong sort are for myself, thanks.
''[Draco glares. McGonagall returns and taps Draco on the shoulder with a paper. He leaves Harry with one last glare.]''
:'''McGonagall''': We're ready for you now. Follow me.

==The Sorting Hat==
''[She leads everyone through two large doors and into the Great Hall, where there are four long tables with thousands of students, as well as floating candles. The roof appears to be the sky.]''
:'''Hermione''': It's not real, the ceiling. It's just bewitched to look like the night sky. I read about it in Hogwarts: A History.
''[McGonagall leads the first-years to the front where the Sorting Hat lies on the stool.]''
:'''McGonagall''': Will you wait along here, please? Now, before we begin, Professor Dumbledore would like to say a few words.
''[Dumbledore rises from the main table.]''
:'''Dumbledore''': I have a few start of term notices I wish to announce. The first years please note that the dark forest is strictly forbidden to all students. Also, our caretaker, Mr. Filch ''[shows a ragged old man, called Mr. Argus Filch, with his cat with red eyes, called Mrs. Norris.]'' has asked me to remind you that the 3rd floor corridor on the right hand side is out of bounds to everyone who does not wish to die a most painful death. Thank you.''[He sits back down]''
:'''McGonagall''': When I call your name, you will come forth, I shall place the sorting hat on your head, and you will be sorted into your houses. Hermione Granger.
:'''Hermione''': ''[to herself]'' Oh, no. Okay, relax. ''[She goes up]''
:'''Ron''': Mental that one, I'm telling you.
''[Harry nods in agreement. Hermione sits on the stool and McGonagall places the sorting hat on her head]''
:'''Sorting Hat''': Ah, right then...hmm...right. Okay...Gryffindor!!
''[The students cheer; Hermione jumps off with a smile.]''
:'''McGonagall''': Draco Malfoy.
''[Draco saunters up proudly. The tattered hat nearly freaks before touching down on Draco's head.]''
:'''Sorting Hat''': SLYTHERIN!
''[The students cheer, not as loudly]''
:'''Ron''': There isn't a witch or wizard who went bad who wasn’t in Slytherin.
:'''McGonagall''': Susan Bones.
''[A small, redhead goes up. Harry looks around and notices a black greasy haired, pale man, called, Severus Snape, giving him sinister looks. His scar hurts.]''
:'''Harry''': Ahh! ''[puts his hand on his forehead in pain]''
:'''Ron''': ''[concerned]'' Harry, what is it?
:'''Harry''': Nothing... nothing, I'm fine.
:'''Sorting Hat''': Let's see...I know...Hufflepuff!
:'''McGonagall''': Ronald Weasley.
''[Ron gulps and walks up. He sits down and the hat is put on.]''
:'''Sorting Hat''': Ha! Another Weasley. I know just what to do with you... Gryffindor!!
''[The students cheer as Ron sighs in relief.]''
:'''McGonagall''': Harry Potter.
''[Everything goes silent. Harry walks up and sits down on the stool. The Sorting Hat is placed on his head.]''
:'''Sorting Hat''': Hmm...difficult, very difficult. Plenty of courage I see, not a bad mind, either. There's talent, oh yes, and a thirst to prove yourself. But where to put you?
:'''Harry''': ''[whispering to the hat]'' Not Slytherin. Not Slytherin.
:'''Sorting Hat''': Not Slytherin, eh? Are you sure? You could be great, you know. It’s all here in your head. And Slytherin will help you on the way to greatness! There's no doubt about that. No?
:'''Harry''' ''[still whispering]'' Not Slytherin...anything but Slytherin.
:'''Sorting Hat''': Well, if you're sure... better be... GRYFFINDOR!!
''[There is an immense cheering and Harry goes to the Gryffindor table.]''
:'''Fred and George''': We got Potter! We got Potter!
''[Harry sits down at the table. He looks at Dumbledore, who lifts up his goblet and slightly waves it, as if he was wishing congratulations.]''

==Nick and Other Residents==
''[Later, all of the first years are sorted in their houses, all of the students were talking to each other. McGonagall dings on a cup.]''
:'''McGonagall''': Your attention, please.
:'''Dumbledore''': ''[rising from his chair]'' Let the feast...begin.
''[From the aerial view of the Great Hall, food magically appears on all the tables, and the hall is filled with awe and chatter.]''
:'''Harry''': Wow.
''[Draco looks at all the food, raises his eyebrows and digs in. Ron stuffs his face.]''
:'''Seamus''': I'm half and half. Me dad's a Muggle. Mam's a witch. Bit of a nasty shock for him when he found out.
''[Neville laughs. Harry is sitting next to Percy. He leans over.]''
:'''Harry''': Say, Percy, who's that teacher talking to Professor Quirrell?
:'''Percy''': Oh, that's Professor Snape, head of Slytherin house.
:'''Harry''': What's he teach?
:'''Percy''': Potions. But everyone knows it's the Dark Arts he fancies. He's been after Quirrell’s job for years.
''[Ron, having just finished a chicken wing, reaches into the bowl for more, and a ghost, called Sir Nicolas, pops out.]''
:'''Ron''': Ahh!
:'''Nick''': Hello! How are you? Welcome to Gryffindor.
''[Numerous ghosts come pouring from the walls, sailing along.]''
:'''Bloody Baron''': Whoo-hoo-hoo!
:'''Girl:''' Look, it’s the Bloody Baron!
:'''Percy''': Hello, Sir Nicholas. Have a nice summer?
:'''Nick''': Dismal. Once again, my request to join the headless hunt has been denied. ''[Begins to leave]''
:'''Ron''': I know you! You're Nearly Headless Nick!
:'''Nick''': I prefer Sir Nicholas if you don't mind.
:'''Hermione''': Nearly headless? How can you be nearly headless?
:'''Nick''': Like this. ''[Grabs head and pulls it to the side. His head is hanging on just by a thread.]''
:'''Ron''': Ahh!
''[Hermione moans in disgust; Harry just simply rolls his eyes. Nick reattaches his head back to his body. Later, Percy is leading the Gryffindors to the staircase tower.]''
:'''Percy''': Gryffindors, follow me, please. Keep up. Thank you.
:'''Boy''': Ravenclaws, follow me. This way.
:'''Percy''': This is the most direct path to the dormitories. Oh, and keep an eye on the staircases...they like to change.
''[The camera pans up and we see a vast amount of staircases, people walking on them, and some switching places.]''
:'''Percy''': Keep up, please, and follow me. Quickly now, come on. Come on.
''[They begin walking up the stairs, several of the portraits began greeting them]''
:'''Neville''': Seamus, that picture's moving!
:'''Ron''': Look at that one, Harry!
:'''Harry''': I think she fancies you.
:'''Girl''': Oh, look! Look! Who's that girl?
:'''Man in a painting''': Welcome to Hogwarts.
:'''Girl''': Who's that?
''[A bit later on the seventh floor, They are in the corridor leading to Gryffindor Tower. They come up to a large painting of a large woman in a pink dress. She is known as "The Fat Lady".]''
:'''The Fat Lady''': Password?
:'''Percy''': Caput Draconis. ''[The Fat Lady smiles and nods in confirmation. The painting opens up to reveal a doorway in the wall, leading to Gryffindor Tower.]'' Follow me, everyone. Keep up, quickly, come on.
:'''Girl''': Oh, wow.
:'''Percy''': ''[Inside the common room]'' Gather 'round here. Welcome to the Gryffindor Common Room. Boy's dormitories, upstairs and down to your left. Girls, the same on your right. You'll find that your belongings have already been brought up.
''[Later at midnight. Harry is sitting by a window in his pj's, with Hedwig. He pets the owl and looks out the window, sighing with content, knowing that he will love it here at Hogwarts.]''

==Potions and Parcels==
''[It is morning at Hogwarts, Harry and Ron are running in the corridors, because they are late for Transfiguration class. In the class, a tabby cat is sitting on a desk. Harry and Ron rush in; Hermione rolls her eyes in annoyance because they're late for class.]''
:'''Ron''': Whew, we made it. Can you imagine the look on McGonagall's face if we were late?
''[The cat jumps off the desk and transforms into Professor McGonagall, on-screen for the first time. The two boys are amazed.]''
:'''Ron''': That was bloody brilliant.
:'''McGonagall''': Thank you for that assessment, Mr. Weasley. Perhaps if I were to transfigure Mr. Potter and yourself into a pocketwatch, that way one of you might be on time.
:'''Harry''': We got lost.
:'''McGonagall''': Then perhaps a map? I trust you don't need one to find your seats.
''[Later on, inside Snape's potions classroom, the students are chattering, sitting near steaming cauldrons. The door slams open and Snape comes rushing in.]''
:'''Snape''': There will be no foolish wand waving or silly incantations in this class. As such, I don't expect many of you to appreciate the subtle science and exact art that is potion making. However, for those select few... ''[looks at Draco, who smiles]'' who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory and even put a stopper... ''[Draco looks on]'' in death. ''[Draco raises his eyebrows. Snape sees Harry, writing what Snape said in his lecture down, in, his view, not paying attention.]'' Then again, maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confidant enough to not...pay...attention. ''[Hermione nudges Harry, finally making him look up to the Professor. Snape then walks to where he can speak to Harry more properly.]'' Mr. Potter. Our...new...celebrity. Tell me, what would I get if I added powdered root of asphodel to an infusion of wormwood? ''[Hermione raises her hand. Harry shrugs.]'' You don't know? Well, let's try again. Where, Mr. Potter, would you look if I asked you to find me a bezoar? ''[Hermione's hand raises again.]''
:'''Harry''': I don't know, sir.
:'''Snape''': And what is the difference between monkshood and wolfbane?
:'''Harry''': I don't know, sir.
:'''Snape''': Pity. Clearly, fame isn't everything... ''[Draco has a smirk on his face]'' is it, Mr. Potter?

'''''(Extended Version)'''''
 
:'''Harry''': Clearly, Hermione knows. Since it's a pity not to ask her.
''[Hermione looks a bit surprised as everyone laughs]''
:'''Snape''': Silence. ''[he turns to Harry, looking a bit insulted; Harry seemingly gulps. Snape then walks over to his desk. To Hermione, who has still got her hand up.]'' And put her hand down, you silly girl. ''[He sits in front of Harry, and leans towards him.]'' For your information, Potter... asphodel and wormwood make a sleeping potion so powerful, it is known as the Draught of Living Death. A bezoar is a stone taken from the stomach of a goat and it will save you from most poisons. As for monkshood and wolfsbane, they are the same plant, which also goes by the name of aconite. ''[everything is quiet]'' Well? ''[to the students]'' Why aren't you all copying this down? ''[The students obey Snape and start to write down what Snape said. Snape returns to his desk, and dips his quill into some ink.]'' And Gryffindors, note that five points, will be taken from your house... for your classmate's ''cheek''. ''[Snape then starts writing; Hermione looks at Harry and then starts writing. Harry looks at Snape, who turns slightly and then continues writing]''

'''''(Normal Version)'''''

''[Harry stares at Snape, knowing that he shows dislike for the boy. In the great hall, around midday. The students are all doing their homework. Seamus is trying a spell on a cup.]''
:'''Seamus''': Eye of rabbit, harp string hum. Turn this water, into rum. ''[Looks in cup and shakes head.]'' Eye of rabbit, harp string hum...
:'''Harry''': What's Seamus trying to do to that glass of water?
:'''Ron''': Turn it into rum. Actually managed a weak tea yesterday, before-
''[Ron was cut off when a mighty flash occurs. We now see that the cup has exploded and Seamus is left charred. Several students laugh at this as Hermione fans away the smoke with her hand. Suddenly, a flock of owls start coming into the hall from the rafters above.]''
:'''Ron''': Ah. Mail's here!
''[The owls soar by, dropping parcels to students. Harry gets nothing. He sees the newspaper Ron has put down.]''
:'''Harry''': Can I borrow this? ''[Ron nods]'' Thanks.
''[Neville is unwrapping a gift. It is a clear glass ball with a gold banner around it.]''
:Dean:  Hey, look! Neville's got a Remembrall!
:'''Hermione''': I've read about those. When the smoke turns red, ''[the smoke turns red]'' it means you've forgotten something.
:'''Neville''': The only problem is, I can't remember what I've forgotten.
:'''Harry''': Hey, Ron, somebody broke into Gringotts, listen. ''[he reads the article]'' Believed to be the work of dark witches or wizards unknown, Gringotts goblins, while acknowledging the breach, insist that nothing was taken. The vault in question, number 713, had in fact been emptied earlier that same day. That's odd. That's the vault Hagrid and I went to.
==New Seeker==
''[That afternoon, outside the castle, the students, Gryffindor and Slytherin, are lined up in two rows with brooms by their sides. The teacher, Madam Hooch, comes down the line. She has short hair and hawk yellow eyes.]''
:'''Hooch''': Good afternoon, class.
:'''Class''': Good afternoon, Madam Hooch.
:'''Hooch''': Good afternoon, Amanda, good afternoon. ''[to the class]'' Welcome to your first flying lesson. Well, what are you waiting for? Everyone step up to the left side of their broomstick. Come on now, hurry up. Stick your right hand over the broom and say, up!
:'''Class''': Up!
''[After Harry said "Up”!, the broom immediately flies into his hand.]''
:'''Harry''': ''[amazed]'' Wow.
''[Hermione stares at him as the class continues.]''
:'''Draco''': Up! ''[broomstick flies up and Draco smugly grins.]''
:'''Hooch''': With feeling!
:'''Hermione''': ''[as her broomstick slowly rises]'' Up. Up. Up. Up.
:'''Ron''': Up!! ''[His broom immediately shot up and whacked him on the nose]'' Ooh! ''[Harry laughs]'' Shut up, Harry. ''[Ron then seemingly starts to laugh after he recovered]''
:'''Hooch''': Now, once you've got hold of your broom, I want you to mount it. And grip it tight, you don't want to be sliding off the end. ''[the class mounts on their broomsticks]'' When I blow my whistle, I want each of you to kick off from the ground, hard. Keep your broom steady, hover for a moment, and then lean forward slightly and touch back down. On my whistle...3...2...
''[She blows the whistle. However, Neville's broomstick somehow lifts him off the ground. Neville immediately lifts off. He looks quite frightened.]''
:'''Neville''': Oh...
:'''Hooch''': Mr. Longbottom.
:'''Girl''': Neville, what are you doing?
:'''Students''': Neville...Neville...
:'''Boy''': We're not supposed to take off, yet.
:'''Hooch''': ''[Neville begins soaring away uncontrollably]'' M-M-Mr. Longbottom! Mr. Longbottom!
:'''Neville''': AHH!
:'''Hooch''': Mr. Longbottom!
:'''Neville''': Down! Down! Ahhhh!
:'''Harry''': Neville!
:'''Neville''': Help!!!
''[he immediately skyrockets towards the sky]''
:'''Hooch''': Come back down this instant!
:'''Neville''': AHH!
''[He flies uncontrollably in the air and hits a wall, conking along it and then swooping off. All the while, he is screaming. He begins to zoom back towards the group of students. Hooch quickly holds out her wand to stop him.]''
:'''Neville''': Help!
:'''Hooch''': Mr. Longbottom-! ''[However, the students quickly stand back as Hooch dives out of the way, allowing Neville to fly right through. Neville goes through the scatter and up a tower.]''
:'''Neville''': Ahhhh! Whoa! Ahhh! ''[zooms past a statue of a man with a sharp spear. Neville's cloak catches on it. He is flipped off the broom and hangs there.]'' Oh. Ah...help! ''[He wavers, then the cloak rips through the spear, and he falls. But his cloak catches on a torch, making Neville slip off from his cloak a second later and fell to the ground.]'' Ahh!
:'''Hooch''': Everyone out of the way! ''[She runs through the group, and they scatter.]'' Come on, get up.
:'''Girl''': Is he alright?
''[Hooch is helping Neville up; he has broken his wrist after he fell.]''
:'''Neville''': Owowowow.
:'''Hooch''': Oh, oh, oh, oh dear. It's a broken wrist. Tch, tch, tch. Good boy, come on now, up you get. ''[Draco reaches down and grabs Neville's Remembrall, which has fallen from him. Hooch begins to lead Neville away with her.]'' Everyone's to keep their feet firmly on the ground while I take Mr. Longbottom to the hospital wing. Understand? If I see a single broom in the air, the one riding it will find themselves out of Hogwarts before they can say, Quidditch. ''[she leaves to the hospital wing.]''
:'''Draco''': ''[snickers]'' Did you see his face? Maybe if the fat lump had given this a squeeze, he'd have remembered to fall on his fat arse. ''[He and his goons laugh; Harry approaches him.]''
:'''Harry''': Give it here, Malfoy.
:'''Draco''': No. I think I'll leave it somewhere for Longbottom to find. ''[he hops on his broom and soars around group, then through.]'' How 'bout up on the roof? ''[soars off and hovers several feet above the grounds.]'' What's the matter, Potter? Bit beyond your reach?
''[Finally having enough, Harry gets on his broom, Hermione stops him.]''
:'''Hermione''': Harry, no way! You heard what Madam Hooch said! Besides, you don't even know how to fly. ''[Harry flies off to face Draco, ignoring her.]'' What an idiot.
''[Harry is now in the air, across from Draco.]''
:'''Harry''': Give it here, Malfoy, or I'll knock you off your broom!
:'''Draco:''' Is that so? ''[Harry makes a dash for him, but Draco twirls around his broom in a 360.]'' Have it your way, then!
''[Draco hurls the Remembrall into the air, like a baseball. Harry zooms after the ball, speeding towards a tower. Just as he is about to hit a window, from which McGonagall is working, he catches it. McGonagall notices this and looks surprised as Harry begins to fly back down to the grounds. The students all cheer as Harry lands back on the ground at ease. They run to see him.]''
:'''Boy''': Good job, Harry!
:'''Boy 2''': Oh, that was wicked, Harry.
''[McGonagall appears in the grounds.]''
:'''McGonagall''': Harry Potter? ''[Harry notices her]'' Follow me. ''[Harry sullenly follows her. Draco and his goons snicker in delight.]''
''[McGonagall and Harry arrive outside of Professor Quirrell's classroom. He is inside, teaching, holding an iguana.]''
:'''Quirrell''': An iguana s-such as this is...
:'''McGonagall''': You wait here.
:'''Quirrell''':... an essential in-gredient.
:'''McGonagall''': Professor Quirrell, excuse me, excuse me. Could I borrow Wood for a moment, please?
:'''Quirrell''': Oh. Y-yes, of course. ''[A boy called Oliver Wood, gets up to leave and Quirrell continues.]'' And the vampire b-bat... ''[as Wood exits the classroom, an eerie roar is heard.]''
:'''McGonagall''': Potter, this is Oliver Wood. Wood, I have found you a Seeker!
''[Harry and Ron are walking through crowded halls. Sir Nicholas and a lady ghost float by.]''
:'''Nick''': Have you heard? Harry Potter's the new Gryffindor Seeker. I always knew he'd do well.
:'''Ron''': Seeker? But first years never make their house teams! You must be the youngest Quidditch player in...
:'''Harry''': A century, according to McGonagall.
''[Fred and George approach and walk along with Ron and Harry.]''
:'''Fred''': Hey, well done, Harry, Wood's just told us!
:'''Ron''': Fred and George are on the team, too. Beaters.
:'''George''': Our job is to make sure that you don't get bloodied up too bad. Can't make any promises, of course. Rough game, Quidditch.
:'''Fred''': Brutal. But no one's died in years. Someone will vanish occasionally... ''[They break off from Harry and Ron, who walk across a courtyard.]''
:'''George''': But they'll turn up in a month or two!
:'''Ron''': Oh, go on, Harry, Quidditch is great. Best game there is! And you'll be great, too!
''[Hermione, knowing what Harry is talking about, jumps up from her work and comes to join them.]''
:'''Harry''': But I've never even played Quidditch. What if I make a fool of myself?
:'''Hermione''': You won't make a fool of yourself. It's in your blood.
''[Later, the three approach a trophy case. Hermione points at a plaque of Quidditch players. One lists Harry's father as a Seeker.]''
:'''Ron''': Whoa. Harry, you never told me your father was a Seeker, too.
:'''Harry''': I-I didn't know.

==Three-Headed Sentinel==
''[The three are walking up a staircase in the Grand Staircase tower. A railing pulls in, Hermione looks, but continues walking.]''
:'''Ron''': I'm telling you, it's spooky. She knows more about you than you do.
:'''Harry''': Who doesn't?
''[The staircase shudders and begins to move. The three grab the railings.]''
:'''Ron''': Ahh!
''[Hermione gasps]''
:'''Harry''': What's happening?
:'''Hermione''': The staircases change, remember? ''[The staircase stops, leading to a corridor.]''
:'''Harry''': ''[taps Ron]'' Let's go this way.
:'''Ron''': Before the staircase moves again.
''[They all open a door and walk into a spooky, dark and deserted corridor.]''
:'''Harry''': Does anyone feel like...we shouldn't be here?
:'''Hermione''': We're not supposed to be here. This is the 3rd floor. It's forbidden.
''[Suddenly, a flame lights on a tall stone support. At that moment, Filch's cat, Mrs. Norris, comes running in and meows. The group jumps.]''
:'''Harry''': Let's go.
''[Mrs. Norris meows]''
:'''Ron''': It's Filch's cat!
:'''Harry''': Run!
''[The trio run through the corridor, flames are lit up on the stone supports, one by one, as they run past. They get to the end of the corridor, to a door.]''
:'''Harry''': Quick! Let’s hide though that door!
''[Harry grabs the handle, but it's locked.]''
:'''Harry''': It's locked!
:'''Ron''': That's it, we're done for!
:'''Hermione''': Oh, move over! ''[pushes through and pulls out her wand, aiming it at the lock]'' Alohomora. ''[The door's lock lifts up magically and it opens.]'' Get in. ''[They bustle in.]''
:'''Ron''': Alohomora?
:'''Hermione''': Standard book of spells, Chapter 7.
''[Filch arrives at the start of the corridor with a light. Mrs. Norris looks at him.]''
:'''Filch''': Anyone here, my sweet? ''[Mrs. Norris meows]'' Come on. ''[they leave the corridor.]''
:'''Hermione''': Filch is gone.
:'''Ron''': Probably thinks this door's locked.
:'''Hermione''': It was locked.
:'''Harry''': And for good reason. ''[Ron and Hermione turn to stand with Harry. There is a massively huge three headed dog sleeping in front of them. The dog begins to wake. It growls, yawns, and growls more...noticing the intruders.]''
:'''All''': AHHHHHHH! ''[The three bolt, running out of the door. They turn quickly to shut the door and battle against the dog. They get the door shut and run.]''
''[They return to the Gryffindor Common Room. They are breathless.]''
:'''Ron''': What do they think they're doing?? Keeping a thing like that locked up in a school.
:'''Hermione''': You don't use your eyes, do you? Didn't you see what it was standing on?
:'''Ron''': I wasn't looking at its feet! I was a bit preoccupied with its heads. Or maybe you didn't notice, there were three! ''[they begin to climb the stairs to the dorms.]''
:'''Hermione''': It was standing on a trap door. Which means it wasn't there by accident. It's guarding something.
:'''Harry''': Guarding something?
:'''Hermione''': That's right. Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed... or worse, expelled! ''[turns and leaves, shutting the door to her dormitory.]''
:'''Ron''': She needs to sort out her priorities!
''[Harry nods in agreement]''

==Facts and Feathers==
''[Outside in the courtyard, day time. Oliver and Harry appear, carrying a trunk. They put it down.]''
:'''Oliver''': Quidditch is easy enough to understand. Each time has seven players, 3 chasers, 2 beaters, 1 keeper and a seeker. That's you. There are three kinds of balls. ''[picks up a red one]'' This one's called the Quaffle. Now, the chasers handle the Quaffle and try to put it through one of those three hoops. ''[Points to the hoops in the Quidditch pitch in the distance.]'' The keeper, that's me, defends the hoops. ''[throws ball to Harry.]'' With me so far?
:'''Harry''': ''[throws back]'' I think so. What are those? ''[points to two squirming chained down balls.]''
:'''Oliver''': You better take this. ''[hands Harry a small bat. He bends down and releases one ball. With an angry growl, it flies off into the air. The two boys watch it.]'' Careful now, it's comin' back. ''[The balls comes whizzing down, and Harry cracks at it with the bat. The ball soars off through a statue, surprisingly without damaging it.]'' Eh, not bad, Potter, you'd make a fair beater... Uh-oh. ''[The ball zooms down, and Oliver grabs it, wriggling to get it back in the box. He succeeds and is out of breath.]''
:'''Harry''': What is that?
:'''Oliver''': Bludger. Nasty little buggers. But you are the seeker, and the only thing I want you to worry about is this... the Golden Snitch. ''[hands Harry a walnut sized golden ball.]''
:'''Harry''': I like this ball.
:'''Oliver''': Ah, you like it now. Just wait. It's wicked fast and damn near impossible to see.
:'''Harry''': What do I do with it?
:'''Oliver''': You catch it... before the other team's seeker. You catch this, the game is over. You catch this, Potter, and we win.
''[The ball flutters out two delicate wings and jumps into the air. Harry keeps an eye on it.]''
:'''Harry''': Whoa.
''[In Professor Flitwick's class. Filtwick is very short, and is standing on a bunch of books to make up for his stature and to see his class.]''
:'''Flitwick''': One of a wizard's most rudimentary skills is levitation the ability to make objects fly. Uh, do you all have your feathers? ''[Hermione raises hers.]'' Good. Now, uh, don't forget the nice wrist movement we've been practicing, hmm? The swish and flick. Everyone.
:'''All (including Flitwick)''': The swish and flick.
:'''Flitwick''': Good. And enunciate. Wingardium Leviosa. Off you go then.
''[The class begin to enunciate and doing the movements on their feathers]''
:'''Draco''': Wingardium Levio-saaa.
:'''Ron''': Wingardrium Leviosar! ''[he waves his wand really fast numerous times. Hermione stops him.]''
:'''Hermione''': Stop, stop, stop. You're going to take someone's eye out. Besides, you're saying it wrong. It's Levi-o-sa, not Leviosar.
:'''Ron''': You do it then if you're so clever. Go on, go on.
''[Hermione straightens up and swishes her wand.]''
:'''Hermione''': Wingardium Leviosa. ''[The feather glows and lifts up.]''
:'''Flitwick''': Oh, well done! See here, everyone! Ms. Granger's done it! Oh, splendid!
''[Ron puts his head on his books dejectedly. Seamus begins swishing at his feather.]''
:'''Seamus''': Wingard Levosa.
:'''Flitwick''': Well done, dear.
''[An almighty explosion flashes. Flitwick gasps, as Ron and Hermione turn to the source of the explosion]''
:'''Flitwick''': Whooaaa! Ooh.
''[We see that Seamus is charred again with his feather, now smoldering to ashes.]''
:'''Harry''': I think we're going to need another feather over here, Professor.
''[Neville, Harry, Ron and Seamus are walking through a courtyard with other students all around.]''
:'''Ron''': ''[mimicking Hermione]'' It's Levioooosa, not Leviosaaaar. ''[normal voice]'' She's a nightmare, honestly. No wonder she hasn't got any friends!
''[Hermione rushes past Ron, hugging her books and sniffling in tears.]''
:'''Harry''': I think she heard you.
''[Hermione disappears into the crowd, deeply hurt by Ron's words.]''

==Mountain Troll==
''[That Halloween night, the great hall has floating Jack O'Lanterns in place of the candles. Harry notices an empty spot on the bench.]''
:'''Harry''': Where's Hermione?
:'''Neville''': Parvati Patil said that she wouldn't come out of the girl's bathroom. She said that she'd been in there all afternoon...crying.
''[Harry glances at Ron with a disapproving look on his face; Ron shrugs. Suddenly, Professor Quirrell comes running into the Great Hall in panic.]''
:'''Quirrell''': TROLL! IN THE DUNGEON! T-TROOLLL IN THE DUNGEON!! ''[Dumbledore rises from his seat in concern. Everyone look at Quirrell and he stops and there is utter silence.]'' Thought you ought to know.
''[He passes out. The room is silent, and then everyone freaks out, screaming and running.]''
:'''Dumbledore''': SILLLLLEEENNNNCEEEEE! ''[Everyone stops and calms down.]'' Everyone will please, not panic. Now, Prefects will lead their houses back to the dormitories. Teachers will follow me to the dungeons.
:'''Girl''': Hufflepuff, this way!
:'''Boy''': Stay together!
''[Snape looks aghast, and he walks out through a doorway. A bit later, Percy is leading the house down a corridor.]''
:'''Percy''': Gryffindors, keep up please. And stay alert!
:'''Harry''': How could a troll get in?
:'''Ron''': Not by itself. Trolls are really stupid. Probably people playing jokes. ''[Suddenly, Harry stops and pulls Ron aside.]'' What?
:'''Harry''': Hermione! She doesn't know!
''[The two separate themselves from the crowd. They run down corridors. They start running down a hall when they stop, because there is a grunting noise and a large shadow on the wall.]''
:'''Ron''': I think the troll's left the dungeon!
''[Harry pulls Ron into a doorway, they peer out to see a large, ugly troll thunks by into a room.]''
:'''Harry''': It’s going into the Girl's Bathroom!
''[In the bathroom, Hermione emerges from a stall, wiping her eyes. She stops when she sees something. The troll is standing there. Hermione backs up, into the stall just as the troll raises its club and smashes the top part of the stalls. Hermione screams. Harry and Ron come bursting in.]''
:'''Harry''': Hermione, move!
''[The troll smashes the remaining stalls.]''
:'''Hermione''': Help! Help! ''[The boys start throwing wood pieces at the troll.]''
:'''Ron''': Hey, pea brain! ''[Ron throws wood and hits the troll on the head. Hermione escapes from the stalls to under a sink, but the troll sees her and goes to smash her. It cracks the sink and barely misses Hermione. Harry cringes.]''
:'''Hermione''': Ahhh! Help!
''[Harry gets out his wand. He runs forward and grabs the troll's club, and is lifted up.]''
:'''Harry''': Whoa! ''[He lands on the troll's shoulders, and is hurled around, back and forth.]''
:''[Harry's wand shoots up the troll's nose. The troll groans in disgust.]''
:'''Ron''': Ew!
''[Ron and Hermione were disgusted by Harry’s wand in the troll’s nose. The troll snorts, and whips around.]''
:'''Harry''': Whoa, whoa whoa!
''[The troll gets Harry off its shoulders and is holding him by one leg, upside down.]''
:'''Harry''': Do something!
''[It gears up its club and swipes at Harry. He pulls himself up, then down.]''
:'''Ron''': What?!
:'''Harry''': Anything! ''[the troll swipes at Harry again]'' Hurry up!
''[Ron grabs his wand. Under the sink, Hermione waves her hand.]''
:'''Hermione''': Swish and flick!
:'''Ron''': ''[correctly punctuating the words]'' Wingardium Leviosa! ''[Flick. The club is lifted out of the troll's hand and hovers above its head. The troll looks hat his hand and opens it, then looks up, confused, just as the club comes crashing back down.]'' Cool. ''[It hits the troll's head that hard and the troll wavers, then drops Harry, who crawls away, and slowly comes crashing down, knocked out. Hermione approaches carefully.]''
:'''Hermione''': Is it...dead?
:'''Harry''': I don't think so. Just knocked out. ''[He grabs his wand...which is covered in mucus.]'' Ugh! Troll bogies.
''[Harry wipes his wand on his robes. Suddenly, McGonagall, Snape and Quirrell come rushing in. They all gasp at the knocked out troll.]''
:'''McGonagall''': Oh! Oh, my goodness! E-Explain yourselves, both of you!
:'''Ron and Harry''': Well, what it is...
:'''Hermione''': It's my fault, Professor McGonagall. ''[The teachers, Ron and Harry look at her.]''
:'''McGonagall''': Miss Granger?
:'''Hermione''': I went looking for the troll. I'd read about them and thought I could handle it. But I was wrong. If Harry and Ron hadn't come and found me...I'd probably be dead.
:'''McGonagall''': Be that as it may be...it was an extremely foolish thing to do. ''[Harry notices Snape's leg, which has the trousers' leg torn and a large cut on it. Snape notices and covers it up, glaring at Harry.]'' I would have expected more rational behavior on your part, Miss Granger. Five points will be taken from Gryffindor for your serious lack of judgment. ''[she turns to Harry and Ron]'' As for you two gentlemen I just hope you realize how fortunate you are. Not many students could take on a fully grown mountain troll and live to tell the tale. Five points...will be awarded to each of you. ''[Harry and Ron grin at each other]'' For sheer dumb luck.
''[Snape and McGonagall leave the bathroom]''
:'''Quirrell''': Perhaps you ought to go...M-might wake up...heh. ''[Harry, Ron and Hermione exit the bathroom. Quirrell looks at the unconscious troll. The troll growls, seemingly going to wake up.]'' Ahh! Hehe....

'''''(Extended Scene)'''''

''[Harry, Ron and Hermione are walking back to the Gryffindor Common Room through the corridor.]''
:'''Harry''': ''[to Hermione]'' Good for you to get us out of trouble like that.
:'''Ron''': Mind you, I mean, we did save her life.
:'''Harry''': Mind you, she didn't need saving if ''you'' hadn't insulted her.
''[Hermione looks at Ron.]''
:'''Ron''': What are friends for?
''[They both smile at each other as they carry on through the corridor.]''

==Quidditch==
:''[The next morning, in the great hall. The gang is sitting, eating. Harry is twirling his food on a fork.]''
:'''Ron:''' Take a bit of toast, mate, go on.
:'''Hermione:''' Ron's right, Harry. You're gonna need your strength today.
:'''Harry:''' I'm not hungry.
''[Snape appears at the table.]''
:'''Snape:''' Good luck today, Potter. Then again, now that you've proven yourself against a troll, a little game of Quidditch should be easy work for you...even if it is against Slytherin. ''[Snape walks off, limping. Harry notices this.]''
:'''Harry:''' That explains the blood.
:'''Hermione:''' Blood?
:'''Harry:''' Listen, last night, I'm guessing Snape let the troll in as a diversion so he could try and get past that 3 headed dog. But, he got himself bitten, that's why he's limping.
:'''Hermione:''' But why would anyone go near that dog?
:'''Harry:''' The day I was at Gringotts, Hagrid took something out of one of the vaults. He said it was Hogwarts' business, very secret.
:'''Hermione:''' So you're saying...
:'''Harry:''' That's what the dog's guarding. That's what Snape wants.
:''[Hedwig screeches as she enters the Great Hall. She is carrying a very large, long parcel. She drops it off at the table.]''
:'''Hermione:''' Bit early for mail, isn't it?
:'''Harry:''' But I-I never get mail.
:'''Ron:''' Let's open it.
''[They open it to reveal a broomstick.]''
:'''Harry:''' It's a broomstick!
:'''Ron:''' Thats not just any broomstick, Harry. ''[recognizing the model]'' It's a Nimbus 2000!
:'''Harry:''' But who...?
''[He notices Professor McGonagall up at the head table, stroking Hedwig. She smiles and Harry nods.]''
''[Later on, inside a Quidditch tower. The Gryffindor team is marching towards the starting gate. They reach it and stop, behind a closed double door.]''
:'''Oliver:''' Scared, Harry?
:'''Harry:''' A little.
:'''Oliver:''' That's all right. I felt the same way before my first game.
:'''Harry:''' What happened?
:'''Oliver:''' Er, I don't really remember. I took a bludger to the head 2 minutes in. Woke up in the hospital a week later.
''[Harry gulps and looks straight ahead as the doors open. They mount their brooms and zoom out onto the enormous pitch. There is cheering. Lee Jordan, the Quidditch commentator is announcing from a tower.]''
:'''Lee:''' Hello, and welcome to Hogwarts' first Quidditch game of the season! Today's game Slytherin versus Gryffindor!!!
''[Cheering. Close-up of Gryffindor students. They are cheering.]''
:'''Neville:''' Gryffindor!
''[The players take their positions in the air in a circle. Harry weaves in, highest amongst. He looks down.]''
:'''Lee:''' The players take their positions as Madam Hooch steps out onto the field to begin the game.
:'''Hooch:''' Now, I want a nice clean game...from all of you. ''[looks at Slytherin. She kicks the trunk, and the bludgers zoom out.]''
:'''Lee:''' The bludgers are up...followed by the Golden Snitch. Remember, the snitch is worth 150 points. The seeker who catches the Snitch ends the game.
''[The snitch zooms around each Seeker's head, then disappears. Hooch grabs the Quaffle.]''
:'''Lee:''' The Quaffle is released...and the game begins!
''[Gryffindor takes possession of the ball and a chaser, Angelia Johnson, zooms past the Slytherins towards their goal, and throws the ball, and scores! There is a ding.]''
:'''Lee:''' Angelina Johnson scores! 10 points for Gryffindor! ''[He presses a button and a 10 shows up beside a plaque with Gryffindor’s name.]''
''[Harry, in the air, claps.]''
:'''Harry:''' Yes! ''[a bludger suddenly zooms by him.]'' Whoa!
''[In the stands, Gryffindor cheers.]''
:'''Hagrid:''' Well done!
:'''Lee:''' Slytherin takes possession of the Quaffle. Bletchley passes to Captain Marcus Flint.
''[Flint dodges people and throws for the Gryffindor hoops. Oliver appears and whacks the ball away with his broom. He smirks at Flint, who glares. Johnson and Katie Bell pass the Quaffle back and forth as they strategize to score. Johnson takes it, throws, and once again scores!]''
:'''Ron and Seamus:''' Yay!
:'''Harry:''' Yes!
:'''Lee:''' Another 10 points to Gryffindor! ''[he adds another 10 to the score with a ding.]''
:'''Gryffindors:''' Yay!
''[The Slytherins decide to get messy. They dodge, kick, and try to score. Once again, Oliver blocks.]''
:'''Flint:''' Give me that! ''[he grabs a beaters bat from one and whacks a bludger right at Oliver. It hits Oliver directly in the stomach and he plummets to the ground, knocked out.]''
''[This causes the entire audience to boo; Harry is visibly upset as the Slytherins laugh. The Slytherin members head off. One jumps over George (or Fred) and scores. Lee adds 10 points in the plaque with Slytherin's name. Harry is upset again. Slytherin cheers.]''
:'''Flint:''' ''[to his teammates]'' Take that side!
''[They box Johnson in and sent her into the capes covering one of the towers. She falls down in and is out. The crowd boos. Slytherin scores once again. ''

==Interference Overcome==
:''[Suddenly, Harry sees the Snitch. He starts to head off after it and then suddenly his broom starts bucking and turning.]''
:'''Harry:''' Whoa! Whooa!
:'''Hagrid:''' What's going on with Harry's broomstick?
''[Hermione looks through binoculars at Harry, then at Snape, who is visibly muttering.]''
:'''Hermione:''' It's Snape! He's jinxing the broom!
:'''Ron:''' Jinxing the broom? What do we do?
:'''Hermione:''' Leave it to me. ''[She hands Ron her binoculars and leaves the stands.]''
''[Harry is knocked and thrown around, then falls, dangling by one arm from the broom.]''
:'''Ron:''' ''[concerned]'' Come on, Hermione!
''[Hermione is hurrying up in the tower structures. She appears underneath Snape and touches his cloak with her wand.]''
:'''Hermione:''' ''[quietly]'' Lacarnum Inflamarae.
''[A spark ignites and Snape's cloak catches fire. Hermione quickly leaves.]''
:'''Man:''' Fire! You're on fire!
:'''Snape:''' What? Oh! ''[knocks the man back, who falls into Quirrell, who then also falls. Snape bats out the fire and acts as though nothing happened. The broom stop bucking, and Harry climbs back on. The Slytherin seeker is after the Snitch. Harry takes off.]''
:'''Ron:''' Go!
:'''Hagrid:''' Go go go!
''[Harry rams the Slytherin Seeker, then is butted out. He returns, smashing the Seeker again as the Snitch dives. The boys follow, but they approach the ground quickly. The Slytherin Seeker backs out, and Harry pulls up his broom as he follows the Snitch, feet above the ground. Harry stands up, and steps forward, trying to grab the ball. He goes too far, and topples off the broom with a yelp, tumbling on the ground. He gets up and lurches. The crowd gasps. Hermione appears beside a tower to see.]''
:'''Hagrid:''' Looks like he's gonna be sick!
''[Harry lurches and the Snitch pops out of his mouth. It lands in his hands.]''
:'''Lee:''' He's got the Snitch! Harry Potter receives 150 points for catching the Snitch!
:'''Hooch:''' ''[Blows her whistle whilst riding on her broomstick]'' Gryffindor win!
''[The crowd cheers in joy including Gryffindor]''
:'''Draco:''' ''[dismayed]'' No!
:'''Hagrid:''' Yes!
:'''Hermione:''' Whoo-hoo!
''[McGonagall giggles happily. Harry raises the Snitch into the air and the crowd, and his team, cheers.]''
:'''Crowd:''' Go go Gryffindor! Go go Gryffindor! Go go Gryffindor! Go go Gryffindor!

==Christmas Gift==
''[Harry, Hermione and Ron are walking along a path with Hagrid, talking.]''
:'''Hagrid: '''Nonsense! Why would Snape put a curse on Harry’s broom?
:'''Harry: '''Who knows? Why was he trying to get past that three-headed dog on Halloween?
:'''Hagrid:''' ''[turns to them, suspiciously]'' Who told you ‘bout Fluffy?
:'''Ron:''' Fluffy?
:'''Hermione:''' That thing has a name?
:'''Hagrid:''' Well, of course he's got a name. He's mine. I bought him off an Irish feller I met down at the pub last year. Then I lent him to Dumbledore to guard the..
:'''Harry:''' Yes?
:'''Hagrid:''' Shouldn’t have said that. No more questions! Don’t ask any more questions. That's top secret, that is.
:'''Harry:''' But, Hagrid, whatever Fluffy's guarding, Snape's trying to steal it.
:'''Hagrid:''' Codswallop. Professor Snape is a Hogwarts teacher.
:'''Hermione:''' Hogwarts teacher or not, I know a spell when I see one. I've read all about them. You've got to keep eye contact and Snape wasn't blinking.
:'''Harry:''' Exactly.
:'''Hagrid:''' ''[Sighs]'' Now, you listen to me, all three of you. You're meddling in things that ought not to be meddled in. It's dangerous. What that dog is guarding is strictly between Dumbledore and Nicholas Flamel.
:'''Harry''': ''[Curious and turns to Ron then back to Hagrid]'' Nicholas Flamel?
:'''Hagrid:''' ''[Mumbles to himself]'' I shouldn't said that. I should not have said that.
''[He then leaves, mumbling to himself "I should have not said that"]''
:'''Harry:''' Nicholas Flamel. ''[Turns to Hermione]'' Who's Nicholas Flamel?
:'''Hermione: '''I don't know. ''[Shakes her head]''
''[It is now Christmas at Hogwarts, with snow falling. Hagrid is dragging a massive Christmas tree to the castle.]''
''[Hermione walks to the Great Hall entrance with her luggage and wearing a scarf as the ghosts are singing Christmas songs.]''
:'''Ghosts:''' Merry Christmas. Merry Christmas. Ring the Hogwart bell. Merry Christmas. Merry Christmas...
:''[Hermione looks from the massive Christmas tree as Flitwick uses his wand to put another ornament on the tree to Harry and Ron as they play Chess and walks towards them.]''
:'''Harry:''' Knight to E5. ''[The Knight moves to its destination. Hermione walks up behind Harry.]''
:'''Ron:''' ''[With a smug face]'' Queen to E5.
''[Hermione watches as Ron's queen goes over to Harry's knight and whacks the knight with her chair. Ron grins.]''
:'''Hermione:''' ''[With a shocked face]'' That's totally barbaric!
:'''Ron:''' That's wizard's chess. ''[Looks over to Hermione]'' I see you've packed.
:'''Hermione:''' See you haven't.
:'''Ron:''' Change of plans, my parents decided to go to Romania to visit my brother Charlie. He's studying dragons there.
:'''Hermione:''' Good, you can help Harry, then. He's going to go and look in the library for information on Nicholas Flamel.
:'''Ron:''' We've looked a hundred times.
:'''Hermione:''' ''[Leans over on the table closer to Ron and Harry]'' Not in the restricted section. Happy Christmas. ''[Hermione leaves Ron and Harry]''
:'''Ron:''' ''[Looks at Harry]'' I think we've had a bad influence on her.
''[It is now Christmas morning. Ron is waking Harry up]''
:'''Ron:''' ''[From downstairs]'' Harry wake up! Come on Harry, wake up!
:''[Harry puts on his glasses and runs out of bed. He then looks down at Ron]''
:'''Ron:''' ''[Looking up at Harry]'' Happy Christmas, Harry.
:'''Harry:''' Happy Christmas, Ron. ''[Harry notices Ron's sweater]'' What are you wearing?
:'''Ron:''' ''[Looks down at sweater]'' Oh. My mum made it. ''[Looking back up at Harry]'' It looks like you've got one too.
:'''Harry:''' I-I've got presents?
:'''Ron:''' ''[Nodding]'' Yeah!
''[Harry runs down the staircase to see his presents]''
:'''Ron:''' There they are.
''[Harry sees a note on the present and opens it, reading it out]''
:'''Harry:''' Your father left this in my possession before he died. It is time it was returned to you. Use it well. ''[Harry looks over to Ron, who shrugs his shoulders]''
''[Harry then proceeds to open the remaining of his present. He pulls out a blanket-like object]''
:'''Ron:''' What is it?
:'''Harry:''' ''[Looking down at the object]'' It's some kind of cloak.
:'''Ron:''' Well, let's see then, put it on.
''[Harry then wraps the cloak around his shoulders, making his body invisible]''
:'''Ron:''' Whoa!
:'''Harry:''' ''[Looks down at his invisible body]'' My body's gone!
:'''Ron:''' I know what that is. That's an invisibility cloak.
:'''Harry:''' I'm invisible? ''[Harry spins around, looking down at himself]''
:'''Ron:''' They're really rare. ''[Ron looks down at the note]'' I wonder who gave it to you?
:'''Harry:''' ''[Now also looking down at the note]'' There was no name. It just said use it well.

==Cloaked in darkness==
''[Late at night. A lantern and hand appear, but nothing else. The ensemble walk through the dark library and into the Restricted Section. The lamp is put down, and the cloak removed, revealing to be Harry who searches the bookshelves.]''
:'''Harry:''' Famous fire eaters...15th Century Fiends...Flamel...Nicholas Flamel...where are you?
''[Harry picks up a book and opens it. A man's face appears from between the pages, which screams madly and loudly. Harry immediately slams the book shuts and puts it back.]''
:'''Filch:''' Who's there?! ''[Harry whips around, and quickly grabs his cloak, causing the lamp to fall and shatter.]'' I know you're in there. You can't hide. ''[Harry puts on his cloak and creeps around Filch.]'' Who is it? Show yourself!
''[Harry runs from the room, breathing heavily. He exits into the hall, where Mrs. Norris, who meows and begins to follow him. Harry runs around a corner, just as Snape and Quirrell appear. Snape pushes Quirrell into the wall.]''
:'''Quirrell:''' Severus...I-I thought...
:'''Snape:''' You don't want me as your enemy, Quirrell.
:'''Quirrell:''' W-what do you m-mean?
:'''Snape:''' You know perfectly well what I mean. ''[Snape senses something who causes Harry to stop breathing. Snape reaches out to grab something, but doesn't. He whips his finger back in front of Quirrell's face.]'' We'll have another chat soon...when you've had time to decide where your loyalties lie.
''[Filch arrives, carrying the broken lantern.]''
:'''Filch:''' Oh, Professors. I found this, in the Restricted Section. It's still hot. That means there's a student out of bed.
''[Upon hearing this, Snape and Quirrell dart off]''

==The Mirror of Erised==
''[A door opens, and closes. On the other side, there is a vast, empty room that has a large mirror in the center, known as the Mirror of Erised. Harry appears and walks over to the mirror. In the reflection, he sees two people appear who are Harry's late parents, James and Lily Potter.]''
:'''Harry:''' Mum? ''[Lily nods and smiles]'' Dad? ''[James nods and smiles. Harry reaches out to touch them, but only gets the mirror. Then, his mother puts her hand on his shoulder. He puts his own hand on his own shoulders, as if trying to feel her there.]''
''[Back in the boy's dormitory in Gryffindor tower, Harry comes whipping in, invisible.]''
:'''Harry:''' Ron! You've really got to see this! Ron! You've got to see this! ''[pulls back covers. Ron wakes up.]'' Ron, Ron, come on. Get out of bed!
:'''Ron:''' ''[tired]'' Why?
:'''Harry:''' There's something you've got to see. Now, come on!
''[Back in the room. Harry and Ron appear as if magically and Harry runs to the mirror.]''
:'''Harry:''' Come on. Come. Come look, it's my parents!
:'''Ron:''' I only see me.
:'''Harry:''' ''[moves over]'' Look in properly. Go on. Stand there. There. You see them, don't you? Thats my dad
:'''Ron:''' That's me! Only, I'm head boy...and I'm holding the Quidditch cup! And bloody hell, I'm Quidditch Captain too! I look good. Harry, do you think this mirror shows the future?
:'''Harry:''' How can it? Both my parents are dead. ''[Harry smiles sadly.]''

'''''(Extended Version)'''''

''[One day, in the Great Hall where most of the students, particularly the Weasleys are eating, Harry sits in front of the fireplace.]''
:'''George''': Do you like yours, Ron? ''[Ron turns to harry who still sits in front of the fireplace who is very quiet.]'' Ron?
:'''Ron''': I'll be right back. ''[He leaves the table and comes up to Harry.]'' Want to play chess?
:'''Harry''': No.
:'''Ron''': We go and visit Hagrid?
:'''Harry''': No.
:'''Ron''': Harry, I know what you're thinking, but don't. There's something not quite right about that mirror.
''[Harry nods and Ron leaves to go back to the table as Harry continues to stare at the fireplace.]''

'''''(Original Version)'''''

''[The next night, Harry is back in the room where the mirror is, gazing longingly at the reflection where his parents are in. Dumbledore appears far behind him]''
:'''Dumbledore''': Back again, Harry? ''[Harry turns around and stands up.]'' I see that you, like so many before you, have discovered the delights of the Mirror of Erised. I trust by now you realize what it does. Let me give you a clue. The happiest man on earth would look into the mirror and see only himself, exactly as he is.
:'''Harry''': So, then it shows us what we want? Whatever we want?
:'''Dumbledore''': ''[whilst looking at the mirror]'' Yes...and no. It shows us nothing more or less than the deepest, most desperate desires of our hearts. Now you, who have never known your family, you see them standing beside you. But remember this, Harry. This mirror gives us neither knowledge or truth. Men have wasted away in front of it, even gone mad. That is why tomorrow it will be moved to a new home, and I must ask you not to go looking for it again. It does not do to dwell on dreams, Harry, and forget to live. ''[Harry looks back at the mirror, knowing that Dumbledore is right.]''

==Norbert==
''[It is snowy in daytime, Harry is out in a main courtyard, bundled up, with Hedwig on his arm. He stops and she lifts off, soaring away into the sky. As the time passed when she returns, it is now spring time.]''

'''(Extended Version)'''

:'''Harry''': Hi, Hedwig. ''[Hedwig has just flown down to the table where Harry, Ron and Hermoine are studying]''
:'''Hermione''': Look at you playing with your cards. Pathetic! We've got final exams coming up soon.
:'''Ron''': I'm ready! Ask me any question.
:'''Hermione''': All right, what are the three most crucial ingredients in a Forgetfulness Potion?
:'''Ron''': ...I forgot.
:'''Hermione''': And what, may I ask, do you plan to do if this comes up in the final exam?
:'''Ron''': Copy off you?
:'''Hermione''': No, you won't! Besides, according to Professor McGonagall, we're to be given special quills bewitched with an anti-cheating spell.
:'''Ron''': That's insulting! It's as if they don't trust us! ''[checks a card, irritated]'' Dumbledore again!
''[Just then, Neville Longbottom comes hopping into the Great Hall with his legs stuck together as the other students laugh at him.]''
:'''Ron''': Leg-Locker Curse?
:'''Harry''': Malfoy. [Neville approaches them amidst laughter from the other students]
:'''Ron''': You have ''got'' to start standing up to people, Neville.
:'''Neville''': ''[wobbling uncontrollably]'' How? I can barely stand at all!
:'''Seamus''': ''[jumping up, wand at the ready]'' I'll do the counter-curse!
:'''Neville Longbottom''': No, that's all I need... you to set my bloody kneecaps on fire!
:'''Seamus''': ''[slamming his wand down angrily]'' I don't appreciate the insinuation, Longbottom. Besides, if anyone cares to notice, my eyebrows have completely grown back! ''[He then stalks off angrily, showing a large chunk of hair missing from the back of his head.]''
:'''Harry''': I found him! ''[hands Ron a Chocolate Frog card of Dumbledore]''
:'''Ron''': 'Dumbledore is particularly famous for his defeat of the Dark" Wizard Grindelwald in 1945&ndash;'
:'''Harry''': Go on.
:'''Ron''': '-for his discovery of the 12 uses of Dragon Blood, and his work on alchemy with his partner Nicolas Flamel!'
:'''Harry''': I knew the name sounded familiar. I read it on the train that day.
:'''Hermione''': ''[beaming excitedly]'' Follow me!
:''[the Trio tears out of the Great Hall, leaving poor Neville still flailing around]''
:'''Neville Longbottom''': Hey, wait, where are you going? What about the counter-curse?! ''[before he can say another word he topples over backwards, the other students start laughing.]''

'''(Original Version)'''

''[In the library, Harry and Ron are seated, reading until Hermione comes up with a huge book and thumps it onto the table making Harry jump.]''
:'''Hermione''': I had you looking in the wrong section! How could I be so stupid? I checked this out a few weeks ago for a bit of light reading.
:'''Ron''': This is light?
:'''Hermione''': Of course! Here it is! ''[as she reads the description in the page]'' "Nicholas Flamel is the only known maker of the Philosopher's Stone!"
:'''Ron and Harry''': The what?
:'''Hermione''': Honestly, don't you two read? "The Philosopher's Stone is a legendary substance with astonishing powers. It will turn any metal into pure gold and produces the Elixir of Life, which will make the drinker immortal."
:'''Ron''': Immortal?
:'''Hermione''': It means you'll never die.
:'''Ron''': I know what it means!
:'''Harry''': Shh!
:'''Hermione''': "The only stone currently in existence belongs to Mr. Nicholas Flamel, the noted alchemist, who last year celebrated his 665th birthday!" That's what Fluffy's guarding on the 3rd floor. That's what's under the trapdoor...the Philosopher's Stone!
''[They all look at each other in concern. It is nighttime in the castle grounds, Hermione, Ron and Harry are running across to Hagrid's hut. They knock on the door and Hagrid, who is wearing an apron and oven mitts, opens it from the inside.]''
:'''Harry''': Hagrid!
:'''Hagrid''': Oh, hello. Sorry, don't wish to be rude, but I'm in no fit state to entertain today.
''[He begins to close the door]''
:'''All three''': We know about the Philosopher's Stone!
''[Hagrid opens the door again]''
:'''Hagrid''': Oh.
''[They all come into Hagrid's hut.]''
:'''Harry''': We think Snape's trying to steal it.
:'''Hagrid''': Snape? Blimey, Harry, you're not still on about him, are you?
:'''Harry''': Hagrid, we know he's after the Stone. We just don't know why.
:'''Hagrid''': Snape is one of the teachers protecting the Stone! He's not about to steal it!
:'''Harry''': What?
:'''Hagrid''': You heard. Right. Come on, now, I'm a bit preoccupied today.
:'''Harry''': Wait a minute. ''[Ron soon sees Hagrid's boar-hound Fang, who sniffs him.]'' One of the teachers?
:'''Hermione''': ''[whilst sitting in a large chair]'' Of course! There are other things defending the Stone, aren't there? Spells, enchantments.
:'''Hagrid''': That's right. Waste of bloody time, if you ask me. ''[Hermione looks at Ron, who is still being sniffed in the face by Fang. Finally Ron shuffles away.]'' Ain't no one gonna get past Fluffy. Hehe, not a soul knows how. Except for me and Dumbledore. I shouldn't have told you that. I shouldn't have told you that. ''[A cauldron over a fire begins to rattle.]'' Oh! ''[Hagrid hurries over and grabs something]'' Ooh! Ooh! Ooh! Ooh! ''[He places it on the table. It was an egg. The group crowds around.]''
:'''Harry''': Uh, Hagrid, what exactly is that?
:'''Hagrid''': That? It's a ... its um...
:'''Ron''': I know what that is! But Hagrid, how did you get one?
:'''Hagrid''': I won it. Off a stranger I met down at a pub. Seemed quite glad to be rid off it, as a matter of fact.
''[The egg rattles and cracks open as pieces fly off; a small baby dragon emerges. It squeaks and slips on an egg piece.]''
:'''Hermione''': Is that...a dragon?
:'''Ron''': That's not just a dragon. That's a Norwegian Ridgeback! My brother Charlie works with these in Romania.
:'''Hagrid''': Isn't he beautiful? Oh. Bless him, look. He knows his mummy. Hehe. Hallo, Norbert.
''[Norbert squeaks as it looks at Hagrid.]''
:'''Harry''': Norbert?
:'''Hagrid''': Yeah, well, he's got to have a name, doesn't he? ''[Ron laughs]'' Don't you, Norbert? ''[he raises fingers back and forth across Norbert's chin]'' Dededede.
''[Norbert backs away, until he hiccups and blast a small fireball into Hagrid's beard.]''
:'''Hagrid''': Ohh! ''[he quickly pats out the smolders in his beard]'' Oooh, ooh, ooh, well...he'll have to be trained up a bit, of course. ''[Norbert hiccups. Hagrid sees someone looking in the window.]'' Who's that? ''[It turns out to be Draco Malfoy, who scampers away.]''
:'''Harry''': Malfoy.
:'''Hagrid''': Oh, dear.
''[Harry, Ron and Hermione are walking back through a corridor as an owl screeches.]''
:'''Harry''': Hagrid always wanted a dragon. He told me so the first time I met him.
:'''Ron''': It's crazy. And worse, Malfoy knows.
:'''Harry''': I don't understand. Is that bad?
:'''Ron''': It's bad.
''[They stop as McGonagall, in her nightgown, appears, sternly.]''
:'''McGonagall''': Good evening.
''[Then, Malfoy appears smugly beside her. Inside McGonagall's classroom, the three are now standing in front of McGonagall's desk, while Malfoy is feet away, smirking.]''
:'''McGonagall''': ''[sternly]'' Nothing, I repeat, nothing gives a student the right to walk about the school at night. Therefore, as punishment for your actions, 50 points will be taken.
:'''Harry''': 50?!
:'''McGonagall''': Each. ''[Harry gasps]'' And to ensure it doesn't happen again, all four of you will receive detention.
''[Malfoy nods, then his smile vanishes with great concern.]''
:'''Draco''': Excuse me, Professor. Perhaps I heard you wrong. I thought you said..."the four of us."
:'''McGonagall''': No, you heard me correctly, Mr. Malfoy. You see, as honorable as your intentions were, you too were out of bed after hours. You will serve detention with your classmates.
''[Harry, Ron and Hermione grin, as Draco sags, knowing that the tables have turned.]''
==The Forbidden Forest==
''[The next night, Harry, Ron, Hermione and Draco are being led to Hagrid's hut by Mr. Filch.]''
:'''Filch''': A pity they let the old punishments die. There was a time detention would find you hanging by your thumbs in the dungeons. God, I miss the screaming. ''[Draco gulps, and Hermione rushes by.]'' You'll be serving detention with Hagrid tonight. He's got a little job to do inside the dark forest. ''[Hagrid appears with a crossbow. He sniffles.]'' A sorry lot this, Hagrid. Oh, good God, man, you're not still on about that bloody dragon, are you?
:'''Hagrid''': ''[sniffs and sighs]'' Norbert's gone. Dumbledore sent him off to Romania to live in a colony.
:'''Hermione''': Well, that's good, isn't it? He'll be with his own kind.
:'''Hagrid''': Yeah, but what if he don't like Romania? {Filch rolls eyes.} What if the other dragons are mean to him? He's only a baby, after all.
:'''Filch''': Oh, for Gods sake, pull yourself together, man. You're going into the forest, after all. Got to have your wits about you.
:'''Draco''': The forest? I thought that was a joke! We can't go in there. Students aren't allowed. And there are...''[a howl sounds]''...werewolves!
:'''Filch''': There's more than werewolves in those trees, lad. You can be sure of that. ''[Draco looks frightened.]'' Nighty-night. ''[He leaves to go back into the castle]''
:'''Hagrid''': Right. Let's go.
''[In the Forbidden Forest, the group walks along a path to a tree. Hagrid stops, bends down and dips his fingers in a silver puddle. He pulls out his fingers and rubs them together. A silver trail smears with his fingers.]''
:'''Harry''': Hagrid, what's that?
:'''Hagrid''': What we're here for. See that? That's unicorn's blood, that is. I found one dead a few weeks ago. Now, this one's been injured bad by something. ''[Harry suddenly sees a large cloaked figure walking through the trees. He looks at Hagrid.]'' So, it's our job to find the poor beast. Ron, Hermione, you'll come with me.
:'''Ron''': Okay.
:'''Hagrid''': And Harry, you'll go with Malfoy. ''[Draco grimaces, and Harry nods.]''
:'''Draco''': Okay. Then I get Fang!
:'''Hagrid''': Fine. Just so you know, he's a bloody coward. ''[Fang whines.]''
''[Harry and Draco are walking through a part of the forest, with Fang leading. Draco has the lamp in his hand.]''
:'''Draco''': You wait till my father hears about this. This is servant's stuff.
:'''Harry''': If I didn't know better, Draco, I'd say you were scared.
:'''Draco''': Scared, Potter?! ''[He scoffs, but suddenly hears a howl]'' Did you hear that? Come on, Fang. Scared.
''[Harry and Draco approach a flat ground with gnarled roots all over. Fang stops, then growls.]''
:'''Harry''': What is it, Fang?
''[Up ahead is a cloaked figure who is crouching over a dead unicorn, drinking its blood from its wound. The figure raises its head, silver blood dripping from its mouth. Harry gasps and grabs his scar, which is hurting. Draco screams with pure fear and runs away with Fang.]''
:'''Draco''': HELP!!!!!
''[Harry is left by himself at the mercy of the figure who slides over the unicorn and rises erect. It advances towards Harry, who backs up, but trips. He crawls backwards. Suddenly, there is the sound of hoof-beats. A figure leaps over Harry and lands near the cloaked figure. It is a silver centaur called Firenze. It rears, and the cloaked figure retreats, flying away.]''
:'''Firenze''': Harry Potter, you must leave. You are known to many creatures here. The forest is not safe at this time. Especially for you.
:'''Harry''': But what was that thing you saved me from?
:'''Firenze''': A monstrous creature. It is a terrible crime to slay a unicorn. Drinking the blood of a unicorn will keep you alive even if you are an inch from death. But at a terrible price. You have slain something so pure that the moment the blood touches your lips, you will have a half-life. A cursed life.
:'''Harry''': But who would choose such a life?
:'''Firenze''': Can you think of no one?
:'''Harry''': Do you mean to say...that that thing that killed the unicorn...that was drinking its blood...that was Voldemort?
:'''Firenze''': Do you know what is hidden in the school at this very moment?
:'''Harry''': ''[realizing]'' The Philosopher's Stone.
''[Fang suddenly barks and Harry looks up to see Hagrid, Hermione, Ron and Draco appear. Hagrid has his crossbow ready, but lowers it when he sees Firenze.]''
:'''Hermione''': Harry!
:'''Hagrid''': Hello there, Firenze. I see you've met our young Mr. Potter. You all right there, Harry? ''[Harry nods]''
:'''Firenze''': Harry Potter, this is where I leave you. You're safe now. Good luck.
''[He leaves as the group look at the dead unicorn.]''
==Up to Something==
:'''Hermione:''' ''[she, Harry, and Ron are meeting in the common room]'' You mean You-Know-Who's out there, right now, in the forest?
:'''Harry:''' But he's weak. He's living off the unicorns. Don't you see? We had it wrong! Snape doesn't want the Stone for himself; he wants the Stone for Voldemort. With the Elixir of Life, Voldemort will be strong again. He'll... he'll come back.
:'''Ron:''' But, if he comes back, you don't think he'll try to... kill you, do you?
:'''Harry:''' I think if he'd had the chance, he might've tried to kill me tonight.
:'''Ron:''' ''[gulps]'' And to think I've been worrying about my Potions final.
:'''Hermione:''' Hang on a minute. ''[Harry and Ron both glance at her]'' We're forgetting one thing. Who's the one wizard Voldemort always feared? Dumbledore. As long as Dumbledore's around, Harry, you're safe. As long as Dumbledore's around, you can't be touched. ''[gives him a reassuring smile; he nods]''
:''[Later all the students are rushing out as they finish their exams.]''
:'''Hermione:''' I'd always heard Hogwart’s end-of-year exams were frightful, but I’ve found they're rather enjoyable.
:'''Ron:''' Speak for yourself. All right there, Harry?
:''[We see Harry walking next to the two rubbing his forehead right where the scar is.]''
:'''Harry:''' My scar. It keeps burning.
:'''Hermione:''' It's happened before... 
:'''Harry:''' Not like this.
:'''Ron:''' Perhaps you should see the nurse. 
:'''Harry:''' I think it's a warning. It means danger's coming. ''[A look of realization]'' Ah... Oh! Of course! 
:''[Harry starts walking faster making Hermione and Ron speed up to catch him]''
:'''Hermione:''' What is it?
:'''Harry:''' Don't you think it's a bit odd that what Hagrid wants more than anything is a dragon, and a stranger turns up who just happens to have one? I mean, how many people wander around with dragon eggs in their pocket? Why didn't I see it before? 
:''[They approach Hagrid's hut and he is playing a flute.]''
:'''Harry:''' Hagrid, ''[Hagrid stops playing]'' who gave you the dragon egg? What did he look like?
:'''Hagrid:''' I dunno. I never saw his face. He kept his hood up.
:'''Harry''': This stranger though, you and he must have talked.
:'''Hagrid:''' Well, he- he wanted to know what sort of creatures I looked after. I told him, I said, after Fluffy a dragon's gonna be no problem. 
:'''Harry:''' Did he seem interested in Fluffy? 
:'''Hagrid:''' Well, o’ course he was interested in Fluffy! How often do you come across a three-headed dog, even if you're in the trade? But I told ‘im, I said, I said, ‘The trick with any beast is to know how to calm ‘im. Take Fluffy, for example, just play him a bit o’ music, and he falls straight to sleep.’ I shouldn't have told you that. ''[The Trio runs off]'' Where are you going? Where are you-?
:''[Harry, Hermione, and Ron run into the Transfiguration classroom to talk to McGonagall.]''
:'''Harry:''' We have to see Professor Dumbledore, immediately! 
:'''McGonagall:''' I’m afraid Professor Dumbledore is not here. He received an urgent owl from the Ministry of Magic and left immediately for London.
:'''Harry:''' He’s gone! Now! But, this is important! This is about the Philosophers Stone! 
:'''McGonagall:''' ''[Looking shocked]'' How do you know-? 
:'''Harry:''' Someone’s going to try to steal it!
:'''McGonagall:''' I don’t know how you three found out about the Stone, but I assure you it is perfectly well protected. Now, would you go back to your dormitories, quietly
:''[They leave the classroom talking to each other.]''
:'''Harry:''' That was no stranger Hagrid met in the village. It was Snape. Which means, he knows how to get past Fluffy.
:''[Snape sneaks up behind them]''
:'''Hermione:''' And with Dumbledore gone-
:'''Snape:''' Good afternoon. Now, what would three young Gryffindors, such as yourselves, be doing inside on a day like this?
:''[The three of them jump and quickly turn around.]''
:'''Hermione:''' Ah, w- w- w... we- we were just-
:'''Snape:''' You ought to be careful. People will think you’re... up to something. ''[Walks away]''
:'''Hermione:''' Now, what do we do?
:'''Harry:''' ''[With a determined look]'' We go down the trap door, tonight.

==Through the Trapdoor==
''[Nighttime. In the Gryffindor Common Room. The three friends come down the stairs and begin to walk across the floor. They stop when they hear croaking.]''

'''Harry:''' Trevor.

'''Ron:''' Trevor shh! Go, you shouldn't be here!

'''Neville:''' ''[appears behind a chair]'' Neither should you. You're sneaking out again, aren’t you?

'''Harry:''' Now, Neville, listen. We were -

'''Neville:''' No! I won't let you! ''[stands]'' You'll get Gryffindor in trouble again! I-I'll fight you. ''[Neville holds out his fists.]''

'''Hermione:''' Neville, I'm really, really sorry about this...''[takes out wand]'' Petrificus Totalus.

''[Neville is frozen and falls backwards onto the ground. Hermione puts her wand back.]''

'''Ron:''' ''[Gulp]'' You're a little scary sometimes...you know that? Brilliant, but scary.

'''Harry:''' Let's go. ''[Walks by Neville]'' Sorry.

'''Hermione:''' Sorry.

'''Ron:''' It's for your own good, you know.

''[The three are under the Invisibility cloak, sneaking along the corridor.]''

'''Hermione:''' Ow! You stood on my foot!

'''Ron:''' Sorry. ''[A flame lights. Hermione draws out her wand and points it at the door.]''

'''Hermione:''' Alohomora.

''[The door opens and they go in.]''

'''Ron:''' Wait a minute...he's....

''[a blow of air, and the cape flutters off them.]''

'''Ron:''' Sleeping.

'''Harry:''' Snape's already been here. He's put a spell on the harp. He’s probably taken my sisters with him. 

''[They approach the sleeping dog.]''

'''Ron:''' Uh. It's got horrible breath!

'''Harry:''' We have to move its paw.

'''Ron:''' What?!

'''Harry:''' Come on! ''[grabs paw, which is blocking the door.]'' Okay. Push! [''They strain and move it. They open the door.]'' I'll go first. Don't follow until I give you a sign. ''[Fluffy's eyes open.]'' If something bad happens, get yourselves out...Does it seem a bit...quiet?

'''Hermione:''' The harp. It stopped playing.

''[Drool from one head comes down on Ron's shoulder.]''

'''Ron:''' Ew! Yuck! Ugh. ''[All three kids look up and see Fluffy standing there. Fluffy barks and growls, thrashing. It breaks the harp and dives at the three.]''

'''Harry:''' Jump! Go! ''[They all jump through the trapdoor.]''

'''Ron:''' Ahh! ''[gasps as he lands on some mushy black ropelike vines.]'' Whoa. Lucky this plant-thing is here, really.

'''Harry:''' Whoa! ''[The plant begins to move towards them.]'' Oh. Ahh! ''[The plant ties them up.]''

'''Hermione:''' Stop moving, both of you. This is Devil's Snare. You have to relax. If you don't, it will only kill you faster.

'''Ron:''' Kill us faster?! Oh, now I can relax!

''[Hermione manages a smile as she is sucked down below.]''

'''Ron/Harry:''' Hermione!!

'''Ron:''' Now what are we gonna do?!

'''Hermione:''' Just relax!

'''Harry:''' Hermione! Where are you?!

'''Hermione:''' ''[from below]'' Do what I say. Trust me.

''[Harry relaxes and is sucked through.]''

'''Ron:''' Ahh! Harry!

''[Harry falls through and lands on the hard ground. Hermione goes over to him and he stands up.]''

'''Ron:''' Harry!

'''Hermione:''' Are you okay?

'''Harry:''' Yeah, yeah, I'm fine.

'''Ron:''' Help!

'''Hermione:''' He's not relaxing, is he?

'''Harry:''' Apparently not.

'''Ron:''' Help! Help me!

'''Hermione:''' We've got to do something!

'''Harry:''' What?

'''Hermione:''' Uh! I remember reading something in Herbology. 

'''Ron:''' Help!

'''Hermione:''' Um Devil's Snare, Devil's Scare, ''[The snare shuts Ron's mouth]'' it's deadly fun...but will sulk in the sun! That's it! Devil's Snare hates sunlight! ''[takes out wand and points upwards.]'' Lumus Solem! ''[A beam of light shoots out. The Snare shrieks and recoils. Ron falls below.]''

'''Ron:''' Ahhh!

'''Harry:''' Ron, are you okay?

'''Ron:''' Yeah.

'''Harry:''' Okay.

'''Ron:''' ''[stands]'' Whew. Lucky we didn't panic!

'''Harry:''' Lucky Hermione pays attention in Herbology.

''[There is a sound.]''

'''Hermione:''' What is that?

'''Harry:''' I don't know. Sounds like wings.

''[They enter into a room filled with golden "birds."]''

'''Hermione:''' Curious. I've never seen birds like these.

'''Harry:''' They're not birds, they're keys. And I'll bet one of them fits that door. ''[They come upon a broomstick, suspended in the air.]''

'''Hermione:''' What's this all about?

'''Harry:''' I don't know. Strange.

''[Ron creeps over to the door and takes out his wand.]''

'''Ron:''' ''[rattles lock.]'' Alohomora! ''[Shrugs]'' Well, it was worth a try.

'''Hermione:''' Ugh! What're we going to do? There must be 1000 keys up there!

'''Ron:''' We're looking for a big old fashioned one. Probably rusty like the handle.

'''Harry:''' There! I see it! ''[points]'' The one with the broken wing! ''[He looks at the broom.]''

'''Hermione:''' What's wrong, Harry?

'''Harry:''' It's too simple.

'''Ron:''' Oh, go on, Harry! If Snape can catch it on that old broomstick, you can! You're the youngest seeker in a century! Besides! What about Sunflower and Songbird! They need us! Especially you! 

''[Harry nods and grabs the broom. All the keys suddenly go one direction, right at Harry. He climbs on, swiping at them.]''

'''Ron:''' This complicates things a bit!

''[Harry pushes off into the air. He flies off, after the key. The others follow him. Harry grabs the key.]''

'''Harry:''' Catch the key!

''[He zooms by and throws the key to Hermione, who catches it and heads for the lock while Harry distracts the other keys. Hermione puts it in the lock.]''

'''Ron:''' Hurry up!

''[The door opens, and Hermione and Ron rush through, followed by Harry. They shut the door just as the keys slam up against it.]''

==Wizard's Chess==
''[They enter a dark room, with broken pieces all around it.]''

'''Hermione:''' I don't like this. I don't like this at all.

'''Harry:''' Where are we? A graveyard?

'''Ron:''' This is no graveyard. ''[sighs]'' It's a chessboard. ''[Walks out onto the marble board and flames light, illuminating the board and GIANT players. Harry and Hermione come up with him.]''

'''Harry:''' There's the door.

''[They walk across the board, towards the door. Suddenly, as they reach a line of pawns, the pawns bring up their swords. The three jump and back up.]''

'''Hermione:''' Now what do we do?

'''Ron:''' It's obvious, isn't it? We've got to play our way across the room. All right. Harry, you take the Bishop's square. Hermione, you'll be the Queen's side castle. As for me, I'll be a knight. ''[They all take their places.]''

'''Hermione:''' What happens now?

'''Ron:''' ''[aboard a horse.]'' Well, white moves first, and then...we play. ''[A pawn on the other side moves forward. Ron studies the game.]''

'''Hermione:''' Ron, you don't suppose this is going to be like...real wizard's chess, do you?

'''Ron:''' You there! D-5! ''[A black pawn moves forward, diagonal to the white pawn. The white pawn raises its swords and smashes the black one. The three jump.]'' Yes, Hermione, I think this is going to be exactly like wizard's chess!

''[The game continues. Pieces smash each other, boom! Boom!]''

'''Ron:''' Castle to E-4! ''[Smash!]''

'''Ron:''' Pawn to C-3! ''[Smash! Boom! The Queen turns, and smashes a piece! Harry, Ron and Hermione wince.]''

==Sacrifice Play==
:''[The Queen turns again. Both Ron and Harry study the game.]''

'''Harry:''' Wait a minute.

'''Ron:''' You understand right, Harry. Once I make my move, the Queen will take me...then you'll be free to check the King.

'''Harry:''' No, Ron! No!

'''Hermione:''' What is it?

'''Harry:''' He's going to sacrifice himself!

'''Hermione:''' No, Ron, you can't! ''[Ron closes his eyes.]'' There must be another way!

'''Ron:''' ''[turns to face Hermione.]'' Do you want to stop Snape or not? Harry, it's you that has to go on. I know it. Not me, not Hermione, you. ''[Harry nods.]'' Knight...to H-3.

''[Ron's horse moves forward, slides and stops.]''

'''Ron:''' Check.

''[The Queen turns and advances. Ron breathes faster, clutching the steel reins. The Queen stops. SMASH! Ron goes flying off the horse and lands on the floor, unconscious.]''

'''Ron:''' Ahhhh!

'''Harry:''' RON! ''[Hermione starts walking to him.]'' NO! Don't move! Dont forget, we're still playing. ''[Hermione moves back. Harry walks the diagonal in front of the King.]'' Checkmate''. [The Kings sword falls onto the ground victory. Harry breathes out and then the two run to Ron. They bend beside him.]'' Take care of Ron. Then, go to the owlery. Send a message to Dumbledore. Ron's right...I have to go on.

'''Hermione:''' You'll be okay, Harry. You're a great wizard, you really are.

'''Harry:''' Not as good as you.

'''Hermione:''' ''[smile]'' Me? Books and cleverness? There are more important things. Friendship, and bravery. And Harry, just be careful.

''[Harry nods and stands, walking away.]''

==Man With Two Faces==
''[Harry walks down the stairs slowly. Halfway down, he winces, feeling his scar burning, and sees Professor Quirrell standing before the Mirror of Erised.]''
:'''Harry''': You? ''[Quirrell turns to face him]'' No. I-it can’t be. Snape, h-he was the one—-
:'''Quirrell''': Yes. He does seem the type, doesn’t he? Next to him, who would suspect p-p-p-poor st-stuttering Professor Quirrell?
:'''Harry''': But-but that day, during the Quidditch match, Snape tried to kill me.
:'''Quirrell''': ''[smiling evilly]'' No, dear boy. ''I'' tried to kill you. ''[Harry eyes him in disbelief and confusion]'' And trust me, if Snape’s cloak hadn’t caught fire and broken my eye contact, I would have succeeded, even with Snape muttering his little countercurse.
:'''Harry''': Snape was trying to save me?
:'''Quirrell''': I knew you were a danger to me right from the off. Especially after Halloween.
:'''Harry''': Then-then you let the troll in.
:'''Quirrell''': Very good, Potter, yes. Snape, unfortunately, wasn’t fooled. While everyone else was running about the dungeon, he went to the third floor to head me off. He, of course, never trusted me again. ''[he turns towards the mirror again; Harry winces as his scar burns again]'' He rarely left me alone. But he doesn’t understand. I’m never alone, never. ''[staring into the mirror]'' Now, what does this mirror do? I see what I desire. I see myself holding the stone. But how do I get it?
:'''Unseen Inhuman Voice''': Use the boy. ''[Harry looks around, wondering where the voice is coming from]''
:'''Quirrell''': ''[turns to Harry]'' Come here, Potter. Now! ''[Harry slowly walks down the stairs, towards Quirrell and the mirror]'' Tell me... what do you see? ''[Harry looks into the mirror, and for a few seconds, sees him standing next to Quirrell, then his reflection reaches into its pocket and pulls out a gleaming red ruby, the Philosopher’s Stone; Harry stares in amazement as his reflection smiles and winks, then puts the stone back in its pocket; Harry feels his pocket and realizes the Stone really is in his pocket, then looks up again]'' What is it? ''[glances at Harry while speaking]'' What do you see?
:'''Harry''': ''[looks at Quirrell, then back at the mirror, determined not to let Quirrell know that he has the Stone]'' I-I’m shaking hands with Dumbledore. I’ve won the House Cup.
:'''Unseen Inhuman Voice''': He lies.
:'''Quirrell''': ''[angrily shouting]'' Tell the truth! What do you see?!
:'''Unseen Inhuman Voice:''' Let me speak to him.
:'''Quirrell''': ''[as Harry backs away]'' Master, you are not strong enough.
:'''Unseen Inhuman Voice''': I have strength enough for this.
:''[Quirrell reaches up and starts unwrapping his turban as he turns so his back is to the mirror. Harry turns toward the staircase into the room, wondering whether he should try to escape, then turns towards Quirrell again. He is almost finished unwrapping his turban, save for a piece covering the back of his head. Finally, he removes the turban, revealing a scary-looking chalk white face, Voldemort. He cranes around and opens his eyes.]''
:'''Voldemort''': Harry Potter, we meet again.
:'''Harry''': ''[realizing his identity]'' Voldemort.
:'''Voldemort''': Yes. You see what I’ve become? See what I must do to survive? Live off another, a mere parasite. Unicorn blood can sustain me, but it cannot give me a body of my own. But there is something that can, something that, conveniently enough, lies in your pocket. ''[realizing Voldemort is referring to the Philosopher’s Stone, Harry turns and runs back up the stairs]''

==Magic Touch==
:'''Voldemort''': Stop him. ''[Quirrell snaps his fingers, instantly causing fire walls to block all the exits, trapping Harry in the room]'' Don't be a fool! Why suffer a horrific death when you can join me and live?
:'''Harry''': ''[shakes his head]'' Never!
:'''Voldemort''': Haha. Bravery. Your parents had it too. Tell me, Harry, would you like to see your mother and father again? Together, we can bring them back. ''[In the mirror, Harry's parents appear in the reflection.]'' All I ask for is something in return. ''[Harry takes the Stone from his pocket.]'' That's it, Harry. There is no good and evil. There is only power, and those too weak to seek it. Together, we'll do extraordinary things. Just give me the stone! ''[James and Lily Potter fade from the reflection]''
:'''Harry''': You liar!
:'''Voldemort''': Kill him!
''[Under orders, Quirrell soars into the air and grabs hold of Harry with one hand on his throat. They fall to the steps, causing the Stone falls out of Harry's reach as Quirrell chokes him. Harry strains and squeaks. Suddenly, Harry puts his hand on Quirrell's hand in an attempt to get him off. Smoke furls from under his hand as Quirrell winces.]''
:'''Quirrell''': Ahh! Ahh! ''[He backs up away from Harry. His hand is crumbling into ash and dust.]'' What is this magic? ''[His hand disintegrates]''
:'''Voldemort''': Fool! Get the stone!
''[Quirrell walks forward towards Harry, who then touches his face with his hands, causing Quirrell to scream in pain, and especially Voldemort to wince. Harry looks on horrified as Quirrell backs up with his face horrendously burned. Quirrell crumbles as he walks forward, turning his body completely in ash and dust, and falls to the floor, leaving only his clothing. Harry gasps, as he looks at his own hands and hurries over to the stone. He picks it up and sighs. However, from behind, dust clouds form from Quirrell's corpse, causing Harry to turn around as the dust clouds with Voldemort's face rushes forward screaming and goes through Harry who also screams. Voldemort flies away, as Harry falls to the ground, unconscious. He holds the Stone in an outstretched hand.]''
==Mark of Love==
''[In the hospital wing the next day, Harry is lying in bed with his arm bandaged. He awakens, puts on his glasses, and sits up. There are cards and candy all over. Dumbledore approaches him.]''
:'''Dumbledore''': Good afternoon, Harry. Ah. Tokens from your admirers?
:'''Harry''': Admirers?
:'''Dumbledore''': What happened down in the dungeons between you and Professor Quirrell is a complete secret, so, naturally, the whole school knows. ''[They both smile.]'' Ah, I see your friend Ronald has saved you the trouble of opening your Chocolate Frogs.
:'''Harry''': Ron was here? Is he all right? What about Hermione?
:'''Dumbledore''': Fine. They're both just fine.
:'''Harry''': But, what happened to the Stone?
:'''Dumbledore''': Relax, dear boy. The stone has been destroyed. My friend Nicholas and I had a little chat and agreed it was best all around.
:'''Harry''': But Flamel, he'll die, won't he?
:'''Dumbledore''': ''[sits on the bed.]'' He has enough Elixir to set his affairs in order. But yes, he will die.
:'''Harry''': How is it I got the Stone, sir? One minute I was staring in the mirror, and the next...
:'''Dumbledore''': Ah. You see, only a person who wanted to find the Stone, find it, but not use it, would be able to get it. That is one of my more brilliant ideas. And between you and me that's saying something.
:'''Harry''': Does that mean, with the Stone gone, I mean, that Voldemort can never come back?
:'''Dumbledore''': Ah, I'm afraid there are ways in which he can return. Harry, do you know why Professor Quirrell couldn't bear to have you touch him? ''[Harry shakes his head.]'' It was because of your mother. She sacrificed herself for you, and that kind of act leaves a mark. ''[Harry touches his scar.]'' No, no, this kind of mark cannot be seen. It lives in your very skin.
:'''Harry''': What is it?
:'''Dumbledore''': Love, Harry, love. ''[Pats Harry's head gently and stands up.]'' Ah. Bertie Bott's Every Flavor Beans. I was most unfortunate in my youth to come across a vomit flavored one, and since then I have lost my liking for them. But I think I could be safe with a nice toffee...''[takes brown bean and eats it.]'' Mm. Alas. Earwax.

==House Cup Winner==
''[Harry with his arm still bandaged enters a corridor where up on a stairwell balcony, Hermione and Ron are talking. They stop when they see Harry and lean over the railing.]''
:'''Harry''': All right there, Ron?
:'''Ron''': All right? You?
:'''Harry''': ''[as he shrugs]'' All right. Hermione?
:'''Hermione''': ''[smiling]'' Never better.

''[We see the Great Hall, full of students eating and talking with each other. There are green and silver banners with the Slytherin symbol above their heads, already indicating the house with the most points. Dumbledore gives a slight nod to professor McGonagall, who then clinks her spoon to her glass, to ask attention from the students. The crowd falls silent. Dumbledore stands up and speaks with his magically magnified voice.]''
:'''Dumbledore''': Another year, gone! And now, as I understand it, the house cup needs awarded and the points stand thus. In fourth place: Gryffindor, with 312 points! ''[There is a medium applause from the crowd.]'' In third place: Hufflepuff, with 352 points! ''[The applause for Hufflepuff is slightly louder than the clapping for Gryffindor.]'' Second: Ravenclaw, with 426 points! ''[Applause again, this time with a slight cheer from some students.]'' And in first place, with 472 points: Slytherin house! ''[A loud roar rises from the Slytherin table, as students stand up and clap for themselves. Hermione scowls with her hand to her cheek; Snape applauds the students of his house]'' 
:'''Draco:''' Nice one, mate. ''[sneers at Ron]''
Yes, well done Slytherin, well done Slytherin. However, recent events must be taken into account and I have a few last minute points to award. ''[Some faces at the Gryffindor table rise hopefully.]'' To Miss Hermione Granger, for the cool use of intellect while others were in grave peril: fifty points! :''[Hermione looks surprised, while the other Gryffindor students applaud her.]''
:'''Harry:''' ''[giving Hermione a pat on the back]'' Good job. ''[Malfoy, Crabbe and Goyle don't like what's happening. Hermione looks at Hagrid, who looks back to her with a proud smile.]'' 
'''Dumbledore:''' Second, to Mr. Ronald Weasley, for the best played game of chess that Hogwarts has seen these many years: fifty points! ''[Ron looks even more surprised than Hermione did and the Gryffindor table is applauding even louder.]'' And third, to Mr. Harry Potter, for pure love and outstanding courage, I award Gryffindor house: sixty points!
:''[The Gryffindors cheer again, this time even louder than before. Malfoy has a cringing look on his face, while Harry sees a proud, smiling professor McGonagall at the teacher's table. Hermione, who has done some quick math, whispers to her fellow students.]''
:'''Hermione: '''We're tied with Slytherin!
:''[Now, the Gryffindors look really hopeful, as Dumbledore hasn't finished talking yet.]''
:'''Dumbledore: '''And finally: it takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your friends. I award ten points to Neville Longbottom! ''[Neville can't believe what he just heard and the Gryffindors that heard Hermione's whisper are cheering the loudest. Malfoy looks quite uncertain now.]'' Assuming that my calculations are correct, I believe that a change of decoration is in order! ''[He claps and motions his hands towards the Slytherin banners, where they flap heavily, until the banners have changed completely to red and gold with the Gryffindor symbol]'' Gryffindor wins the House Cup!
:''[The Great Hall explodes with applause, not only from the Gryffindors, but also from the Ravenclaws and the Hufflepuffs, because they are glad that, for the first time in seven years, someone other than Slytherin has won the House Cup. Hagrid can't help himself to also cheer, and all students except the Slytherins throw their hats in the air, while Malfoy angrily throws his on the table in defeat. The Gryffindors around Harry are all congratulating him and Harry smiles to Hagrid, who smiles back.]''

==Not Really Going Home==
''[The outdoor train station. Students are walking around, getting in the train.]''

'''Hagrid:''' Come on now, hurry up. You'll be late. Train's leaving. Go on. Go on. Come on. Hurry up.

''[Harry hands Hedwig to a train man, and walks to an open door of the train with Hermione. Hermione waves to Hagrid, who waves back. Hermione gets in the train.]''

'''Hermione:''' Come on, Harry.

'''Harry:''' One minute. ''[He walks over to Hagrid]''

'''Hagrid:''' Thought you were leaving without saying good-bye, didja? ''[Hagrid takes a red album out of his coat pocket and hands it to Harry.]'' This is for you.

''[Harry opens the album and sees a picture, moving, of him as a baby with his parents. They are all smiling and waving. Harry smiles.]''

'''Harry:''' Thanks, Hagrid. ''[Shakes Hagrid's hand, then hugs him tightly.]''

'''Hagrid:''' Oh. Go on...on with you. ''[Harry lets go]'' Oh, listen, Harry, if that dolt of a cousin of yours, Dudley, gives you any grief, you could always, um, threaten him with a nice pair of ears to go with that tail of his.

'''Harry:''' But Hagrid, we're not allowed to do magic away from Hogwarts. You know that.

'''Hagrid:''' I do. But your cousin don't, do he? Eh? ''[chuckle]'' Off you go.

''[Harry walks away, back to the train door where Hermione and Ron are waiting.]''

'''Hermione:''' Feels strange to be going home, doesn't it?

'''Harry:''' I'm not going home. Not really.

''[The train whistles and they climb aboard. As the train starts to leave and the camera pans up over the whole scene, Harry waves out the window to Hagrid, who waves back and then waves more to other students as the camera pans far back, then the credits begin.]''
THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)

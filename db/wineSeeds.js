const Wine = require('../models/Wine')

Wine.deleteMany.then(() => {
    const tranquille = new Wine({
        producer: "Haute Cabrière",
        name: "Pierre Jourdan Tranquille ",
        vintage: 2018,
        variety: "White Blend",
        type: "White Wine",
        price: 15.00,
        description: "The Pierre Jourdan Tranquille displays understated elegance. Its beautiful blend of Pinot Noir and Chardonnay highlights the very best qualities from these noble varieties. The wine’s delicate salmon colour is inherited from the Pinot Noir portion of the blend, which also imparts typical fruit and good acid structure. Chardonnay lends an elegant, palate-coating creaminess, making for a wine that strikes the perfect balance between fruit and acid. The bright and cheerful quality of this wine makes it a stunning lunchtime companion. Pierre Jourdan Tranquille from Haute Cabrière is best enjoyed with grilled asparagus, sushi and salads." 
    })
    return tranquille.save()
    }).then(() => {
        const expression = new Wine({
            producer: "The Goose",
            name: "Expression ",
            vintage: 2009,
            variety: "Red Blend",
            type: "Red Wine",
            price: 15.00,
            description: "The Goose Wines is the passion project of golfer Retief \"The Goose\" Goosen. The Expression has all the pedigree of a single vineyard, flagship wine, which is showing its age beautifully. Almost port-like, sweet black cherry aromas greet the nose, while the palate is silky, remarkably soft with juicy fruit and hints of cigarbox and white pepper."
        })
        return expression.save()
    }).then(() => {
        const synergy = new Wine({
            producer: "Beyerskloof Wine Farm",
            name: "Synergy Cape Blend",
            vintage: 2016,
            variety: "Cape Blend",
            type: "Red Wine",
            price: 15.00,
            description: "As a Cape Blend, the Beyerskloof Synergy is a distinctly South African wine that is very classic in its style. Possessing a deep red colour with a lively ruby red edge, the wine greets the nose with upfront aromas of red fruit and cherries which are subsequently joined by sweet cedar oak aromas. On the palate are ample black fruit flavours on entry, leading to a luscious middle with rounded tannins and a finish that lingers. This blend is perfect with lamb shank, game and stews."
        })
        return synergy.save()
    }).then(() => {
        const z360 = new Wine({
            producer: "Zevenwacht Wine Estate",
            name: "360º",
            vintage: 2017,
            variety: "Sauvignon Blanc",
            type: "White Wine",
            price: 15.00,
            description: "The Zevenwacht 360º Sauvignon Blanc is produced from 94% Sauvignon Blanc grapes and 6% Semillon. The bouquet reveals intense crushed fig leaf, guava and granadilla notes, with dashes of grapefruit. These notes continue as flavours on the palate. The mouthfeel is substantial and combines with subtle acid tones to create a long finish. This wine will age very well as has been shown by previous vintages. It makes an excellent aperitif."
        })
        return z360.save()
    }).then(() => {
        const lavbrutmcc = new Wine({
            producer: "L'Avenir Wine Estate",
            name: "Brut MCC",
            vintage: 2014,
            variety: "Sparkling MCC",
            type: "MCC",
            price: 15.00,
            description: "The L’Avenir Blanc De Blanc flaunts an exquisitely smooth mousse that fills the mouth with fine bubbles. A delicious combination of toasted nuts, biscuit and citrus flavours play out with creamy intensity on the palate. While a bright edge of crisp acidity adds focus and length, adding to the wine’s easy-drinking appeal. This sensational Méthode Cap Classic shows a youthful disposition, making it an excellent partner to sushi and delicate seafood dishes. "
        })
        return lavbrutmcc.save()
    }).then(() => {
        const greywacke = new Wine({
            producer: "Chamonix",
            name: "Greywacke",
            vintage: 2015,
            variety: "Pinotage",
            type: "Red Wine",
            price: 15.00,
            description: "With a compelling violet-tinged, garnet luminescence the Greywacke Pinotage from Franschhoek wine estate Charmonix, displays quintessential varietal character that is so highly sought after. A compelling bouquet delivers notes of cherries, spice and wild berries which are wonderfully expressive on the nose. The deliciously rich and full body throws its weight around with finesse on the palate, carrying with it seductive aromas of ripe fruit and concentrated dark chocolate. The wine showcases an exquisitely fine tannin structure with an elegantly long finish that ends off on an understated note of liquorice."
        })
        return greywacke.save()
    }).then(() => {
        const carigan = new Wine({
            producer: "Cape Rock",
            name: "Carignan",
            vintage: 2017,
            variety: "Carignan",
            type: "Red Wine",
            price: 15.00,
            description: "A brand new release and very small bottling from Cape Rock wines, the Cape Rock Carignan is light in colour and light bodied with a sweet nose of red summer berries and red fruits. The wine was made to be enjoyed at release, but should improve with age for up to 3 years after release."
        })
        return carigan.save()
    }).then(() => {
        const alchemy = new Wine({
            producer: "Hartenberg Estate",
            name: "Alchemy White Blend",
            vintage: 2017,
            variety: "White Blend",
            type: "White Blend",
            price: 15.00,
            description: "Hartenberg’s Alchemy White Blend is one of a collection of wines that the winery has set aside for the exploration of the art of blending. This white blend, like the others in the range, is lively and youthful and great for everyday, easy drinking. It consists of Chenin Blanc, Semillon and Sauvignon Blanc berries specially chosen from vineyards surrounding Stellenbosch. The Chenin Blanc brings perfumed fruit and the Semillon adds a creamy, rich palate, while the Sauvignon Blanc portion lends the wine a zesty, refreshing acidity."
        })
        return alchemy.save()
    }).then(() => {
        const bushvinepinot = new Wine({
            producer: "Hoopenburg Estate",
            name: "Bushvine Pinot Noir",
            vintage: 2016,
            variety: "Pinot Noir",
            type: "Red Wine",
            price: 15.00,
            description: "Heady aromas of cinnamon and red fruit playfully intermingle, creating an inviting bouquet that beckons you to savour the flavours that follow in the Bush Vine Pinotage from Hoopenburg Wines. The palate is fresh and fruity with finely grained tannins that perform elegantly on the mid-palate. The Bush Vine Pinotage is a versatile palate-pleaser that makes a lovely companion to an assortment of dishes. Pair with an appetising carpaccio or serve alongside heavy meat dishes such as roast beef and lamb shank." 
        })
        return bushvinepinot.save()
    }).then(() => {
        const hidvalpino = new Wine({
            producer: "Hidden Valley",
            name: "Pinotage",
            vintage: 2015,
            variety: "Pinotage",
            type: "Red Wine",
            price: 15.00,
            description: "Within its crimson-tinged ruby glow, lies bold and aromatic aromas that speak to the Hidden Valley Pinotage’s seductively rich character. Expect a heady bouquet of plum, chocolate, vanilla and mint notes that work seamlessly to create interest. On the palate plush notes of mulberry and mocha reveal themselves alongside spiced aromas of dark chocolate and blackberry. Its bold flavour profile plays out surprisingly soft on the palate, lending the wine an appealing easy-drinking quality. Partner the Hidden Valley Pinotage with a smorgasbord of charcuterie and strong hard cheeses."
        })
        return hidvalpino.save()
    }).then(() => {
        const warwcabfranch = new Wine({
            producer: "Warwick Wine Estate",
            name: "Cabernet Franc",
            vintage: 2015,
            variety: "Cabernet Franc",
            type: "Red Wine",
            price: 15.00,
            description: "The bouquet is reminiscent of cherries and blackcurrants and has tones of dark chocolate and cigar box. The pallet is full bodied with firm but silky tannins. Decanting is recommended to express the true essence of this wine.﻿ Enjoy with lamb knuckles and rich pork terrine."
        })
        return warwcabfranch.save()
    }).then(() => {
        const dmreschenin = new Wine({
            producer: "De Morgenzon",
            name: "Reserve Chenin",
            vintage: 2016,
            variety: "Chenin Blanc",
            type: "White Wine",
            price: 15.00,
            description: "The highly celebrated Reserve Chenin from De Morgenzon has a n incredible collection of accolades year on year. Both the 2016 and 2015 vintages were awarded the Chenin blanc trophy winner at the International Wine Challenge in 2016 and 2015 respectively - a remarkable feat. A fragrant bouquet of white flowers, stone fruit, honey and toast are echoed on the palate; fresh pear and orange blossom contrasting richer flavours of honey and spice to give weight to the lean backbone of acidity."
        })
        return dmreschenin.save()
    }).then(() => {
        const kwviognier = new Wine({
            producer: "Kleinood Wines ",
            name: "Tamboerskloof Viognier ",
            vintage: 2017,
            variety: "Viognier",
            type: "White Wine",
            price: 15.00,
            description: "The Kleinood Tamboerskloof Viognier greets the nose with an intoxicating array of citrus blossom, apricot and frangipani. The palate similarly shows floral notes, stone fruit, quince, apple and a soft, fleshy mouthfeel achieved by balancing natural acidity with a 30% barrel ferment." 
        })
        return kwviognier.save()
    }).then(() => {
        const saxchardonnay = new Wine({
            producer: "Saxenburg ",
            name: "Private Collection Chardonnay",
            vintage: 2016,
            variety: "Chardonnay",
            type: "White Wine",
            price: 15.00,
            description: "The Saxenburg Private Collection Chardonnay is a beautifully expressive wine that shows an attractive, fruit-focused character. Carefully crafted from hand-picked Chardonnay berries, the wine shows typical varietal aromas of ripe tropical fruit. Its time spent maturing in a combination of first, second and third fill French oak barrels imparts the wine with a wonderful depth of flavour. Delicious hazelnut flavours adds richness to the concentrated fruit flavours of the palate. The Saxenburg Private Collection Chardonnay displays great integration of oak characters, which adds length and a pleasing weight to the palate."
        })
        return saxchardonnay.save()
    }) .then(() => {
        const ewshiraz = new Wine({
            producer: "Eagles Nest",
            name: "Shiraz",
            vintage: 2015,
            variety: "Shiraz",
            type: "White Wine",
            price: 15.00,
            description: "This Shiraz from Eagles' Nest is worthy buying online now as it will continue to mature for 15 years from vintage. It also wins awards every year! In appearance the wine is a vibrant dark purple. Intense aromas of ripe berries and cherry greet the nose, along with crushed red pepper kernel. The tannins fill the mouth and pepper spice and toasted coconut dance on the palate. The taste profile is rounded out by warm baking spice and dark berries, creating a multilayered and complex wine."
        })
        return ewshiraz.save()
    }).then(() => {
        const jbchenin = new Wine({
            producer: "Joostenberg",
            name: "Chenin Blanc",
            vintage: 2017,
            variety: "Chenin Blanc",
            type: "White Wine",
            price: 15.00,
            description: "This Chenin Blanc has replaced the Joostenberg family blend and this white wine is made for family and friends to enjoy. The Chenin Blanc is suitable for any occasion."
        })
        return jbchenin.save()
    }).then(() => {
        const bateleur = new Wine({
            producer: "De Wetshof Estate ",
            name: "Bateleur ",
            vintage: 2016,
            variety: "Chardonnay ",
            type: "White Wine",
            price: 15.00,
            description: "The Bateleur Chardonnay from De Westhof Wines delivers an exquisite arrangement of classical varietal aromas. Lively citrus and pear-drop notes are accented by a beguiling nutty undertone. The palate is wonderfully expressive, showing intriguing depth of flavour. The Bateleur Chardonnay concludes its palate-pleasing performance with a long, zesty finish that leaves a lasting impression of finesse. The wine has a wonderful ageing potential that will result in an elevated expression of character with careful cellaring." 
        })
        return bateleur.save()
    }).then(() => {
        const hoopestint = new Wine({
            producer: "Hoopenburg Estate",
            name: "Integer",
            vintage: 2013,
            variety: "Cabernet Sauvignon",
            type: "Red Wine",
            price: 15.00,
            description: "Honoured with 4 stars by Platter's Wine Guide year after year, it's no surprise that the Hoopenburg Estate Integer Cabernet Sauvignon is one of South Africa's top online wine choices. Produced from only Hoopenburg bush vines on the farm, this wine is beautifully complex and multi-layered, exhibiting nuances of creamy blackcurrant on the nose, with a dash of mixed dry herbs. Expect similar notes upon tasting. A smooth and sophisticated wine, the Integer is the no-fail perfect gift choice for the man who has everything. "
        })
        return hoopestint.save()
    }).then(() => {
        const bvdsw = new Wine({
            producer: "Bon Courage",
            name: "Blush Vin Doux Sparkling Wine",
            vintage: 2018,
            variety: "Sparkling Regular",
            type: "Sparkling White Wine",
            price: 15.00,
            description: "Bring a bit of joy and fun to your next celebration with a few bottles of the beautiful Bon Courage Blush Vin Doux Sparkling Wine. With its exquisite pink label and blush hue it immediately catches the eye. A delicious fusion of Pinot Noir and aromatic Muscat de Frontignan, it flaunts aromas of Muscat berries with marshmallow and tempting Turkish Delight. The palate is distinctly fruity, yet surprisingly pure. Enjoy this carbonated bubbly now or within 2 to 3 years of release. "
        })
        return bvdsw.save()
    }).then(() => {
        const tradbrut = new Wine({
            producer: "Villiera ",
            name: "Tradition Brut",
            vintage: 2018,
            variety: "Sparkling MCC",
            type: "MCC",
            price: 15.00,
            description: "The Villiera Tradition Brut is a Méthode Cap Classique that is a delicate marriage of white and red grape varieties with Chardonnay forming the bulk of the wine. Take this MCC along to celebrate and invigorate any occasion! Its pedigree has been proven by its selection to be served on SAA flights to First Class and Business Class passengers. It exhibits a yeasty character, as is typical of this style. A refreshing zing envelopes the palate which is owed to good acid structure and opulent fruit. Serve it on its own or with fresh seafood."
        })
        return tradbrut.save()
    })
    
    
    
    
    
    


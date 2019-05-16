const User = require('../models/User')

    User.deleteMany().then(() => {
        const jackie = new User({first_name:"Jackie", last_name: "Chan", email: "jackiechan@gmail.com"})
        return jackie.save()
    }).then(() => {
        const james = new User({first_name:"James", last_name: "Brody", email: "jamesbrody@gmail.com"})
        return james.save()
    }).then(() => {
        const ellen = new User({first_name:"Ellen", last_name: "Nefdt", email: "enefdt@gmail.com"})
        return ellen.save()
    }).then(() => {
        const lisa = new User({first_name:"Lisa", last_name: "Stark", email: "lisa.stark@gmail.com"})
        return lisa.save()
    }).then(() => {
        const ashleigh = new User({first_name:"Ashleigh", last_name: "Tisdale", email: "atisdale@gmail.com"})
        return ashleigh.save()
    }).then(() => {
        const ashley = new User({first_name:"Ashley", last_name: "Adonis", email: "ashley.adonis@gmail.com"})
        return ashley.save()
    }).then(() => {
        const robert = new User({first_name:"Robert", last_name: "Brown", email: "rbrown@gmail.com"})
        return robert.save()
    }).then(() => {
        const jay = new User({first_name:"Jay", last_name: "Arthur", email: "jarthur@gmail.com"}) 
        return jay.save()
    }).then(() => {
        const zeenith = new User({first_name:"Zeenith", last_name: "Muller", email: "zee.muller@gmail.com"})
        return zeenith.save()
    }).then(() => {
        const barret = new User({first_name:"Barret", last_name: "Owens", email: "bowens@gmail.com"})
        return barret.save()
    }).then(() => {
        const jaclyn = new User({first_name:"Jaclyn", last_name: "Smith", email: "jsmith@gmail.com"})
        return jaclyn.save()
    })
    

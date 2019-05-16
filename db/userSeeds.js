const User = require('../models/User')

    User.deleteMany().then(() => {
        const jackie = new User({first_name:"Jackie", last_name: "Chan", date_of_birth: 01/02/1956, email: "jackiechan@gmail.com"})
        return jackie.save()
    }).then(() => {
        const james = new User({first_name:"James", last_name: "Brody", date_of_birth: 02/03/1957, email: "jamesbrody@gmail.com"})
        return james.save()
    }).then(() => {
        const ellen = new User({first_name:"Ellen", last_name: "Nefdt", date_of_birth: 03/03/1958, email: "enefdt@gmail.com"})
        return ellen.save()
    }).then(() => {
        const lisa = new User({first_name:"Lisa", last_name: "Stark", date_of_birth: 04/12/1959, email: "lisa.stark@gmail.com"})
        return lisa.save()
    }).then(() => {
        const ashleigh = new User({first_name:"Ashleigh", last_name: "Tisdale", date_of_birth: 01/02/1986, email: "atisdale@gmail.com"})
        return ashleigh.save()
    }).then(() => {
        const ashley = new User({first_name:"Ashley", last_name: "Adonis", date_of_birth: 05/04/1991, email: "ashley.adonis@gmail.com"})
        return ashley.save()
    }).then(() => {
        const robert = new User({first_name:"Robert", last_name: "Brown", date_of_birth: 12/06/1970, email: "rbrown@gmail.com"})
        return robert.save()
    }).then(() => {
        const jay = new User({first_name:"Jay", last_name: "Arthur", date_of_birth: 01/02/1968, email: "jarthur@gmail.com"}) 
        return jay.save()
    }).then(() => {
        const zeenith = new User({first_name:"Zeenith", last_name: "Muller", date_of_birth: 01/02/1978, email: "zee.muller@gmail.com"})
        return zeenith.save()
    }).then(() => {
        const barret = new User({first_name:"Barret", last_name: "Owens", date_of_birth: 07/10/1983, email: "bowens@gmail.com"})
        return barret.save()
    }).then(() => {
        const jaclyn = new User({first_name:"Jaclyn", last_name: "Smith", date_of_birth: 01/02/1958, email: "jsmith@gmail.com"})
        return jaclyn.save()
    })
    

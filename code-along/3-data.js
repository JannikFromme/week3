// Goal: Store my social media profile in memory. Display it in the 
// JavaScript console in Chrome, in a human-readable format.

// A social media profile is a more complex thing – it's not simply
// a String or a Number. It's got many attributes, like a name, location,
// and a timeline.

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a simple social media profile in memory
let profile = {
    name: `Jannik`,
    location: {
        city: `Chicago`,
        state: `Illinois`
    },
    timeline: ['High School', `Bachelor's`, `Masters`]
}
console.log(profile)

// Retrieve the name from the profile, store it in memory
let profileName = profile.name

// Display the name in the console
console.log(`The name is ${profileName}`)

// Retrieve the location, store it in a memory (we could skip this step and write profile.location.city instead)
let profileLocation = profile.location

// Use the location to write the city and state, in a human-readable
// format, to the JavaScript console
console.log(`The location is ${profileLocation.city}, ${profileLocation.state}`)

// Write the 3 statuses from the "timeline" to the JavaScript console
console.log(`Timeline:`)
console.log(profile.timeline[0])
console.log(profile.timeline[1])
console.log(profile.timeline[2])
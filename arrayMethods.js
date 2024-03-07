// 37-3 Array Methods (Map, ForEach, Filter And Find )

// array of object
const arrayObject = [

    { name: 'pappu', id: '4', place: 'Dhaka' },
    {name:'bappu',id:'20',place:'bhaka'},
    {name:'tappu',id:'10', place:'Dhaka'}

]

console.log(arrayObject)

// map
let map = arrayObject.map(name => name.name)
console.log(map)

// ForEach
let forEach = arrayObject.forEach(place => console.log(place.place))


// Filter
const Filter = arrayObject.filter(id => {
    if (id.id >= 10) {
        console.log(id.id)
    }
   
})

// find
const FindFilter = arrayObject.filter(findFilter => findFilter.place)
console.log(FindFilter)

const Find = arrayObject.find(find => find.place)

console.log(Find)

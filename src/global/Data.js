export const filterData = [
         {name:"Fast Food", image: require("../images/FastFood.jpeg"), id:"0"},
         {name:"Chinese", image: require("../images/Chinese.jpeg"), id:"1"},
         {name:"Mexican", image: require("../images/Mexican.jpeg"), id:"2"},
         {name:"Romanian", image: require("../images/RomanianFood.jpeg"), id:"3"},
         {name:"Salads", image: require("../images/Salads.jpeg"), id:"4"},
         {name:"Sea Food", image: require("../images/SeaFood.jpeg"), id:"5"}
];

export const restaurantsData = [
         {restaurantName:"Venue", farAway:"5.3", businessAddress:"Str. Alba Iulia, Timisoara", images: require("../images/Venue.jpeg"), averageReview: 4.8, numberOfReviews:1300, coordinates: {lat: -26.1888618, lng: 28.896214}, discount: 20, deliveryTime: 20, collectionTime:5, foodType:"Romania food, sea food, turkish food...", productData:[{name:"Baklava", price:30, image: require("../images/Baklava.jpeg")}, {name:"Sarmale", price:15, image: require("../images/Sarmale.jpeg")}, {name:"Oyster", price:50, image: require("../images/Oyster.jpeg")}], id:0},
         {restaurantName:"Gala", farAway:"11.5", businessAddress:"Str. Carol Davilla, Timisoara", images: require("../images/Gala.jpeg"), averageReview: 4.9, numberOfReviews:1259, coordinates: {lat: -26.1852618, lng: 28.466214}, discount: 15, deliveryTime: 25, collectionTime:5, foodType:"Chinese food, mexican food, salads...", productData:[{name:"Kung Pao chicken", price:49, image: require("../images/KungPao.jpeg")}, {name:"Taco", price:15, image: require("../images/Taco.jpeg")}, {name:"Ciser", price:50, image: require("../images/Ciser.jpeg")}], id:1},
         {restaurantName:"KFC", farAway:"4.5", businessAddress:"Str. Libertatii, Timisoara", images: require("../images/KFC.jpeg"), averageReview: 4.3, numberOfReviews:14000, coordinates: {lat: -26.185273, lng: 28.321214}, discount: 17, deliveryTime: 35, collectionTime:5, foodType:"Fast food...", productData:[{name:"American bucket", price:60, image: require("../images/American.jpeg")}, {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg")}], id:2}
];  

export const productData = [
    {name:"Baklava", price:30, image: require("../images/Baklava.jpeg"), details:"100% home made using the original recipe", id:0}, 
    {name:"Sarmale", price:15, image: require("../images/Sarmale.jpeg"), details:"Romanian traditional food with bio ingredients", id:1},
    {name:"Oyster", price:50, image: require("../images/Oyster.jpeg"), details:"Fresh ocean oysters",id:2},
    {name:"Kung Pao chicken", price:49, image: require("../images/KungPao.jpeg"), details:"Traditional chinese food made by a chinese chef",id:3}, 
    {name:"Taco", price:15, image: require("../images/Taco.jpeg"),details:"Mexican food with the most expensive beef meat", id:4}, 
    {name:"Ciser", price:50, image: require("../images/Ciser.jpeg"), details:"The most popular salad", id:5},
    {name:"American bucket", price:60, image: require("../images/American.jpeg"), details:"Fresh checken meat", id:6}, 
    {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg"), details:"Bucket for every Christmas", id:7}
];

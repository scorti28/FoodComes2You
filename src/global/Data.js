export const filterData = [
         {name:"Fast Food", image: require("../images/FastFood.jpeg"), id:"0"},
         {name:"Chinese", image: require("../images/Chinese.jpeg"), id:"1"},
         {name:"Mexican", image: require("../images/Mexican.jpeg"), id:"2"},
         {name:"Romanian", image: require("../images/RomanianFood.jpeg"), id:"3"},
         {name:"Salads", image: require("../images/Salads.jpeg"), id:"4"},
         {name:"Sea Food", image: require("../images/SeaFood.jpeg"), id:"5"}
];

export const restaurantsData = [
         {restaurantName:"Venue", farAway:"5.3", businessAddress:"Str. Alba Iulia, Timisoara", images: require("../images/Venue.jpeg"), averageReview: 4.8, numberOfReviews:1300, coordinates: {lat: 45.72595113265167, lng: 21.198777962569086}, discount: 20, deliveryTime: 20, collectionTime:5, foodType:"Romania food, sea food, turkish food...", productData:[{name:"Baklava", price:30, image: require("../images/Baklava.jpeg")}, {name:"Sarmale", price:15, image: require("../images/Sarmale.jpeg")}, {name:"Oyster", price:50, image: require("../images/Oyster.jpeg")}], id:0},
         {restaurantName:"Gala", farAway:"11.5", businessAddress:"Str. Carol Davilla, Timisoara", images: require("../images/Gala.jpeg"), averageReview: 4.9, numberOfReviews:1259, coordinates: {lat: 45.72727679463518, lng: 21.204732466448036}, discount: 15, deliveryTime: 25, collectionTime:5, foodType:"Chinese food, mexican food, salads...", productData:[{name:"Kung Pao chicken", price:49, image: require("../images/KungPao.jpeg")}, {name:"Taco", price:15, image: require("../images/Taco.jpeg")}, {name:"Ciser", price:50, image: require("../images/Ciser.jpeg")}], id:1},
         {restaurantName:"KFC", farAway:"4.5", businessAddress:"Str. Libertatii, Timisoara", images: require("../images/KFC.jpeg"), averageReview: 4.3, numberOfReviews:14000, coordinates: {lat: 45.72868480792899, lng: 21.212886381639077}, discount: 17, deliveryTime: 35, collectionTime:5, foodType:"Fast food...", productData:[{name:"American bucket", price:60, image: require("../images/American.jpeg")}, {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg")}], id:2}
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

export const menuData = [
    
    {title:"Beef",special:false,key:0,},
    {title:"Chicken", special:false,key:1},
    {title:"Veggie burger",special:false ,key:2},
    {title:"Fries",special:false ,key:3},
    {title:"Salads",special:false,key:4},
    {title:"Milkshakes",special:false,key:5},
    {title:"Cold drinks",special:false,key:6},
    {title:"Desserts",special:false,key:7},
    {title:"Hot drinks",special:false,key:8},
  
];
  
  export const specialData =[
    {key:0, title:"Limited offer"},
    {key:1, title:"Salads offer"},
    {key:2, title:"Fast food offer"},
];    

export const menu = [
    { key: 1, title: 'Beef' },
    { key: 2, title: 'Chicken' },
    { key: 3, title: 'Veggie burger' },
    { key: 4, title: 'Share box' }
];

export const menuDetailedData =[
    { 
      meal:"Chilli con carne",
      price:70.20,
      image:require("../images/ChilliConCarne.jpeg"),
      details:"Full of layered complexity, satisfying texture and, a robust, thick sauce",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to be spycier. Add flavors?"],
      preferenceData: [

                      [{name:"Chipotle chillies",price:8.91,checked:false,id:0},
                      {name:"Dark chocolate",price:8.75,checked:false ,id:1},
                      {name:'Coffe',price:11.99 ,checked:false,id:2}
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },
                      {name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:0},
                      {name:"Small Fanta Orange",price:8.90,checked:false ,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],
                          
                      [{name:"Hot sauce",price:8.90 ,checked:false,id:0},
                      {name:"BBQ Sauce",price:8.90,checked:false ,id:1},
                      {name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                      ],
                      ],
      minimum_quantity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:0
    },
  
    { 
      meal:"Bulgar koftesi", 
      price:29.30,
      image:require("../images/BulgarKoftesi.jpeg"),
      details:"Family recipe for Turkish-Cypriot meatballs",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to be spycier. Add flavors?"],
      preferenceData: [

                      [{name:"Chipotle chillies",price:8.91,checked:false,id:0},
                      {name:"Dark chocolate",price:8.75,checked:false ,id:1},
                      {name:'Coffe',price:11.99 ,checked:false,id:2}
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },
                      {name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:0},
                      {name:"Small Fanta Orange",price:8.90,checked:false ,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],
                          
                      [{name:"Hot sauce",price:8.90 ,checked:false,id:0},
                      {name:"BBQ Sauce",price:8.90,checked:false ,id:1},
                      {name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                      ],
        ],
        minimum_quantity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false], 
        id:1
    },
  
    {
      meal:"Blue cheese and bacon smash Burger",
      price:45.70,
      image:require("../images/BlueCheeseBurger.jpeg"),
      details:"Two caramelised beef patties – each topped with a rich blue cheese sauce – on a bed of earthy beetroot and finished off with sticky, salty bacon jam",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to be spycier. Add flavors?"],
      preferenceData: [

                      [{name:"Chipotle chillies",price:8.91,checked:false,id:0},
                      {name:"Dark chocolate",price:8.75,checked:false ,id:1},
                      {name:'Coffe',price:11.99 ,checked:false,id:2}
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },
                      {name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:0},
                      {name:"Small Fanta Orange",price:8.90,checked:false ,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],
                          
                      [{name:"Hot sauce",price:8.90 ,checked:false,id:0},
                      {name:"BBQ Sauce",price:8.90,checked:false ,id:1},
                      {name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                      ],
                      ],

        minimum_quantity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],   
      id:2
    },
  
    {
      meal:"Macaronade Setoise",
      price:50.80,
      image:require("../images/Macaronade.jpeg"),
      details:"Made with steak, pork ribs and pork sausages in a rich, espelette pepper-spiked sauce and usually served with penne pasta",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to be spycier. Add flavors?"],
      preferenceData: [

                      [{name:"Chipotle chillies",price:8.91,checked:false,id:0},
                      {name:"Dark chocolate",price:8.75,checked:false ,id:1},
                      {name:'Coffe',price:11.99 ,checked:false,id:2}
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },
                      {name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:0},
                      {name:"Small Fanta Orange",price:8.90,checked:false ,id:1},
                      {name:'Small Sprite',price:11.90,checked:false ,id:2},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},
                      {name:'Small Syoney Zero',price:3.95 ,checked:false,id:4}
                      ],
                          
                      [{name:"Hot sauce",price:8.90 ,checked:false,id:0},
                      {name:"BBQ Sauce",price:8.90,checked:false ,id:1},
                      {name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                      ],
                      ],
      
        minimum_quantity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],    
      id:3
    }
]


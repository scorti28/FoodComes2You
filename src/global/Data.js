import { DataComponent } from "./firebaseHelper";

export const globalData = () => {
  const { newVector_ids, newVector_images, newVector_names } = DataComponent();

  const filterData = [
    { name: newVector_names[0], image: { uri: newVector_images[0] }, id: newVector_ids[0] },
    { name: newVector_names[1], image: { uri: newVector_images[1] }, id: newVector_ids[1] },
    { name: newVector_names[2], image: { uri: newVector_images[2] }, id: newVector_ids[2] },
    { name: newVector_names[3], image: { uri: newVector_images[3] }, id: newVector_ids[3] },
    { name: newVector_names[4], image: { uri: newVector_images[4] }, id: newVector_ids[4] },
    { name: newVector_names[5], image: { uri: newVector_images[5] }, id: newVector_ids[5] },
  ];

  return filterData;

}

export const restaurantsData = [
         {restaurantName:"Venue", facility1:"Sala de evenimente", facility2:"Loc de joaca", facility3: "Parcare", facility4:"Terasa", farAway:"5", businessAddress:"Str. Carol Davilla, Timisoara", images: require("../images/Venue.jpeg"), averageReview: 4.8, numberOfReviews:1300, coordinates: {lat: 45.77198714290471, lng: 21.239940020771947}, collectionTime: 5, foodType1:"Romanian food", foodType2:"Sea food", foodType3:"Salads", productData:[{name:"Baklava", price:30, image: require("../images/Baklava.jpeg")}, {name:"Sarmale", price:15, image: require("../images/Sarmale.jpeg")}, {name:"Oyster", price:50, image: require("../images/Oyster.jpeg")}], id:0},
         {restaurantName:"Gala", facility1:"Terasa", facility2: "", facility3:"Parcare", facility4: "Sala de evenimete", farAway:"5", businessAddress:"Str. Carol Davilla, Timisoara", images: require("../images/Gala.jpeg"), averageReview: 4.9, numberOfReviews:1259, coordinates: {lat: 45.77042708682445, lng: 21.27109585252613}, discount: 15, deliveryTime: 25, collectionTime:5, foodType1:"Chinese food", foodType2:"Mexican", foodType3:"Salads", productData:[{name:"Kung Pao chicken", price:49, image: require("../images/KungPao.jpeg")}, {name:"Taco", price:15, image: require("../images/Taco.jpeg")}, {name:"Ciser", price:50, image: require("../images/Ciser.jpeg")}], id:1},
         {restaurantName:"KFC", facility1:"Terasa", facility2: "", facility3:"Parcare", facility4: "", farAway:"5", businessAddress:"Str. Libertatii, Timisoara", images: require("../images/KFC.jpeg"), averageReview: 4.3, numberOfReviews:14000, coordinates: {lat: 45.771531924280815, lng: 21.22851512756016}, discount: 17, deliveryTime: 35, collectionTime:5, foodType1:"Fast Food", foodType2:"", foodType3:"", productData:[{name:"American bucket", price:60, image: require("../images/American.jpeg")}, {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg")}], id:2},
         {restaurantName:"Riyo Wok and Sushi", facility1:"Terasa", facility2: "", facility3:"", facility4:"", farAway:"5", businessAddress:"Str. Libertatii, Timisoara", images: require("../images/KFC.jpeg"), averageReview: 4.3, numberOfReviews:14000, coordinates: {lat: 45.76236370737881, lng: 21.226659765733217}, discount: 17, deliveryTime: 35, collectionTime:5, foodType1:"Fast Food", foodType2:"", foodType3:"", productData:[{name:"American bucket", price:60, image: require("../images/American.jpeg")}, {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg")}], id:3},
         {restaurantName:"Spartan", facility1:"Terasa", facility2: "Parcare", facility3:"", facility4:"", farAway:"5", businessAddress:"Str. Libertatii, Timisoara", images: require("../images/KFC.jpeg"), averageReview: 4.3, numberOfReviews:14000, coordinates: {lat: 45.77192499856234, lng: 21.230206050126768}, discount: 17, deliveryTime: 35, collectionTime:5, foodType1:"Fast Food", foodType2:"", foodType3:"", productData:[{name:"American bucket", price:60, image: require("../images/American.jpeg")}, {name:"Christmas bucket", price:40, image: require("../images/Christmas.jpeg")}], id:4}
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
    
    {title:"Appetizer",special:false,key:0,},
    {title:"Burgers", special:false,key:1},
    {title:"Cocktails",special:false ,key:2},
    {title:"Coffee",special:false ,key:3},
    {title:"Dessert",special:false,key:4},
    {title:"Drinks",special:false,key:5},
    {title:"Main dishes",special:false,key:6},
    {title:"Pasta",special:false,key:7},
    {title:"Pizza",special:false,key:8},
    {title:"Salads",special:false,key:9},
    {title:"Soups",special:false,key:10},
    {title:"Vegetarian dishes",special:false,key:11},
];
    
export const menu = [
    { key: 1, title: 'Appetizer' },
    { key: 2, title: 'Burgers' },
    { key: 3, title: 'Cocktails' },
    { key: 4, title: 'Coffee' },
    { key: 5, title: 'Dessert' },
    { key: 6, title: 'Drinks' },
    { key: 7, title: 'Main dishes' },
    { key: 8, title: 'Pasta' },
    { key: 9, title: 'Pizza' },
    { key: 10, title: 'Salads' },
    { key: 11, title: 'Soups' },
    { key: 12, title: 'Vegetarian dishes' },

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


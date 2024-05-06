import { extractMenuDataFromFirebase, extractMenuFromFirebase, extractRestaurantDataFromFirebase} from "./firebaseData";
import { DataComponent } from "./firebaseHelper";
import { useEffect, useState } from "react";

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

export const menusData = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {menuVectorKeys, menuVectorTitles} = await extractMenuFromFirebase();
      if (menuVectorKeys.length > 0 && menuVectorTitles.length > 0) {
        const newMenu = menuVectorKeys.map((key, index) => ({
          key: key.toString(), 
          title: menuVectorTitles[index]
        }));
        setMenu(newMenu);
      }
    };
    fetchData();
  }, []);

  return menu;
};

export const menusVectorData = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { menuDataVectorKeys, menuDataVectorTitles, menuDataVectorSpecial } = await extractMenuDataFromFirebase();
      if (menuDataVectorKeys.length > 0 && menuDataVectorTitles.length > 0 && menuDataVectorSpecial.length > 0) {
        const newMenuData = menuDataVectorKeys.map((key, index) => ({
          key: key.toString(),
          title: menuDataVectorTitles[index],
          special: menuDataVectorSpecial[index]
        }));
        
        console.log("@@@@@@@@@@@@@@@@@@@@@@@newMenuData:", newMenuData); // Verifică datele înainte de a actualiza starea

        setMenuData(newMenuData);
      }
    };
    fetchData();
  }, []);

  return menuData;
};


export const restaurantVectorData = () => {
  const [restaurantData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { addresses, averageReviews, coordinatesVector, facilitiesVector, 
        foodCategoriesVector, foodTypesVector, ids, images, names, nrReviewsVector } = await extractRestaurantDataFromFirebase();
      if (addresses.length > 0 && averageReviews.length > 0 && coordinatesVector.length > 0 && facilitiesVector.length > 0 && foodCategoriesVector.length > 0 && foodTypesVector.length > 0 && ids.length > 0 && images.length > 0 && names.length > 0 && nrReviewsVector.length > 0) {
        const newRestaurantData = ids.map((id, index) => ({
          id: id.toString(),
          facilities: facilitiesVector[index],
          address: addresses[index],
          image: images[index],
          averageReview: averageReviews[index],
          nrReviews: nrReviewsVector[index],
          coordinates: coordinatesVector[index],
          foodTypes: foodTypesVector[index],
          foodCategories: foodCategoriesVector[index]
        }));

        setMenuData(newRestaurantData);
      }
    };
    fetchData();
  }, []);

  return restaurantData;
}; 

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


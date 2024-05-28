import { StyleSheet, Text, View, ScrollView, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import { colors } from '../../global/styles';
import Header from '../../components/Header';
import { Formik } from 'formik';
import { Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';


const initialValues = {phoneNumber:"", name:"", familyName:"", password:"", email:"", username:"", latitude:"", longitude:"", timestamp:""}

export default function SignUpScreen() {

    const[passwordFocussed, setPasswordFocussed] = useState(false);
    const[passwordBlured,setPasswordBlured] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const navigation = useNavigation();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")

    function validateCredentials(props) {

      var phoneValid = false;
      if (props.values.phoneNumber.length === 0) {
          setPhoneNumberError("Phone number is required");
      } else if (props.values.phoneNumber.indexOf(' ') >= 0) {
          setPhoneNumberError('Phone number cannot contain spaces');
      } else if (!props.values.phoneNumber.match(/^\+?[0-9]+$/)) {
          setPhoneNumberError('Phone number can only contain digits');
      }
       else {
          setPhoneNumberError("");
          phoneValid = true;
      }
  
      var emailValid = false;
      if (props.values.email.length === 0) {
          setEmailError("Email is required");
      } else if (props.values.email.length < 6) {
          setEmailError("Email should be minimum 6 characters");
      } else if (props.values.email.indexOf(' ') >= 0) {
          setEmailError('Email cannot contain spaces');
      } else if (props.values.email.indexOf('@') === -1 || props.values.email.indexOf('.') === -1) {
          setEmailError('Email should be in the format of "something@something.something"');
      } else {
          setEmailError("");
          emailValid = true;
      }
  
      var passwordValid = false;
      if (props.values.password.length === 0) {
          setPasswordError("Password is required");
      } else if (props.values.password.length < 6) {
          setPasswordError("Password should be minimum 6 characters");
      } else if (props.values.password.indexOf(' ') >= 0) {
          setPasswordError('Password cannot contain spaces');
      } else if (!props.values.password.match(/[A-Z]/)) {
          setPasswordError('Password must contain at least one uppercase letter');
      } else if (!props.values.password.match(/[a-z]/)) {
          setPasswordError('Password must contain at least one lowercase letter');
      } else if (!props.values.password.match(/[0-9]/)) {
          setPasswordError('Password must contain at least one digit');
      } else if (!props.values.password.match(/[!-\/:-@[-`{-~]/)) {
          setPasswordError('Password must contain at least one special character');
      } else {
          setPasswordError("");
          passwordValid = true;
      }
  
      if (emailValid && passwordValid && phoneValid) {
          setEmail("");
          setPassword("");
          setPhoneNumber("");
          props.handleSubmit();
      }
  }
    async function signUp(values){
      const { email, password, name, familyName, phoneNumber, latitude, longitude, timestamp } = values;
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;
    
        const userFields = {
          phoneNumber,
          latitude,
          longitude,
          timestamp
        };
    
        if (name) {
          userFields.name = name;
        }
    
        if (familyName) {
          userFields.familyName = familyName;
        }
    
        await firestore().collection('users').doc(uid).set(userFields);
    
        await userCredential.user.updateProfile({
          displayName: name && familyName ? `${name} ${familyName}` : name || familyName || '', 
        });
    
        console.log("Creating user document in Firestore:", { ...userFields, name, familyName });
        console.log("User created successfully!");

      } catch (error) {
        if (error.code === 'auth/email-already-in-use')
          Alert.alert("Emailul exista deja!");
        if (error.code === 'auth/invalid-email')
          Alert.alert("Emailul este incorect!");
        else {
          //Alert.alert(error.code);
        }
      }
    }

  return (
    <View style={styles.container}>
    <Header title="Creează cont" type="arrow-left-circle" navigation = {navigation}/>
      <ScrollView keyboardShouldPersistTaps="always">
           <View style={styles.view1}>
                <Text style={styles.text1}>Înregistrare</Text>
          </View> 
          <Formik initialValues={initialValues} onSubmit={(values, props) => {
                 signUp(values);
                 validateCredentials(props);
              }}>
            {
                (props) => (
                    <View style={styles.view2}>
                        <View>
                            <Text style={styles.text2}>Nou aici? Creează cont!</Text>
                        </View>
                            <View style={styles.view6}>
                            <TextInput 
                                   placeholder='Număr de telefon'
                                   style={styles.input1}
                                   keyboardType='number-pad'
                                   autoFocus={true}
                                   onChangeText={props.handleChange("phoneNumber")}
                                   value={props.values.phoneNumber}
                                   maxLength={10}
                              />
                            </View>
                            {phoneNumberError.length > 0 && <Text style={styles.error}>{phoneNumberError}</Text>}
                            <View style={styles.view6}>
                                <TextInput 
                                    placeholder='Nume'
                                    style = {styles.input1}
                                    autoFocus={false}
                                    onChangeText={props.handleChange("name")}
                                    value={props.values.name}
                                />
                            </View>
                            <View style={styles.view6}>
                                <TextInput 
                                    placeholder='Prenume'
                                    style = {styles.input1}
                                    autoFocus={false}
                                    onChangeText={props.handleChange("familyName")}
                                    value={props.values.familyName}
                                />
                            </View>
                            <View style={styles.view10}>
                                <View>
                                    <Icon 
                                    name = "email-outline"
                                    type= "material-community"
                                    color={colors.grey2}
                                    style={styles.email}
                                    />
                                </View>
                                <View style={styles.view11}>
                                <TextInput 
                                    placeholder='Email'
                                    style = {styles.input4}
                                    autoFocus={false}
                                    onChangeText={props.handleChange("email")}
                                    value={props.values.email}
                                />
                            </View>
                            </View>
                            {emailError.length > 0 && <Text style={styles.error}>{emailError}</Text>}
                            <View style={styles.view14}>
                                <Animatable.View animation = {passwordFocussed? "":"fadeInLeft"} duration = {400}>
                                    <Icon 
                                        name="lock"
                                        color={colors.grey3}
                                    />
                                </Animatable.View>
                                <TextInput 
                                    placeholder='Parolă'
                                    style = {{flex:1}}
                                    autoFocus={false}
                                    onChangeText={props.handleChange("password")}
                                    value={props.values.password}
                                    onFocus={() => {setPasswordFocussed(true)}}
                                    onBlur={() => {setPasswordBlured(true)}}
                                    secureTextEntry={showPassword}
                                />
                                <Animatable.View>
                                    <Icon
                                      name={showPassword ? 'visibility-off' : 'visibility'}
                                      style={styles.visibilityIcon}
                                      onPress={() => setShowPassword((prev) => !prev)}
                                    />
                                </Animatable.View>
                            </View>
                            {passwordError.length > 0 && <Text style={styles.error}>{passwordError}</Text>}
                            <View  style={styles.view17}>
                                <Button 
                                     title="Creează cont"
                                     buttonStyle={styles.button1}
                                     titleStyle={styles.title1}
                                     onPress={() => {validateCredentials(props)}}
                                />
                            </View>
                    </View>
                
            )}
          </Formik>
          <View style={styles.view18}>
            <Text style={styles.text5}>SAU ÎNCEARCĂ</Text>
          </View>
          <View style={styles.view19}>
                <View style={styles.view20}>
                    <Text style={styles.text5}>Ai deja un cont creat? Loghează-te!</Text>
                </View>
                <View style={styles.view21}>
                    <Button 
                        title="Sign In"
                        buttonStyle={styles.button2}
                        titleStyle={styles.title2}
                        onPress={() => navigation.navigate("SignInScreen")}
                    />
                </View>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    color: '#FF0000',
    flexDirection: 'column'
  },
    container:{flex:1,
        backgroundColor:'white'
      },

      view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:20,
             marginBottom:20,
             paddingHorizontal:15
            },

      text1:{fontSize:20,
        color:"#000000",
        fontWeight:'bold'
      },

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16},

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              justifyContent:"center"
              },
              
              view19: {
                backgroundColor: 'white',
                paddingHorizontal: 15,
                flexDirection: 'column', 
                alignItems: 'center',    
              },
              
              view20: {
                marginTop: 5,
                marginBottom: 10, 
              },
              
              view21: {
                marginTop: 5,
                alignItems: 'center',
              },

      button2:{backgroundColor:colors.background3,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        backgroundColor: "#48dba3",
        height:40,
        paddingHorizontal:20,                
      },

      title2:{color:"#ffffff",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    }
})
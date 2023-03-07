
import { initializeApp } from 'firebase/app'
import { query , collection,getDocs,getFirestore, where,setDoc, addDoc} from 'firebase/firestore'
import dotenv from 'dotenv'

dotenv.config()
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "codesphere-4f786.firebaseapp.com",
    projectId: "codesphere-4f786",
    storageBucket: "codesphere-4f786.appspot.com",
    messagingSenderId: "142755235572",
    appId: "1:142755235572:web:56768091008c7bd8fd40a1"
  };
//Database configuration
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


//Get all data from Collection
const userData = await getDocs(collection(db,"Users"))
userData.forEach((doc)=>{
    console.log(`${doc.id} => \nname : ${doc.data().name}\nemail : ${doc.data().email}`)
})

//Creating Query
const userRef = collection(db,"Users")
const userQuery = query(userRef,where("name","in",["abcd"]))
const useQueryData = await getDocs(userQuery) 
useQueryData.forEach((doc)=>{
    console.log(doc.data())
})
// addDoc(userRef,{name : "hello",email : "hello@gmail.com",phone : ["8934353489"]}).then((data)=>{
//     console.log(`Added data Successfully\n${data}`)
// })

//Address Query
const addRef = collection(db,"Addresses")
const addQuery = query(addRef,where("name","==","abcd"))

getDocs(addQuery).then((queryData)=>{
queryData.forEach((doc)=>{
    console.log(doc.data())
})
}).catch((e)=>{
    console.log(e)
})

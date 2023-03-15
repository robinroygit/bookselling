import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  


} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,

} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// created firebase context
const FirebaseContext = createContext(null);

// firbase config
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
};

const FireApp = initializeApp(firebaseConfig);

//make an auth reference
const fireauth = getAuth(FireApp);
const googleAuth = new GoogleAuthProvider(FireApp);
const firestore = getFirestore(FireApp);
const storage = getStorage(FireApp);



// created firebase provider fuction
const FirebaseProvider = ({ children }) => {
  // setState
  const [user, setUser] = useState(null);

  const signupWithEP = async (email, password) => {
    const result = await createUserWithEmailAndPassword(
      fireauth,
      email,
      password
    );
    
    console.log("result: ", result);
  };

  const signinWithEP = async (email, password) => {
    const result = await signInWithEmailAndPassword(fireauth, email, password);
    console.log("logged in : ", result);

  };
  
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }


  const signinWithGoogle = () => {
    signInWithPopup(fireauth, googleAuth);
  };
  // listing books
  const handleCreateNewListing = async (name, isbn, price, cover) => {
    const imageRef = ref(storage, `upload/images ${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);

    return await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      
    });
  };

  //   getting all the books data from firestore
  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };

  // getting image url
  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  // getting book id
  const getBookId = async (id) => {
    const docRef = doc(firestore, "books", id);
    const result = await getDoc(docRef);
    return result;
  };

  const placeOrder = async (bookId,qty,time)=>{
    const collectionRef = collection(firestore, "books", bookId, "order");
    const result = await addDoc(collectionRef,{
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      qty:Number(qty),
      time,

    }) 
    return result;
  }

  // getting order details 
  const fetchMyBooks = async (userId)=>{
    const collectionRef = collection(firestore,"books");
    const q = query(collectionRef, where("userID", "==" , userId))
    const result = await getDocs(q);
 return result;
  } 

  const getOrders = async(bookId)=> {
    const collectionRef = collection(firestore,"books",bookId, "order");
    const result = await getDocs(collectionRef);
    console.log(result)
    return result;
    
  }


  useEffect(() => { 
    onAuthStateChanged(fireauth, (user) => {
      if (user) {
        setUser(user);
      } else setUser(null);
    });
  }, [user]);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupWithEP,
        signinWithEP,
        signinWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
        listAllBooks,
        getImageUrl,
        getBookId,
        placeOrder,
        fetchMyBooks,
        user,
        setUser,
        getOrders,
        logout
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// custom hook
const useFirebase = () => {
  return useContext(FirebaseContext);
};

export { FirebaseProvider, FirebaseContext, useFirebase, FireApp, firestore };

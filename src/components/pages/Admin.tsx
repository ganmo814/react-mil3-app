import { memo, VFC, useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Footer } from "../organisms/layouts/Footer";


export const Admin: VFC = memo(() => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const usersCollectionRef = collection(db, 'users');
      getDocs(usersCollectionRef).then((querySnapshot) => {
        console.log(querySnapshot);
      });
    }, []);
  
    return <div></div>;
    <Footer />
  });
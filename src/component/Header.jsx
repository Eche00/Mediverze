import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       const userRef = doc(db, "users", currentUser.uid);
  //       const userSnap = await getDoc(userRef);

  //       if (userSnap.exists()) {
  //         const data = userSnap.data();
  //         console.log("Fetched user data:", data);
  //         setUser(data);
  //       } else {
  //         console.warn("User Firestore document not found.");
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "usersTournex", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            console.log("Fetched user data:", data);
            setUser(data); // ✅ FIX: no .doc()
          } else {
            console.warn("User Firestore document not found.");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false); // ✅ Update the correct loading state
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="  fixed top-0 left-0 w-full z-50">
      {/* container */}
      <main className=" flex items-end  justify-end py-[10px] sm:px-[20px] px-[10px] ">
       

        {/* auth  */}
        {!isLoading && user ? (
          <section className="">
            {/* avatar  */}
            <img
              src="/avatar.webp"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover border-gray-300 border-2 rounded-full "
            />
          </section>
        ) : (
          <section className="p-2">
           <FontAwesomeIcon icon={faUserAstronaut} size="xl" />
          </section>
        )}
      </main>
    </div>
  );
}

export default Header;

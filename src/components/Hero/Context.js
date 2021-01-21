import React, { createContext } from "react";
import { auth, db, storage } from "../../config";
import firebase from "firebase";
export const ContextProvider = createContext();
export default function Context(props) {
  const [model, setModel] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  const register = async (user) => {
    const { username, email, password } = user;
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({ displayName: username });
      setModel(false);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (user) => {
    const { email, password } = user;
    const res = await auth.signInWithEmailAndPassword(email, password);
    setModel(false);
  };
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const create = (data) => {
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //success function/complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              image: url,
              username: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
      }
    );
  };
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    db.collection("posts")
      .orderBy("currentTIme", "desc")
      .onSnapshot((snp) => {
        setPosts(
          snp.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            username: doc.data().username,
          }))
        );
      });
  }, [user, loading]);
  return (
    <ContextProvider.Provider
      value={{
        model,
        openModel,
        closeModel,
        register,
        login,
        logout,
        user,
        loading,
        create,
        posts,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
}

 import { useState, useEffect } from 'react';
 import { db, auth } from './firebaseConnection'

 import{
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  snapshotEqual

 } from 'firebase/firestore';

 import{
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

 } from 'firebase/auth'

 function App(){
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [post, setPosts] = useState([]);

  useEffect(() => {
    async function consultarPosts(){
      const dados = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(listaPost);
      })
    }
    consultarPosts();
  },[])

  async function adicionarPost(){
    await addDoc(collection(db, "post"),{
      titulo: titulo,
      autor: autor,
    }).then(()=>{
      setIdPost("")
      setTitulo("")
      setAutor("")
    }).catch((error) => {
      console.log(error)
    })
  } 
  
  async function buscarPost(){
    const postReferencia = collection(db, "posts");
    await getDocs(postReferencia).then(
      (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(lista);
      }).catch((error) =>{
        console.log(error);
      })
    
  } 

  async function editarPost(){
    const dados = doc(db, "post", idPost);

    await updateDoc(dados,{
      titulo: titulo,
      autor: autor,
    }).then(()=>{

      setIdPost("");
      setTitulo("");
      setAutor("");
    }).catch((error) =>{
      console.log(error)
    })
  }

  async function excluirPost(id){
    const dados = doc(db, "posts", idPost);
    
    await deleteDoc(dados).then(() =>{
      alert("POST DELETADO COM SUCESSO")
    })
  }








  
}

export default App;
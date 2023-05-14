import React, { useEffect, useState } from "react";
import { BtnMode, SportsContainer } from "./Sports.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { db } from "../../helpers/FirebaseConfig";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

interface SportItem {
  id: string;
  data: any; // aquí deberías reemplazar any por el tipo de datos que se espera.
}

const Sports = () => {
  const [user, setUser] = useState<string | null>(null);
  const [sportData, setSportData] = useState<SportItem>();
  const randomDocument = async () => {
    const collectionRef = collection(db, "sports"); // referencia a la colección
    const querySnapshot = await getDocs(collectionRef); // obtenemos todos los documentos

    const randomIndex = Math.floor(Math.random() * querySnapshot.docs.length); // índice aleatorio
    const randomDoc = querySnapshot.docs[randomIndex]; // documento aleatorio
    setSportData({ id: randomDoc.id, data: randomDoc.data() }); // devolvemos los datos del documento elegido
  };
  const saveReaction = async (id: string, liked: boolean, uid: string ) => {
    console.log("saveReaction", id);
    const userRef = doc(db, "sports", id); // referencia al documento que desea actualizar
    const newData = { liked: liked, interaction: true, uid: uid };
    console.log("newData", newData)
    await updateDoc(userRef, newData); // Actualizamos los datos

    console.log("Documento actualizado exitosamente");
  };
  useEffect(() => {
    randomDocument();
  }, []);
  useEffect(() => {
    setUser(sessionStorage.getItem("user"))
  }, []);
  return (
    <SportsContainer>
      {sportData && (
        <div className="card">
          <BtnMode>
            <Brightness3Icon className="icon-mode" />
          </BtnMode>
          <img src={sportData.data.img} alt="Card image cap" />
          <div className="container-title">
            <h5>{sportData.data.name}</h5>
          </div>
          <div className="card-body">
            <a
              href="#"
              className="btn btn-dontliked mx-4 "
              onClick={() => saveReaction(sportData.id, false, user && JSON.parse(user).uid)}
            >
              <ClearIcon className="icon-size" />
            </a>
            <a
              href="#"
              className="btn btn-liked"
              onClick={() => saveReaction(sportData.id, true, user && JSON.parse(user).uid)}
            >
              <FavoriteIcon className="icon-size" />
            </a>
          </div>
        </div>
      )}
    </SportsContainer>
  );
};

export default Sports;

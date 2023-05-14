import React, { useEffect, useState } from "react";
import { BtnMode, SportsContainer } from "./Sports.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { db } from "../../helpers/FirebaseConfig";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

interface SportItem {
  id: string;
  data: any; // aquí deberías reemplazar any por el tipo de datos que se espera.
}

const Sports = () => {
  const [sportData, setSportData] = useState<SportItem>();

  const getSportById = (id: string) => {
    const collectionRef = doc(db, "sports", id);

    getDoc(collectionRef).then((res) => {
      console.log("getDoc", res.data());
      setSportData({ id: res.id, data: res.data() });
    });
  };
  const randomDocument = async () => {
    const collectionRef = collection(db, "sports"); // referencia a la colección
    const querySnapshot = await getDocs(collectionRef); // obtenemos todos los documentos

    const randomIndex = Math.floor(Math.random() * querySnapshot.docs.length); // índice aleatorio
    const randomDoc = querySnapshot.docs[randomIndex]; // documento aleatorio
    setSportData({ id: randomDoc.id, data: randomDoc.data() }); // devolvemos los datos del documento elegido
  };
  const saveReaction = async (id: string, liked: boolean) => {
    console.log("saveReaction", id);
    const userRef = doc(db, "sports", id); // referencia al documento que desea actualizar
    const newData = { liked: liked, interaction: true }
    await updateDoc(userRef, newData); // Actualizamos los datos
    
    console.log("Documento actualizado exitosamente");
  };
  useEffect(() => {
    randomDocument();
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
              onClick={() => saveReaction(sportData.id, false)}
            >
              <ClearIcon className="icon-size" />
            </a>
            <a
              href="#"
              className="btn btn-liked"
              onClick={() => saveReaction(sportData.id, true)}
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

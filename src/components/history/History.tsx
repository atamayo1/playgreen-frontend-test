import React, { useEffect, useState } from "react";
import {
  BackButton,
  ContainIcon,
  HistoryContainer,
  HistoryList,
} from "./History.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import moment from "moment";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../helpers/FirebaseConfig";
interface HistoryItem {
  id: string;
  data: any; // aquí deberías reemplazar any por el tipo de datos que se espera.
}

const History = () => {
  const [historyList, setHistoryList] = useState<HistoryItem[]>([]);
  const [nowDate] = useState(moment(new Date()).format("DD MMMM"));

  const getHistory = () => {
    const collectionRef = collection(db, "sports");
    getDocs(collectionRef).then((querySnapshot) => {
      const itemsToAdd: HistoryItem[] = [];
      querySnapshot.forEach((res) => {
        console.log("getDocs",res.data())
        const newItem: HistoryItem = { id: res.id, data: res.data() };
        itemsToAdd.push(newItem);
      });
      setHistoryList(itemsToAdd);
    });
  };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <HistoryContainer>
      <BackButton>
        <Link to="/sports">
          <ArrowBackIcon className="icon-button" />
        </Link>
      </BackButton>
      <div className="container-content">
        <h1 className="title">History</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-date">{nowDate}</p>
      </div>
      <HistoryList>
        {historyList
          .filter((f) => f.data.interaction)
          .map((item, index) => {
            return (
              <div key={index} className="card-item mb-3">
                <div className="row">
                  <ContainIcon className="col-12 bg-white">
                    <div
                      className="item-img"
                      style={{ backgroundImage: `url(${item.data.img})` }}
                    ></div>
                    {item.data.liked ? (
                      <FavoriteIcon style={{ color: "#2067f8" }} />
                    ) : (
                      <ClearIcon style={{ color: "#d36060" }} />
                    )}
                  </ContainIcon>
                </div>
              </div>
            );
          })}
      </HistoryList>
    </HistoryContainer>
  );
};

export default History;

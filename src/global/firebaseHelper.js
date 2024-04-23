import { useEffect, useState } from "react";
import { extractDataFromFirebase } from "./firebaseData";

export const DataComponent = () => {
  const [data, setData] = useState([]);
  const [newVector_ids, setNewVectorIDS] = useState([]);
  const [newVector_images, setNewVectorImages] = useState([]);
  const [newVector_names, setNewVectorNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const extractedData = await extractDataFromFirebase();
      setData(extractedData);

      const extractedIds = extractedData.map(item => item.id);
      setNewVectorIDS(extractedIds);

      const extractedImages = extractedData.map(item => item.image);
      setNewVectorImages(extractedImages);

      const extractedNames = extractedData.map(item => item.name);
      setNewVectorNames(extractedNames);
    };

    fetchData();
  }, []);
  return { newVector_ids, newVector_images, newVector_names };
}

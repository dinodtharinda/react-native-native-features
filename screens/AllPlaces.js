import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlace() {
     const places = await fetchPlaces();
     setLoadedPlaces(places)
    }
    if (isFocused) {
      loadPlace();
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
}
export default AllPlaces;

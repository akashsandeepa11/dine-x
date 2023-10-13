import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(address);
      setLocation(location);
    })();
  }, []);

  return { location, errorMsg, address };
}

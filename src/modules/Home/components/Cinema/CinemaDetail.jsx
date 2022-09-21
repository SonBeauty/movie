import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import React, { useEffect, useState } from "react";

const CinemaDetail = ({ cinema }) => {
//   const [cinemaId, setCinemaId] = useState();
  console.log(cinema);
    const {
      data: cinemaInfo,
      isLoading,
      error,
    } = useRequest(() => movieAPI.getCinemaDetails(cinema));
    console.log(cinemaInfo);

  if (!cinema) {
    return null;
  }
  return <div>CinemaDetail</div>;
};

export default CinemaDetail;

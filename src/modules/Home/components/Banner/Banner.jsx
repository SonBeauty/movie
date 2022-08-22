import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBanners } from "../../slices/bannerSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const { banners, isLoading, error } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getBanners());
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {banners.map((banner) => {
        return (
          <img
            src={banner.hinhAnh}
            alt={`banner-${banner.maBanner}`}
            width="100px"
            height="100px"
          />
        );
      })}
    </div>
  );
};

export default Banner;

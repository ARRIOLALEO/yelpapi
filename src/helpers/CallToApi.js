import axiosInstance from "./axios";

const callToApi = async (locations,setBs) => {
    const req = await axiosInstance.get(locations);
    setBs(req.data.businesses)
  };

  export default callToApi
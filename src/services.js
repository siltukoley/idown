import axios from "axios";
const server = "https://idown-backend.onrender.com/api/download";

const getVideoDownloadUrl = async url => {
  const response = await axios.post(server, { url: url });
  return response.data;
};

// export default {
//   getVideoDownloadUrl: getVideoDownloadUrl
// };
const videoUtils = {
  getVideoDownloadUrl: getVideoDownloadUrl
};

export default videoUtils;
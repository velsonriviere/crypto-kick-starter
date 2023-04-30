import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory,
  "0x57c0204c859c4Fbe1cF5d7e57a431cc3E7767CC9"
);

export default instance;

import web3 from "./web3";
import CampaignABI from "./build/Campaign.json";

const campaign = (address) => {
  return new web3.eth.Contract(CampaignABI, address);
};
export default campaign;

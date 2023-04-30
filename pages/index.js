import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  render() {
    return (
      <Layout>
        <div>
          <br/>
          <div>
            <h4>Overview</h4>
            <p>
            A crowd funding <strong>React web app like KickStarter.com which instead uses Ethereum</strong>, blockchain
            technology, to raise money for projects in a decentralized, transparent, and more secure way. A
              user can request money for specific things for their project campaign, donors of the campaign can then approve if the campaign
              money will be spent for that request and all actions can be verified by the immutable blockchain.
            </p>
            <h4>Functionality</h4>

              <ul>
                <li>Create project campaigns</li>
                <li>View project campaigns</li>
                <li>Donate (ETH) to campaigns</li>
                <li>Campaign creator make campaign money (ETH) requests</li>
                <li>Donor make campaign request approval</li>
                <li>Campaign creator execute request (finalization after all donors approved)</li>
              </ul>

            <h4>How To Test Site</h4>
            <p>
              First install Meta Mask on your web browser and change network,
              Ethereum Mainnet, to Sepolia test network . Secondly,<strong> go to <Link route={`https://sepoliafaucet.com/`}><a target={`new`}>sepoliafaucet.com </a></Link>
               and get free ETH test tokens (SepoliaETH)</strong>. Now you can come back to this site and create a
              campaign, donate to a campaign, approve campaign requests and finalize campaign requests.
              As a tip, you can open 4 different browsers (Google, FireFox, Edge, Brave), have Meta Mask
              installed in each, and use those 4 different browsers to interact with a campaign you created to replicate 4 different users.
              The first browser can be used to experience the side as the campaign creator (finalize, receive money, etc)
              and then the other 3 browsers can be used to experience the side of the donors
              (donate, approval, etc). All transactions can be viewed and verified on <Link route={`https://sepolia.etherscan.io/`}><a target={`new`}>sepolia.etherscan.io </a></Link>
            </p>
          </div>

        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;

import Web3 from "web3";
import harmonyABI from "./PolycraftMainHarmony.json";
import polygonABI from "./PolycraftMainPolygon.json";

let walletWeb3, contract;

export const getWeb3 = async () => {
  if (!walletWeb3) {
    walletWeb3 = await new Web3(window.ethereum);
  }
  return walletWeb3;
};

export const getContract = async chainName => {
  console.log(chainName);
  if (chainName === "Harmony Testnet") {
    contract = new (await getWeb3()).eth.Contract(
      harmonyABI,
      "0xDe5D570712BA458cA9510d18ed8ca925A7C8F809"
    );
    console.log(contract);
  } else if (chainName === "Mumbai Testnet") {
    contract = new (await getWeb3()).eth.Contract(
      polygonABI,
      "0xe9EB8284427B1e7f78eabF9423bc7B61fA1D75bF"
    );
    console.log(contract);
  }
  return contract;
};

export const initiateTransaction = async (packSize, onSuccess, onFailure) => {
  const result = contract.methods.InitiatePackSale(0).send({
    from: window.ethereum.selectedAddress,
    value: 0.01 * Math.pow(10, 18),
  });

  result
    .on("transactionHash", hash => {
      console.log(
        "Transaction sent successfully. Check console for Transaction hash"
      );
      console.log("Transaction Hash is ", hash);
    })
    .once("confirmation", (confirmationNumber, receipt) => {
      if (receipt.status) {
        onSuccess();
        console.log("Transaction processed successfully");
      } else {
        onFailure();
        console.log("Transaction failed");
      }
      console.log(receipt);
    });
};

export const checkTokenBalance = async () => {
  const addrArray = Array(10).fill(window.ethereum.selectedAddress);
  const result = await contract.methods
    .balanceOfBatch(addrArray, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    .call({ from: window.ethereum.selectedAddress });
  console.log(result);
};

export const buyNFT = async (onSuccess, onFailure, listingId, chainName) => {
  const result = (await getContract(chainName)).methods.BuyFromMarket.send(
    listingId,
    window.ethereum.selectedAddress,
    5
  );
};

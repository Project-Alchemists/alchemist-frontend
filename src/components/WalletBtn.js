import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { getContract } from "web3Integration";

const WalletBtn = () => {
  let web3;
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [showChains, setShowChains] = useState(false);
  const [chainConnected, setChainConnected] = useState();

  const GetWeb3 = async () => {
    if (!window.ethereum) {
      console.log(
        "You do not have Metamask, please install it to use this website"
      );
      return -1;
    } else {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
      } else {
        console.log("Metamask wallet not available");
      }
    }
  };

  const chainNetworks = [
    {
      chainId: "0x6357d2e0",
      chainName: "Harmony Testnet",
      rpcUrls: ["https://api.s0.b.hmny.io"],
      nativeCurrency: {
        name: "HARMONY ONE",
        symbol: "ONE",
        decimals: 18,
      },
      blockExplorerUrls: ["https://explorer.pops.one/"],
    },
    {
      chainId: "0x13881",
      chainName: "Mumbai Testnet",
      rpcUrls: ["https://rpc-mumbai.matic.today"],
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com/"],
    },
  ];

  const connectChain = async networkData => {
    const res = await GetWeb3();
    if (res === -1) {
      return;
    }
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [networkData],
    });
    setChainConnected(networkData.chainName);
    await getContract(networkData.chainName);
  };

  window.ethereum.on("networkChanged", function (networkId) {
    // Time to reload your interface with the new networkId
    console.log("New network ID:", networkId);
    if (networkId != 1666700000 || networkId != 80001) {
      console.error("You are not connected to harmony or polygon");
    }
  });

  return (
    <>
      <Button
        p={7}
        leftIcon={<Image src="https://docs.metamask.io/metamask-fox.svg" />}
        onClick={
          isWalletConnected
            ? () => {
                setShowChains(prev => !prev);
              }
            : GetWeb3
        }
      >
        {isWalletConnected
          ? chainConnected
            ? `Connected to ${chainConnected}`
            : "Connect to chain"
          : "Connect Wallet"}
      </Button>
      <Stack
        visibility={showChains ? "visible" : "hidden"}
        m={3}
        border="1px"
        borderColor="gray.200"
      >
        {chainNetworks.map(chain => {
          return (
            <Button
              variant="ghost"
              onClick={async () => {
                await connectChain(chain);
                setShowChains(prev => !prev);
              }}
            >
              {chain.chainName}
            </Button>
          );
        })}
      </Stack>
    </>
  );
};

export default WalletBtn;

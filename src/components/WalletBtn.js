import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWalletConnected } from "redux/action";
import { getContract } from "web3Integration";

const WalletBtn = () => {
  const [isMetamaskConnected, setMetamaskConnected] = useState(false);
  const [showChains, setShowChains] = useState(false);
  const [chainConnected, setChainConnected] = useState();
  const dispatch = useDispatch();

  const toast = useToast();

  const GetWeb3 = async () => {
    if (!window.ethereum) {
      console.log(window.ethereum);
      toast({
        title: "Metamask unavailable",
        description: "Please install Metamask to use this website.",
        status: "error",
        isClosable: true,
        duration: 1000,
      });
      return -1;
    } else {
      if (window.ethereum) {
        // let web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setMetamaskConnected(true);
        toast({
          title: "Wallet connected!",
          status: "success",
          isClosable: true,
          duration: 1000,
        });
      } else {
        toast({
          title: "Metamask unavailable",
          description: "Please install Metamask to use this website.",
          status: "error",
          isClosable: true,
          duration: 1000,
        });
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
    dispatch(setWalletConnected(true));
    await getContract(networkData.chainName);
  };

  if (isMetamaskConnected) {
    window.ethereum.on("networkChanged", function (networkId) {
      // Time to reload your interface with the new networkId
      console.log("New network ID:", networkId);
      if (networkId !== 1666700000 || networkId !== 80001) {
        toast({
          title: "Network not connected.",
          description: "Connect to Harmony or Polygon network.",
          status: "error",
          isClosable: true,
          duration: 1000,
        });
      }
    });
  }

  return (
    <>
      <Button
        p={7}
        leftIcon={<Image src="https://docs.metamask.io/metamask-fox.svg" />}
        onClick={
          isMetamaskConnected
            ? () => {
                setShowChains(prev => !prev);
              }
            : GetWeb3
        }
      >
        {isMetamaskConnected
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

import { ethers } from '@nomiclabs/buidler';
import { ContractFactory, Signer } from "ethers";
import { getContractDefinition } from "@eth-optimism/rollup-contracts"

export const getContractFactoryFromDefinition = (definition: any, signer: Signer): ContractFactory => {
  return new ethers.ContractFactory(
    definition.abi,
    definition.bytecode || definition.evm.bytecode.object,
    signer
  )
}

export const getContractFactory = (contract: string, signer: Signer): ContractFactory => {
  const definition = getContractDefinition(contract)
  return getContractFactoryFromDefinition(definition, signer)
}
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  exists(id: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_exists(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  gameBurn(to: Address, ids: Array<BigInt>, amounts: Array<BigInt>): boolean {
    let result = super.call(
      "gameBurn",
      "gameBurn(address,uint256[],uint256[]):(bool)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts)
      ]
    );

    return result[0].toBoolean();
  }

  try_gameBurn(
    to: Address,
    ids: Array<BigInt>,
    amounts: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "gameBurn",
      "gameBurn(address,uint256[],uint256[]):(bool)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  gameMint(
    to: Address,
    ids: Array<BigInt>,
    amounts: Array<BigInt>,
    data: Bytes
  ): boolean {
    let result = super.call(
      "gameMint",
      "gameMint(address,uint256[],uint256[],bytes):(bool)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBoolean();
  }

  try_gameMint(
    to: Address,
    ids: Array<BigInt>,
    amounts: Array<BigInt>,
    data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "gameMint",
      "gameMint(address,uint256[],uint256[],bytes):(bool)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  gameSetApproval(
    owner: Address,
    operator: Address,
    approved: boolean
  ): boolean {
    let result = super.call(
      "gameSetApproval",
      "gameSetApproval(address,address,bool):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromBoolean(approved)
      ]
    );

    return result[0].toBoolean();
  }

  try_gameSetApproval(
    owner: Address,
    operator: Address,
    approved: boolean
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "gameSetApproval",
      "gameSetApproval(address,address,bool):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromBoolean(approved)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  gameTransferFrom(
    from: Address,
    to: Address,
    ids: Array<BigInt>,
    amounts: Array<BigInt>,
    data: Bytes
  ): boolean {
    let result = super.call(
      "gameTransferFrom",
      "gameTransferFrom(address,address,uint256[],uint256[],bytes):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBoolean();
  }

  try_gameTransferFrom(
    from: Address,
    to: Address,
    ids: Array<BigInt>,
    amounts: Array<BigInt>,
    data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "gameTransferFrom",
      "gameTransferFrom(address,address,uint256[],uint256[],bytes):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setURI(newuri: string): boolean {
    let result = super.call("setURI", "setURI(string):(bool)", [
      ethereum.Value.fromString(newuri)
    ]);

    return result[0].toBoolean();
  }

  try_setURI(newuri: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("setURI", "setURI(string):(bool)", [
      ethereum.Value.fromString(newuri)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupplyBatch(ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "totalSupplyBatch",
      "totalSupplyBatch(uint256[]):(uint256[])",
      [ethereum.Value.fromUnsignedBigIntArray(ids)]
    );

    return result[0].toBigIntArray();
  }

  try_totalSupplyBatch(ids: Array<BigInt>): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "totalSupplyBatch",
      "totalSupplyBatch(uint256[]):(uint256[])",
      [ethereum.Value.fromUnsignedBigIntArray(ids)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddGameRoleCall extends ethereum.Call {
  get inputs(): AddGameRoleCall__Inputs {
    return new AddGameRoleCall__Inputs(this);
  }

  get outputs(): AddGameRoleCall__Outputs {
    return new AddGameRoleCall__Outputs(this);
  }
}

export class AddGameRoleCall__Inputs {
  _call: AddGameRoleCall;

  constructor(call: AddGameRoleCall) {
    this._call = call;
  }

  get _game(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddGameRoleCall__Outputs {
  _call: AddGameRoleCall;

  constructor(call: AddGameRoleCall) {
    this._call = call;
  }
}

export class GameBurnCall extends ethereum.Call {
  get inputs(): GameBurnCall__Inputs {
    return new GameBurnCall__Inputs(this);
  }

  get outputs(): GameBurnCall__Outputs {
    return new GameBurnCall__Outputs(this);
  }
}

export class GameBurnCall__Inputs {
  _call: GameBurnCall;

  constructor(call: GameBurnCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class GameBurnCall__Outputs {
  _call: GameBurnCall;

  constructor(call: GameBurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class GameMintCall extends ethereum.Call {
  get inputs(): GameMintCall__Inputs {
    return new GameMintCall__Inputs(this);
  }

  get outputs(): GameMintCall__Outputs {
    return new GameMintCall__Outputs(this);
  }
}

export class GameMintCall__Inputs {
  _call: GameMintCall;

  constructor(call: GameMintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class GameMintCall__Outputs {
  _call: GameMintCall;

  constructor(call: GameMintCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class GameSetApprovalCall extends ethereum.Call {
  get inputs(): GameSetApprovalCall__Inputs {
    return new GameSetApprovalCall__Inputs(this);
  }

  get outputs(): GameSetApprovalCall__Outputs {
    return new GameSetApprovalCall__Outputs(this);
  }
}

export class GameSetApprovalCall__Inputs {
  _call: GameSetApprovalCall;

  constructor(call: GameSetApprovalCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get operator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class GameSetApprovalCall__Outputs {
  _call: GameSetApprovalCall;

  constructor(call: GameSetApprovalCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class GameTransferFromCall extends ethereum.Call {
  get inputs(): GameTransferFromCall__Inputs {
    return new GameTransferFromCall__Inputs(this);
  }

  get outputs(): GameTransferFromCall__Outputs {
    return new GameTransferFromCall__Outputs(this);
  }
}

export class GameTransferFromCall__Inputs {
  _call: GameTransferFromCall;

  constructor(call: GameTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class GameTransferFromCall__Outputs {
  _call: GameTransferFromCall;

  constructor(call: GameTransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveGameRoleCall extends ethereum.Call {
  get inputs(): RemoveGameRoleCall__Inputs {
    return new RemoveGameRoleCall__Inputs(this);
  }

  get outputs(): RemoveGameRoleCall__Outputs {
    return new RemoveGameRoleCall__Outputs(this);
  }
}

export class RemoveGameRoleCall__Inputs {
  _call: RemoveGameRoleCall;

  constructor(call: RemoveGameRoleCall) {
    this._call = call;
  }

  get _game(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveGameRoleCall__Outputs {
  _call: RemoveGameRoleCall;

  constructor(call: RemoveGameRoleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetURICall extends ethereum.Call {
  get inputs(): SetURICall__Inputs {
    return new SetURICall__Inputs(this);
  }

  get outputs(): SetURICall__Outputs {
    return new SetURICall__Outputs(this);
  }
}

export class SetURICall__Inputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }

  get newuri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetURICall__Outputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

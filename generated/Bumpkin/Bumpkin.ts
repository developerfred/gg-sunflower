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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

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

  get owner(): Address {
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

export class SetTokenURI extends ethereum.Event {
  get params(): SetTokenURI__Params {
    return new SetTokenURI__Params(this);
  }
}

export class SetTokenURI__Params {
  _event: SetTokenURI;

  constructor(event: SetTokenURI) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenURI(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class Bumpkin__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class Bumpkin extends ethereum.SmartContract {
  static bind(address: Address): Bumpkin {
    return new Bumpkin("Bumpkin", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameMint(account: Address): BigInt {
    let result = super.call("gameMint", "gameMint(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_gameMint(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gameMint", "gameMint(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameRoles(param0: Address): boolean {
    let result = super.call("gameRoles", "gameRoles(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_gameRoles(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("gameRoles", "gameRoles(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  id(): BigInt {
    let result = super.call("id", "id():(uint256)", []);

    return result[0].toBigInt();
  }

  try_id(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("id", "id():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
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

  royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): Bumpkin__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );

    return new Bumpkin__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): ethereum.CallResult<Bumpkin__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Bumpkin__royaltyInfoResult(value[0].toAddress(), value[1].toBigInt())
    );
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

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get initialBaseURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get royaltyReceiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get royaltyFeeNumerator(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
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

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class DeleteDefaultRoyaltyCall extends ethereum.Call {
  get inputs(): DeleteDefaultRoyaltyCall__Inputs {
    return new DeleteDefaultRoyaltyCall__Inputs(this);
  }

  get outputs(): DeleteDefaultRoyaltyCall__Outputs {
    return new DeleteDefaultRoyaltyCall__Outputs(this);
  }
}

export class DeleteDefaultRoyaltyCall__Inputs {
  _call: DeleteDefaultRoyaltyCall;

  constructor(call: DeleteDefaultRoyaltyCall) {
    this._call = call;
  }
}

export class DeleteDefaultRoyaltyCall__Outputs {
  _call: DeleteDefaultRoyaltyCall;

  constructor(call: DeleteDefaultRoyaltyCall) {
    this._call = call;
  }
}

export class GameAddGameRoleCall extends ethereum.Call {
  get inputs(): GameAddGameRoleCall__Inputs {
    return new GameAddGameRoleCall__Inputs(this);
  }

  get outputs(): GameAddGameRoleCall__Outputs {
    return new GameAddGameRoleCall__Outputs(this);
  }
}

export class GameAddGameRoleCall__Inputs {
  _call: GameAddGameRoleCall;

  constructor(call: GameAddGameRoleCall) {
    this._call = call;
  }

  get _game(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GameAddGameRoleCall__Outputs {
  _call: GameAddGameRoleCall;

  constructor(call: GameAddGameRoleCall) {
    this._call = call;
  }
}

export class GameApproveCall extends ethereum.Call {
  get inputs(): GameApproveCall__Inputs {
    return new GameApproveCall__Inputs(this);
  }

  get outputs(): GameApproveCall__Outputs {
    return new GameApproveCall__Outputs(this);
  }
}

export class GameApproveCall__Inputs {
  _call: GameApproveCall;

  constructor(call: GameApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class GameApproveCall__Outputs {
  _call: GameApproveCall;

  constructor(call: GameApproveCall) {
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

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GameBurnCall__Outputs {
  _call: GameBurnCall;

  constructor(call: GameBurnCall) {
    this._call = call;
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

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GameMintCall__Outputs {
  _call: GameMintCall;

  constructor(call: GameMintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GameRemoveGameRoleCall extends ethereum.Call {
  get inputs(): GameRemoveGameRoleCall__Inputs {
    return new GameRemoveGameRoleCall__Inputs(this);
  }

  get outputs(): GameRemoveGameRoleCall__Outputs {
    return new GameRemoveGameRoleCall__Outputs(this);
  }
}

export class GameRemoveGameRoleCall__Inputs {
  _call: GameRemoveGameRoleCall;

  constructor(call: GameRemoveGameRoleCall) {
    this._call = call;
  }

  get _game(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GameRemoveGameRoleCall__Outputs {
  _call: GameRemoveGameRoleCall;

  constructor(call: GameRemoveGameRoleCall) {
    this._call = call;
  }
}

export class GameTransferCall extends ethereum.Call {
  get inputs(): GameTransferCall__Inputs {
    return new GameTransferCall__Inputs(this);
  }

  get outputs(): GameTransferCall__Outputs {
    return new GameTransferCall__Outputs(this);
  }
}

export class GameTransferCall__Inputs {
  _call: GameTransferCall;

  constructor(call: GameTransferCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class GameTransferCall__Outputs {
  _call: GameTransferCall;

  constructor(call: GameTransferCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
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

export class ResetTokenRoyaltyBatchCall extends ethereum.Call {
  get inputs(): ResetTokenRoyaltyBatchCall__Inputs {
    return new ResetTokenRoyaltyBatchCall__Inputs(this);
  }

  get outputs(): ResetTokenRoyaltyBatchCall__Outputs {
    return new ResetTokenRoyaltyBatchCall__Outputs(this);
  }
}

export class ResetTokenRoyaltyBatchCall__Inputs {
  _call: ResetTokenRoyaltyBatchCall;

  constructor(call: ResetTokenRoyaltyBatchCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class ResetTokenRoyaltyBatchCall__Outputs {
  _call: ResetTokenRoyaltyBatchCall;

  constructor(call: ResetTokenRoyaltyBatchCall) {
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

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
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

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetDefaultRoyaltyCall extends ethereum.Call {
  get inputs(): SetDefaultRoyaltyCall__Inputs {
    return new SetDefaultRoyaltyCall__Inputs(this);
  }

  get outputs(): SetDefaultRoyaltyCall__Outputs {
    return new SetDefaultRoyaltyCall__Outputs(this);
  }
}

export class SetDefaultRoyaltyCall__Inputs {
  _call: SetDefaultRoyaltyCall;

  constructor(call: SetDefaultRoyaltyCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get feeNumerator(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetDefaultRoyaltyCall__Outputs {
  _call: SetDefaultRoyaltyCall;

  constructor(call: SetDefaultRoyaltyCall) {
    this._call = call;
  }
}

export class SetTokenRoyaltyBatchCall extends ethereum.Call {
  get inputs(): SetTokenRoyaltyBatchCall__Inputs {
    return new SetTokenRoyaltyBatchCall__Inputs(this);
  }

  get outputs(): SetTokenRoyaltyBatchCall__Outputs {
    return new SetTokenRoyaltyBatchCall__Outputs(this);
  }
}

export class SetTokenRoyaltyBatchCall__Inputs {
  _call: SetTokenRoyaltyBatchCall;

  constructor(call: SetTokenRoyaltyBatchCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get receivers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get feeNumerators(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class SetTokenRoyaltyBatchCall__Outputs {
  _call: SetTokenRoyaltyBatchCall;

  constructor(call: SetTokenRoyaltyBatchCall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
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

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

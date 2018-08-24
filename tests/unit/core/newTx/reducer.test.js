import { assert } from 'chai';
import reducer, { initialState } from '../../../../modules/core/newTx/reducer';

describe('the newTx reducer', () => {
  it('should return a default initial state', () => {
    assert.deepEqual(reducer(undefined, {}), initialState);
  });

  it('should handle the "[CLIENT]:NEW_TX:START" action', () => {
    const action = {
      type: '[CLIENT]:NEW_TX:START',
      payload: {
        from: 1,
        gasPrice: 1,
        gas: 1,
        data: 1,
        to: 1
      }
    };
    const expectedState = Object.assign({}, initialState, {
      from: 1,
      gasPrice: 1,
      gas: 1,
      data: 1,
      to: 1
    });

    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:DETERMINE_IF_CONTRACT:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:DETERMINE_IF_CONTRACT:SUCCESS',
      payload: {
        toIsContract: true,
        isNewContract: true
      }
    };
    const expectedState = Object.assign({}, initialState, {
      toIsContract: true,
      isNewContract: true
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:DETERMINE_IF_CONTRACT:FAILURE]" action', () => {
    const action = { type: '[CLIENT]:DETERMINE_IF_CONTRACT:FAILURE' };
    const oldState = Object.assign({}, initialState, {
      toIsContract: true,
      isNewContract: true
    });
    const expectedState = Object.assign({}, initialState, {
      toIsContract: false,
      isNewContract: false
    });
    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  it('should handle the "[CLIENT:CONFIRM_TX:START]" action', () => {
    const action = { type: '[CLIENT]:CONFIRM_TX:START' };
    const expectedState = Object.assign({}, initialState, {
      unlocking: true
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:CONFIRM_TX:SUCCESS]" action', () => {
    const action = { type: '[CLIENT]:CONFIRM_TX:SUCCESS' };
    const oldState = Object.assign({}, initialState, {
      unlocking: true
    });
    const expectedState = Object.assign({}, initialState, {
      unlocking: false
    });
    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  it('should handle the "[CLIENT:CONFIRM_TX:FAILURE]" action', () => {
    const action = { type: '[CLIENT]:CONFIRM_TX:FAILURE' };
    const oldState = Object.assign({}, initialState, {
      unlocking: true
    });
    const expectedState = Object.assign({}, initialState, {
      unlocking: false
    });
    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  it('should handle the "[CLIENT:ESTIMATE_GAS_USAGE:START]" action', () => {
    const action = { type: '[CLIENT]:ESTIMATE_GAS_USAGE:START' };
    const expectedState = Object.assign({}, initialState, {
      gasLoading: true
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:ESTIMATE_GAS_USAGE:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:ESTIMATE_GAS_USAGE:SUCCESS',
      payload: {
        estimatedGas: 200000
      }
    };
    const oldState = Object.assign({}, initialState, {
      estimatedGas: 300000,
      gasLoading: true
    });
    const expectedState = Object.assign({}, initialState, {
      gasLoading: false,
      estimatedGas: 200000
    });
    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  it('should handle the "[CLIENT:ESTIMATE_GAS_USAGE:FAILURE]" action', () => {
    const action = { type: '[CLIENT]:ESTIMATE_GAS_USAGE:FAILURE' };
    const oldState = Object.assign({}, initialState, {
      gasLoading: true
    });
    const expectedState = Object.assign({}, initialState, {
      gasLoading: false
    });
    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  it('should handle the "[CLIENT:GET_GAS_PRICE:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:GET_GAS_PRICE:SUCCESS',
      payload: { gasPrice: 20000 }
    };
    const expectedState = Object.assign({}, initialState, {
      gasPrice: 20000
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:LOOKUP_SIGNATURE:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:LOOKUP_SIGNATURE:SUCCESS',
      payload: { executionFunction: 'transfer(address,uint256)' }
    };
    const expectedState = Object.assign({}, initialState, {
      executionFunction: 'transfer(address,uint256)'
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:DECODE_FUNCTION_SIGNATURE:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:DECODE_FUNCTION_SIGNATURE:SUCCESS',
      payload: {
        params: ['a', 'b']
      }
    };
    const expectedState = Object.assign({}, initialState, {
      params: ['a', 'b']
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });

  it('should handle the "[CLIENT:GET_TOKEN_DETAILS:SUCCESS]" action', () => {
    const action = {
      type: '[CLIENT]:GET_TOKEN_DETAILS:SUCCESS',
      payload: {
        token: {
          name: 'BBQ Tokens',
          symbol: 'BBQ',
          address: '0x0',
          decimals: 2
        }
      }
    };
    const expectedState = Object.assign({}, initialState, {
      token: {
        name: 'BBQ Tokens',
        symbol: 'BBQ',
        address: '0x0',
        decimals: 2
      }
    });
    assert.deepEqual(reducer(initialState, action), expectedState);
  });
});
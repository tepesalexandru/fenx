import {
    VAULT_DEPOSIT,
    VAULT_WITHDRAW,
    CHANGE_VAULT_DETAILS,
    SHARE_VAULT,
    REMOVE_VAULT_CONTRIBUTOR,
    FETCH_VAULT_CONTRIBUTORS,
    FETCH_VAULT_TRANSACTIONS,
    CREATE_VAULT_TRANSACTION,
    SET_VAULT_GOAL,
    REMOVE_VAULT_GOAL,
    SELECT_VAULT,
    EXIT_VAULT,
    FETCH_GOAL,
    ACTIVATE_GOAL
} from '../../actions/types';

const INITIAL_STATE = {
    vaultId: '',
    label: '',
    imageURL: '',
    totalAmount: '',
    depositedAmount: '',
    contributors: [],
    transactions: [],
    hasGoal: null,
    goal: {
        date: '',
        amount: '',
        format: ''
    }
}

export default (oldState = INITIAL_STATE, action) => {
    const oldTransactions = oldState.transactions;
    switch (action.type) {
        case SELECT_VAULT: 
            return {...oldState, imageURL: action.payload.data.imageURL, vaultId: action.payload.data.vaultId, label: action.payload.data.label,
                totalAmount: action.payload.data.totalAmount
            };
        case EXIT_VAULT:
            oldState = INITIAL_STATE;
            return oldState;
        case VAULT_DEPOSIT:
            return {...oldState, transactions: [...oldTransactions, action.payload]};
        case VAULT_WITHDRAW:
            return {...oldState, transactions: [...oldTransactions, action.payload]};
        case FETCH_VAULT_TRANSACTIONS:
            return {...oldState, transactions: action.payload.data}
        case FETCH_GOAL:
            console.log("fg", action.payload);
            return {...oldState, hasGoal: action.payload.data.hasGoal}
        case ACTIVATE_GOAL:
            return {...oldState, hasGoal: true}
        default:
            return oldState;
    }
}
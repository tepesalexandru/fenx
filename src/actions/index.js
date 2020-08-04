export const addIncome = (amount) => {
    return {
        type: 'ADD_INCOME',
        payload: amount
    }
}

export const addExpense = (amount) => {
    return {
        type: 'ADD_EXPENSE',
        payload: amount
    }
}

export const addIncomeItem = (id, name, amount) => {
    return {
        type: 'ADD_INCOME_ITEM',
        payload: {
            id, name, amount
        }
    }
}

export const addExpenseItem = (id, name, amount) => {
    return {
        type: 'ADD_EXPENSE_ITEM',
        payload: {
            id, name, amount
        }
    }
}

export const removeExpensesItem = (id) => {
    return {
        type: 'REMOVE_EXPENSE_ITEM',
        payload: id
    }
}

export const removeIncomeItem = (id) => {
    return {
        type: 'REMOVE_INCOME_ITEM',
        payload: id
    }
}

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const hideSidebar = () => {
    return {
        type: 'HIDE_SIDEBAR'
    }
}

export const showSidebar = () => {
    return {
        type: 'SHOW_SIDEBAR'
    }
}
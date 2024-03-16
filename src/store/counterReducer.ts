export type IncrementCounterActionType = {
    type: 'INCREMENT';
};

export type ClearCounterActionType = {
    type: 'CLEAR';
};

export type SetMaxValueCounterActionType = {
    type: 'SET-MAX-VALUE';
    payload: number;
};

export type SetMinValueCounterActionType = {
    type: 'SET-MIN-VALUE';
    payload: number;
};

type ActionsType =
    | IncrementCounterActionType
    | ClearCounterActionType
    | SetMaxValueCounterActionType
    | SetMinValueCounterActionType;

export type CounterType = {
    count: number;
    maxValue: number;
    minValue: number;
};

const initialState: CounterType = {
    count: 0,
    maxValue: 0,
    minValue: 0,
};

export const counterReducer = (state: CounterType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: Math.min(state.count + 1, state.maxValue) };
        case 'CLEAR':
            return { ...state, count: state.minValue };
        case 'SET-MAX-VALUE':
            return { ...state, maxValue: action.payload };
        case 'SET-MIN-VALUE':
            return { ...state, minValue: action.payload };
        default:
            return state;
    }
};

export const incrementCounterAC = () => {
    return { type: 'INCREMENT' } as const;
};

export const clearCounterAC = () => {
    return { type: 'CLEAR' } as const;
};

export const setMaxValueCounterAC = (maxValue: number) => {
    return { type: 'SET-MAX-VALUE', payload: maxValue } as const;
};

export const setMinValueCounterAC = (minValue: number) => {
    return { type: 'SET-MIN-VALUE', payload: minValue } as const;
};

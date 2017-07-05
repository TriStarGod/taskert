import { ITask, ITaskAction } from 'models/task';

/** Action Types */
export const GET_REQUEST: string = 'task/GET_REQUEST';
export const GET_SUCCESS: string = 'task/GET_SUCCESS';
export const GET_FAILURE: string = 'task/GET_FAILURE';
export const CREATE_REQUEST: string = 'task/CREATE_REQUEST';
export const CREATE_SUCCESS: string = 'task/CREATE_SUCCESS';
export const CREATE_ERROR: string = 'task/CREATE_ERROR';
export const UPDATE_REQUEST: string = 'task/UPDATE_REQUEST';
export const UPDATE_SUCCESS: string = 'task/UPDATE_SUCCESS';
export const UPDATE_ERROR: string = 'task/UPDATE_ERROR';


/** Initial State */
const initialState: ITask = {
  id: 0,
  parentId: 0,
};

/** Reducer */
export function taskReducer(state = initialState, action: ITaskAction) {
  switch (action.type) {
    case GET_REQUEST:
      return {...state, isFetching: true};

    case GET_SUCCESS:
      return {...state,
      isFetching: false,
      data: action.payload.data,
    }

    case GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    default:
      return state;
  }
}

/** Async Action Creator */
export function getStars() {
  return (dispatch) => {
    dispatch(starsRequest());

    return fetch('https://api.github.com/repos/barbar/vortigern')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => dispatch(starsSuccess(res.stargazers_count)));
        } else {
          return res.json()
            .then((res) => dispatch(starsFailure(res)));
        }
      })
      .catch((err) => dispatch(starsFailure(err)));
  };
}

/** Action Creator */
export function starsRequest(): IStarsAction {
  return {
    type: GET_REQUEST,
  };
}

/** Action Creator */
export function starsSuccess(count: number): IStarsAction {
  return {
    type: GET_SUCCESS,
    payload: {
      count,
    },
  };
}

/** Action Creator */
export function starsFailure(message: any): IStarsAction {
  return {
    type: GET_FAILURE,
    payload: {
      message,
    },
  };
}

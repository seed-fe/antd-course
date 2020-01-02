import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
      },
  effects: { // effect处理异步操作，是generator function，是一层中间件，当 action 被 dispatch 之后，会先到达 effect 处理副作用，然后该 effect 最终会促使新的 action 发送出去，这个新的 action 可能被其他的 effect 再捕获继续处理，也可能被 reducer 捕获并结束，无论怎样，最终处理逻辑的终点都将是 reducer
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = '/dev/posts/1';

      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};
import {CHANGE_AUTH} from '../actions/Types';

const INITIAL_STATE = {
  isLogin: true,
  mockUser: {
    username: 'oktay',
    password: '12345',
  },
  feedList: [
    {
      id: 1,
      image: 'https://picsum.photos/200',
      name: 'Mehmet',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200',
      name: 'Hasan',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200',
      name: 'Ayşe',
    },
    {
      id: 4,
      image: 'https://picsum.photos/200',
      name: 'Fatma',
    },
    {
      id: 5,
      image: 'https://picsum.photos/200',
      name: 'Nazlı',
    },
    {
      id: 6,
      image: 'https://picsum.photos/200',
      name: 'Hatice',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};

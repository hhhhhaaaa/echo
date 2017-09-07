import {
  DEACTIVATE_USER_REQUEST,
  DEACTIVATE_USER_SUCCESS,
  DEACTIVATE_USER_FAILURE,
  REACTIVATE_USER_REQUEST,
  REACTIVATE_USER_SUCCESS,
  REACTIVATE_USER_FAILURE,
  GET_USER_SUMMARY_REQUEST,
  GET_USER_SUMMARY_SUCCESS,
  GET_USER_SUMMARY_FAILURE,
} from 'src/common/actions/types'

const initialState = {
  userSummaries: {},
  isBusy: false,
}

export default function userSummaries(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUMMARY_REQUEST:
      return Object.assign({}, state, {
        isBusy: true,
      })

    case GET_USER_SUMMARY_SUCCESS:
      {
        const userSummary = action.response || {}
        const {user} = userSummary || {}
        const userSummaries = Object.assign({}, state.userSummaries, {[user.id]: userSummary})
        return Object.assign({}, state, {
          isBusy: false,
          userSummaries,
        })
      }

    case GET_USER_SUMMARY_FAILURE:
      return Object.assign({}, state, {
        isBusy: false,
      })

    case DEACTIVATE_USER_REQUEST:
      return Object.assign({}, state, {
        isBusy: true,
      })
    case DEACTIVATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isBusy: false,
      })
    case DEACTIVATE_USER_FAILURE:
      return Object.assign({}, state, {
        isBusy: false,
      })

    case REACTIVATE_USER_REQUEST:
      return Object.assign({}, state, {
        isBusy: true,
      })
    case REACTIVATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isBusy: false,
      })
    case REACTIVATE_USER_FAILURE:
      return Object.assign({}, state, {
        isBusy: false,
      })

    default:
      return state
  }
}

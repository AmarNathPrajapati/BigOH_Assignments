import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

export const myStore = configureStore({
  reducer: {
    counter: counterSlice
  },
})
/**
 bhai, es mail ka reply likh do ki exit aasan aur jaldi... mujhe aaj ye saare task diye gaye the...
 maine task start karane se pahale redux-toolkit padha jisame maine store, reducer, action, useSelector aur useDispatch ka concept padha..
 mai project kal se continue karunga...
 */
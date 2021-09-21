import { configureStore } from '@reduxjs/toolkit'
import toggleMode from './toggleMode';

export default configureStore({
    reducer: {
        darkMode: toggleMode
    },
})
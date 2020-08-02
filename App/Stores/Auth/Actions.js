import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setContact:['contact'],
  removeContact:['contact']
})

export const AuthTypes = Types
export default Creators
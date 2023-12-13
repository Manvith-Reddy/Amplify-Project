import { withAuthenticator } from '@aws-amplify/ui-react'
import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components'

function App() {
  const [ShowCreateModal, setShowCreateModal] = useState(false)
  const [ShowUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState(false)

  return (
    <>
      <NavBar
      marginBottom='20px' width='100%'
      overrides={{ Button3887810: { onClick: () => setShowCreateModal(true) }, Button3887806: {onClick: async() => { + await DataStore.clear(), signOut()}
        }}}
      />
      <div className='container'>
        <NoteUICollection overrideItems = {({ item, idx }) => { 
          return {
            overrides : {
              Button38954199: {
                onClick: () =>{
                  setShowUpdateModal(true)
                  setUpdateModal(item)
                }

              } 
            }
          }}}
        />
      </div>
      <div className='modal' style={{display: ShowCreateModal === false && 'none'}}>
        <CreateNote overrides={{ Button38954151: { onClick: () => setShowCreateModal(true) } }} />
      </div>
      <div className='modal' style={{ display: ShowUpdateModal === false && 'none' }}>
      <UpdateNote
        note={updateNote} overrides={{
        Button3895416: {
        onClick: () => setUpdateNote(false)
        }
        }}
        />
        </div>
    </>
  )
}

export default withAuthenticator(App)

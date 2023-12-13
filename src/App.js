import { withAuthenticator } from '@aws-amplify/ui-react'
import { CreateNote, NavBar, NotesUICollection, UpdateNote } from './ui-components'
import React, { useState } from 'react';
import { DataStore } from 'aws-amplify'
function App({ signOut }) {
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
        <NotesUICollection overrideItems = {({ item, idx }) => { 
          return {
            overrides : {
              Button38954199: {
                onClick: () =>{
                  setShowUpdateModal(true)
                  setUpdateNote(item)
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

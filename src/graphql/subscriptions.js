/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes(
    $filter: ModelSubscriptionNotesFilterInput
    $owner: String
  ) {
    onCreateNotes(filter: $filter, owner: $owner) {
      id
      Tile
      Text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes(
    $filter: ModelSubscriptionNotesFilterInput
    $owner: String
  ) {
    onUpdateNotes(filter: $filter, owner: $owner) {
      id
      Tile
      Text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes(
    $filter: ModelSubscriptionNotesFilterInput
    $owner: String
  ) {
    onDeleteNotes(filter: $filter, owner: $owner) {
      id
      Tile
      Text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

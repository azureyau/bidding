import { atom } from 'jotai'

export const contestAtom = atom(false)
export const dealerAtom = atom(true)
export const biddingSeqAtom = atom([])
export const selectionAtom = atom(null)
export const editingModeAtom = atom(false)

export const addModeAtom = atom(false)
export const respOptionsAtom = atom([])

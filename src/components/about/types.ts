export type Community = {
  title: string
  org: string
  url: string | null
  description: string
  images: string[]
  labels: string[]
  boardCaption: string
  boardSub: string
}

export type SessionNote = {
  id: string
  kind: 'note'
  title: string
  body: string
}

export type SessionPolaroid = {
  id: string
  kind: 'polaroid'
  src: string
  caption: string
}

export type SessionPiece = SessionNote | SessionPolaroid

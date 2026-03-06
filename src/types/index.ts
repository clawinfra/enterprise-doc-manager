// Shared TypeScript types — expanded in each feature phase

export interface User {
  uid: string
  email: string
  displayName: string | null
  photoURL: string | null
  role: 'admin' | 'editor' | 'viewer'
  status: 'active' | 'suspended'
  createdAt: Date
  lastLoginAt: Date | null
}

export interface Document {
  id: string
  name: string
  description: string
  fileUrl: string
  storagePath: string
  fileSize: number
  mimeType: string
  uploadedBy: string
  createdAt: Date
  updatedAt: Date
  tags: string[]
}

export interface ActivityEvent {
  id: string
  type: 'upload' | 'delete' | 'login' | 'user_created' | 'user_suspended'
  userId: string
  userEmail: string
  metadata: Record<string, unknown>
  timestamp: Date
}

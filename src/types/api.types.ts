// Base API Response Structure
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

// Error Response Structure
export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
}

// Pagination Metadata
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Paginated Response
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

/* GoHighLevel API Types */
export interface GHLContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tags?: string[];
  customFields?: Record<string, unknown>; // Corrected to 'unknown'
  locationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface GHLPipeline {
  id: string;
  name: string;
  locationId: string;
  stages: GHLPipelineStage[];
}

export interface GHLPipelineStage {
  id: string;
  name: string;
  order: number;
  pipelineId: string;
}

export interface GHLOpportunity {
  id: string;
  title: string;
  stageId: string;
  pipelineId: string;
  contactId: string;
  value: number;
  status: 'open' | 'won' | 'lost' | 'abandoned';
  createdAt: string;
  updatedAt: string;
}

/* WordPress API Types */
export interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  slug: string;
  status: 'publish' | 'draft' | 'private';
  type: string;
  author: number;
  featured_media: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  categories: number[];
  tags: number[];
}

export interface WPUser {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar_urls: {
    [key: string]: string;
  };
  roles: string[];
}

export interface WPMedia {
  id: number;
  title: {
    rendered: string;
  };
  source_url: string;
  alt_text: string;
  media_type: 'image' | 'video' | 'audio' | 'file';
  mime_type: string;
  media_details: {
    width?: number;
    height?: number;
    sizes?: Record<string, {
      file: string;
      width: number;
      height: number;
      source_url: string;
    }>;
  };
}

/* Supabase/Database Types */
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Profile extends Omit<User, 'role'> {
  bio?: string;
  website?: string;
  location?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  privacy: {
    profilePublic: boolean;
    showEmail: boolean;
  };
}

/* Form Data Types */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
}

export interface NewsletterSignupData {
  email: string;
  firstName?: string;
  interests?: string[];
  source?: string;
}

/* Authentication Types */
export interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: string;
  permissions: string[];
  lastLoginAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  acceptTerms: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

/* Search and Filtering Types */
export interface SearchParams {
  q?: string;
  category?: string;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

/* File Upload Types */
export interface FileUploadData {
  file: File;
  description?: string;
  alt?: string;
  category?: string;
}

export interface UploadedFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  uploadedAt: string;
}

/**
 * LEARNING NOTE: Union types are perfect for defining allowed values
 * These help prevent typos and provide better IntelliSense support
 */

// Status Types
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'auto';
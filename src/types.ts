export type TemplateStatus = 'draft' | 'published' | 'archived';
export type TemplateFormat = 'docx' | 'pdf';

export type VariableType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'money'
  | 'date'
  | 'select'
  | 'boolean';

export interface Template {
  id: string;
  name: string;
  category: string;
  tags: string[];
  format: TemplateFormat;
  status: TemplateStatus;
  version: number;
  createdAt: string;
  variableCount: number;
}

export interface TemplateVariable {
  id: string;
  templateId: string;
  name: string;
  label: string;
  type: VariableType;
  required: boolean;
  defaultValue: string;
  hint: string;
  options?: string[];
}

export interface GeneratedDocument {
  id: string;
  templateId: string;
  templateName: string;
  author: string;
  createdAt: string;
  format: TemplateFormat | 'pdf';
  fileName: string;
  values: Record<string, string | boolean>;
}

export interface UploadTemplateInput {
  name: string;
  category: string;
  tags: string[];
  format: TemplateFormat;
}

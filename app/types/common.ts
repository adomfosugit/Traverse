export enum EEntryIconType {
  USER,
  SERVICE,
}

export enum EOnboardingOptionIcon {
  USER,
}

export enum EPage {
  HOME = '/home',
  PROJECTS = '/projects',
  FAQ = '/faq',
  SETTINGS = '/settings',
  DASHBOARD = '/dashboard',
  SERVICE_PROJECTS = '/service-providers/dashboard/projects',
  SERVICE_HOME = '/service-providers/dashboard',
  SERVICE_PROFILE = '/service-providers/dashboard/profile',
}

export enum EBadgeStatus {
  ERROR = 'Not done',
  WARNING = 'Delayed',
  COMPLETED = 'Done',
  IN_PROGRESS = 'In progress',
  NA = 'N/A',
}

export enum ETab {
  DETAILS,
  SUBMIT,
}

export enum EProjectTab {
  RECENT,
  TRANSACTION,
  DOCUMENT,
  GALLERY,
  NEGOTIATE,
}

export enum EBrokerProfession {
  LAND_BROKER = 'Land broker',
  SURVEYOR = 'Surveyor',
  SOLICITOR = 'Solicitor',
  ARCHITECT = 'Architect',
}

export enum EServiceOptions {
  SURVEY = 'Land survey',
  SITE_PREP = 'Site preparation',
  SITE_VISIT = 'Site visit',
  DUE_DILIGENCE = 'Due diligence',
  DUE_DILIGENCE_REPORT = 'Due diligence report',
  FINAL_SITE_PREP = 'Final site preparation',
  PURCHASE_FEES = 'Purchase fees',
  PURCHASE_AGREEMENT = 'Purchase agreement',
  CONVEYANCE = 'Conveyance',
  OATH = 'Oath',
  DOCUMENT_SIGN = 'Document sign',
  LAND_REGISTRATION = 'Land registration',
  STAMP_DUTY = 'Stamp duty',
  CONCURRENCE = 'Concurrence',
  LAND_TITLE = 'Land title',
  LAND_PREPARATION = 'Land preparation',
  ISSUANCE = 'Issuance',
}

export enum EServiceStatus {
  OPEN = 'Open',
  ASSIGNED = 'Assigned',
  IN_PROGRESS = 'In progress',
  BLOCKED = 'Blocked',
  COMPLETED = 'Completed',
}

export type TGallery = {
  id: string;
  title: string;
  dateSubmitted: string;
  images: {
    id: string;
    path: string;
  }[];
};

export type TCompletedStage = {
  title: string;
  date: string;
  toBeCompleted: string;
  completedOn: string;
  uploadedFiles: { name: string; path: string }[];
  uploadedImages: { name: string; path: string }[];
};

export enum ENegotiationStatus {
  REVIEW = 'Review',
  ACCEPTED = 'Accepted',
}

export type TSelectOptions = {
  id: string;
  value: string;
};

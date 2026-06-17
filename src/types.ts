/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
  iconName: string;
}

export interface RegisterFormInput {
  fullName: string;
  email: string;
  mobile: string;
  state: string;
  service: string;
  agreeTerms: boolean;
}

export interface CallbackFormInput {
  name: string;
  mobile: string;
  service: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  stars: number;
  role?: string;
  date?: string;
}

export interface faqItem {
  id: string;
  question: string;
  answer: string;
}

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export const CORE_SERVICES_LIST = [
  "Trademark Registration",
  "Trademark Renewal",
  "Trademark Objection",
  "Private Limited Company Incorporation",
  "LLP Registration",
  "One Person Company (OPC)",
  "GST Registration",
  "GST Return Filing",
  "FSSAI Registration & License",
  "Import Export Code (IEC)",
  "ISO Certification",
  "Copyright Registration",
  "PF & ESIC Registration",
  "Legal Dispute Resolution (ODR)"
];

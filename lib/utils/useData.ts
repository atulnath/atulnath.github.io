// Hook to get data based on current language
"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import * as dataEn from "../data/data";
import * as dataDe from "../data/data_de";
import * as courseDataEn from "../data/course_data_en";
import * as courseDataDe from "../data/course_data_de";

export function useData() {
  const { language } = useLanguage();

  return language === "de" ? dataDe : dataEn;
}
export function useCourseData() {
  const { language } = useLanguage();

  return language === "de" ? courseDataDe : courseDataEn;
}
// Export types for TypeScript
export type {
  PersonalInfo,
  ContactInfo,
  Experience,
  Project,
  Achievement,
  Certification,
  Skill,
  Education,
  Course,
} from "../types/types";

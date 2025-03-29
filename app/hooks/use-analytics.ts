import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics here if needed
    return () => {
      // Cleanup analytics if needed
    };
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Implement your analytics tracking here
    console.log("Analytics Event:", { eventName, properties });
  };

  const trackPageView = (pageName: string) => {
    trackEvent("page_view", { pageName });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent("section_view", { sectionName });
  };

  const trackProjectView = (projectId: string, projectName: string) => {
    trackEvent("project_view", { projectId, projectName });
  };

  const trackContactFormSubmit = (success: boolean) => {
    trackEvent("contact_form_submit", { success });
  };

  return {
    trackEvent,
    trackPageView,
    trackSectionView,
    trackProjectView,
    trackContactFormSubmit,
  };
}; 
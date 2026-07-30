// Google Analytics 4 helpers with Consent Mode v2 respected.

export function trackPageView(path) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title
  })
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export function grantConsent() {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  })
  try { localStorage.setItem('sca_consent', 'granted') } catch (_) {}
}

export function denyConsent() {
  if (typeof window === 'undefined') return
  try { localStorage.setItem('sca_consent', 'denied') } catch (_) {}
}

export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  try { return localStorage.getItem('sca_consent') } catch (_) { return null }
}

# Formal Design Review Report
## Personal Portfolio Website — John Orlie Mascardo

**Stack:** React + Vite + TailwindCSS v4 + DaisyUI  
**Review Date:** March 10, 2026  
**Reviewer:** Senior UI/UX Designer

---

# EXECUTIVE SUMMARY

This portfolio demonstrates strong foundational design with thoughtful gradient usage, smooth animations, and good component architecture. However, **light mode is not fully implemented** — the site was clearly designed primarily for dark mode with many hardcoded dark theme colors that break in light mode. This is a critical issue that must be addressed before production.

---

# SECTION 1: CRITICAL & MAJOR DESIGN ISSUES

## 1.1 Light Mode — Not Fully Implemented (CRITICAL)

### Issue: Hardcoded Dark Backgrounds Break Light Mode

**Affected Components:**
- [`Navbar.jsx`](src/components/Navbar.jsx:79) — Scrolled state uses `bg-deep-teal-950/90`
- [`Navbar.jsx`](src/components/Navbar.jsx:155) — Mobile menu uses `bg-deep-teal-900/95`
- [`ContactCard.jsx`](src/components/ContactCard.jsx:130) — Form container uses `bg-white`
- [`ContactCard.jsx`](src/components/ContactCard.jsx:131) — Form text uses `text-deep-teal-900`
- [`ContactCard.jsx`](src/components/ContactCard.jsx:103) — Social buttons use `bg-white`
- [`ContactCard.jsx`](src/components/ContactCard.jsx:144) — Input borders use `border-alabaster-grey-200`
- [`Certificatecard.jsx`](src/components/Certificatecard.jsx:186) — Modal uses `bg-white`
- [`Certificatecard.jsx`](src/components/Certificatecard.jsx:188) — Modal title uses `text-deep-teal-900`

**Severity:** Critical  
**Mode Affected:** Light only  
**Recommendation:** Replace hardcoded colors with DaisyUI theme-aware classes:

```jsx
// BEFORE (broken in light mode)
className="bg-deep-teal-950/90"
className="bg-white"
className="text-deep-teal-900"

// AFTER (theme-aware)
className="bg-base-100/90 backdrop-blur-lg"  // or use scrolled state detection
className="bg-base-100"
className="text-base-content"
```

---

### Issue: Custom Color Classes Not Theme-Aware

**Affected Components:**
- [`Navbar.jsx`](src/components/Navbar.jsx:109) — `text-alabaster-grey-300`
- [`Navbar.jsx`](src/components/Navbar.jsx:184) — Mobile menu items use `text-alabaster-grey-300`
- [`Navbar.jsx`](src/components/Navbar.jsx:241) — Footer text uses `text-alabaster-grey-400`
- [`Navbar.jsx`](src/components/Navbar.jsx:108) — Active state uses `text-mint-leaf-400`
- [`Footer.jsx`](src/components/Footer.jsx:108) — Links use `text-alabaster-grey-400`
- [`Certificatecard.jsx`](src/components/Certificatecard.jsx:147) — Issuer text uses `text-alabaster-grey-400`
- [`ContactCard.jsx`](src/components/ContactCard.jsx:193) — Input borders use `border-alabaster-grey-200`

**Severity:** Critical  
**Mode Affected:** Light only  
**Recommendation:** Define these colors in both light and dark DaisyUI themes, or replace with standard DaisyUI colors:

```jsx
// BEFORE
text-alabaster-grey-300
text-alabaster-grey-400

// AFTER - Use DaisyUI theme colors
text-base-content/70
text-base-content/60
```

---

### Issue: Hardcoded Scrollbar Colors

**Affected File:** [`App.css`](src/App.css:52-63)

```css
/* CURRENT - Only works in dark mode */
::-webkit-scrollbar-track {
  background: var(--color-deep-teal-950);
}

::-webkit-scrollbar-thumb {
  background: var(--color-mint-leaf-500);
}
```

**Severity:** Major  
**Mode Affected:** Light only  
**Recommendation:** Add CSS custom properties for scrollbar that adapt to theme:

```css
/* RECOMMENDED */
:root {
  --scrollbar-track: oklch(0.3 0.02 250);
  --scrollbar-thumb: oklch(0.7 0.18 150);
}

[data-theme="light"] {
  --scrollbar-track: oklch(0.9 0.01 250);
  --scrollbar-thumb: oklch(0.6 0.12 150);
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}
```

---

## 1.2 Color Contrast Issues

### Issue: Navbar Text Visibility in Light Mode

**Affected:** [`Navbar.jsx`](src/components/Navbar.jsx:106-109)

When the navbar is not scrolled (transparent) in light mode, the text color `text-alabaster-grey-300` on a light background will have extremely poor contrast.

**Severity:** Major  
**Mode Affected:** Light only  
**Recommendation:** Add theme-aware navbar text colors:

```jsx
// Add conditional classes based on theme
className={`text-sm font-medium transition-all duration-300 relative group ${
  activeMenu === item.id 
    ? "text-primary" 
    : "text-base-content/80 hover:text-primary"
}`}
```

---

### Issue: Form Input Focus Ring Hardcoded

**Affected:** [`ContactCard.jsx`](src/components/ContactCard.jsx:144)

```jsx
className="...focus:ring-2 focus:ring-mint-leaf-500..."
```

**Severity:** Major  
**Mode Affected:** Both (but more noticeable in light)  
**Recommendation:** Use DaisyUI primary color:

```jsx
className="...focus:ring-2 focus:ring-primary..."
```

---

# SECTION 2: MINOR DESIGN ISSUES

## 2.1 Layout & Spacing

### Issue: Inconsistent Card Padding

**Observation:** Project cards use `p-6` (24px), Certificate cards use varying paddings, Tech Stack cards use `p-8` (32px).

**Severity:** Minor  
**Recommendation:** Standardize card padding across all components to `p-6` for consistency.

---

### Issue: Section Background Inconsistency

**Observation:**
- Hero: `bg-base-100`
- About: `bg-base-200`
- TechStack: `bg-base-300`
- Projects: `bg-base-200`
- Certificates: `bg-base-300`
- Contact: `bg-base-200`

The alternating pattern breaks in some places. TechStack uses `bg-base-300` but Certificates also uses `bg-base-300`, creating two consecutive "darker" sections.

**Severity:** Minor  
**Recommendation:** Establish a clear alternating pattern: base-100 → base-200 → base-100 → base-200, etc.

---

## 2.2 Typography

### Issue: Long Text in Project Descriptions

**Affected:** [`Projectcard.jsx`](src/components/Projectcard.jsx:67)

```jsx
<p className="...line-clamp-3">
```

The `line-clamp-3` truncates text but creates inconsistent card heights when descriptions vary significantly in length.

**Severity:** Minor  
**Recommendation:** Ensure all project descriptions are similar length, or use consistent line clamp across all cards.

---

## 2.3 Component Inconsistencies

### Issue: Certificate Section Hardcoded Overlay

**Affected:** [`Certificatecard.jsx`](src/components/Certificatecard.jsx:124)

```jsx
<div className="...bg-linear-to-t from-deep-teal-900/80 to-transparent...">
```

The `deep-teal-900` overlay is designed for dark mode and will look incorrect in light mode.

**Severity:** Minor  
**Mode Affected:** Light only  
**Recommendation:** Use theme-aware overlay:

```jsx
<div className="...bg-linear-to-t from-base-300/80 to-transparent...">
```

---

# SECTION 3: COSMETIC SUGGESTIONS

## 3.1 Visual Enhancement Suggestions

### Suggestion: Add Loading States

Currently no skeleton loaders or loading states for images. Consider adding:
- Lazy loading for project/certificate images
- Skeleton cards during image load

### Suggestion: Improve Certificate Modal Accessibility

The modal backdrop uses `bg-black/90` which is very dark. Consider:
- `bg-black/60` for better visual balance
- Add `aria-modal="true"` and proper focus management

### Suggestion: Add Micro-interactions

Consider adding:
- Button press animations (scale down slightly on click)
- Staggered entrance animations for card grids

---

# SECTION 4: WHAT ALREADY LOOKS GREAT

## 4.1 Strengths Identified

✅ **Gradient Usage** — The `bg-linear-to-r from-primary to-secondary` gradients are used consistently and look excellent in both modes.

✅ **Typography System** — Custom font (Zalando Sans Expanded) with proper font weights creates strong visual hierarchy. Font sizes are appropriate across breakpoints.

✅ **Card Design** — Project cards, certificate cards, and tech stack cards all have consistent:
- Rounded corners (`rounded-2xl`)
- Hover effects (`hover:shadow-xl`, `hover:-translate-y-1`)
- Transition durations (300ms)

✅ **Hero Section** — Well-structured with:
- Clear value proposition
- "Available for work" indicator
- Dual CTA buttons
- Social links

✅ **Animations** — Blob animation in Hero background adds visual interest without being distracting.

✅ **DaisyUI Integration** — Proper use of DaisyUI components, color system, and utility classes.

✅ **Responsive Design** — Good breakpoint coverage with `md:`, `lg:` prefixes. Grid layouts adapt properly.

✅ **Accessibility** — Alt text on images, proper heading hierarchy, semantic HTML structure.

✅ **Section Flow** — Logical progression: Hero → About → TechStack → Projects → Certificates → Contact.

---

# HANDOFF NOTES FOR DEVELOPER

## Priority 1: Fix Light Mode Breaking Issues (MUST FIX)

### 1.1 Update Navbar Component
**File:** `src/components/Navbar.jsx`

**Changes Required:**
- Line 79: Change `bg-deep-teal-950/90` → `bg-base-100/90`
- Line 109: Change `text-alabaster-grey-300` → `text-base-content/80` (inactive), `text-primary` (active)
- Line 155: Change mobile menu `bg-deep-teal-900/95` → `bg-base-100/95`
- Line 184: Change mobile menu text `text-alabaster-grey-300` → `text-base-content/80`
- Add theme detection for navbar scrolled state background

### 1.2 Update ContactCard Component
**File:** `src/components/ContactCard.jsx`

**Changes Required:**
- Line 103: Change `bg-white` → `bg-base-100`
- Line 130: Change `bg-white` → `bg-base-100`
- Line 131: Change `text-deep-teal-900` → `text-base-content`
- Line 135, 144, 151, 160, 167, 176, 183, 192: Change label `text-deep-teal-900` → `text-base-content`
- Line 144, 160, 176, 192: Change border `border-alabaster-grey-200` → `border-base-300`
- Line 144, 160, 176, 192: Change focus ring `ring-mint-leaf-500` → `ring-primary`

### 1.3 Update Certificatecard Component
**File:** `src/components/Certificatecard.jsx`

**Changes Required:**
- Line 124: Change `from-deep-teal-900/80` → `from-base-300/80`
- Line 127: Change `text-deep-teal-900` → `text-base-content`
- Line 147: Change `text-alabaster-grey-400` → `text-base-content/60`
- Line 186: Change `bg-white` → `bg-base-100`
- Line 188, 193, 196, 199, 202: Change `text-deep-teal-900` and `text-alabaster-grey-400` → `text-base-content` and `text-base-content/70`

### 1.4 Update Footer Component
**File:** `src/components/Footer.jsx`

**Changes Required:**
- Line 7: Consider changing `bg-base-300` → `bg-base-200` for consistency
- Line 108, 111: Change `text-alabaster-grey-400` → `text-base-content/60`

### 1.5 Update App.css Scrollbar
**File:** `src/App.css`

**Changes Required:** Replace hardcoded scrollbar colors with theme-aware CSS custom properties:

```css
:root {
  --scrollbar-track: oklch(0.3 0.02 250);
  --scrollbar-thumb: oklch(0.7 0.18 150);
}

[data-theme="light"] {
  --scrollbar-track: oklch(0.95 0.01 250);
  --scrollbar-thumb: oklch(0.6 0.12 150);
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}
```

---

## Priority 2: Design Refinements

### 2.1 Standardize Section Backgrounds
Maintain consistent alternating pattern. Consider using:
- Hero: `base-100`
- About: `base-200`
- TechStack: `base-100` (change from base-300)
- Projects: `base-200`
- Certificates: `base-100` (change from base-300)
- Contact: `base-200`

### 2.2 Standardize Card Padding
Change TechStack card padding from `p-8` to `p-6` for consistency with other cards.

### 2.3 Add Certificate Category Visual Distinction
Consider adding a subtle background tint difference between "Web Development Certificates" and "Other Certificates" sections for better visual scanning.

---

## Priority 3: Future Enhancements

1. Add skeleton loaders for images
2. Add form validation with error states
3. Add toast notification after form submission
4. Consider adding smooth scroll-snap for better navigation
5. Add keyboard navigation support for certificate modal

---

## Testing Checklist

After implementing Priority 1 fixes, verify:

- [ ] Navbar is readable in light mode (both scrolled and non-scrolled states)
- [ ] Mobile menu works correctly in light mode
- [ ] Contact form is usable in light mode (all inputs visible)
- [ ] Certificate modal displays correctly in light mode
- [ ] Scrollbar matches theme in both modes
- [ ] All hover/focus states are visible in both modes
- [ ] Text contrast meets WCAG AA standards (4.5:1 for body, 3:1 for large text)

---

**End of Report**

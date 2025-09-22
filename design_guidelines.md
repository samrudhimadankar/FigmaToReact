# Google Developer Groups RBU Chapter - Design Guidelines

## Design Approach
**Reference-Based Approach**: Following Google's Material Design principles with modern web standards, drawing inspiration from Google Developer community aesthetics while maintaining the specific brand identity shown in the Figma designs.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 220 100% 50% (Google Blue)
- Secondary: 140 60% 45% (Google Green accent)
- Background: 0 0% 98% (Off-white)
- Surface: 0 0% 100% (Pure white)
- Text Primary: 220 15% 15% (Dark gray)
- Text Secondary: 220 10% 45% (Medium gray)

**Dark Mode:**
- Primary: 220 100% 60% (Lighter Google Blue)
- Secondary: 140 50% 55% (Lighter Google Green)
- Background: 220 15% 8% (Dark navy)
- Surface: 220 10% 12% (Elevated dark)
- Text Primary: 0 0% 95% (Off-white)
- Text Secondary: 220 5% 70% (Light gray)

### B. Typography
- **Primary Font**: Inter (Google Fonts CDN)
- **Display Font**: Space Grotesk for headings (Google Fonts CDN)
- **Hierarchy**: 
  - Hero: 3xl-5xl font weights 700-800
  - Section Headers: 2xl-3xl font weight 600
  - Body: Base-lg font weight 400-500
  - Captions: sm font weight 400

### C. Layout System
**Tailwind Spacing Units**: Primarily use 4, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-6xl with px-4 padding
- **Section Spacing**: py-16 md:py-24 between major sections
- **Component Spacing**: mb-8 md:mb-12 between components
- **Grid System**: 12-column grid with gap-8

### D. Component Library

**Navigation**: 
- Sticky header with glass morphism effect (backdrop-blur-sm)
- Dark/light mode toggle with animated sun/moon icon
- Mobile hamburger menu with slide-in animation

**Hero Section**:
- Large illustration on right side (desktop), stacked on mobile
- Primary CTA button with gradient background and shadow
- Animated typing effect for tagline

**Statistics Cards**:
- Circular progress indicators with animated fill
- Large number displays with counter animation
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile

**Technology Showcase**:
- Card-based layout with hover lift effects
- Technology icons (Android, Flutter, Cloud) with brand colors
- Subtle shadow and border treatments

**FAQ Section**:
- Accordion-style expandable items
- Smooth collapse/expand animations
- Plus/minus icon rotation on state change

**Footer**:
- Multi-column layout with social media links
- Contact information and location details
- Consistent with overall brand aesthetic

### E. Animations
**Sparingly Used**:
- Scroll-triggered fade-in animations for sections
- Hover lift effects on interactive cards
- Smooth theme transitions (0.3s duration)
- Statistics counter animations on viewport entry
- FAQ accordion expand/collapse

## Images
**Hero Illustration**: Large custom illustration showing developer community/collaboration theme, positioned on right side of hero section
**Technology Icons**: Android, Flutter, Google Cloud platform icons in their respective brand colors
**Background Elements**: Subtle geometric patterns or gradients as section dividers

## Responsive Breakpoints
- Mobile: 320px-767px (single column, stacked layouts)
- Tablet: 768px-1023px (2-column grids, adjusted spacing)
- Desktop: 1024px+ (full multi-column layouts, optimal spacing)

## Accessibility
- High contrast ratios maintained in both themes
- Focus indicators on all interactive elements
- Semantic HTML structure with proper headings
- Screen reader compatible animations and interactions
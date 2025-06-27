# ICICI Home Finance - AEM Edge Delivery Services

This project is built using Adobe Experience Manager (AEM) Edge Delivery Services, enabling document-based authoring and high-performance web delivery.

## Features

- **Document Authoring**: Content authors can use Microsoft Word or Google Docs to create and edit content
- **High Performance**: Optimized for Core Web Vitals and fast loading
- **Modern Architecture**: Built with vanilla HTML, CSS, and JavaScript
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Interactive Components**: EMI calculator, forms, and dynamic content blocks

## Project Structure

```
├── blocks/                 # Reusable content blocks
│   ├── header/            # Site header and navigation
│   ├── footer/            # Site footer
│   ├── hero/              # Hero sections
│   ├── cards/             # Product cards
│   └── emi-calculator/    # Interactive EMI calculator
├── scripts/               # JavaScript functionality
├── styles/                # CSS styles and design system
├── tools/                 # Authoring tools and sidekick
├── head.html              # HTML head content
├── fstab.yaml            # File system tab configuration
└── index.md              # Main page content
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Access to Google Drive or SharePoint for document authoring

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Document Authoring

1. Content is authored in Google Docs or Microsoft Word
2. Documents are automatically converted to web pages
3. Use the AEM Sidekick browser extension for preview and publishing
4. Content structure follows Markdown conventions

## Content Management

### Creating New Pages

1. Create a new document in your configured Google Drive folder
2. Follow the content structure guidelines
3. Use the Sidekick to preview and publish

### Using Blocks

Blocks are reusable components that can be inserted into documents:

- **Hero**: Main page headers with call-to-action buttons
- **Cards**: Product showcases and feature highlights  
- **EMI Calculator**: Interactive loan calculator
- **Header/Footer**: Site navigation and footer content

### Content Structure

Content follows a structured format:
- Use `#` for main headings
- Use `##` for section headings
- Use `---` to separate sections
- Tables are automatically converted to blocks when structured properly

## Styling and Design

The project uses a comprehensive design system with:

- **Color Palette**: ICICI brand colors (orange, blue, neutrals)
- **Typography**: Mulish font family with proper hierarchy
- **Components**: Reusable UI components and utilities
- **Responsive**: Mobile-first with desktop enhancements

## Development

### Adding New Blocks

1. Create a new folder in `/blocks/`
2. Add JavaScript file for functionality
3. Add CSS file for styling
4. Update the library configuration

### Customizing Styles

- Main styles are in `/styles/styles.css`
- Block-specific styles are in their respective folders
- Use CSS custom properties for consistent theming

## Deployment

The project is designed to work with AEM Edge Delivery Services:

1. Content changes are automatically deployed when published
2. Code changes require deployment through the AEM pipeline
3. Performance is optimized for Core Web Vitals

## Performance Features

- **Lazy Loading**: Images and non-critical content
- **Critical CSS**: Above-the-fold styles inlined
- **Progressive Enhancement**: Works without JavaScript
- **Optimized Images**: Automatic WebP conversion and sizing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Mobile-first responsive design

## Contributing

1. Follow the established code structure
2. Test on multiple devices and browsers
3. Ensure accessibility compliance
4. Document any new blocks or features

## Support

For technical support or questions about AEM Edge Delivery Services, refer to the Adobe documentation or contact the development team.
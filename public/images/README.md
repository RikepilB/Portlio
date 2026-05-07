# Media Assets Directory

This directory contains all static images and media for the portfolio.

## Organization

- `/public/images/about/`: Personal photos for the About page.
- `/public/images/communities/`: Event photos and social highlights for the Communities section.
- `/public/images/projects/`: Screenshots and thumbnails for project cards.

## Usage in Code

Next.js `Image` components should reference these using absolute paths starting from the root:
Example: `<Image src="/images/about/your-image.jpg" ... />`

## Best Practices

1. **Format**: Use `.jpg` or `.png`. Next.js will automatically convert these to `.webp` at runtime for performance.
2. **Naming**: Use kebab-case (e.g., `my-cool-project.jpg`) for consistency.
3. **Size**: Try to keep source images under 1MB to speed up the local build process.

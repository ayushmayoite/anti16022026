# Implementation Plan - Refined Product Image Categorization

The objective is to accurately categorize product images for the furniture catalog, specifically following the 1+3+3 rule (1 main, 3 lifestyle, 3 white background) and separating variations with and without headrests.

## Proposed Changes

### Research & Discovery
- [ ] Exhaustively list image files for each chair in `D:\OneDrive\...\SEATING IMAGES`.
- [ ] Cross-reference these files with product catalogs like `AFC SEATING CATALOGUE.pdf` (using `grep` or by looking at filenames if they match catalog names).
- [ ] Inspect `C:\My Web Sites` index files for any image mapping data.

### Data Update (`lib/products_imported.ts`)
- [ ] Map identified images to `importedProducts` data.
- [ ] Explicitly categorize images in comments or structure:
    - Index 0: Main Image
    - Indices 1-3: Lifestyle Images (Background)
    - Indices 4-6: Plain White Background Images
- [ ] Update `features` and `description` to reflect correct color options (Black, Grey, White, Oak) for filtering.
- [ ] Ensure all split products (Headrest vs. No Headrest) have unique, correct image sets.

### Component Alignment
- [ ] Verify `FilterSidebar.tsx` and `ProductCatalog.tsx` correctly handle the new data structure.
- [ ] Ensure the "Headrest" filter works by checking `features` or `name`.

## Verification Plan

### Manual Verification
- [ ] Run `npm run dev` and navigate to `http://localhost:3000/products`.
- [ ] Filter by "Chairs" and check each chair for:
    - Correct main image display.
    - Correct variation separation (e.g., Myel vs Myel with Headrest).
    - Presence of 7 images in the detail view (once implemented or if checking the data directly).
- [ ] Test the "Headrest", "Price Range", and "Color" filters.

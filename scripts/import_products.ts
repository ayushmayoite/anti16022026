/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// const pdf = require('pdf-parse');

// --- Configuration ---
const CONFIG = {
  htmlBackupDir: 'C:\\My Web Sites\\09122025\\afcindi.in\\afcindia.in\\products',
  imageSourceRoot: 'D:\\OneDrive\\OneDrive - One and Only Furniture Private Limited\\AFC\\Images\\PRODUCT IMAGES',
  targetFolders: ['SEATING IMAGES', 'SOFT SEATING'], // Focus on these high-quality sources
  priceListPdf: 'D:\\OneDrive\\OneDrive - One and Only Furniture Private Limited\\AFC\\Pricelist\\AFC LATEST CHAIR PRICE LIST 2025.pdf',
  outputImageDir: 'public/products/imported',
  outputFile: 'lib/products_imported.ts',
  maxImagesPerProduct: 15
};

// --- Interfaces ---
interface ProductData {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
  category: string;
  related: string[];
}

// --- Helpers ---
const cleanText = (text: string) => text.replace(/\s+/g, ' ').trim();
const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function findProductDirectories(rootDir: string, targetFolders: string[]): { dir: string; category: string }[] {
    const results: { dir: string; category: string }[] = [];
    
    for (const folder of targetFolders) {
        const fullPath = path.join(rootDir, folder);
        if (!fs.existsSync(fullPath)) {
            console.warn(`⚠️ Target folder not found: ${fullPath}`);
            continue;
        }
        
        // In these specific folders, the direct children ARE the products
        const entries = fs.readdirSync(fullPath, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory()) {
                // Heuristic: It's a product if it's in this folder
                results.push({
                    dir: path.join(fullPath, entry.name),
                    category: folder === 'SEATING IMAGES' ? 'Task Chair' : 'Soft Seating'
                });
            }
        }
    }
    return results;
}

// --- Step 2: Parse HTML Backup ---
function parseHtmlMetadata(htmlDir: string): Map<string, Partial<ProductData>> {
    console.log('<html> Parsing HTML Backup...');
    const metadataMap = new Map<string, Partial<ProductData>>();

    if (!fs.existsSync(htmlDir)) {
        console.warn(`⚠️ HTML backup dir not found at: ${htmlDir}`);
        return metadataMap;
    }

    const files = fs.readdirSync(htmlDir).filter((f: string) => f.endsWith('.html'));

    for (const file of files) {
        const filePath = path.join(htmlDir, file);
        const slug = file.replace('.html', '');
        const content = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(content);

        const name = cleanText($('h1.resource-title').text());
        const description = cleanText($('.overview-content-block p.text-regular-a').first().text());
        
        const features: string[] = [];
        $('.feature-content-block').each((_: number, el: any) => {
             const title = cleanText($(el).find('h3').text());
             const desc = cleanText($(el).find('p').text());
             if (title) features.push(`${title}: ${desc}`);
        });

        const specs: { label: string; value: string }[] = [];
        $('.specs-content p').each((_: number, el: any) => {
            const text = cleanText($(el).text());
            const parts = text.split(':');
            if (parts.length >= 2) {
                specs.push({
                    label: parts[0].trim(),
                    value: parts.slice(1).join(':').trim()
                });
            }
        });

        if (name) {
            metadataMap.set(slug, {
                name,
                description,
                features,
                specs
            });
        }
    }

    console.log(`✅ Extracted metadata for ${metadataMap.size} HTML files.`);
    return metadataMap;
}

// --- Step 3: Main Execution ---
async function main() {
    // 1. Load Data
    const metadataMap = parseHtmlMetadata(CONFIG.htmlBackupDir);
    
    // 2. Scan Image Directory
    console.log('📂 Scanning Image Directory...');
    if (!fs.existsSync(CONFIG.imageSourceRoot)) {
        console.error(`❌ Image Source Root not found: ${CONFIG.imageSourceRoot}`);
        return;
    }

    const products: ProductData[] = [];
    const productTargets = findProductDirectories(CONFIG.imageSourceRoot, CONFIG.targetFolders);
    console.log(`🔍 Found ${productTargets.length} products to import.`);

    for (const { dir, category } of productTargets) {
        const originalName = path.basename(dir);
        // Clean name logic: "1-MYEL" -> "Myel"
        const cleanName = originalName.replace(/^\d+[\s-]*|[\s-]*$/g, ''); 
        
        const slug = generateSlug(cleanName);
        
        // --- MATCHING LOGIC ---
        // Try slug, then try cleanName lowercased
        const metadata = metadataMap.get(slug) || metadataMap.get(cleanName.toLowerCase()) || {};

        // --- IMAGE PROCESSING ---
        const productImgDir = path.join(process.cwd(), CONFIG.outputImageDir, slug);
        if (!fs.existsSync(productImgDir)) {
            fs.mkdirSync(productImgDir, { recursive: true });
        }
        
        const imageFiles = fs.readdirSync(dir)
           .filter((f: string) => /\.(jpg|jpeg|png|webp)$/i.test(f))
           // Sort by name to keep numeric order if present
           .sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
           .slice(0, CONFIG.maxImagesPerProduct);

        const importedImages: string[] = [];

        imageFiles.forEach((img: string, index: number) => {
            const ext = path.extname(img);
            const newFileName = `image-${index + 1}${ext}`;
            const srcPath = path.join(dir, img);
            const destPath = path.join(productImgDir, newFileName);
            
            fs.copyFileSync(srcPath, destPath);
            importedImages.push(`/products/imported/${slug}/${newFileName}`);
        });

        const product: ProductData = {
            id: slug,
            slug: slug,
            name: metadata.name || cleanName, // Prefer metadata name, fallback to folder name
            category: category,
            description: metadata.description || 'Experience premium comfort and design with our signature furniture collection.',
            price: 'POA',
            features: metadata.features || [],
            specs: metadata.specs || [],
            images: importedImages,
            related: [] // Empty related products for now
        };
        
        // Fallback for empty features/specs if we have no metadata
        if (product.features.length === 0) {
             product.features = ['Premium Quality', 'Ergonomic Design', 'Durable Construction'];
        }

        products.push(product);
        console.log(`✅ ${slug}: ${product.name} (Img: ${importedImages.length})`);
    }

    // 3. Write Output
    const outputContent = `
import { Product } from './products';

export const importedProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

    fs.writeFileSync(path.join(process.cwd(), CONFIG.outputFile), outputContent);
    console.log(`🎉 Successfully imported ${products.length} products to ${CONFIG.outputFile}`);
}

main().catch(console.error);

import os
import json

def find_images(base_paths):
    extensions = ('.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff')
    found_assets = {}

    for base_path in base_paths:
        if not os.path.exists(base_path):
            continue
        
        for root, dirs, files in os.walk(base_path):
            category = os.path.basename(root)
            for file in files:
                if file.lower().endswith(extensions):
                    full_path = os.path.join(root, file)
                    if category not in found_assets:
                        found_assets[category] = []
                    found_assets[category].append({
                        "name": file,
                        "path": full_path,
                        "size": os.path.getsize(full_path)
                    })
    
    return found_assets

if __name__ == "__main__":
    search_dirs = [
        r"D:\OneDrive\OneDrive - One and Only Furniture Private Limited\AFC\Images\PRODUCT IMAGES\SEATING IMAGES",
        r"C:\My Web Sites\09122025\afcindi.in\afcindia.in"
    ]
    
    assets = find_images(search_dirs)
    print(json.dumps(assets, indent=2))

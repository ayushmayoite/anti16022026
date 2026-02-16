
import { Product } from './products';

export const importedProducts: Product[] = [
  {
    "id": "myel",
    "slug": "myel",
    "name": "Myel",
    "category": "Task Chair",
    "description": "Myel Excellence (Standard) represents the perfect fusion of unparalleled comfort and superior craftsmanship. This version comes without a headrest, offering a clean, unobstructed profile ideal for focused task work in Black and Grey finishes.",
    "price": "POA",
    "features": [
      "No Headrest: Clean profile for active work",
      "Adjustable Seat: 60mm seat depth adjustment",
      "Colors: Available in Black and Grey",
      "Weight Balance Tilt Mechanism: Smooth and effortless reclining"
    ],
    "specs": [
      { "label": "Overall width", "value": "635 ±10 mm" },
      { "label": "Backrest width", "value": "460 ±10 mm" }
    ],
    "images": [
      "/products/imported/myel/no-headrest/image-2.jpg", // Main
      "/products/imported/myel/no-headrest/image-4.png", // BG 1
      "/products/imported/myel/no-headrest/image-6.png", // BG 2
      "/products/imported/myel/no-headrest/image-8.png", // BG 3
      "/products/imported/myel/no-headrest/image-10.jpg", // White 1
      "/products/imported/myel/no-headrest/image-13.jpg", // White 2
      "/products/imported/myel/no-headrest/image-14.jpg"  // White 3
    ],
    "related": ["myel-headrest"],
    "badge": "Bestseller",
    "tagline": "Premium ergonomic support",
    "warranty": "7 Years"
  },
  {
    "id": "myel-headrest",
    "slug": "myel-headrest",
    "name": "Myel with Headrest",
    "category": "Task Chair",
    "description": "Myel Excellence with Headrest. Each chair is meticulously designed to provide the ultimate seating experience, blending luxurious neck support with timeless style. Ideal for long hours and premium offices in Black and Grey.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Personalized neck support",
      "Adjustable Seat: 60mm seat depth adjustment",
      "Colors: Available in Black and Grey",
      "Weight Balance Tilt Mechanism: adapts to your body’s movement"
    ],
    "specs": [
      { "label": "Overall width", "value": "635 ±10 mm" },
      { "label": "Headrest width", "value": "270 ±10 mm" }
    ],
    "images": [
      "/products/imported/myel/with-headrest/image-1.jpg", // Main
      "/products/imported/myel/with-headrest/image-3.png", // BG 1
      "/products/imported/myel/with-headrest/image-5.png", // BG 2
      "/products/imported/myel/with-headrest/image-1.jpg", // BG 3 (Repeated if missing)
      "/products/imported/myel/with-headrest/image-11.jpg", // White 1
      "/products/imported/myel/with-headrest/image-12.jpg", // White 2
      "/products/imported/myel/with-headrest/image-15.jpg"  // White 3
    ],
    "related": ["myel"],
    "badge": "Premium",
    "tagline": "Luxurious support for long hours",
    "warranty": "7 Years"
  },
  {
    "id": "logica",
    "slug": "logica",
    "name": "Logica with Headrest",
    "category": "Task Chair",
    "description": "Logica with Headrest offers the same intelligence with added neck support. Ideal for deep focus and relaxation in Black and White finishes.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Added neck comfort",
      "Synchro Tilt: natural motion",
      "Colors: Black and White options",
      "Lumbar Comfort: reduces tension across your spine"
    ],
    "specs": [
      { "label": "Armrest height", "value": "670 mm" }
    ],
    "images": [
      "/products/imported/logica/image-2.jpg", // Main
      "/products/imported/logica/image-1.jpeg", // BG 1
      "/products/imported/logica/image-3.jpeg", // BG 2
      "/products/imported/logica/image-4.jpeg", // BG 3
      "/products/imported/logica/image-5.jpg", // White 1
      "/products/imported/logica/image-6.jpg", // White 2
      "/products/imported/logica/image-7.webp"  // White 3
    ],
    "related": ["logica-headrest"]
  },
  {
    "id": "logica-headrest",
    "slug": "logica-headrest",
    "name": "Logica",
    "category": "Task Chair",
    "description": "Logica Standard brings balance to your setup in Black Mesh. With user-friendly features and essential support, it's designed for natural motion and simplicity.",
    "price": "POA",
    "features": [
      "No Headrest: Compact and efficient",
      "Synchro Tilt: natural motion",
      "Colors: Black and White options",
      "Lumbar Comfort: reduces tension across your spine"
    ],
    "specs": [
      { "label": "Armrest height", "value": "670 mm" }
    ],
    "images": [
      "/products/imported/logica/image-10.jpg", // Main
      "/products/imported/logica/image-8.webp", // BG 1
      "/products/imported/logica/image-9.jpg", // BG 2
      "/products/imported/logica/image-11.jpg", // BG 3
      "/products/imported/logica/image-12.jpg", // White 1
      "/products/imported/logica/image-13.jpg", // White 2
      "/products/imported/logica/image-14.jpg"  // White 3
    ],
    "related": ["logica"]
  },
  {
    "id": "nuvic",
    "slug": "nuvic",
    "name": "Nuvic",
    "category": "Task Chair",
    "description": "Nuvic Standard is made for motion—combining responsive ergonomics with a clean, modern build in Grey and White Mesh. This version comes without a headrest for a sleeker workspace look.",
    "price": "POA",
    "features": [
      "No Headrest: Streamlined mesh back",
      "Flexible Support: adapts to posture shifts",
      "Colors: Grey and White options",
      "Adjustable Seat: Fine-tune seat depth"
    ],
    "specs": [
      { "label": "Seat height", "value": "450 mm." }
    ],
    "images": [
      "/products/imported/nuvic/image-1.jpg", // Main
      "/products/imported/nuvic/image-2.jpg", // BG 1
      "/products/imported/nuvic/image-3.jpg", // BG 2
      "/products/imported/nuvic/image-4.jpg", // BG 3
      "/products/imported/nuvic/image-5.jpg", // White 1
      "/products/imported/nuvic/image-6.jpg", // White 2
      "/products/imported/nuvic/image-7.jpg"  // White 3
    ],
    "related": ["nuvic-headrest"]
  },
  {
    "id": "nuvic-headrest",
    "slug": "nuvic-headrest",
    "name": "Nuvic with Headrest",
    "category": "Task Chair",
    "description": "Nuvic with Headrest provides the full ergonomic suite with additional cervical support. Perfect for deep focus and executive comfort in Grey and White.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: cervical support",
      "Flexible Support: adapts to posture shifts",
      "Colors: Grey and White options",
      "Adjustable Seat: Fine-tune seat depth"
    ],
    "specs": [
      { "label": "Overall height", "value": "1080 mm" }
    ],
    "images": [
      "/products/imported/nuvic/image-8.jpg", // Main
      "/products/imported/nuvic/image-9.jpg", // BG 1
      "/products/imported/nuvic/image-1.jpg", // BG 2
      "/products/imported/nuvic/image-2.jpg", // BG 3
      "/products/imported/nuvic/image-3.jpg", // White 1
      "/products/imported/nuvic/image-4.jpg", // White 2
      "/products/imported/nuvic/image-5.jpg"  // White 3
    ],
    "related": ["nuvic"]
  },
  {
    "id": "mozio",
    "slug": "mozio",
    "name": "Mozio",
    "category": "Task Chair",
    "description": "Mozio Standard delivers responsive support with a contemporary design in Black Mesh. Ideal for dynamic work environments.",
    "price": "POA",
    "features": [
      "No Headrest: Lightweight design",
      "Breathable Mesh: Promotes airflow",
      "Colors: Black",
      "Ergonomic Design: supports natural spine alignment"
    ],
    "specs": [],
    "images": [
      "/products/imported/mozio/image-1.webp",
      "/products/imported/mozio/image-2.webp",
      "/products/imported/mozio/image-3.jpg",
      "/products/imported/mozio/image-4.jpg",
      "/products/imported/mozio/image-5.jpg",
      "/products/imported/mozio/image-6.jpg",
      "/products/imported/mozio/image-7.jpg"
    ],
    "related": ["mozio-headrest"]
  },
  {
    "id": "mozio-headrest",
    "slug": "mozio-headrest",
    "name": "Mozio with Headrest",
    "category": "Task Chair",
    "description": "Mozio with Headrest adds personalized neck support to its intuitive design. Stay comfortable during long sessions in Black Mesh.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: neck support",
      "Breathable Mesh: Promotes airflow",
      "Colors: Black",
      "Ergonomic Design: supports natural spine alignment"
    ],
    "specs": [],
    "images": [
      "/products/imported/mozio/image-3.jpg",
      "/products/imported/mozio/image-4.jpg",
      "/products/imported/mozio/image-5.jpg",
      "/products/imported/mozio/image-6.jpg",
      "/products/imported/mozio/image-7.jpg",
      "/products/imported/mozio/image-1.webp",
      "/products/imported/mozio/image-2.webp"
    ],
    "related": ["mozio"]
  },
  {
    "id": "breez",
    "slug": "breez",
    "name": "Breez",
    "category": "Task Chair",
    "description": "Breez Standard combines a breathable mesh design with ergonomic support. Its contoured form promotes proper posture in Black and Charcoal finishes.",
    "price": "POA",
    "features": [
      "No Headrest: Lightweight and airy",
      "Colors: Black and Charcoal",
      "Tilt Mechanism: smooth controlled recline"
    ],
    "specs": [],
    "images": [
      "/products/imported/breez/image-1.jpg",
      "/products/imported/breez/image-2.webp",
      "/products/imported/breez/image-3.webp",
      "/products/imported/breez/image-4.jpg",
      "/products/imported/breez/image-5.jpg",
      "/products/imported/breez/image-6.jpg",
      "/products/imported/breez/image-7.jpg"
    ],
    "related": ["breez-headrest"]
  },


  {
    "id": "omnia-headrest",
    "slug": "omnia-headrest",
    "name": "Omnia with Headrest",
    "category": "Task Chair",
    "description": "Omnia embodies understated elegance with refined ergonomic support. Its clean lines and thoughtful adjustability create an uplifting workspace experience for professionals who value both form and function.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Provides personalized neck support for comfort during long sitting sessions",
      "Clean Contemporary Design: Minimal aesthetic with premium materials",
      "Adjustable Lumbar Support: Customizable lower back comfort",
      "Smooth Height Adjustment: Easy positioning for any desk setup"
    ],
    "specs": [],
    "images": [
      "/products/imported/omnia/image-1.webp",
      "/products/imported/omnia/image-2.webp",
      "/products/imported/omnia/image-3.webp",
      "/products/imported/omnia/image-4.webp"
    ],
    "related": []
  },
  {
    "id": "sero",
    "slug": "sero",
    "name": "SERO",
    "category": "Task Chair",
    "description": "Experience premium comfort and design with our signature furniture collection.",
    "price": "POA",
    "features": [
      "Premium Quality",
      "Ergonomic Design",
      "Durable Construction"
    ],
    "specs": [],
    "images": [],
    "related": []
  },
  {
    "id": "xmesh",
    "slug": "xmesh",
    "name": "X-Mesh",
    "category": "Task Chair",
    "description": "The X-Mesh chair is crafted for ultimate comfort with a high quality PU moulded cushion and support that enhances posture and reduces strain.",
    "price": "POA",
    "features": [
      "Recline Smart, Stay Comfortable: The Tilt back mechanism offers smooth, controlled tilting that adapts to your movement, providing continuous support and relaxed comfort throughout the workday",
      "Cool Comfort, Built to Breathe: The breathable mesh and designer X-back enhances airflow and flexibility, keeping you cool while providing comfortable, supportive seating throughout long work hours",
      "Arms That Move With You: The adjustable armrests allow flexible positioning to support natural arm movement, reducing strain and enhancing comfort during long work hours"
    ],
    "specs": [],
    "images": [
      "/products/imported/xmesh/image-1.jpg",
      "/products/imported/xmesh/image-2.jpg",
      "/products/imported/xmesh/image-3.jpg",
      "/products/imported/xmesh/image-4.jpg",
      "/products/imported/xmesh/image-5.jpg",
      "/products/imported/xmesh/image-6.jpg",
      "/products/imported/xmesh/image-7.jpg",
      "/products/imported/xmesh/image-8.jpg"
    ],
    "related": []
  },

  {
    "id": "zino",
    "slug": "zino",
    "name": "Zino",
    "category": "Task Chair",
    "description": "Zino brings modern simplicity to the workspace with its ergonomically shaped seat that offers comfortable support, making it suitable for long hours of use. Designed with contemporary appeal.",
    "price": "POA",
    "features": [
      "Ergonomic Seat Shape: Contoured for natural comfort and support",
      "Modern Clean Design: Fits seamlessly into contemporary workspaces",
      "Durable Construction: Built for extended daily use"
    ],
    "specs": [],
    "images": [
      "/products/imported/zino/image-1.png",
      "/products/imported/zino/image-2.png",
      "/products/imported/zino/image-3.png"
    ],
    "related": []
  },

  {
    "id": "orbit",
    "slug": "orbit",
    "name": "Orbit",
    "category": "Task Chair",
    "description": "The Orbit chair combines ergonomic comfort with advanced functionality, featuring a breathable mesh backrest that promotes airflow and keeps you cool during long sitting hours.",
    "price": "POA",
    "features": [
      "Steady Support, Everyday Comfort: The fixed armrests provide stable, consistent support for the arms, promoting relaxed posture and dependable comfort throughout the workday",
      "Lean Back, Stay Supported: The tilt mechanism feature allows smooth, supportive leaning, adapting naturally to your movement for enhanced comfort during long sitting hours",
      "Stay Cool, Sit Longer: The breathable mesh back promotes continuous airflow, keeping you cool and comfortable even during extended sitting hours"
    ],
    "specs": [],
    "images": [
      "/products/imported/orbit/image-1.jpg",
      "/products/imported/orbit/image-2.jpg",
      "/products/imported/orbit/image-3.jpg",
      "/products/imported/orbit/image-4.jpg",
      "/products/imported/orbit/image-5.jpg",
      "/products/imported/orbit/image-6.jpg",
      "/products/imported/orbit/image-7.jpg",
      "/products/imported/orbit/image-8.jpg"
    ],
    "related": []
  },

  {
    "id": "sway",
    "slug": "sway",
    "name": "Sway",
    "category": "Task Chair",
    "description": "Sway is crafted for those who thrive on fluidity and focus. Its agile design empowers seamless transitions between tasks, offering dependable ease and elegant responsiveness. More than just a chair—it's a rhythm partner for your workday.",
    "price": "POA",
    "features": [
      "Weight Balance Tilt Mechanism: This self-adjusting tilt function senses your body weight and distributes resistance evenly, offering fluid recline that supports your every lean without manual effort",
      "Adjustable Seat: Tailor the seat's depth to match your frame with a smooth-glide adjustment that enhances leg comfort and supports natural posture from hip to knee",
      "Flexible Support: The back structure is designed to bend with your body's micro-movements, maintaining balanced support while promoting freedom and comfort as you shift throughout the day"
    ],
    "specs": [],
    "images": [
      "/products/imported/sway/image-1.jpg",
      "/products/imported/sway/image-2.jpg",
      "/products/imported/sway/image-3.jpg",
      "/products/imported/sway/image-4.jpg",
      "/products/imported/sway/image-5.jpg",
      "/products/imported/sway/image-6.jpg",
      "/products/imported/sway/image-7.jpg",
      "/products/imported/sway/image-8.jpg",
      "/products/imported/sway/image-9.jpg",
      "/products/imported/sway/image-10.jpg",
      "/products/imported/sway/image-11.jpg",
      "/products/imported/sway/image-12.jpg",
      "/products/imported/sway/image-13.jpg",
      "/products/imported/sway/image-14.jpg",
      "/products/imported/sway/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "sway-headrest",
    "slug": "sway-headrest",
    "name": "Sway with Headrest",
    "category": "Task Chair",
    "description": "Sway is crafted for those who thrive on fluidity and focus. Its agile design empowers seamless transitions between tasks, offering dependable ease and elegant responsiveness. More than just a chair—it's a rhythm partner for your workday.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Provides personalized neck support for comfort during long sitting sessions",
      "Weight Balance Tilt Mechanism: This self-adjusting tilt function senses your body weight and distributes resistance evenly, offering fluid recline that supports your every lean without manual effort",
      "Adjustable Seat: Tailor the seat's depth to match your frame with a smooth-glide adjustment that enhances leg comfort and supports natural posture from hip to knee",
      "Flexible Support: The back structure is designed to bend with your body's micro-movements, maintaining balanced support while promoting freedom and comfort as you shift throughout the day"
    ],
    "specs": [],
    "images": [
      "/products/imported/sway/image-1.jpg",
      "/products/imported/sway/image-2.jpg",
      "/products/imported/sway/image-3.jpg",
      "/products/imported/sway/image-4.jpg",
      "/products/imported/sway/image-5.jpg",
      "/products/imported/sway/image-6.jpg",
      "/products/imported/sway/image-7.jpg",
      "/products/imported/sway/image-8.jpg",
      "/products/imported/sway/image-9.jpg",
      "/products/imported/sway/image-10.jpg",
      "/products/imported/sway/image-11.jpg",
      "/products/imported/sway/image-12.jpg",
      "/products/imported/sway/image-13.jpg",
      "/products/imported/sway/image-14.jpg",
      "/products/imported/sway/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "flex",
    "slug": "flex",
    "name": "Flex",
    "category": "Task Chair",
    "description": "Flex offers a streamlined seating experience with essential ergonomic elements. Designed for durability and everyday ease, it delivers consistent support without the need for adjustments—ideal for focused, no-fuss work environments.",
    "price": "POA",
    "features": [
      "Fixed Lumbar Support: An integrated lumbar curve promotes natural lower back alignment, offering steady comfort without the need for adjustment.",
      "Swivel Tilt Mechanism: The tilt function allows for smooth reclining with a locking feature—helping you stay both mobile and balanced during long hours",
      "Fixed Armrest (Chrome Finish): Sturdy, polished armrests provide stable forearm support and add a sleek touch to your workspace."
    ],
    "specs": [
      {
        "label": "Armrest length",
        "value": "280 mm."
      },
      {
        "label": "Seat height till ground",
        "value": "400 mm."
      },
      {
        "label": "Seat base width (including wheels)",
        "value": "540 mm."
      },
      {
        "label": "Overall height",
        "value": "910 mm."
      },
      {
        "label": "Seat width",
        "value": "470 mm."
      },
      {
        "label": "Seat backrest width",
        "value": "420 mm."
      },
      {
        "label": "Armrest height till seat",
        "value": "220 mm."
      }
    ],
    "images": [
      "/products/imported/flex/image-1.jpg",
      "/products/imported/flex/image-2.jpg",
      "/products/imported/flex/image-3.jpg",
      "/products/imported/flex/image-4.jpg",
      "/products/imported/flex/image-5.jpg",
      "/products/imported/flex/image-6.jpg",
      "/products/imported/flex/image-7.jpg",
      "/products/imported/flex/image-8.jpg",
      "/products/imported/flex/image-9.jpg",
      "/products/imported/flex/image-10.jpg",
      "/products/imported/flex/image-11.jpg",
      "/products/imported/flex/image-12.jpg",
      "/products/imported/flex/image-13.jpg",
      "/products/imported/flex/image-14.jpg",
      "/products/imported/flex/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "toro",
    "slug": "toro",
    "name": "Toro",
    "category": "Task Chair",
    "description": "Toro combines strength with refined ergonomics, providing dependable support for a focused work environment. Its contoured backrest and responsive tilt system offer lasting comfort throughout demanding workdays.",
    "price": "POA",
    "features": [
      "Ergonomic Lumbar Support: Integrated lumbar curve promotes healthy spine alignment",
      "Breathable Mesh Back: Promotes airflow for cool, comfortable seating",
      "Height Adjustable Armrests: Customizable arm positioning reduces shoulder strain"
    ],
    "specs": [],
    "images": [
      "/products/imported/toro/image-1.jpg",
      "/products/imported/toro/image-2.jpg",
      "/products/imported/toro/image-3.jpg",
      "/products/imported/toro/image-4.jpg"
    ],
    "related": []
  },
  {
    "id": "phoenix",
    "slug": "phoenix",
    "name": "Phoenix",
    "category": "Task Chair",
    "description": "Phoenix is designed to energize your workflow with refined support and adaptive comfort. Every detail is engineered to promote a focused, upright experience—whether you're deep in thought or on the move.",
    "price": "POA",
    "features": [
      "Adjustable Seat: Customize the seat depth to suit your leg length, enhancing circulation and comfort throughout extended sitting periods",
      "Synchro Tilt Mechanism: The synchro tilt system allows the seat and back to move in harmony, encouraging natural posture changes and smooth recline transitions"
    ],
    "specs": [],
    "images": [
      "/products/imported/phoenix/image-13.jpg",
      "/products/imported/phoenix/image-14.jpg",
      "/products/imported/phoenix/image-15.jpg",
      "/products/imported/phoenix/image-12.jpg"
    ],
    "related": []
  },
  {
    "id": "phoenix-headrest",
    "slug": "phoenix-headrest",
    "name": "Phoenix with Headrest",
    "category": "Task Chair",
    "description": "Phoenix is designed to energize your workflow with refined support and adaptive comfort. Every detail is engineered to promote a focused, upright experience—whether you're deep in thought or on the move.",
    "price": "POA",
    "features": [
      "Flexible Support Headrest: A responsive headrest adjusts to your preferred height and tilt, offering steady neck support and helping you stay relaxed through every task",
      "Adjustable Seat: Customize the seat depth to suit your leg length, enhancing circulation and comfort throughout extended sitting periods",
      "Synchro Tilt Mechanism: The synchro tilt system allows the seat and back to move in harmony, encouraging natural posture changes and smooth recline transitions"
    ],
    "specs": [],
    "images": [
      "/products/imported/phoenix/image-1.jpg",
      "/products/imported/phoenix/image-2.jpg",
      "/products/imported/phoenix/image-3.jpg",
      "/products/imported/phoenix/image-4.jpg",
      "/products/imported/phoenix/image-5.jpg",
      "/products/imported/phoenix/image-6.jpg",
      "/products/imported/phoenix/image-7.jpg",
      "/products/imported/phoenix/image-8.jpg",
      "/products/imported/phoenix/image-9.jpg",
      "/products/imported/phoenix/image-10.jpg",
      "/products/imported/phoenix/image-11.jpg"
    ],
    "related": []
  },
  {
    "id": "fluid",
    "slug": "fluid",
    "name": "Fluid",
    "category": "Task Chair",
    "description": "Fluid is designed to keep you in motion without distraction. With intuitive ergonomics and responsive adjustments, it supports your body through every shift in task—offering ease, balance, and lasting comfort.",
    "price": "POA",
    "features": [
      "Ergonomic Support: Engineered with a dynamic back and supportive frame, Fluid promotes natural posture while adapting to your movements",
      "Adjustable Seat: Fine-tune seat depth for optimal leg support, enhancing comfort and encouraging better circulation during long hours",
      "Auto Weight Sensing Tilt Mechanism: This smart recline system adjusts automatically to your body weight, offering balanced resistance without manual settings"
    ],
    "specs": [],
    "images": [
      "/products/imported/fluid/image-1.jpg",
      "/products/imported/fluid/image-2.jpg",
      "/products/imported/fluid/image-3.jpg",
      "/products/imported/fluid/image-4.jpg",
      "/products/imported/fluid/image-5.jpg",
      "/products/imported/fluid/image-6.jpg",
      "/products/imported/fluid/image-7.jpg",
      "/products/imported/fluid/image-8.jpg",
      "/products/imported/fluid/image-9.jpg",
      "/products/imported/fluid/image-10.jpg",
      "/products/imported/fluid/image-11.jpg",
      "/products/imported/fluid/image-12.jpg",
      "/products/imported/fluid/image-13.jpg",
      "/products/imported/fluid/image-14.jpg",
      "/products/imported/fluid/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "fluid-headrest",
    "slug": "fluid-headrest",
    "name": "Fluid with Headrest",
    "category": "Task Chair",
    "description": "Fluid is designed to keep you in motion without distraction. With intuitive ergonomics and responsive adjustments, it supports your body through every shift in task—offering ease, balance, and lasting comfort.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Provides personalized neck support for comfort during long sitting sessions",
      "Ergonomic Support: Engineered with a dynamic back and supportive frame, Fluid promotes natural posture while adapting to your movements",
      "Adjustable Seat: Fine-tune seat depth for optimal leg support, enhancing comfort and encouraging better circulation during long hours",
      "Auto Weight Sensing Tilt Mechanism: This smart recline system adjusts automatically to your body weight, offering balanced resistance without manual settings"
    ],
    "specs": [],
    "images": [
      "/products/imported/fluid/image-1.jpg",
      "/products/imported/fluid/image-2.jpg",
      "/products/imported/fluid/image-3.jpg",
      "/products/imported/fluid/image-4.jpg",
      "/products/imported/fluid/image-5.jpg",
      "/products/imported/fluid/image-6.jpg",
      "/products/imported/fluid/image-7.jpg",
      "/products/imported/fluid/image-8.jpg",
      "/products/imported/fluid/image-9.jpg",
      "/products/imported/fluid/image-10.jpg",
      "/products/imported/fluid/image-11.jpg",
      "/products/imported/fluid/image-12.jpg",
      "/products/imported/fluid/image-13.jpg",
      "/products/imported/fluid/image-14.jpg",
      "/products/imported/fluid/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "fluid-x",
    "slug": "fluid-x",
    "name": "Fluid X",
    "category": "Task Chair",
    "description": "Experience premium comfort and design with our signature furniture collection.",
    "price": "POA",
    "features": [
      "Premium Quality",
      "Ergonomic Design",
      "Durable Construction"
    ],
    "specs": [],
    "images": [
      "/products/imported/fluid-x/image-1.jpg",
      "/products/imported/fluid-x/image-2.jpg",
      "/products/imported/fluid-x/image-3.jpg",
      "/products/imported/fluid-x/image-4.jpg",
      "/products/imported/fluid-x/image-5.jpg",
      "/products/imported/fluid-x/image-6.jpg",
      "/products/imported/fluid-x/image-7.jpg",
      "/products/imported/fluid-x/image-8.jpg",
      "/products/imported/fluid-x/image-9.jpg",
      "/products/imported/fluid-x/image-10.jpg",
      "/products/imported/fluid-x/image-11.jpg",
      "/products/imported/fluid-x/image-12.jpg",
      "/products/imported/fluid-x/image-13.jpg",
      "/products/imported/fluid-x/image-14.jpg",
      "/products/imported/fluid-x/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "spino",
    "slug": "spino",
    "name": "Spino",
    "category": "Task Chair",
    "description": "Spino is crafted for those who prioritize alignment without sacrificing ease. With posture-enhancing features and thoughtful adjustability, it encourages upright sitting while letting you move naturally through the day.",
    "price": "POA",
    "features": [
      "Adjustable Seat: The seat depth can be tailored to your leg length, promoting even weight distribution and all-day sitting comfort",
      "Weight Balance Tilt Mechanism: Spino features a tilt system that encourages micro-movements, helping you stay mobile and supported while working or reclining"
    ],
    "specs": [],
    "images": [
      "/products/imported/spino/image-1.jpg",
      "/products/imported/spino/image-2.jpg",
      "/products/imported/spino/image-3.jpg",
      "/products/imported/spino/image-4.jpg",
      "/products/imported/spino/image-5.jpg",
      "/products/imported/spino/image-6.jpg",
      "/products/imported/spino/image-7.jpg",
      "/products/imported/spino/image-8.jpg",
      "/products/imported/spino/image-9.jpg",
      "/products/imported/spino/image-10.jpg",
      "/products/imported/spino/image-11.jpg",
      "/products/imported/spino/image-12.jpg",
      "/products/imported/spino/image-13.jpg",
      "/products/imported/spino/image-14.jpg",
      "/products/imported/spino/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "spino-headrest",
    "slug": "spino-headrest",
    "name": "Spino with Headrest",
    "category": "Task Chair",
    "description": "Spino is crafted for those who prioritize alignment without sacrificing ease. With posture-enhancing features and thoughtful adjustability, it encourages upright sitting while letting you move naturally through the day.",
    "price": "POA",
    "features": [
      "Head Support: The adjustable headrest offers steady upper-back and neck support, making it easier to stay upright without fatigue",
      "Adjustable Seat: The seat depth can be tailored to your leg length, promoting even weight distribution and all-day sitting comfort",
      "Weight Balance Tilt Mechanism: Spino features a tilt system that encourages micro-movements, helping you stay mobile and supported while working or reclining"
    ],
    "specs": [],
    "images": [
      "/products/imported/spino/image-1.jpg",
      "/products/imported/spino/image-2.jpg",
      "/products/imported/spino/image-3.jpg",
      "/products/imported/spino/image-4.jpg",
      "/products/imported/spino/image-5.jpg",
      "/products/imported/spino/image-6.jpg",
      "/products/imported/spino/image-7.jpg",
      "/products/imported/spino/image-8.jpg",
      "/products/imported/spino/image-9.jpg",
      "/products/imported/spino/image-10.jpg",
      "/products/imported/spino/image-11.jpg",
      "/products/imported/spino/image-12.jpg",
      "/products/imported/spino/image-13.jpg",
      "/products/imported/spino/image-14.jpg",
      "/products/imported/spino/image-15.jpg"
    ],
    "related": []
  },
  {
    "id": "revoq",
    "slug": "revoq",
    "name": "Revoq",
    "category": "Task Chair",
    "description": "Revoq brings dynamic support to the modern workspace. With fluid adjustability and a responsive build, it encourages better movement, upright posture, and day-long ease—no matter how your workflow shifts.",
    "price": "POA",
    "features": [
      "Back Support: A responsive back structure flexes gently with your movements, offering consistent support without stiffness or restriction",
      "Adjustable Seat: Revoq's sliding seat allows for leg-length customization, helping improve circulation and reduce lower-body pressure",
      "Synchro Tilt Mechanism: This synchronized recline system lets the seat and backrest move in harmony, encouraging natural posture changes with minimal effort"
    ],
    "specs": [],
    "images": [
      "/products/imported/revoq/image-1.jpg",
      "/products/imported/revoq/image-2.jpg",
      "/products/imported/revoq/image-3.jpg",
      "/products/imported/revoq/image-4.jpg",
      "/products/imported/revoq/image-5.jpg",
      "/products/imported/revoq/image-6.jpg",
      "/products/imported/revoq/image-7.jpg"
    ],
    "related": []
  },
  {
    "id": "revoq-headrest",
    "slug": "revoq-headrest",
    "name": "Revoq with Headrest",
    "category": "Task Chair",
    "description": "Revoq brings dynamic support to the modern workspace. With fluid adjustability and a responsive build, it encourages better movement, upright posture, and day-long ease—no matter how your workflow shifts.",
    "price": "POA",
    "features": [
      "Adjustable Headrest: Provides personalized neck support for comfort during long sitting sessions",
      "Back Support: A responsive back structure flexes gently with your movements, offering consistent support without stiffness or restriction",
      "Adjustable Seat: Revoq's sliding seat allows for leg-length customization, helping improve circulation and reduce lower-body pressure",
      "Synchro Tilt Mechanism: This synchronized recline system lets the seat and backrest move in harmony, encouraging natural posture changes with minimal effort"
    ],
    "specs": [],
    "images": [
      "/products/imported/revoq/image-1.jpg",
      "/products/imported/revoq/image-2.jpg",
      "/products/imported/revoq/image-3.jpg",
      "/products/imported/revoq/image-4.jpg",
      "/products/imported/revoq/image-5.jpg",
      "/products/imported/revoq/image-6.jpg",
      "/products/imported/revoq/image-7.jpg"
    ],
    "related": []
  },
  {
    "id": "rock",
    "slug": "rock",
    "name": "Rock",
    "category": "Task Chair",
    "description": "Rock is built for flexibility—designed to follow your posture, respond to your movements, and keep your body aligned throughout the day. Whether you're leaning in or reclining back, Rock adjusts in all the right places.",
    "price": "POA",
    "features": [
      "Adjustable Backrest Swing: The backrest's swing function allows a smooth, responsive recline that encourages movement while maintaining balanced support",
      "Lumbar Support Adjustment: Fine-tune the lumbar zone to match your lower back curve, providing personalized support where you need it most"
    ],
    "specs": [],
    "images": [
      "/products/imported/rock/image-5.jpg",
      "/products/imported/rock/image-6.jpg",
      "/products/imported/rock/image-7.jpg",
      "/products/imported/rock/image-8.jpg",
      "/products/imported/rock/image-9.jpg"
    ],
    "related": []
  },
  {
    "id": "rock-headrest",
    "slug": "rock-headrest",
    "name": "Rock with Headrest",
    "category": "Task Chair",
    "description": "Rock is built for flexibility—designed to follow your posture, respond to your movements, and keep your body aligned throughout the day. Whether you're leaning in or reclining back, Rock adjusts in all the right places.",
    "price": "POA",
    "features": [
      "Flexible Headrest: The headrest adapts in both height and angle—offering reliable neck support whether you're upright or leaning back",
      "Adjustable Backrest Swing: The backrest's swing function allows a smooth, responsive recline that encourages movement while maintaining balanced support",
      "Lumbar Support Adjustment: Fine-tune the lumbar zone to match your lower back curve, providing personalized support where you need it most"
    ],
    "specs": [],
    "images": [
      "/products/imported/rock/image-1.jpg",
      "/products/imported/rock/image-2.jpg",
      "/products/imported/rock/image-3.jpg",
      "/products/imported/rock/image-4.jpg"
    ],
    "related": []
  },
  {
    "id": "sullion",
    "slug": "sullion",
    "name": "Sullion",
    "category": "Task Chair",
    "description": "Sullion blends minimal design with essential ergonomic features to support the way you work. Whether you're leaning in or kicking back, it delivers the right balance of structure and softness—keeping you at ease without overcomplication.",
    "price": "POA",
    "features": [
      "Adjustable Seat: Fine-tune the seat depth to suit your leg length and posture—helping maintain comfort and proper circulation during extended use",
      "Synchro Tilt Single Lock Mechanism: The seat and backrest recline together in a synchronized motion, encouraging movement while keeping you well-balanced at every angle"
    ],
    "specs": [],
    "images": [
      "/products/imported/sullion/image-8.png",
      "/products/imported/sullion/image-9.jpg",
      "/products/imported/sullion/image-10.jpg",
      "/products/imported/sullion/image-11.jpg",
      "/products/imported/sullion/image-12.jpg",
      "/products/imported/sullion/image-13.png",
      "/products/imported/sullion/image-14.png"
    ],
    "related": []
  },
  {
    "id": "sullion-headrest",
    "slug": "sullion-headrest",
    "name": "Sullion with Headrest",
    "category": "Task Chair",
    "description": "Sullion blends minimal design with essential ergonomic features to support the way you work. Whether you're leaning in or kicking back, it delivers the right balance of structure and softness—keeping you at ease without overcomplication.",
    "price": "POA",
    "features": [
      "Flexible Support: The headrest responds gently to your movements, providing consistent support without stiffness or resistance",
      "Adjustable Seat: Fine-tune the seat depth to suit your leg length and posture—helping maintain comfort and proper circulation during extended use",
      "Synchro Tilt Single Lock Mechanism: The seat and backrest recline together in a synchronized motion, encouraging movement while keeping you well-balanced at every angle"
    ],
    "specs": [],
    "images": [
      "/products/imported/sullion/image-1.webp",
      "/products/imported/sullion/image-2.webp",
      "/products/imported/sullion/image-3.webp",
      "/products/imported/sullion/image-4.webp",
      "/products/imported/sullion/image-5.webp",
      "/products/imported/sullion/image-6.webp",
      "/products/imported/sullion/image-7.webp"
    ],
    "related": []
  },
  {
    "id": "collaborative",
    "slug": "collaborative",
    "name": "COLLABORATIVE",
    "category": "Soft Seating",
    "description": "Experience premium comfort and design with our signature furniture collection.",
    "price": "POA",
    "features": [
      "Premium Quality",
      "Ergonomic Design",
      "Durable Construction"
    ],
    "specs": [],
    "images": [],
    "related": []
  },
  {
    "id": "lounge",
    "slug": "lounge",
    "name": "LOUNGE",
    "category": "Soft Seating",
    "description": "Experience premium comfort and design with our signature furniture collection.",
    "price": "POA",
    "features": [
      "Premium Quality",
      "Ergonomic Design",
      "Durable Construction"
    ],
    "specs": [],
    "images": [],
    "related": []
  }
];

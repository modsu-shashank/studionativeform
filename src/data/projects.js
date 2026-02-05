const projectsData = [
    {
        _id: '1',
        title: 'Mr. Kiran Cafe',
        category: 'Architecture',
        subcategory: 'Commercial',
        description: 'A vibrant and modern cafe designed to offer a unique social experience. The space features an open layout with a mix of industrial and organic elements, creating a warm and inviting atmosphere for coffee enthusiasts.',
        shortDescription: 'Modern cafe with industrial-organic design',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
                caption: 'Cafe interior with natural lighting',
                isPrimary: true
            }
        ],
        year: 2024,
        location: 'Hyderabad, Telangana',
        area: '1,200 sq ft',
        client: 'Mr. Kiran',
        featured: true,
        status: 'Completed',
        tags: ['Commercial', 'Cafe', 'Modern']
    },
    {
        _id: '2',
        title: "Mr. Hari Krishna Reddy's Residence",
        category: 'Architecture',
        subcategory: 'Residential',
        description: "A luxury private residence that emphasizes grandeur and contemporary elegance. The architectural design focuses on large volumetric spaces, premium finishes, and a seamless flow between the interior and landscaped courtyards.",
        shortDescription: 'Luxury contemporary residence with elegant courtyards',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
                caption: 'Modern residential elevation',
                isPrimary: true
            }
        ],
        year: 2023,
        location: 'Hyderabad, Telangana',
        area: '6,000 sq ft',
        client: 'Mr. Hari Krishna Reddy',
        featured: true,
        status: 'Completed',
        tags: ['Residential', 'Luxury', 'Contemporary']
    },
    {
        _id: '3',
        title: 'Mr. Ramireddy Farmhouse',
        category: 'Architecture',
        subcategory: 'Residential',
        description: 'A serene farmhouse retreat that harmonizes with its natural surroundings. The design utilizes traditional materials with a modern twist, featuring wide sit-outs and expansive landscaping that offer a perfect escape from city life.',
        shortDescription: 'Modern farmhouse retreat in nature',
        images: [
            {
                url: 'https://imgs.search.brave.com/MabsDkpvKrAJH5f7VOitxVQ0NgF5nmm20sya9Hljypw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyMi81/L1lVL1FOL0dXLzE1/MTYzMjkxNi9wcm9k/dWN0LWpwZWctNTAw/eDUwMC5qcGc',
                caption: 'Farmhouse nestled in greenery',
                isPrimary: true
            }
        ],
        year: 2024,
        location: 'Hyderabad, Telangana',
        area: '3,500 sq ft',
        client: 'Mr. Ramireddy',
        featured: true,
        status: 'Completed',
        tags: ['Residential', 'Farmhouse', 'Landscaping']
    },
    {
        _id: '4',
        title: 'Mr. Srinivas Interiors 3BHK',
        category: 'Interiors',
        subcategory: 'Residential',
        description: 'A thoughtfully designed 3BHK apartment interior that maximizes space and comfort. The design features a modern-minimalist palette with custom-made furniture and smart storage solutions, tailored to the family\'s lifestyle.',
        shortDescription: 'Modern-minimalist 3BHK apartment interior',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
                caption: 'Living room with custom cabinetry',
                isPrimary: true
            }
        ],
        year: 2023,
        location: 'Hyderabad, Telangana',
        area: '1,800 sq ft',
        client: 'Mr. Srinivas',
        featured: true,
        status: 'Completed',
        tags: ['Interior', 'Residential', '3BHK']
    },
    {
        _id: '5',
        title: 'Mr. Rohith NCC Urban 4BHK',
        category: 'Interiors',
        subcategory: 'Residential',
        description: 'An upscale 4BHK residential interior project at NCC Urban. The design reflects a premium lifestyle with sophisticated material finishes, elegant lighting design, and a cohesive aesthetic across all living quarters.',
        shortDescription: 'Premium 4BHK interior design at NCC Urban',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
                caption: 'Dining area with premium finishes',
                isPrimary: true
            }
        ],
        year: 2025,
        location: 'Hyderabad, Telangana',
        area: '2,800 sq ft',
        client: 'Mr. Rohith',
        featured: true,
        status: 'In Progress',
        tags: ['Interior', 'Residential', 'Luxury']
    },
    {
        _id: '6',
        title: 'Rooftop Garden Oasis',
        category: 'Landscaping',
        subcategory: 'Outdoor',
        description: 'A lush rooftop garden that transforms unused space into a vibrant urban oasis. The design includes native plants, sustainable irrigation, and comfortable seating areas for residents to enjoy.',
        shortDescription: 'Urban rooftop garden with native plantings',
        images: [
            {
                url: '/images/rooftop-garden.webp',
                caption: 'Rooftop garden with city views',
                isPrimary: true
            }
        ],
        year: 2022,
        location: 'Hyderabad, Telangana',
        area: '3,200 sq ft',
        client: 'Residential Building',
        featured: true,
        status: 'Completed',
        tags: ['Rooftop', 'Urban', 'Sustainable']
    },
    {
        _id: '7',
        title: 'Boutique Hotel Interior',
        category: 'Interiors',
        subcategory: 'Commercial',
        description: 'An intimate boutique hotel interior that combines luxury with local character. Each space tells a story through carefully selected materials, custom furniture, and artwork from local artisans.',
        shortDescription: 'Luxury boutique hotel with local character',
        images: [
            {
                url: '/images/boutique-hotel.webp',
                caption: 'Hotel lobby with custom furnishings',
                isPrimary: true
            }
        ],
        year: 2023,
        location: 'Hyderabad, Telangana',
        area: '8,500 sq ft',
        client: 'Hospitality Group',
        featured: false,
        status: 'Completed',
        tags: ['Hospitality', 'Boutique', 'Luxury']
    },
    {
        _id: '8',
        title: 'Corporate Office Headquarters',
        category: 'Architecture',
        subcategory: 'Commercial',
        description: 'A state-of-the-art corporate headquarters designed to foster collaboration and innovation. The building features flexible workspaces, abundant natural light, green terraces, and advanced sustainable systems.',
        shortDescription: 'Innovative corporate headquarters with sustainable design',
        images: [
            {
                url: '/images/corporate-office.webp',
                caption: 'Modern office building with glass facade',
                isPrimary: true
            }
        ],
        year: 2025,
        location: 'Hyderabad, Telangana',
        area: '45,000 sq ft',
        client: 'Tech Corporation',
        featured: false,
        status: 'Completed',
        tags: ['Commercial', 'Office', 'Sustainable']
    },
    {
        _id: '9',
        title: 'Zen Garden Landscape',
        category: 'Landscaping',
        subcategory: 'Garden',
        description: 'A tranquil Japanese-inspired garden that creates a peaceful retreat in an urban setting. The design incorporates traditional elements like stone pathways, water features, and carefully pruned plants to promote meditation and contemplation.',
        shortDescription: 'Japanese-inspired urban garden retreat',
        images: [
            {
                url: '/images/zen-garden.webp',
                caption: 'Serene garden with traditional Japanese elements',
                isPrimary: true
            }
        ],
        year: 2021,
        location: 'Hyderabad, Telangana',
        area: '1,800 sq ft',
        client: 'Private Client',
        featured: false,
        status: 'Completed',
        tags: ['Landscape', 'Garden', 'Zen']
    },
    {
        _id: '10',
        title: 'Urban Loft Interior',
        category: 'Interiors',
        subcategory: 'Residential',
        description: 'A sophisticated urban loft transformation that celebrates industrial heritage while introducing contemporary comfort. Exposed brick, steel beams, and concrete floors are balanced with warm wood tones and carefully curated furnishings.',
        shortDescription: 'Industrial-chic loft with contemporary comfort',
        images: [
            {
                url: '/images/urban-loft.webp',
                caption: 'Living area with industrial elements and modern furnishings',
                isPrimary: true
            }
        ],
        year: 2023,
        location: 'Hyderabad, Telangana',
        area: '2,200 sq ft',
        client: 'Private Client',
        featured: false,
        status: 'Completed',
        tags: ['Interior', 'Loft', 'Industrial']
    },
    {
        _id: '11',
        title: 'Modern Villa Residence',
        category: 'Architecture',
        subcategory: 'Residential',
        description: 'A contemporary villa that seamlessly blends indoor and outdoor living spaces. The design emphasizes natural light, open floor plans, and sustainable materials. Floor-to-ceiling windows frame stunning views while maintaining privacy through strategic landscaping.',
        shortDescription: 'Contemporary villa with seamless indoor-outdoor integration',
        images: [
            {
                url: '/images/modern-villa.webp',
                caption: 'Front elevation showcasing clean lines and modern aesthetics',
                isPrimary: true
            }
        ],
        year: 2024,
        location: 'Hyderabad, Telangana',
        area: '4,500 sq ft',
        client: 'Private Client',
        featured: true,
        status: 'Completed',
        tags: ['Residential', 'Modern', 'Sustainable']
    },
    {
        _id: '12',
        title: 'Studio Native Form Hub',
        category: 'Architecture',
        subcategory: 'Commercial',
        description: 'Our own studio headquarters designed to showcase our design philosophy. A mix of raw materials, functional workspaces, and interactive design zones.',
        shortDescription: 'The creative heart of Studio Native Form',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
                caption: 'Main collaborative workspace',
                isPrimary: true
            }
        ],
        year: 2025,
        location: 'Hyderabad, Telangana',
        area: '2,500 sq ft',
        client: 'Studio Native Form',
        featured: true,
        status: 'Completed',
        tags: ['Architecture', 'Studio', 'Creative']
    }
];

export default projectsData;

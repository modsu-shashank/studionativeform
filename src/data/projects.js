const projectsData = [
    {
        _id: '1',
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
        location: 'Los Angeles, CA',
        area: '4,500 sq ft',
        client: 'Private Client',
        featured: true,
        status: 'Completed',
        tags: ['Residential', 'Modern', 'Sustainable']
    },
    {
        _id: '2',
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
        location: 'Brooklyn, NY',
        area: '2,200 sq ft',
        client: 'Private Client',
        featured: true,
        status: 'Completed',
        tags: ['Interior', 'Loft', 'Industrial']
    },
    {
        _id: '3',
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
        year: 2024,
        location: 'San Francisco, CA',
        area: '1,800 sq ft',
        client: 'Private Client',
        featured: true,
        status: 'Completed',
        tags: ['Landscape', 'Garden', 'Zen']
    },
    {
        _id: '4',
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
        year: 2023,
        location: 'Seattle, WA',
        area: '45,000 sq ft',
        client: 'Tech Corporation',
        featured: false,
        status: 'Completed',
        tags: ['Commercial', 'Office', 'Sustainable']
    },
    {
        _id: '5',
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
        year: 2024,
        location: 'Charleston, SC',
        area: '8,500 sq ft',
        client: 'Hospitality Group',
        featured: false,
        status: 'Completed',
        tags: ['Hospitality', 'Boutique', 'Luxury']
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
        year: 2023,
        location: 'Chicago, IL',
        area: '3,200 sq ft',
        client: 'Residential Building',
        featured: false,
        status: 'Completed',
        tags: ['Rooftop', 'Urban', 'Sustainable']
    }
];

export default projectsData;

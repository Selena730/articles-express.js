const pgp = require('pg-promise')();
const db = pgp('postgres://selenahawamdeh:@localhost:5432/nodejs');

async function seedDatabase() {
    try {
        await db.none(`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        tagline TEXT,
        summary JSON,
        category VARCHAR(100),
        published_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

        const articles = [
            {
                title: "Cleaning 101",
                tagline: "Never mix cleaning products. This may cause harmful gases",
                summary: [
                    "Wash your hands with soap and running water after playing with or petting your pet.",
                    "Wear gloves and long sleeves if you must handle animals with ringworm, and always wash your hands after handling the animal.",
                    "Vacuum the areas of the home that the infected pet commonly visits. This will help to remove infected fur or flakes of skin.",
                    "Disinfect areas the pet has spent time in, including surfaces and bedding.",
                    "The spores of this fungus can be killed with common disinfectants like diluted chlorine bleach (1/4 c per gallon water), benzalkonium chloride, or strong detergents.",
                    "Never mix cleaning products. This may cause harmful gases.",
                    "Do not handle animals with ringworm if your immune system is weak in any way (if you have HIV/AIDS, are undergoing cancer treatment, or are taking medications that suppress the immune system, for example)."
                ],
                category: "cleaning"
            },
            {
                title: "Treatment for Ringworm",
                tagline: "There are many non-prescription products available to treat ringworm.",
                summary: [
                    "The treatment for ringworm depends on its location on the body and how serious the infection is.",
                    "Some forms of ringworm can be treated with non-prescription (“over-the-counter”) medications, but other forms of ringworm need treatment with prescription antifungal medication."
                ],
                category: "medical"
            },
            {
                title: "About Ringworm",
                tagline: "The infection is called “ringworm” because it can cause an itchy, red, circular rash.",
                summary: [
                    "Ringworm is a common infection of the skin and nails that is caused by fungus.",
                    "The infection is called “ringworm” because it can cause an itchy, red, circular rash.",
                    "Ringworm is also called “tinea” or “dermatophytosis.”",
                    "The different types of ringworm are usually named for the location of the infection on the body."
                ],
                category: "general"
            },
            {
                title: "Alternative Cleaning Solutions",
                tagline: "Consider alternatives to bleach for cleaning.",
                summary: [
                    "Alternative to bleach is accelerated hydrogen peroxide.",
                    "Brand to purchase is Rescue.",
                    "Accelerated hydrogen peroxide is less corrosive and safer to use than bleach.",
                    "It is effective against a broad spectrum of pathogens, including viruses, bacteria, and fungi.",
                    "Rescue is a trusted brand used in veterinary and animal care settings.",
                    "It breaks down into water and oxygen, making it environmentally friendly.",
                    "Accelerated hydrogen peroxide requires less contact time than bleach to be effective.",
                    "Rescue products are available in various forms, including wipes, sprays, and concentrates."
                ],
                category: "cleaning"
            },
            {
                title: "Cleaning Your Home After a Ringworm Diagnosis",
                tagline: "Ensure thorough cleaning to prevent the spread of ringworm.",
                summary: [
                    "Start by vacuuming all carpets, rugs, and upholstered furniture to remove hair and skin flakes.",
                    "Wash all bedding, including pet bedding, in hot water and use a high-heat dryer setting.",
                    "Mop hard floors with a disinfectant solution effective against ringworm spores.",
                    "Wipe down surfaces with a solution of diluted chlorine bleach (1/4 cup per gallon of water) or another effective disinfectant.",
                    "Pay special attention to areas where pets spend a lot of time, such as their bedding areas and favorite spots.",
                    "Regularly clean and disinfect pet grooming tools and equipment.",
                    "Dispose of vacuum bags and cleaning cloths immediately after use to prevent recontamination.",
                    "If possible, restrict pets to easy-to-clean areas of the home until the infection is fully resolved."
                ],
                category: "cleaning"
            },
            {
                title: "General Information About Ringworm in Pets",
                tagline: "Understanding ringworm in pets can help in early detection and treatment.",
                summary: [
                    "Ringworm is a fungal infection that can affect the skin, hair, and nails of pets.",
                    "It is highly contagious and can spread through direct contact with an infected animal or contaminated objects.",
                    "Common symptoms include circular, hairless patches of skin that may appear red and scaly.",
                    "Kittens, puppies, and animals with weakened immune systems are more susceptible to ringworm.",
                    "Diagnosis typically involves a physical examination and may include fungal cultures or microscopic examination of hair samples.",
                    "Treatment options vary but often include antifungal shampoos, creams, and oral medications.",
                    "Environmental cleaning is crucial to prevent the spread of ringworm in households with infected pets.",
                    "Owners should handle infected animals with care and practice good hygiene to avoid contracting the infection."
                ],
                category: "general"
            },
            {
                title: "Understanding Ringworm",
                tagline: "Ringworm is a common fungal infection affecting skin, hair, and nails.",
                summary: [
                    "Ringworm is not caused by a worm but by a group of fungi known as dermatophytes.",
                    "It can affect both humans and animals, spreading through direct contact with infected individuals or contaminated surfaces.",
                    "Symptoms typically include a red, circular, itchy rash with a clearer center.",
                    "In pets, ringworm often appears as patches of hair loss with a crusty covering.",
                    "Diagnosis is usually done through a physical examination and may include fungal culture or microscopic examination.",
                    "Treatment involves antifungal medications, which can be topical or oral depending on the severity and location of the infection.",
                    "Preventive measures include maintaining good hygiene, regularly cleaning living environments, and avoiding contact with infected animals or people.",
                    "Early detection and treatment are crucial to prevent the spread of ringworm to other pets and humans."
                ],
                category: "general"
            },
            {
                title: "Common Misconceptions About Ringworm",
                tagline: "Debunking myths about ringworm to ensure proper understanding and treatment.",
                summary: [
                    "Misconception: Ringworm is caused by a worm. Fact: Ringworm is actually a fungal infection, not caused by a worm.",
                    "Misconception: Only dirty or unclean environments cause ringworm. Fact: Ringworm can occur in clean environments and affect anyone, regardless of hygiene.",
                    "Misconception: Ringworm is only contagious when symptoms are visible. Fact: Ringworm can be contagious even before symptoms appear.",
                    "Misconception: Pets cannot get ringworm from humans. Fact: Both humans and pets can transmit ringworm to each other.",
                    "Misconception: Ringworm always causes a ring-shaped rash. Fact: While the classic ring-shaped rash is common, ringworm can present in various ways, including red, scaly patches.",
                    "Misconception: Over-the-counter treatments are always effective. Fact: Some cases of ringworm may require prescription medications for proper treatment.",
                    "Misconception: Once treated, ringworm cannot recur. Fact: Ringworm can recur, especially if preventive measures are not followed."
                ],
                category: "general"
            },
            {
                title: "Identifying Ringworm: Symptoms and Appearance",
                tagline: "Recognizing the signs of ringworm for early detection and treatment.",
                summary: [
                    "Ring-shaped rash: Look for a red, circular rash with clearer skin in the middle, resembling a ring.",
                    "Itchy skin: Affected areas often become itchy and uncomfortable.",
                    "Scaly patches: The rash may appear scaly or flaky, especially at the edges.",
                    "Red and inflamed skin: The rash can be red and swollen, sometimes with raised edges.",
                    "Blisters: In some cases, small blisters or pustules may form on the rash.",
                    "Hair loss: On the scalp or body, ringworm can cause patches of hair loss.",
                    "Nail changes: Ringworm affecting nails may cause them to become thick, discolored, and brittle.",
                    "Look for these symptoms: If you or your pet exhibit any of these signs, it’s important to seek medical or veterinary advice for proper diagnosis and treatment."
                ],
                category: "general"
            },
            {
                title: "How Ringworm is Contracted and Who is at Risk",
                tagline: "Understanding the transmission of ringworm and identifying those most at risk.",
                summary: [
                    "Direct contact: Ringworm is often contracted through direct skin-to-skin contact with an infected person or animal.",
                    "Indirect contact: It can also spread via contaminated objects like clothing, towels, and bedding.",
                    "Environment: Fungal spores can live on surfaces, such as floors and walls, for an extended period, increasing the risk of infection.",
                    "Humid conditions: Warm and humid environments promote the growth and spread of the fungus.",
                    "Shared facilities: Places like gyms, locker rooms, and swimming pools are common sites for ringworm transmission.",
                    "High-risk groups: Children, athletes, and individuals with weakened immune systems are more susceptible to ringworm.",
                    "Pet owners: People with pets, particularly those who handle animals frequently, are at higher risk.",
                    "Preventive measures: Maintaining good hygiene, avoiding sharing personal items, and keeping skin dry can help reduce the risk of contracting ringworm."
                ],
                category: "general"
            },
            {
                title: "Available Treatment Types for Ringworm",
                tagline: "Understanding the different treatment options for managing ringworm.",
                summary: [
                    "Topical antifungal creams: Over-the-counter options such as clotrimazole and miconazole are commonly used for treating mild cases of ringworm.",
                    "Prescription topical treatments: Stronger antifungal creams, like terbinafine or ketoconazole, may be prescribed for more stubborn infections.",
                    "Oral antifungal medications: For more severe or widespread infections, doctors may prescribe oral medications such as fluconazole, itraconazole, or griseofulvin.",
                    "Antifungal shampoos: Medicated shampoos containing ketoconazole or selenium sulfide can help treat ringworm of the scalp.",
                    "Home remedies: While not a replacement for medical treatment, home remedies like apple cider vinegar or tea tree oil can be used as supplementary treatments.",
                    "Hygiene practices: Keeping the affected area clean and dry, avoiding sharing personal items, and washing clothes and bedding frequently can help speed up recovery and prevent spread.",
                    "Duration of treatment: Treatment duration can vary from a few weeks to a couple of months, depending on the severity and location of the infection.",
                    "Follow-up care: It's important to complete the full course of treatment and follow up with a healthcare provider to ensure the infection is fully resolved."
                ],
                category: "medical"
            },
            {
                title: "Most Common Topical Treatments for Ringworm",
                tagline: "Understanding the topical medications commonly prescribed for ringworm infections.",
                summary: [
                    "Clotrimazole cream: This antifungal medication is available over-the-counter and is often the first line of defense against mild cases of ringworm. It works by inhibiting the growth of fungi.",
                    "Miconazole cream: Another over-the-counter option, miconazole cream is effective against various fungal infections, including ringworm. It works by disrupting the fungal cell membrane.",
                    "Ketoconazole cream: Available by prescription, ketoconazole cream is used to treat ringworm as well as other fungal skin infections. It works by inhibiting the synthesis of ergosterol, a component of fungal cell membranes.",
                    "Terbinafine cream: This prescription-strength antifungal cream is commonly prescribed for ringworm infections that do not respond to over-the-counter treatments. It works by interfering with the synthesis of ergosterol, leading to fungal cell death.",
                    "Econazole cream: Another prescription option, econazole cream is effective against a wide range of fungal infections, including ringworm. It works by disrupting fungal cell membranes and inhibiting fungal growth."
                ],
                category: "medical"
            },
            {
                title: "Most Common Oral Treatments for Ringworm",
                tagline: "Exploring the oral medications commonly prescribed for ringworm infections.",
                summary: [
                    "Griseofulvin: This oral antifungal medication is often prescribed for moderate to severe cases of ringworm. It works by inhibiting fungal cell division and growth.",
                    "Terbinafine tablets: Similar to terbinafine cream, terbinafine tablets are used to treat ringworm infections that are difficult to manage with topical treatments alone. They work by interfering with the synthesis of ergosterol, a key component of fungal cell membranes.",
                    "Itraconazole capsules: Itraconazole is another oral antifungal medication used to treat ringworm infections. It works by disrupting the synthesis of ergosterol, leading to fungal cell death.",
                    "Fluconazole tablets: Fluconazole is commonly used to treat various fungal infections, including ringworm. It works by inhibiting fungal cell growth and replication."
                ],
                category: "medical"
            },
            {
                title: "Choosing the Correct Treatment for Ringworm",
                tagline: "Guidance on selecting the appropriate treatment for ringworm infections.",
                summary: [
                    "Consulting a healthcare professional: It's essential to consult a healthcare professional, such as a dermatologist or primary care physician, if you suspect you have ringworm. A healthcare provider can accurately diagnose the infection and recommend the most appropriate treatment based on its severity, location, and other factors.",
                    "Considering the type and location of the infection: The choice of treatment for ringworm depends on several factors, including the type and location of the infection. Topical antifungal medications are often effective for mild cases of ringworm, while more severe or widespread infections may require oral antifungal medications.",
                    "Following treatment guidelines: It's crucial to follow the treatment guidelines provided by your healthcare provider carefully. This includes applying topical medications as directed, taking oral medications for the prescribed duration, and following any additional instructions provided by your healthcare provider.",
                    "Monitoring for improvement: After starting treatment, it's essential to monitor the affected area for signs of improvement. If the symptoms persist or worsen despite treatment, consult your healthcare provider for further evaluation and management.",
                    "Avoiding self-diagnosis and self-treatment: While over-the-counter antifungal medications may be available, it's essential to avoid self-diagnosis and self-treatment for ringworm. Consulting a healthcare professional ensures an accurate diagnosis and appropriate treatment plan tailored to your individual needs."
                ],
                category: "medical"
            },
            {
                title: "Cleaning Soft Surfaces and Fabrics",
                tagline: "Guidance on cleaning soft surfaces and fabrics to prevent the spread of ringworm spores.",
                summary: [
                    "Washing linens and clothing: Launder all linens, clothing, towels, and other washable fabrics that may have come into contact with the infected individual. Use hot water and a high-temperature drying cycle to kill ringworm spores effectively.",
                    "Cleaning upholstered furniture: Vacuum upholstered furniture, such as sofas, chairs, and mattresses, to remove any loose debris and dirt. Use a steam cleaner with a high-temperature setting to disinfect soft surfaces and kill ringworm spores.",
                    "Disinfecting carpets and rugs: Steam clean carpets and rugs to remove dirt and debris. Use a carpet cleaner with a disinfectant solution containing benzalkonium chloride or diluted chlorine bleach to kill ringworm spores effectively.",
                    "Sanitizing pet bedding and toys: Wash pet bedding, blankets, and toys in hot water and dry them on a high-temperature setting. Use pet-safe disinfectants to sanitize these items and prevent the spread of ringworm to other pets or family members.",
                    "Vacuuming and dusting: Regularly vacuum and dust your home to remove dust, dirt, and pet dander that may harbor ringworm spores. Pay special attention to areas where pets spend time, such as pet beds, scratching posts, and furniture."
                ],
                category: "cleaning"
            },
            {
                title: "Frequency of Cleaning",
                tagline: "Recommendations on how often to clean your home and belongings to prevent ringworm transmission.",
                summary: [
                    "Regular cleaning schedule: Establish a regular cleaning schedule for your home, focusing on high-traffic areas and surfaces that come into contact with pets or infected individuals. Aim to clean these areas at least once a week or more frequently if needed.",
                    "Immediate cleaning after exposure: Clean and disinfect surfaces and items immediately after they come into contact with an infected individual or pet. Prompt cleaning can help prevent the spread of ringworm to other household members and pets.",
                    "Routine maintenance: In addition to regular cleaning, perform routine maintenance tasks such as vacuuming, dusting, and sanitizing to keep your home clean and free of ringworm spores. Consider using pet-safe disinfectants and cleaning products to ensure the safety of your pets.",
                    "Special attention to personal hygiene items: Clean and disinfect personal hygiene items such as combs, brushes, and hair accessories regularly, especially if they have been used by an infected individual. Replace items that cannot be effectively cleaned or disinfected."
                ],
                category: "cleaning"
            }
        ];

        for (const article of articles) {
            await db.none(
                'INSERT INTO articles(title, tagline, summary, category) VALUES($1, $2, $3, $4)',
                [article.title, article.tagline, JSON.stringify(article.summary), article.category]
            );
        }

        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        pgp.end();
    }
}

seedDatabase();

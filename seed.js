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

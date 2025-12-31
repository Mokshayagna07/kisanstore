import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, 'src', 'images');

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
    { name: 'Dragon_Fruits', url: 'https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh_Guava', url: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jack_Fruit', url: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kashmiri_Apples', url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' },
    { name: 'Nagpur_Oranges', url: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Organic_Kiwi', url: 'https://images.unsplash.com/photo-1585059895524-72359e06138a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Green_Grams', url: 'https://images.unsplash.com/photo-1613728913988-999d3e8705f1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Red_Grams', url: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400' },
    { name: 'Black_Grams', url: 'https://images.unsplash.com/photo-1613728913105-eb894817d23e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tender_Coconut', url: 'https://images.unsplash.com/photo-1617156976695-1f6f8976828a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh_Lemons', url: 'https://images.unsplash.com/photo-1582280267232-0949d0347898?auto=format&fit=crop&q=80&w=400' },
    { name: 'Custard_Apple', url: 'https://images.unsplash.com/photo-1631868310068-c11c97a5c68f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Robusta_Banana', url: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400' },
    { name: 'Erode_Tamarind', url: 'https://images.unsplash.com/photo-1605296830722-1d5423877994?auto=format&fit=crop&q=80&w=400' },
    { name: 'Farm_Potatoes', url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh_Sugarcane', url: 'https://images.unsplash.com/photo-1549421262-10f745cdb92b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Raw_Rice', url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
    { name: 'Golden_Wheat', url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Paddy', url: 'https://images.unsplash.com/photo-1536631818221-c22f604ec283?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sweet_Corn', url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bottle_Gourd', url: 'https://images.unsplash.com/photo-1533519782559-694435948f90?auto=format&fit=crop&q=80&w=400' },
    { name: 'Red_Tomatoes', url: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400' },
    { name: 'Purple_Brinjal', url: 'https://images.unsplash.com/photo-1614737722749-3ae016937e25?auto=format&fit=crop&q=80&w=400' },
    { name: 'Ladys_Finger', url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400' },
    { name: 'Farm_Eggs', url: 'https://images.unsplash.com/photo-1598965628792-c6c736296062?auto=format&fit=crop&q=80&w=400' },
    { name: 'Live_Hens', url: 'https://images.unsplash.com/photo-1548550027-f4728d844c80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Little_Chicks', url: 'https://images.unsplash.com/photo-1566311026574-c6843472d559?auto=format&fit=crop&q=80&w=400' },
    { name: 'Rooster_Cock', url: 'https://images.unsplash.com/photo-1569587114660-f655ae25170d?auto=format&fit=crop&q=80&w=400' },
    { name: 'A2_Pure_Milk', url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Organic_Jaggery', url: 'https://images.unsplash.com/photo-1622485521943-7f8e77c570f7?auto=format&fit=crop&q=80&w=400' }
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else if (response.statusCode === 302 || response.statusCode === 301) {
                // Handle redirect
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
            } else {
                fs.unlink(filepath, () => { }); // Delete empty file
                reject(`Failed to download ${url}: Status Code ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err.message);
        });
    });
}

async function main() {
    for (const img of images) {
        const filepath = path.join(imagesDir, `${img.name}.jpg`);
        if (fs.existsSync(filepath)) {
            console.log(`Skipping ${img.name} (exists)`);
            continue;
        }

        console.log(`Downloading ${img.name}...`);
        try {
            await downloadImage(img.url, filepath);
            console.log(`Successfully downloaded ${img.name}`);
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error);
        }
        // Small delay
        await new Promise(r => setTimeout(r, 500));
    }
}

main();

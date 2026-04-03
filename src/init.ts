import { cpSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function initializeProject() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    const templatePath = join(__dirname, '..', 'templates', '.ai');
    const targetPath = join(process.cwd(), '.ai');

    if (existsSync(targetPath)) {
        console.warn(`Warning: Target directory ${targetPath} already exists.`);
        return;
    }

    try {
        cpSync(templatePath, targetPath, { recursive: true });
        console.log('Successfully initialized .ai directory.');
    } catch (error) {
        console.error('Failed to initialize project:', error);
        process.exit(1);
    }
}
